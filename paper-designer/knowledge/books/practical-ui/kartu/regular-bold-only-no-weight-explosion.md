---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 5: Typography"
  page: 173
slug: "regular-bold-only-no-weight-explosion"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [typography, font-weight, design-system]
apply_value: "medium"
problem_domain: "typography"
---

# Use regular and bold font weights only

## Problem Trigger
> Lo download font Inter dengan 9 weight (thin, light, regular, medium, semibold, bold, black) — pakai semua biar variation.

## The Thinking
Multiple font weight = clutter + harder consistency + slower decision. **2 weight cukup**: regular + bold. Bold for emphasis (heading + label), regular for body. Beberapa typeface boleh semibold sebagai "bold" (kalau bold terlalu tebal).

Hindari thin & light weight di body text — hard to read for vision-impaired, fail WCAG.

## Contoh Konkret
Ecommerce product card pakai thin + light + regular + medium + bold + extra-bold (6 weight). Refactor → cuma regular + bold. Cleaner, faster decisions, more consistent.

## Anti-pattern (yang BUKAN ini)
6 weight = setiap designer pick "feel right" → page A pakai medium, page B pakai semibold → inconsistent.

Light/thin di body text 14px → fail WCAG, hard for vision-impaired.

## Aplikasi untuk Paper.id
Aurora type scale pakai cuma 2 weight (regular + bold). Stick to ini. Audit prototype apakah ada element pakai light/thin/medium/semibold di luar token — refactor ke regular/bold.

## Cross-refs
- Kartu lain: `[[predefined-spacing-scale]]` (same principle: limited tokens)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 5 — Typography
- Halaman: 173-174
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
