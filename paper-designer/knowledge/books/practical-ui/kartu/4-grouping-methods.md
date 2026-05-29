---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 4: Layout and spacing"
  page: 105
slug: "4-grouping-methods"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [layout, grouping, gestalt]
apply_value: "high"
problem_domain: "layout"
---

# 4 grouping methods (container + proximity + similarity + continuity)

## Problem Trigger
> Punya 6 card produk di page — gimana cara grup biar jelas mana yang related, ga tampak random?

## The Thinking
4 metode grouping (Gestalt principles):

1. **Container** — Place dalam border/shadow/bg color. STRONGEST visual cue. Tapi paling clutter. Use untuk main structure.
2. **Proximity** — Spasi dalam group < spasi antar group. Cleaner dari container. Often sufficient.
3. **Similarity** — Visual treatment serupa (size, shape, color, icon style). Group via uniform appearance.
4. **Continuity** — Aligned in continuous line. Eye natural follow line. Common in list.

**Kombinasi**: Combine 2-3 untuk strong grouping TANPA container clutter. Mis: similarity (uniform card style) + proximity (16pt antar card, 32pt antar section) + continuity (aligned grid) = clear grouping tanpa border.

## Contoh Konkret
Music player playlist — songs grouped via container (table border) + similarity (uniform row style) + proximity (close-packed) + continuity (column alignment). REMOVE container — masih kelihatan grouped via 3 metode lain. Cleaner.

## Anti-pattern (yang BUKAN ini)
Bungkus segala 6 card pake border padahal proximity + similarity udah cukup → clutter, visual noise. Atau mixed methods inconsistent (sebagian card border, sebagian ngga).

## Aplikasi untuk Paper.id
Audit current cards/sections:
- Kalau ada container yang ga "earn" purpose (decorative aja), pertimbangkan remove.
- Filter inline di table = bisa pakai background tint (container ringan) + proximity ke header — clear grouping tanpa border noise.
- Detail page section: combine proximity (16pt inner / 32pt outer) + similarity (uniform card style) → grouping clear tanpa border individu.

## Cross-refs
- Kartu lain: `[[inner-spacing-smaller-than-outer]]` (proximity rule detail), `[[visual-hierarchy-variables]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 4 — Layout and spacing
- Halaman: 105-119
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
