---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
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
> A "Number of guests" field on a booking page — use a dropdown 1-10 or a +/- stepper?

## The Thinking
Small numeric changes (1-10) → **+/- stepper**. Faster than a dropdown.

**Interaction cost comparison**: select 2 adults + 1 child + 1 infant
- Dropdown: 6 clicks + 3 scrolls = 9 interactions.
- Stepper: 4 clicks = 4 interactions.

**Stepper tips:**
- Target size min 48pt × 48pt.
- Horizontal layout (-/+) NOT vertical (up/down) — vertical is easy to mis-tap.
- "+/-" symbols, NOT chevron arrows (chevron = dropdown indicator, confusing).
- NOT for large numeric ranges (1-1000+) — use an input field instead.

## Concrete Example
Booking guests — [- 2 +] adults / [- 1 +] children. Direct +/-, faster.

## Anti-pattern (what this is NOT)
A stepper for Qty 1-9999 on invoice line items → the user wants qty 500, clicks + 500 times. Use an input field instead.

A vertical stepper (up arrow + down arrow stacked) — small target, prone to mis-taps.

## Application for Paper.id
- **Stepper**: Qty at the register (1-20 range), guest count in booking, line item qty (if the range is small).
- **Input**: Large qty, monetary amounts, custom ranges.

## Cross-refs
- Other cards: `[[number-input-separator-rule]]` (memory rule for large numeric input)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 238-239
- Extraction date: 2026-05-22
- Reviewed by user: yes
