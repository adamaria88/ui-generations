# Component Explorer — Pipeline (5 Fase)

Flow reusable buat bikin komponen baru: **riset referensi → review → eksplorasi dari DS → guideline → generate Figma.** Dipanggil per komponen. Tunduk penuh ke [`../memory/shared/paperverse-source-of-truth.md`](../memory/shared/paperverse-source-of-truth.md).

## Prinsip eksplorasi (general — berlaku semua komponen)

- **Control per-alternatif**, bukan global: tiap alternatif punya *variant switch* + *toggle property* sendiri (mis. buat notif = severity + section; buat komponen lain = variant/prop-nya masing-masing).
- **Alternatif harus beda TREATMENT**, bukan cuma beda layout / hilangin elemen. Eksplor pendekatan visual berbeda.
- **Preview behaviour** di page eksplor — tunjukin komponen "gimana munculnya/jalannya" beneran (isian behaviour spesifik per komponen).
- **Flow aksi**: default cuma **⭐ Pilih**. Klik Pilih → baru muncul **🎨 Generate** (komponen + guideline sekaligus).
- **Chrome ramping** — jangan dobel info (nama komponen/fase udah di hub; topbar draft cukup tombol tooling).

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
| `pilih: <komponen> — Alt X` | tandai terpilih → tombol Generate muncul | — |
| `figma: <komponen> — Alt X` | generate **komponen + guideline** sekaligus ke Figma | Fase 4+5 |

Catatan flow: **Pilih dulu → baru muncul Generate.** Generate = komponen + guideline 9-section sekaligus (nggak ada step guideline kepisah). Tiap alternatif punya control sendiri (switch severity + toggle section).

---

## Fase 1 — PLAN (referensi + best practice + first draft)

**Trigger:** `explore <komponen>`

1. **Referensi (≥5)** — cari komponen sama di platform lain. Tiap referensi: **URL yang bisa dicoba** + penjelasan **behaviour** + kapan cocok. Kasih **rekomendasi** mana yang pas buat Paper.id.
2. **Best practice** — tarik dari Material / DS lain (HIG, Polaris, Carbon, dll). Cite source.
3. **First draft** — gabungin referensi yang user pilih jadi 1-2 draft HTML. **JANGAN pakai Aurora/Paperverse dulu** — murni buat lihat **behaviour + layout**. Pakai `explorer-template.html`, isi `.expl-canvas`.

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
4. Sebelum setor tiap alt HTML → **diff-audit** (`node paper-designer/tools/component-audit.mjs <file>`). Exit 1 = perbaiki dulu.

**Output:** 5 alternatif web + tombol action tiap alt. **Gate:** user **⭐ Pilih** + review.

## Fase 4 — GUIDELINE

**Trigger:** user klik **📄 Guideline** di alt terpilih → paste `guideline: ...`

Susun Component Guideline pakai [`guideline-template.md`](guideline-template.md) — 9 section:
1. Preview Design Component · 2. Overview · 3. When to Use · 4. Design Principle · 5. Anatomy & Properties · 6. Behaviour · 7. Variant · 8. Do's & Don'ts · 9. Edge Cases

**Gate:** user review guideline.

## Fase 5 — GENERATE FIGMA

**Trigger:** user klik **🎨 Figma** di alt terpilih → paste `figma: ...`

1. Generate komponen di Figma — **100% dari Paperverse** (component, text style, color). Instance/extract, **DILARANG rebuild manual** (rule generate komponen).
2. Generate guideline di Figma (9 section).
3. Kalau ada komponen Paperverse-only / drift → catat ke [`../ds/paperverse-vs-aurora.md`](../ds/paperverse-vs-aurora.md).

**Output:** komponen + guideline live di Figma Paperverse.

---

**Ringkas alur gate:** `explore` → [draft+review] → `lanjut alternatif` → [5 alt + pilih] → `guideline` → [review] → `figma`. Tiap panah = user paste command dari tooling.
