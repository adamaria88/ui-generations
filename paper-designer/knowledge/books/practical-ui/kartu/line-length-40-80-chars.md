---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 5: Typography"
  page: 182
slug: "line-length-40-80-chars"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [typography, readability, layout]
apply_value: "medium"
problem_domain: "typography"
---

# Line length 40-80 characters per line

## Problem Trigger
> Long body text di landing page lebar 100% browser → 120+ char per baris.

## The Thinking
Ideal line length untuk readability = **40-80 char per line** (termasuk spaces).

- **Too long (>80)**: hard to track end-of-line → start-of-next-line. Eye fatigue.
- **Too short (<40)**: eye travel too often, stressed.

Sweet spot: 60-75 char (academic research consensus). Constraint pakai max-width container atau column layout.

## Contoh Konkret
Article body width 720px (≈ 75 char dengan font 18px) — comfortable read.

Vs full-width 1440px (≈ 150 char) — eye lost di line tengah, butuh re-read.

## Anti-pattern (yang BUKAN ini)
Landing page hero text full-width "supaya impactful" → ironic, lebih sulit di-baca dari constrained-width.

## Aplikasi untuk Paper.id
- **Description di card detail** → constraint `max-width: 65ch` (CSS unit native).
- **Modal body text** → max-width 480px.
- **Empty state subtext** → max-width compact.
- **Long-form help/docs** → 720px column.

CSS `ch` unit native untuk constraint berdasarkan character count.

## Cross-refs
- Kartu lain: `[[regular-bold-only-no-weight-explosion]]`, cross-ref `[[refactoring-ui:line-height-by-context]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 5 — Typography
- Halaman: 182-183
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
