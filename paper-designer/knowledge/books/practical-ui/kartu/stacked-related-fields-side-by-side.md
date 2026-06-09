---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 217
slug: "stacked-related-fields-side-by-side"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, layout, exception]
apply_value: "high"
problem_domain: "form"
---

# Stack related fields side by side (single-column exception)

## Problem Trigger
> Single-column rule, but 2 super-related fields (Expiry date + CVC) — should they be full-width stacked too?

## The Thinking
Single column = the default rule, but short related fields can go side-by-side AS LONG AS:
- (a) related (date + time, expiry + CVC, city + postal code)
- (b) short (≤6 characters expected each)
- (c) contained within the parent column bounds (doesn't break out into an empty side panel)

Reduces form height without sacrificing scannability.

## Concrete Example
A payment form — "Expiry date" (MM/YY) + "CVC" (3 digits) side-by-side in 1 row. Vs full-column stacking that makes the form longer.

## Anti-pattern (what this is NOT)
Side-by-side for unrelated long fields (Street + Email) → the user is confused about the order, accidental skips. Side-by-side for long full-width fields → makes the form wider than the page.

## Application for Paper.id
- Create Invoice form — "Invoice Date" + "Due Date" side-by-side OK (related dates).
- "PO Number" + "Reference Number" side-by-side OK (short related).
- But "Customer Name" + "Address" → still stack (long unrelated).

## Cross-refs
- Other cards: `[[single-column-form-layout]]` (parent rule), `[[field-width-matches-input]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 217-218
- Extraction date: 2026-05-22
- Reviewed by user: yes
