---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 214
  quote_verbatim: "It's more efficient to complete, as it decreases interaction cost by maintaining a consistent downward momentum."
slug: "single-column-form-layout"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, layout, interaction-cost]
apply_value: "high"
problem_domain: "form"
---

# Single column form layout

## Problem Trigger
> A form with many fields — torn between a 2-column layout "to save space" or 1-column.

## The Thinking
Single column = consistent downward momentum, the user doesn't have to think "is the next field to the right or below". Multi-column = zig-zag eye movement → increases interaction cost + cognitive load. Screen-magnifier users easily miss fields in column 2 due to limited view.

## Concrete Example
A postal address form — 2-column (Street | Suburb | State | Postcode across 2 rows) vs 1-column (everything stacked vertically). 1-column makes the order clearer and is lower-error.

## Anti-pattern (what this is NOT)
A multi-column form "to fit on 1 screen" without scrolling — trading efficiency for space. Ironically: the user takes longer to complete the form because of the zig-zag, so total time is longer even if it's visually compact.

## Application for Paper.id
- Add Partner form, Create Invoice form, Record Expense form — all stack in 1 column.
- Side-by-side is OK if related & short (see [[stacked-related-fields-side-by-side]]).
- Aurora `.form-grid` uses single column by default.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — form patterns
- Other cards: `[[stacked-related-fields-side-by-side]]` (exception), `[[label-on-top-of-input]]` (paired rule)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 214
- Quote verbatim:
  > "It's more efficient to complete, as it decreases interaction cost by maintaining a consistent downward momentum."
- Extraction date: 2026-05-22
- Reviewed by user: yes
