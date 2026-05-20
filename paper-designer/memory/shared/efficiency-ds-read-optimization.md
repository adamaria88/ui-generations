---
name: efficiency-ds-read-optimization
description: "Arsitektur optimasi read file DS/rules — hasil party mode 3 agent, diputuskan & diimplementasi"
metadata: 
  node_type: memory
  type: project
  originSessionId: f456c60c-5cf2-4ebc-88b6-5121fd69c661
---

## Masalah
Setiap sesi baru, Senior UIUX Designer pipeline baca 5 file rules/DS secara wajib:
- design-rules.md (20KB), layout-rules.md (6KB), page-templates.md (12KB), aurora-tokens.md (8KB), aurora-components.md (8KB)
- Total: ~56KB, ~18.700 token hanya untuk "boot" sebelum LLM mulai berpikir tentang brief

## Keputusan Arsitektur: Tiered Merge

**Tier 1 — `senior-uiux/ds/ds-core.md` (baru, selalu dibaca)**
Merge + trim konten universal dari semua 5 file:
- aurora-tokens.md: full (nilai token selalu butuh)
- layout-rules.md: full (pendek, selalu relevan)
- page-templates.md: trimmed (hapus ASCII art verbose, keep tabel & decision flow)
- design-rules.md: hanya Global Rules + Absolute Prohibitions + Pre-Generation Checklist
- aurora-components.md: hanya katalog (nama + when-to-use), tanpa detail props

Estimasi hasil: ~8-10KB (~2.000-2.500 token) dari 56KB sebelumnya.

**Tier 2 — `rules/design-rules.md` tetap ada sebagai reference**
Dibaca on-demand per komponen yang dipakai di brief. Pipeline instruksikan: "untuk tiap komponen yang kamu pakai, baca section-nya di design-rules.md".

## Impact
- Sebelum: ~18.700 token/sesi (5 reads)
- Setelah: ~7.300-8.300 token/sesi (1 read + conditional)
- Penghematan: ~55-60%

## Yang TIDAK dilakukan
- Lazy read berdasarkan tipe brief → risk DS compliance failure terlalu tinggi
- Memory DS snapshot → trap (stale, dual source of truth)
- Taruh DS rules di CLAUDE.md → global pollution semua sesi non-skill

**Why:** LLM context window fresh tiap sesi, baca 5 file = 18K token startup cost. Merge ke 1 file compact = 1 read, ~2.5K token.
**How to apply:** ds-core.md adalah source of truth harian; design-rules.md adalah reference detail per-komponen.
