# Component Explorer — Pipeline (5 Fase)

Flow reusable buat bikin komponen baru: **riset referensi → review → eksplorasi dari DS → guideline → generate Figma.** Dipanggil per komponen. Tunduk penuh ke [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

## Prinsip eksplorasi (general — berlaku semua komponen)

- **Control per-alternatif**, bukan global: tiap alternatif punya *variant switch* + *toggle property* sendiri (mis. buat notif = severity + section; buat komponen lain = variant/prop-nya masing-masing).
- **Alternatif harus beda TREATMENT**, bukan cuma beda layout / hilangin elemen. Eksplor pendekatan visual berbeda.
- **Preview behaviour** di page eksplor — tunjukin komponen "gimana munculnya/jalannya" beneran (isian behaviour spesifik per komponen).
- **Flow aksi**: **⭐ Pilih** → **🎛️ Playground** (Fase 3.5, WAJIB) → **📱 Mobile** (Fase 3.7, opsional) → **📄 Guideline** (Fase 4) → **🎨 Figma** (Fase 5). Playground = gerbang property model sebelum guideline/Figma; Mobile = adapt opsional buat komponen yang punya wujud mobile.
- **Chrome ramping** — jangan dobel info (nama komponen/fase udah di hub; topbar draft cukup tombol tooling).
- **Guideline ↔ property Figma WAJIB 1:1.** Playground (Fase 3.5) = sumber tunggal model property. Tiap ubah komponen Figma → update guideline (`.md` + frame Figma) + registry `paperverse-vs-aurora.md` **barengan**, jangan ditunda (biar nggak drift).
- **Verify tiap step, jangan asumsi jadi.** Abis tiap build Figma: `get_screenshot` (cek visual) + audit binding tree-walk (unbound=[], wrongCollection=[]). Output HTML: `component-audit.mjs` exit 0. Detail teknik build: [`figma-build-sop.md`](figma-build-sop.md).

## Cara build ke Figma (Fase 5)
Ikuti [`figma-build-sop.md`](figma-build-sop.md) — teknik generate via MCP (instance/extract, cek property bawaan sebelum override, auto-layout, variants, boolean prop, verify screenshot).

## Prinsip pemisahan (WAJIB)

Tiap output web punya 2 layer terpisah:
- **Layer tooling** (`.expl-*`, `.suxc-*`) = review chrome. **DILARANG** ikut ke Figma.
- **Layer komponen** (`.expl-canvas` isinya) = desain komponen. **INI** yang di-extract ke Figma.

## Platform: web (default) / mobile (opsional)

Platform = **dimensi** komponen, ke-tag di tiap versi hub (`web`/`mobile`) → deep-link `#/<slug>/<platform>/vN`. **Default `web`.** Mobile itu **opsional** — cuma dipakai kalau komponennya emang punya wujud mobile. Ada **2 jalur masuk mobile**:

- **A) Mobile-first** — mulai eksplor langsung di mobile (komponen yang emang mobile-only, mis. bottom nav, pull-to-refresh). Trigger: `explore <komponen> mobile`. Seluruh Fase 1→5 jalan di **mode mobile** (canvas 375px, referensi + pola mobile, a11y touch). Gak wajib ada versi web.
- **B) Adapt dari web** — komponen udah dieksplor di web, terus di-turunin ke mobile. Trigger: `mobile: <komponen> — Alt X` (**Fase 3.7**, setelah playground). Adaptasi **alt yang kepilih** doang, bukan semua alt.

**Aturan platform-aware (WAJIB, apapun jalurnya):**
- **Interaksi:** web/pointer → **hover + focus-visible** wajib. touch/mobile → **gak ada hover**, ganti **pressed/active** + focus buat keyboard eksternal. Jangan wajibin hover di komponen mobile.
- **Canvas:** web = lebar bebas; mobile = **frame 375px** (satu tangan / thumb-reach — aksi utama condong ke zona bawah).
- **Target sentuh** ≥44px (dua-duanya, tapi kritikal di mobile).
- **Pola beda, bukan cuma ciut:** cek apakah di mobile komponennya ganti pola (side sheet→bottom sheet, dropdown→action sheet, tab atas→tab bar bawah, tooltip hover→tap/long-press). Kalau iya, **live-pull variant mobile-nya dari Paperverse**; kalau Paperverse belum punya → **flag ke tim DS**, jangan ngarang.
- Safe area (notch/home indicator) + gesture (swipe dismiss/delete) kalau relevan.

## Kosakata command (tooling copy → user paste ke chat)

Web nggak bisa manggil AI langsung. Tiap action = tombol yang **nyalin command**, user **paste ke chat**, AI eksekusi fase berikut.

| Command | Artinya | Memicu |
|---|---|---|
| `explore <komponen>` | mulai flow (web, default) | Fase 1 |
| `explore <komponen> mobile` | mulai flow mode mobile (mobile-first) | Fase 1 (mobile) |
| `[REVIEW] ...` | komen review dari tooling | diskusi |
| `lanjut alternatif` | lanjut ke DS-based | Fase 3 |
| `pilih: <komponen> — Alt X` | tandai terpilih (non-destruktif) | — |
| `playground: <komponen> — Alt X` | playground property interaktif (WAJIB) | Fase 3.5 |
| `mobile: <komponen> — Alt X` | adapt alt terpilih ke mobile (opsional) | Fase 3.7 |
| `guideline: <komponen> — Alt X` | susun Component Guideline 9-section | Fase 4 |
| `figma: <komponen> — Alt X` | generate komponen + tempel guideline ke Figma | Fase 5 |

Catatan flow: **⭐ Pilih → 🎛️ Playground (Fase 3.5, WAJIB) → 📱 Mobile (Fase 3.7, opsional) → 📄 Guideline (Fase 4) → 🎨 Figma (Fase 5).** Tombol tooling terpisah per alternatif (⭐/🎛️/📱/📄/🎨) — 📱 Mobile cuma muncul/dipakai kalau komponennya punya wujud mobile. Playground = gerbang matangin property model sebelum guideline+Figma; jadi **satu sumber** yang nyuapin anatomy guideline & property Figma. Fase 5 = generate komponen 100% dari Paperverse + tempel guideline 9-section ke Figma.

**Non-destruktif / bisa balik:** tiap artifact = 1 versi di hub (`index.html`). `pilih` nggak menghapus page alternatif — klik tab versi buat balik ke "Pilih" kapan aja. Ganti pilihan (Alt A→B) = generate playground baru (versi baru, label "Playground · Alt B"); playground lama tetap kesimpen di changelog, nggak ketimpa.

---

## Fase 1 — PLAN (referensi + best practice + first draft)

**Trigger:** `explore <komponen>` (web, default) · `explore <komponen> mobile` (**mobile-first** — jalur A)

> **Kalau mode mobile:** referensi dari app mobile / DS mobile (Material Android, HIG iOS), canvas draft **375px**, pola & a11y **touch** (no hover → pressed, target ≥44px, thumb-reach). Selebihnya langkah sama.

1. **Referensi (≥5)** — cari komponen sama di platform lain. Tiap referensi: **URL yang bisa dicoba** + penjelasan **behaviour** + kapan cocok. Kasih **rekomendasi** mana yang pas buat Paper.id.
   - **WAJIB URL clickable** (lock 2026-07-08): tulis link sebagai markdown `[label](https://url-lengkap)` dengan skema `https://` LENGKAP — JANGAN plain text (`mui.com/...`) yang bikin user mesti copy-paste manual. Berlaku di chat & di changelog draft.
2. **Best practice** — tarik dari Material / DS lain (HIG, Polaris, Carbon, dll). Cite source.
3. **First draft** — gabungin referensi yang user pilih jadi 1-2 draft HTML. **JANGAN pakai Aurora/Paperverse dulu** — murni buat lihat **behaviour + layout**. **Review tooling (klik = pin titik · drag = pilih area komen) udah standar di template — WAJIB pakai itu, JANGAN bikin tooling komen sendiri dari nol** (biar tiap komponen baru konsisten dapet fitur yang sama).

   **Cara praktis (biar nggak bingung template vs hub):** `explorer-template.html` = cetakan. Tiap draft = **salin cetakan itu jadi file baru** `_output/explorer/<slug>/draft-N.html`, terus isi `.expl-canvas`-nya. Kamu **nggak pernah** ngedit `explorer-template.html` (itu tetap kosong) atau nulis komponen langsung di `index.html` (hub). Hub cuma **nge-load draft lewat iframe** + daftar versi. Jadi: cetakan → draft file → daftarin ke hub (lihat konvensi versioning bawah).

**Output:** draft HTML + review tooling nyala. **Gate:** tunggu user komen (Fase 2).

### Konvensi output & versioning (WAJIB — 1 HUB buat SEMUA komponen)

Cuma ada **1 link** buat semua eksplorasi: `_output/explorer/index.html` (hub, sidebar list komponen + tab versi + changelog). Jangan bikin link/shell baru.

Struktur:
```
_output/explorer/
  index.html              ← THE link (hub). Registry COMPONENTS di dalamnya.
  <slug>/draft-N.html     ← 1 file per iterasi, per komponen (di-load via iframe)
```

- **Komponen baru** = bikin folder `_output/explorer/<slug>/` + `draft-1.html`, lalu tambah 1 objek di array `COMPONENTS` (hub). Muncul di sidebar.
- **Iterasi baru** = bikin `draft-(N+1).html` + tambah 1 versi (paling atas) di `versions` komponen itu. Link & sidebar tetap; history kejaga di changelog.

### Deep-link per komponen & per versi (hash routing, lock 2026-07-14)

Hub nyimpen state di URL — tiap komponen & versi punya link sendiri, **nol server**:

```
index.html#/<slug>                  → komponen (platform pertama, versi terbaru)
index.html#/<slug>/<platform>/v<N>  → komponen + platform + versi PERSIS
index.html#/<slug>/<platform>/v<N>/raw  → draft full-layar, tanpa chrome hub
```

Contoh: `index.html#/spotlight/web/v3` · `index.html#/combobox/mobile/v2`

- **⛶ Full-layar** = mode `raw` (Esc buat keluar).
- Slug/versi ngaco → **fallback + toast peringatan**, bukan diem-diem nampilin yang salah.
- Back/forward browser jalan; URL selalu cerminan yang lagi dilihat (bisa di-bookmark).

### Halaman SHARE per komponen (lock 2026-07-14)

**Link yang di-share NGGAK nunjuk ke hub.** Hub (`index.html`) nyimpen array `COMPONENTS` = SEMUA komponen; kalau share-nya cuma "mode" di hub, penerima tinggal hapus hash / View Source → kelihatan semua. **Nyembunyiin UI ≠ nutup akses.**

Solusinya: **1 file per komponen**, isinya cuma data komponen itu.

```bash
node paper-designer/tools/make-share-page.mjs <slug>   # 1 komponen
node paper-designer/tools/make-share-page.mjs --all    # semua
```

Output → `_output/explorer/share/<slug>-<token>.html` (token 6 char, deterministik dari slug → link stabil, tapi nggak ketebak).

| Di halaman share | Ada? |
|---|---|
| Komponen + semua versinya (tab + changelog) | ✅ |
| Deep-link versi (`#v2`) | ✅ |
| Sidebar / daftar komponen / search | ❌ |
| Jalan balik ke hub | ❌ |
| **Data komponen lain** | ❌ **nggak ada di file-nya sama sekali** |

- Tombol **🔗 Salin Link** di hub (topbar + per versi di changelog) otomatis ngeluarin link share ini.
- ⚠️ **WAJIB regenerate tiap nambah versi/komponen** — halaman share = snapshot registry. Lupa regenerate = penerima lihat versi lama.
- ⚠️ **Bukan access control beneran.** File draft tetap duduk di `_output/explorer/<slug>/draft-N.html` yang path-nya ketebak. Ini nahan orang ngoprek URL secara kasual, BUKAN nahan orang yang niat. Kontrol akses beneran butuh server (login/allowlist).

### Deploy ke live — GitHub Pages (lock 2026-07-16)

Dulu gantung; **sekarang diputusin: pakai GitHub Pages, dan sadar eksplorasi jadi PUBLIK** (repo `adamaria88/ui-generations` PUBLIC → siapa aja bisa buka + ke-index Google). Kalau ada eksplorasi yang nggak boleh publik, JANGAN taruh di explorer.

- **URL live:** `https://adamaria88.github.io/ui-generations/component/` (root `/ui-generations/` auto-redirect ke situ).
- **Sumber:** folder **`docs/component/`** (di-track git) = **snapshot** dari `_output/explorer/` (yang tetap gitignored). Pages source = branch + folder `/docs`.
- ⚠️ **`docs/` nggak auto-sync.** Tiap ada versi/komponen baru, WAJIB redeploy:

```bash
node paper-designer/tools/make-share-page.mjs --all        # refresh halaman share dulu
cp -r _output/explorer/. docs/component/                    # snapshot ulang
rm -f docs/component/_style-preview.html
git add docs && git commit -m "redeploy explorer" && git push
```

- `docs/.nojekyll` WAJIB ada — tanpa itu Jekyll bikin file/folder ber-awalan `_` nggak ke-serve.

⚠️ Fase 1 = eksplorasi bebas, di sini BOLEH nilai non-DS (ini satu-satunya fase yang exempt dari live-pull, karena tujuannya lihat behaviour dulu).

## Fase 2 — REVIEW

**Trigger:** user komen di web → klik **📤 Submit** → paste `[REVIEW]...` ke chat.

Diskusi: bagian mana yang dipertahanin, dibuang, digabung. Iterasi draft kalau perlu. **Gate:** user oke arah desainnya.

## Fase 3 — EKSPLORASI (3–5 alternatif, dari DS)

**Trigger:** `lanjut alternatif`

1. **Aurora/Paperverse Component Mapping** dulu (gerbang wajib) — tabel `UI Need → komponen Paperverse → nilai asli → ada di Aurora? → drift?`. Share, tunggu approve.
2. **Live-pull** tiap komponen dari Paperverse (Figma MCP). **DILARANG hardcode.** Kalau kelihatan nggak ada di DS → **tanya user dulu** ("ini beneran nggak ada apa gue yang belum nemu?"), jangan asal bikin.
3. Generate **3–5 alternatif HTML** — **jumlah nyesuaiin kompleksitas komponen**, bukan wajib 5. Komponen kaya (notif, card, form-field) condong ke 5; komponen simpel (badge, divider, chip) cukup 3 kalau treatment beda yang masuk akal emang cuma segitu. **DILARANG maksa jadi 5 dengan alt tempelan.** Tiap alt WAJIB **beda TREATMENT** (pendekatan visual/interaksi berbeda) — bukan beda layout atau cuma hilangin elemen. Pakai komponen + text style + color dari DS. Di web, pakai `explorer-template.html` (grid alternatif).
4. Sebelum setor tiap alt HTML → **diff-audit** (`node paper-designer/tools/component-audit.mjs <file>`). Cek warna + font + **spacing/radius/stroke** vs `aurora-tokens.md`. Exit 1 = perbaiki dulu.

### 🔒 PRE-FLIGHT Fase 3 — WAJIB tempel di chat + centang SEBELUM setor alternatif

> Aturan keras: **DILARANG setor** kalau blok ini belum ditulis di chat dan **semua ✅**. Ada ❌ = STOP, betulin dulu. Ini bukan formalitas — ini yang bikin "diam-diam ngarang/nyampur sumber" ketahuan (berlaku model apapun, Opus/Sonnet).

```
🔒 PRE-FLIGHT Fase 3 — <komponen> (N alt)
[ ] Jumlah alt nyesuaiin kompleksitas (3–5), TIDAK dipaksa 5 dengan alt tempelan
[ ] Tiap alt beda TREATMENT (pendekatan visual/interaksi) — bukan beda layout / hilangin elemen
[ ] Mapping table (UI Need → komponen Paperverse → nilai asli → Aurora? → drift) sudah di-share & di-APPROVE user
[ ] Tiap komponen di-LIVE-PULL dari Paperverse (Figma MCP) — BUKAN dari cache .md / ingatan
[ ] Warna & text-style bind ke collection `semantic` / `primitive_text_and_layout` SAJA
[ ] TIDAK ADA nilai dari collection `Color` (terlarang — drift terjamin)
[ ] A11y: kontras teks ≥ 4.5:1 (UI element ≥ 3:1) · target interaktif ≥ 44px · status nggak color-only (ada ikon/label)
[ ] Tiap alt lolos: node paper-designer/tools/component-audit.mjs <file> → exit 0
→ Semua ✅? Baru boleh setor. Ada ❌? STOP.
```

**Output:** 3–5 alternatif web + tombol action tiap alt. **Gate:** user **⭐ Pilih** + review.

## Fase 3.5 — PLAYGROUND (property interaktif) — WAJIB

**Trigger:** user klik **🎛️ Playground** di alt terpilih → paste `playground: <komponen> — Alt X`

Bangun **1 playground interaktif** buat alt terpilih — ala **panel Properties Figma**. Pakai [`playground-template.html`](playground-template.html). Tujuannya: matangin **model property** komponen SEBELUM guideline & Figma, jadi playground = **satu sumber** yang nyuapin anatomy guideline (section 5) DAN property Figma (Fase 5). Nyambungin behavior yang sering meleset kalau di-spec belakangan.

**Isi wajib tiap playground (kontrak):**

> **Layout: panel properties WAJIB di KANAN, stage komponen di kiri** (ala panel Properties Figma — lock preferensi user). Di template: `.pg { flex-direction:row-reverse }` + `.pg-panel { border-left }`.

1. **Panel properties (kanan)** — kontrol live:
   - **Variant / Count** (kalau ada, mis. jumlah kartu 2–5 → pola DS `Number of Chips`).
   - **Toggle section (BOOLEAN)** — tiap bagian opsional show/hide.
   - **State** — default / hover / selected / disabled / error (yang relevan aja).
2. **Anotasi mapping Figma** — tiap kontrol dikasih tag `VARIANT` / `BOOLEAN` / `SLOT` / `SWAP`. Playground = spec property langsung. (Slot = konten bebas mis. leading/trailing; Swap = tukar ke komponen existing mis. badge → Chip Status.)
3. **Stage komponen (kiri)** — live, 100% token DS (semantic + Lato), **wajib lolos** `component-audit.mjs`.
4. **Review tooling** (💬 komen) — standar dari template.
5. **A11y state lengkap (WCAG AA — WAJIB, bukan add-on) — platform-aware:**
   - **Web/pointer:** **hover + focus-visible** (focus ring/outline, bukan cuma hover) + **reachable via keyboard** (tab order + Enter/Space).
   - **Mobile/touch:** **gak ada hover** — ganti **pressed/active** state; focus tetap ada buat keyboard eksternal. Jangan wajibin hover di komponen mobile.
   - Dua-duanya: kontras teks ≥ 4.5:1 (UI element ≥ 3:1), target ≥ 44px, status **nggak boleh color-only** (selalu ada ikon/label pendamping). Kalau DS belum punya salah satunya → tambah + flag ke tim DS, jangan diam-diam skip.

**Non-destruktif:** `pilih` nggak menghapus page alternatif. Playground = versi baru di hub, label **"Playground · Alt X"**. Balik ke Pilih = klik tab versi. Ganti pilihan = playground baru buat alt lain (yang lama diarsip di changelog).

**Output:** playground web (audit lolos) + property model siap. **Gate:** user review model property (nama toggle, mana slot/swap, default). Baru lanjut Guideline/Figma.

## Fase 3.7 — MOBILE ADAPT (opsional)

**Trigger:** `mobile: <komponen> — Alt X` — **opsional**. Dipakai kalau komponen punya wujud mobile. Komponen desktop-only (mis. tabel data lebar) boleh **skip** tanpa dosa.

> Ini jalur **B (adapt dari web)**. Kalau mobile-first (jalur A), mode mobile udah jalan dari Fase 1 — fase ini nggak perlu, langsung Guideline.

Adaptasi **alt yang udah dipilih** (property model dari playground 3.5) ke mobile — bukan eksplor 5 alt dari nol.

1. **Tentuin: beda pola apa cuma responsif?**
   - Beda pola → side sheet→bottom sheet, dropdown→action sheet, tab atas→tab bar bawah, tooltip hover→tap/long-press.
   - Cuma responsif → komponen sama, nyesuain lebar 375px.
2. **Live-pull variant mobile dari Paperverse** kalau ada. Nggak ada → **flag ke tim DS** (mungkin belum di-develop), jangan ngarang.
3. **Canvas 375px** + adaptasi touch: target ≥44px, **hover→pressed/active**, aksi utama zona thumb-reach, safe area, gesture kalau relevan.
4. Audit tetap: `component-audit.mjs` exit 0 + a11y versi touch (lihat aturan platform-aware di atas).
5. Jadi **versi baru di hub**, platform `mobile` → deep-link `#/<slug>/mobile/vN` kepakai. Non-destruktif; versi web tetap ada.

### 🔒 PRE-FLIGHT Fase 3.7 — tempel di chat sebelum setor versi mobile

```
🔒 PRE-FLIGHT Fase 3.7 — <komponen> — Alt X (mobile)
[ ] Udah ditentuin: BEDA POLA (sebut apa→apa) atau CUMA RESPONSIF
[ ] Kalau beda pola → variant mobile di-LIVE-PULL dari Paperverse (bukan ngarang); kalau DS belum punya → di-FLAG
[ ] Canvas 375px · target ≥44px · hover diganti pressed/active (BUKAN hover) · safe area dicek
[ ] component-audit.mjs <file> → exit 0
→ Semua ✅? Baru boleh setor. Ada ❌? STOP.
```

**Output:** versi mobile di hub (audit lolos). **Gate:** user review. Guideline (Fase 4) nanti nyeritain web + mobile sekaligus.

## Fase 4 — GUIDELINE

**Trigger:** user klik **📄 Guideline** di alt terpilih → paste `guideline: ...`

Susun Component Guideline pakai [`guideline-template.md`](guideline-template.md) — 9 section:
1. Preview Design Component · 2. Overview · 3. When to Use · 4. Design Principle · 5. Anatomy & Properties · 6. Behaviour · 7. Variant · 8. Do's & Don'ts · 9. Edge Cases

### ⛔ 2 aturan keras guideline (lock 2026-07-13)

**R1 — Guideline SELALU Bahasa INGGRIS** (`.md` + frame Figma). Chat sama user tetap Indonesia santai; yang Inggris cuma artifact guideline-nya. Guideline = dokumen DS yang dibaca lintas tim.

**R2 — Section 8 (Do's & Don'ts) + Section 9 (Edge Cases) WAJIB VISUAL.** Pakai **instance komponen beneran** (bukan tabel teks, bukan screenshot mati), konten pakai **konteks Paper.id** (invoice/supplier/pembayaran/mitra — bukan lorem ipsum). Tiap kasus: caption → komponen live → verdict ✅/⚠️/❌ + alasan. Do's & Don'ts disandingin side-by-side (bener vs salah, komponen sama).

> Kenapa keras: guideline teks-doang nggak kebaca sebagai spec — designer lain tetap nebak. Kasus pinggir (judul kepanjangan, konten kosong, mepet tepi) baru ketahuan rusaknya kalau **dirender beneran**.

**Gate:** user review guideline. **DILARANG lanjut ke Fase 5 kalau R1/R2 belum kepenuhin.**

## Fase 5 — GENERATE FIGMA

**Trigger:** user klik **🎨 Figma** di alt terpilih → paste `figma: ...`

1. Generate komponen di Figma — **100% dari Paperverse** (component, text style, color). Instance/extract, **DILARANG rebuild manual** (rule generate komponen). **Property model ikut playground (Fase 3.5) 1:1**: toggle → BOOLEAN, count/variant → VARIANT, slot → `createSlot()`/SLOT prop, swap → INSTANCE_SWAP.
2. Generate guideline di Figma (9 section).
3. Kalau ada komponen Paperverse-only / drift → catat ke [`../ds/paperverse-vs-aurora.md`](../ds/paperverse-vs-aurora.md).

### 🔒 PRE-FLIGHT Fase 5 — WAJIB tempel di chat + centang SEBELUM generate ke Figma

> Fase 5 pakai **gerbang mesin sendiri**: snippet tree-walk audit di [`figma-build-sop.md`](figma-build-sop.md) poin 11 (return `{unbound, wrongCollection, pass}`). **Bukan "inget ngecek" — WAJIB dijalanin + PASTE hasil JSON-nya ke chat.** `pass:false` (unbound/wrongCollection nggak kosong) = DILARANG generate. Checklist di bawah = pelengkap gerbang mesin itu, bukan pengganti.

```
🔒 PRE-FLIGHT Fase 5 — <komponen> — Alt X
[ ] Komponen di-build via INSTANCE/extract Paperverse — BUKAN rebuild frame manual
[ ] Text pakai getLocalTextStylesAsync; warna via figma.variables.setBoundVariableForPaint (namespace `figma.variables.`, BUKAN `figma.`)
[ ] Tree-walk audit (figma-build-sop poin 11) DIJALANIN — hasilnya di-PASTE ke chat: {unbound:[], wrongCollection:[], pass:true}
[ ] Guideline 9-section (Fase 4) sudah jadi sebelum ditempel ke Figma
[ ] Drift / Paperverse-only dicatat ke paperverse-vs-aurora.md
→ pass:true DAN semua ✅? Baru boleh generate. pass:false / ada ❌? STOP.
```

**Output:** komponen + guideline live di Figma Paperverse.

---

**Ringkas alur gate:** `explore` → [draft+review] → `lanjut alternatif` → [3–5 alt + ⭐ pilih] → `playground` → [Fase 3.5: property model, review] → *(opsional)* `mobile` → [Fase 3.7: adapt mobile] → `guideline` → [review] → `figma`. Tiap panah = user paste command dari tooling. Semua artifact = versi di hub (non-destruktif, bisa balik via tab versi). **Mobile-first (jalur A):** `explore <komponen> mobile` → mode mobile jalan dari Fase 1, skip 3.7.
