# Component Explorer — Pipeline (5 Fase)

Flow reusable buat bikin komponen baru: **riset referensi → review → eksplorasi dari DS → guideline → generate Figma.** Dipanggil per komponen. Tunduk penuh ke [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

## Prinsip eksplorasi (general — berlaku semua komponen)

- **Control per-alternatif**, bukan global: tiap alternatif punya *variant switch* + *toggle property* sendiri (mis. buat notif = severity + section; buat komponen lain = variant/prop-nya masing-masing).
- **Alternatif harus beda TREATMENT**, bukan cuma beda layout / hilangin elemen. Eksplor pendekatan visual berbeda.
- **Preview behaviour** di page eksplor — tunjukin komponen "gimana munculnya/jalannya" beneran (isian behaviour spesifik per komponen).
- **Flow aksi**: **⭐ Pilih** → **🎛️ Playground** (Fase 3.5, WAJIB) → **📄 Guideline** (Fase 4) → **🎨 Figma** (Fase 5) = 4 aksi terpisah. Playground = gerbang property model sebelum guideline/Figma.
- **Chrome ramping** — jangan dobel info (nama komponen/fase udah di hub; topbar draft cukup tombol tooling).
- **Guideline ↔ property Figma WAJIB 1:1.** Playground (Fase 3.5) = sumber tunggal model property. Tiap ubah komponen Figma → update guideline (`.md` + frame Figma) + registry `paperverse-vs-aurora.md` **barengan**, jangan ditunda (biar nggak drift).
- **Verify tiap step, jangan asumsi jadi.** Abis tiap build Figma: `get_screenshot` (cek visual) + audit binding tree-walk (unbound=[], wrongCollection=[]). Output HTML: `component-audit.mjs` exit 0. Detail teknik build: [`figma-build-sop.md`](figma-build-sop.md).

## Cara build ke Figma (Fase 5)
Ikuti [`figma-build-sop.md`](figma-build-sop.md) — teknik generate via MCP (instance/extract, cek property bawaan sebelum override, auto-layout, variants, boolean prop, verify screenshot).

## Prinsip pemisahan (WAJIB)

Tiap output web punya 2 layer terpisah:
- **Layer tooling** (`.expl-*`, `.suxc-*`) = review chrome. **DILARANG** ikut ke Figma.
- **Layer komponen** (`.expl-canvas` isinya) = desain komponen. **INI** yang di-extract ke Figma.

## Kosakata command (tooling copy → user paste ke chat)

Web nggak bisa manggil AI langsung. Tiap action = tombol yang **nyalin command**, user **paste ke chat**, AI eksekusi fase berikut.

| Command | Artinya | Memicu |
|---|---|---|
| `explore <komponen>` | mulai flow | Fase 1 |
| `[REVIEW] ...` | komen review dari tooling | diskusi |
| `lanjut alternatif` | lanjut ke DS-based | Fase 3 |
| `pilih: <komponen> — Alt X` | tandai terpilih (non-destruktif) | — |
| `playground: <komponen> — Alt X` | playground property interaktif (WAJIB) | Fase 3.5 |
| `guideline: <komponen> — Alt X` | susun Component Guideline 9-section | Fase 4 |
| `figma: <komponen> — Alt X` | generate komponen + tempel guideline ke Figma | Fase 5 |

Catatan flow: **⭐ Pilih → 🎛️ Playground (Fase 3.5, WAJIB) → 📄 Guideline (Fase 4) → 🎨 Figma (Fase 5).** 4 tombol tooling terpisah per alternatif (⭐/🎛️/📄/🎨). Playground = gerbang matangin property model sebelum guideline+Figma; jadi **satu sumber** yang nyuapin anatomy guideline & property Figma. Fase 5 = generate komponen 100% dari Paperverse + tempel guideline 9-section ke Figma.

**Non-destruktif / bisa balik:** tiap artifact = 1 versi di hub (`index.html`). `pilih` nggak menghapus page alternatif — klik tab versi buat balik ke "Pilih" kapan aja. Ganti pilihan (Alt A→B) = generate playground baru (versi baru, label "Playground · Alt B"); playground lama tetap kesimpen di changelog, nggak ketimpa.

---

## Fase 1 — PLAN (referensi + best practice + first draft)

**Trigger:** `explore <komponen>`

1. **Referensi (≥5)** — cari komponen sama di platform lain. Tiap referensi: **URL yang bisa dicoba** + penjelasan **behaviour** + kapan cocok. Kasih **rekomendasi** mana yang pas buat Paper.id.
2. **Best practice** — tarik dari Material / DS lain (HIG, Polaris, Carbon, dll). Cite source.
3. **First draft** — gabungin referensi yang user pilih jadi 1-2 draft HTML. **JANGAN pakai Aurora/Paperverse dulu** — murni buat lihat **behaviour + layout**. Pakai `explorer-template.html`, isi `.expl-canvas`. **Review tooling (klik = pin titik · drag = pilih area komen) udah standar di template — WAJIB pakai itu, JANGAN bikin tooling komen sendiri dari nol** (biar tiap komponen baru konsisten dapet fitur yang sama).

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

⚠️ Fase 1 = eksplorasi bebas, di sini BOLEH nilai non-DS (ini satu-satunya fase yang exempt dari live-pull, karena tujuannya lihat behaviour dulu).

## Fase 2 — REVIEW

**Trigger:** user komen di web → klik **📤 Submit** → paste `[REVIEW]...` ke chat.

Diskusi: bagian mana yang dipertahanin, dibuang, digabung. Iterasi draft kalau perlu. **Gate:** user oke arah desainnya.

## Fase 3 — EKSPLORASI (5 alternatif, dari DS)

**Trigger:** `lanjut alternatif`

1. **Aurora/Paperverse Component Mapping** dulu (gerbang wajib) — tabel `UI Need → komponen Paperverse → nilai asli → ada di Aurora? → drift?`. Share, tunggu approve.
2. **Live-pull** tiap komponen dari Paperverse (Figma MCP). **DILARANG hardcode.** Kalau kelihatan nggak ada di DS → **tanya user dulu** ("ini beneran nggak ada apa gue yang belum nemu?"), jangan asal bikin.
3. Generate **5 alternatif HTML** pakai komponen + text style + color dari DS. Di web, pakai `explorer-template.html` (grid 5 alternatif).
4. Sebelum setor tiap alt HTML → **diff-audit** (`node paper-designer/tools/component-audit.mjs <file>`). Cek warna + font + **spacing/radius/stroke** vs `aurora-tokens.md`. Exit 1 = perbaiki dulu.

### 🔒 PRE-FLIGHT Fase 3 — WAJIB tempel di chat + centang SEBELUM setor 5 alternatif

> Aturan keras: **DILARANG setor** kalau blok ini belum ditulis di chat dan **semua ✅**. Ada ❌ = STOP, betulin dulu. Ini bukan formalitas — ini yang bikin "diam-diam ngarang/nyampur sumber" ketahuan (berlaku model apapun, Opus/Sonnet).

```
🔒 PRE-FLIGHT Fase 3 — <komponen>
[ ] Mapping table (UI Need → komponen Paperverse → nilai asli → Aurora? → drift) sudah di-share & di-APPROVE user
[ ] Tiap komponen di-LIVE-PULL dari Paperverse (Figma MCP) — BUKAN dari cache .md / ingatan
[ ] Warna & text-style bind ke collection `semantic` / `primitive_text_and_layout` SAJA
[ ] TIDAK ADA nilai dari collection `Color` (terlarang — drift terjamin)
[ ] Tiap alt lolos: node paper-designer/tools/component-audit.mjs <file> → exit 0
→ Semua ✅? Baru boleh setor. Ada ❌? STOP.
```

**Output:** 5 alternatif web + tombol action tiap alt. **Gate:** user **⭐ Pilih** + review.

## Fase 3.5 — PLAYGROUND (property interaktif) — WAJIB

**Trigger:** user klik **🎛️ Playground** di alt terpilih → paste `playground: <komponen> — Alt X`

Bangun **1 playground interaktif** buat alt terpilih — ala **panel Properties Figma**. Pakai [`playground-template.html`](playground-template.html). Tujuannya: matangin **model property** komponen SEBELUM guideline & Figma, jadi playground = **satu sumber** yang nyuapin anatomy guideline (section 5) DAN property Figma (Fase 5). Nyambungin behavior yang sering meleset kalau di-spec belakangan.

**Isi wajib tiap playground (kontrak):**
1. **Panel properties (kiri)** — kontrol live:
   - **Variant / Count** (kalau ada, mis. jumlah kartu 2–5 → pola DS `Number of Chips`).
   - **Toggle section (BOOLEAN)** — tiap bagian opsional show/hide.
   - **State** — default / hover / selected / disabled / error (yang relevan aja).
2. **Anotasi mapping Figma** — tiap kontrol dikasih tag `VARIANT` / `BOOLEAN` / `SLOT` / `SWAP`. Playground = spec property langsung. (Slot = konten bebas mis. leading/trailing; Swap = tukar ke komponen existing mis. badge → Chip Status.)
3. **Stage komponen (kanan)** — live, 100% token DS (semantic + Lato), **wajib lolos** `component-audit.mjs`.
4. **Review tooling** (💬 komen) — standar dari template.
5. **Cek hover** — tiap komponen interaktif WAJIB punya hover state; kalau DS belum punya, tambah + flag.

**Non-destruktif:** `pilih` nggak menghapus page alternatif. Playground = versi baru di hub, label **"Playground · Alt X"**. Balik ke Pilih = klik tab versi. Ganti pilihan = playground baru buat alt lain (yang lama diarsip di changelog).

**Output:** playground web (audit lolos) + property model siap. **Gate:** user review model property (nama toggle, mana slot/swap, default). Baru lanjut Guideline/Figma.

## Fase 4 — GUIDELINE

**Trigger:** user klik **📄 Guideline** di alt terpilih → paste `guideline: ...`

Susun Component Guideline pakai [`guideline-template.md`](guideline-template.md) — 9 section:
1. Preview Design Component · 2. Overview · 3. When to Use · 4. Design Principle · 5. Anatomy & Properties · 6. Behaviour · 7. Variant · 8. Do's & Don'ts · 9. Edge Cases

**Gate:** user review guideline.

## Fase 5 — GENERATE FIGMA

**Trigger:** user klik **🎨 Figma** di alt terpilih → paste `figma: ...`

1. Generate komponen di Figma — **100% dari Paperverse** (component, text style, color). Instance/extract, **DILARANG rebuild manual** (rule generate komponen). **Property model ikut playground (Fase 3.5) 1:1**: toggle → BOOLEAN, count/variant → VARIANT, slot → `createSlot()`/SLOT prop, swap → INSTANCE_SWAP.
2. Generate guideline di Figma (9 section).
3. Kalau ada komponen Paperverse-only / drift → catat ke [`../ds/paperverse-vs-aurora.md`](../ds/paperverse-vs-aurora.md).

### 🔒 PRE-FLIGHT Fase 5 — WAJIB tempel di chat + centang SEBELUM generate ke Figma

> Fase 5 nggak punya gerbang mesin (beda sama Fase 3 yang ada `component-audit`). Jadi checklist ini **satu-satunya** yang nahan "ngarang binding". DILARANG generate kalau belum semua ✅.

```
🔒 PRE-FLIGHT Fase 5 — <komponen> — Alt X
[ ] Komponen di-build via INSTANCE/extract Paperverse — BUKAN rebuild frame manual
[ ] Text pakai getLocalTextStylesAsync; warna via figma.variables.setBoundVariableForPaint (namespace `figma.variables.`, BUKAN `figma.`)
[ ] Audit binding tree-walk: unbound = [] DAN wrongCollection = [] (ga ada yang bind ke `Color`)
[ ] Guideline 9-section (Fase 4) sudah jadi sebelum ditempel ke Figma
[ ] Drift / Paperverse-only dicatat ke paperverse-vs-aurora.md
→ Semua ✅? Baru boleh generate. Ada ❌? STOP.
```

**Output:** komponen + guideline live di Figma Paperverse.

---

**Ringkas alur gate:** `explore` → [draft+review] → `lanjut alternatif` → [5 alt + ⭐ pilih] → `playground` → [Fase 3.5: property model, review] → `guideline` → [review] → `figma`. Tiap panah = user paste command dari tooling. Semua artifact = versi di hub (non-destruktif, bisa balik via tab versi).
