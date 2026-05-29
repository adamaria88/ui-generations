---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 4: Layout and spacing"
  page: 120
slug: "visual-hierarchy-variables"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, visual-design, layout]
apply_value: "high"
problem_domain: "layout"
---

# Visual hierarchy — 6 variables (size, colour, contrast, spacing, position, depth)

## Problem Trigger
> Page punya 10 element, lo pengen user notice element X pertama. Gimana caranya?

## The Thinking
6 lever untuk visual hierarchy:

1. **Size** — Bigger = more important.
2. **Colour** — Saturated / warm / brighter = stand out.
3. **Contrast** — Higher contrast vs background = prominent.
4. **Spacing** — More white space around element = breathing room = important.
5. **Position** — Top first (F-pattern), atau first in row (Serial Position Effect).
6. **Depth** — Higher elevation (shadow) = closer/important.

Apply by importance order. Important element dapat lever yang banyak (size besar + warna saturated + position top + elevated). Less important dapat 1-2 lever ringan.

## Contoh Konkret
Property card:
- "Beach Getaway" (name) heading bold large + dark color.
- "Blissful Beach, NSW" (subheading) smaller regular medium color.
- "$299/night" pakai size + position kanan + bold = mata jatuh ke harga.
- "Book now" pakai primary color + bottom-stick + elevated shadow = always visible + clear CTA.

## Anti-pattern (yang BUKAN ini)
Property card tabel format flat — Name, Type, Price semua ukuran sama, font sama, warna sama → user scan susah, ga ada anchor.

## Aplikasi untuk Paper.id
- **Detail Invoice page** — Total Amount = biggest + bold + top-position.
- **Tanggal Jatuh Tempo** = secondary text color + smaller.
- **Action "Kirim"** = primary button + bottom-right.

Combine 6 lever sesuai importance. Validate dengan [[squint-test-validation]].

## Cross-refs
- Kartu lain: `[[squint-test-validation]]`, `[[one-primary-button-per-screen]]`
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 4 — Layout and spacing
- Halaman: 120-127
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
