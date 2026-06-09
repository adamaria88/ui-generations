---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 227
slug: "field-width-matches-input"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, field, width, cognitive-load]
apply_value: "high"
problem_domain: "form"
---

# Field width matches expected input

## Problem Trigger
> All your inputs are full-width "for a neat look" — but a 4-digit postcode field at 600px wide looks strange and misleading.

## The Thinking
Width sets user expectation — wide field = "write a lot", narrow field = "just 1-2 characters". A full-width field for a postcode confuses users "why is it so wide, what do I need to write?". Match width to the longest expected input — or the most common case if it varies.

## Concrete Example
- AU postcode = 4 digits → width of 4 digits (~80px).
- CVC = 3 digits → narrow (~60px).
- Card number = 16 digits → wider (~280px).
- Full name = full-width.
- Email = full-width.

## Anti-pattern (what this is NOT)
All inputs 100% width "uniform & neat" — sacrifices cognitive cues for visual uniformity. Users need extra thinking "what does this field want and how many characters?".

## Application for Paper.id
- "Amount" / "PO Number" / "Code" inputs — match width to expected length.
- Don't make everything full-width.
- Combine with [[stacked-related-fields-side-by-side]] — short related fields can be inline.

## Cross-refs
- Other cards: `[[stacked-related-fields-side-by-side]]`, `[[single-column-form-layout]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 227-228
- Extraction date: 2026-05-22
- Reviewed by user: yes
