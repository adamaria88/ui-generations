---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 7: Forms"
  page: 238
slug: "stepper-vs-dropdown-for-numeric"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, stepper, numeric]
apply_value: "medium"
problem_domain: "form"
---

# Use steppers for numeric small changes

## Problem Trigger
> Field "Jumlah guests" di booking page — pakai dropdown 1-10 atau stepper +/-?

## The Thinking
Small numeric changes (1-10) → **stepper +/-**. Lebih cepat dari dropdown.

**Interaction cost compare**: select 2 adults + 1 child + 1 infant
- Dropdown: 6 click + 3 scroll = 9 interactions.
- Stepper: 4 click = 4 interactions.

**Tips stepper:**
- Target size min 48pt × 48pt.
- Horizontal layout (-/+) NOT vertical (up/down) — vertical bisa salah tap.
- "+/-" symbols, NOT chevron arrows (chevron = dropdown indicator, confusing).
- NOT untuk large numeric range (1-1000+) — pakai input field instead.

## Contoh Konkret
Booking guests — [- 2 +] adults / [- 1 +] children. Direct +/-, faster.

## Anti-pattern (yang BUKAN ini)
Stepper untuk Qty 1-9999 di line items invoice → user mau qty 500, klik + 500 kali. Pakai input field instead.

Vertical stepper (up arrow + down arrow stacked) — small target, prone salah tap.

## Aplikasi untuk Paper.id
- **Stepper**: Qty di kasir (1-20 range), guest count di booking, line item qty (kalau range kecil).
- **Input**: Qty besar, jumlah uang, custom range.

## Cross-refs
- Kartu lain: `[[number-input-separator-rule]]` (memory rule untuk large numeric input)

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 7 — Forms
- Halaman: 238-239
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
