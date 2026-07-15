---
name: component-explorer
description: Flow bikin komponen baru dari nol untuk Paper.id — riset referensi (URL bisa dicoba + behaviour), first draft non-DS buat lihat layout, review via tooling web, 3–5 alternatif dari Paperverse/Aurora, playground property interaktif (ala panel Figma), Component Guideline 9-section, generate ke Figma. Trigger saat user mau explore/bikin komponen baru atau ketik `explore <komponen>`. Beda dari /paper-designer (itu untuk screen/flow/prototype); ini khusus SATU komponen baru dari riset sampai Figma.
---

# Component Explorer (Paper.id)

Flow reusable buat **melahirkan komponen baru**: referensi → review → eksplorasi dari DS → guideline → Figma. Bukan buat bikin screen/prototype (itu `/paper-designer`).

**Bahasa:** Bahasa Indonesia santai/awam, kalimat pendek. Opsi berlabel ([A]/[B]) > pertanyaan terbuka.

## HUKUM MATI (nurun dari rules project)

1. **Fase 3 & 5 = live-pull dari Paperverse, DILARANG hardcode.** Tunduk ke `paper-designer/memory/shared/paperverse-source-of-truth.md`. Kalau komponen kelihatan nggak ada di DS → **tanya user** ("beneran nggak ada, apa gue belum nemu?"), jangan asal bikin.
2. **Komponen existing = instance/extract, bukan rebuild manual.** Fase 5 wajib lolos diff-audit (`node paper-designer/tools/component-audit.mjs <file>`).
3. **Pisahin layer tooling (`.expl-*`) vs komponen (`.expl-canvas`).** Cuma layer komponen yang di-extract ke Figma.
4. **Tiap fase = gate.** Berhenti, tunggu user, jangan lompat.

## EKSEKUSI

Baca dan ikuti **`paper-designer/component-explorer/pipeline.md`** — 5 fase lengkap + **kosakata command (canonical, satu-satunya sumber tabel command — jangan duplikat di sini biar nggak drift)**. Aset:
- Template web + review tooling (cetakan draft) → `paper-designer/component-explorer/explorer-template.html`
- Template playground property (Fase 3.5, WAJIB) → `paper-designer/component-explorer/playground-template.html`
- Template guideline 9-section → `paper-designer/component-explorer/guideline-template.md`
- SOP build Figma (Fase 5) → `paper-designer/component-explorer/figma-build-sop.md`

## Kosakata command

Full tabel command (`explore` / `[REVIEW]` / `lanjut alternatif` / `pilih` / `playground` / `guideline` / `figma`) ada di **pipeline.md** — itu sumber tunggalnya.

Urutan tombol tooling per alternatif: **⭐ Pilih → 🎛️ Playground → 📱 Mobile (opsional) → 📄 Guideline → 🎨 Figma**.

**Platform:** default `web`. Mobile **opsional**, 2 jalur — (A) mobile-first: `explore <komponen> mobile` (mode mobile dari Fase 1); (B) adapt dari web: `mobile: <komponen> — Alt X` (Fase 3.7). Detail di pipeline.md.

## Intake

Kalau user cuma bilang mau bikin komponen tanpa nyebut nama → tanya nama komponennya (itu satu-satunya yang wajib buat mulai Fase 1). Selebihnya putuskan sendiri sesuai pipeline.
