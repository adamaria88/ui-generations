# Figma Build SOP — Generate Komponen via MCP (GENERAL)

Teknik generate komponen ke Figma via plugin (`use_figma`). **General buat komponen apapun** — spec khusus (warna/behaviour komponen tertentu) ada di guideline masing-masing. Dipakai di Fase 5 [`pipeline.md`](pipeline.md). Tunduk ke [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

## Urutan aman (terbukti sesi 2026-07-02)

**1. Pre-flight — verifikasi building block DULU.**
Sebelum build, pastiin node-id tiap piece (button, icon, dll) valid + `type==='COMPONENT'` (bisa di-instance). Cari via `search_design_system` atau `getNodeByIdAsync`. Gagal di sini = murah; gagal di tengah build = mahal.

**2. Page scoping — JANGAN `figma.root.findOne()`.**
Scan semua page (bisa 90+) → **MCP timeout**. Selalu `await figma.setCurrentPageAsync(pg)` dulu, query scoped ke page itu. Cari page by name (`figma.root.children.find(p=>p.name...)`).

**3. Font — `loadFontAsync` sebelum bikin/edit text.**
`await figma.loadFontAsync({family:'Lato',style:'Regular'})` + `'SemiBold'` dst. Sebelum set `.characters` di instance yg ada text, load font-nya dulu (`loadFontAsync(node.fontName)`).

**4. Komponen existing → `createInstance()`, DILARANG rebuild.**
Button, icon, dll = instance dari komponen DS asli (100% match by construction).
- **Recolor icon**: walk descendant (`findAll` type VECTOR/BOOLEAN_OPERATION/ELLIPSE/RECTANGLE/LINE/POLYGON/STAR), set `fills`+`strokes` ke warna target.

**4b. Text & warna → BIND ke Text Style + color variable, JANGAN nilai mentah.** ⚠️ (gap ketemu 2026-07-02)
Set font/size/hex yang "match" itu **NGGAK cukup** — hasilnya **detach** dari DS: nggak ikut update, praktis dianggap ngarang. WAJIB bind:
- **Text**: `await node.setTextStyleIdAsync(styleId)`. Id dari `figma.getLocalTextStylesAsync()`. Text style Paperverse: `Heading/L·M·S`, `Body-SemiBold/L·M·S`, `Body/L·M·S`.
- **Warna**: `node.fills=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:{r:0,g:0,b:0}},'color', varObj)]`. Variable dari `figma.variables.getLocalVariablesAsync('COLOR')` (⚠️ namespace `figma.variables.`, bukan `figma.`), mis. `color/text/primary`·`secondary`·`muted`.
- Urutan bikin text: `createText()` → set `fontName` (font yg udah di-load) → set `.characters` → `setTextStyleIdAsync()` → bind fill.
- ⚠️ **diff-audit cuma cek nilai hex, NGGAK nangkep style detach.** Jadi binding WAJIB dari awal / dicek manual.

**4c. Bind BUKAN cuma teks — SEMUA fill/stroke/effect yang lo bikin:**
- Card fill → `color/surface/light/default` · border → `color/border/subtle` · shadow → Effect Style (`setEffectStyleIdAsync`, mis. Shadow Neutral-01)
- Tint box → `color/state/<sev>/bg` · icon glyph → `color/state/<sev>/icon` (bind fill **DAN** stroke tiap vektor — icon bisa fill-based / stroke-based) · progress/thumbnail → surface/text var
- Recolor icon = override raw; **bind override-nya ke variable** biar nggak detach.
- ⚠️ **Saat audit "warna nempel variable": SKIP node HIDDEN di dalam instance DS** (internal Button/Dropdown/placeholder yg di-off). Itu di-manage komponen source — override = malah detach. Audit cukup ke node **visible + yang lo bikin sendiri**.

**5. Mau varian beda dari default? CEK PROPERTY BAWAAN KOMPONEN DULU.**
Jangan buru-buru override sublayer `visible`. Komponen DS sering punya property sendiri. Contoh nyata: Aurora **Button** punya `Type`, `Size`, `Icon Only`, dan (di instance dalam `.<Type> - <Size>`) boolean **`Head`** (icon kiri) & **`Trail`** (chevron kanan).
- Cara bener: cari instance yg `componentProperties`-nya punya key itu → `inst.setProperties({'Head#...':false})`.
- Property bisa di **nested instance** (bukan top-level) — telusuri `[inst].concat(inst.findAll(type INSTANCE))` cari yg punya key-nya.
- **Override sublayer `visible=false` = LAST RESORT** (kalau emang nggak ada property) + flag ke tim DS biar di-expose.

**6. Auto-layout — pola yang jalan:**
- Text di frame VERTICAL: `layoutAlign='STRETCH'` + `textAutoResize='HEIGHT'` (JANGAN `resize()` tinggi manual → bug 32000px).
- Rata-kanan dalam row: sisipin spacer frame `layoutGrow=1`.
- Gap beda dalam 1 kolom (mis. title↔desc 2px, tapi ↔footer 12px): bungkus yg rapat di sub-frame sendiri.
- Elemen **full-bleed** (nembus padding, mis. progress bar mepet tepi): `child.layoutPositioning='ABSOLUTE'` + `constraints={horizontal:'STRETCH',vertical:'MAX'}`.

**7. Shadow = effect object.** Ambil dari Effect Style DS (`aurora-tokens.md`). Contoh card: `Shadow Neutral-01` → `{type:'DROP_SHADOW',color:{r,g,b,a},offset:{x,y},radius,spread,visible:true,blendMode:'NORMAL'}`.

**8. Variants — build 1, clone, modif, combine.**
Bikin 1 variant utuh → `clone()` buat variant lain → modif (icon/warna/copy) → `figma.combineAsVariants([...],pg)`.
- **Setelah combine**: re-apply `counterAxisSizingMode='FIXED'` + `resize(width, h)` tiap child (combine bisa reset sizing).

**9. Boolean property (section on/off):**
```js
var key=setB.addComponentProperty('Has X','BOOLEAN', defaultBool);
setB.children.forEach(c=>{var el=c.findOne(n=>n.name==='layerX'); if(el){el.visible=defaultBool; el.componentPropertyReferences={visible:key};}});
```

**10. Verify tiap tahap pakai screenshot** (`get_screenshot`) — jangan asumsi jadi. Cek instance recolor, layout, overlap.

**11. WAJIB — Figma Variable/Collection Audit sebelum setor** (lock 2026-07-02, gerbang mesin bukan "inget ngecek").
Nggak cukup ngerasa "udah gue bind semua" — jalanin snippet ini di plugin, buat tiap komponen sebelum lapor "jadi":

```js
// Cek: (a) semua fill/stroke visible sudah BOUND, (b) bound-nya dari collection semantic/
// primitive_text_and_layout, BUKAN dari collection "Color" (lihat paperverse-source-of-truth.md).
var cols = await figma.variables.getLocalVariableCollectionsAsync();
var colMap = {}; cols.forEach(c => colMap[c.id] = c.name);
var ALLOWED = ['semantic', 'primitive_text_and_layout'];

function visChain(n, stop){ var p=n; while(p&&p!==stop){ if(p.visible===false) return false; p=p.parent; } return true; }
async function resolveVar(id){ var v = await figma.variables.getVariableByIdAsync(id); if(!v) return null;
  return { name: v.name, collection: colMap[v.variableCollectionId] || 'external/library' }; }

var unbound = [], wrongCollection = [];
async function walk(n, root, mine){
  var hasFill = n.fills && n.fills.filter && n.fills.filter(f=>f.visible!==false && f.type==='SOLID').length;
  var hasStroke = n.strokes && n.strokes.length;
  var visible = visChain(n, root);
  if (mine && visible) {
    if (hasFill) { var fb = n.boundVariables && n.boundVariables.fills;
      if (!fb) unbound.push(n.name+'.fill');
      else { var r = await resolveVar((Array.isArray(fb)?fb[0]:fb).id); if(r && ALLOWED.indexOf(r.collection)<0) wrongCollection.push(n.name+'.fill -> '+r.name+' ('+r.collection+')'); } }
    if (hasStroke) { var sb = n.boundVariables && n.boundVariables.strokes;
      if (!sb) unbound.push(n.name+'.stroke');
      else { var r2 = await resolveVar((Array.isArray(sb)?sb[0]:sb).id); if(r2 && ALLOWED.indexOf(r2.collection)<0) wrongCollection.push(n.name+'.stroke -> '+r2.name+' ('+r2.collection+')'); } }
  }
  if (n.children) for (var i=0;i<n.children.length;i++) await walk(n.children[i], root, mine);
}
// mine=true untuk layer yang LO bikin sendiri (card, icon box, teks, thumbnail, progress).
// Set mine=false begitu masuk ke instance komponen DS (button/dropdown) — itu internal, jangan diaudit.
await walk(myComponentRootNode, myComponentRootNode, true);
return { unbound, wrongCollection, pass: unbound.length===0 && wrongCollection.length===0 };
```

**Exit criteria:** `unbound` harus kosong (poin 4b/4c — semua yang visible & punya lo WAJIB attach ke variable/style, DILARANG nilai mentah) DAN `wrongCollection` harus kosong (rule Variable Collection — cuma `semantic`/`primitive_text_and_layout`, `Color` collection DILARANG walau namanya meyakinkan). Kalau salah satu nggak kosong → **DILARANG lapor "jadi"**, perbaiki dulu.

## Gerbang tetap berlaku
Sebelum "jadi": nilai 100% dari DS (instance/extract) + **poin 11 (Figma Variable/Collection Audit) lolos**. Kalau output HTML → juga `component-audit.mjs`. Komponen baru (nggak ada di DS) → catat ke [`../ds/paperverse-vs-aurora.md`](../ds/paperverse-vs-aurora.md).
