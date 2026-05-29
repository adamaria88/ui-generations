---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 4: Layout and spacing"
  page: 137
slug: "inner-spacing-smaller-than-outer"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [spacing, grouping, proximity]
apply_value: "high"
problem_domain: "spacing"
---

# Inner spacing smaller than outer

## Problem Trigger
> Spacing label-to-input lo 24px, spacing antar field 16px — kebalik, malah ngelumin grouping.

## The Thinking
Spacing dalam group HARUS smaller dari spacing antar group. Bikin proximity grouping clear. Kalau kebalik, eye ga bisa parse "ini 1 group" vs "beda group".

**Visual rule**: Inner < Outer.
- Spacing label-input (inner) = 8pt.
- Spacing antar field group (outer) = 24pt.
- Eye otomatis "label + input = 1 unit", "field 1 vs field 2 = beda unit".

## Contoh Konkret
Card list:
- Spacing dalam card (heading + description + meta) = 8pt each (inner tight)
- Spacing antar card = 24pt (outer breathing)
- Eye scan: card-as-unit jelas.

## Anti-pattern (yang BUKAN ini)
Spacing dalam card 24pt + antar card 24pt → semua spasi sama, card identity lost, user ga bisa parse "ini card terpisah" vs "ini 1 card panjang".

## Aplikasi untuk Paper.id
Audit form, list, detail page apakah inner < outer.

**Common bug**: spacing antar field-row terlalu kecil sama dengan spacing label-input → grouping hancur. Fix: pastikan inner (label-input) ≤ outer (field-field).

## Cross-refs
- Kartu lain: `[[4-grouping-methods]]` (proximity principle), `[[predefined-spacing-scale]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 4 — Layout and spacing
- Halaman: 137
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
