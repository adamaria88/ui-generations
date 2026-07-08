---
name: component-explorer
description: Flow bikin komponen baru dari nol untuk Paper.id — riset referensi (URL bisa dicoba + behaviour), first draft non-DS buat lihat layout, review via tooling web, 5 alternatif dari Paperverse/Aurora, playground property interaktif (ala panel Figma), Component Guideline 9-section, generate ke Figma. Trigger saat user mau explore/bikin komponen baru atau ketik `explore <komponen>`. Beda dari /paper-designer (itu untuk screen/flow/prototype); ini khusus SATU komponen baru dari riset sampai Figma.
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

Baca dan ikuti **`paper-designer/component-explorer/pipeline.md`** — 5 fase lengkap + kosakata command. Aset:
- Template web + review tooling → `paper-designer/component-explorer/explorer-template.html`
- Template guideline 9-section → `paper-designer/component-explorer/guideline-template.md`

## Kosakata command (user paste dari tooling web)

| User ketik/paste | Kamu jalanin |
|---|---|
| `explore <komponen>` | **Fase 1** — cari ≥5 referensi (URL + behaviour + rekomendasi) → best practice → first draft HTML non-DS (pakai explorer-template) |
| `[REVIEW] ...` | **Fase 2** — diskusi komen, iterasi draft |
| `lanjut alternatif` | **Fase 3** — mapping gate → live-pull → 5 alternatif HTML dari DS → diff-audit |
| `pilih: <komponen> — Alt X` | catat alternatif terpilih (non-destruktif — page alternatif tetap ada sbg versi) |
| `playground: <komponen> — Alt X` | **Fase 3.5** — playground property interaktif (WAJIB, ala panel Figma) buat alt terpilih |
| `guideline: <komponen> — Alt X` | **Fase 4** — Component Guideline 9-section (comot dari playground) |
| `figma: <komponen> — Alt X` | **Fase 5** — generate komponen + guideline ke Figma (property model 1:1 dari playground) |

Urutan tombol tooling per alternatif: **⭐ Pilih → 🎛️ Playground → 📄 Guideline → 🎨 Figma**.

## Intake

Kalau user cuma bilang mau bikin komponen tanpa nyebut nama → tanya nama komponennya (itu satu-satunya yang wajib buat mulai Fase 1). Selebihnya putuskan sendiri sesuai pipeline.
