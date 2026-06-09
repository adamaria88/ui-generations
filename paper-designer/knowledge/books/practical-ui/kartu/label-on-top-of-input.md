---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 215
  quote_verbatim: "Your eyes can see both the label and input in a single focus."
slug: "label-on-top-of-input"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, label, layout]
apply_value: "high"
problem_domain: "form"
---

# Label on top of input

## Problem Trigger
> Where to place a form label — above or to the left of the input?

## The Thinking
Label above = eye focuses once (label + input in 1 vertical glance). Label on the left = zig-zag eye movement, variable label-to-input distance (long labels break layout), right-aligned label creates a jagged-left edge that's hard to scan. Label on the left also breaks on mobile (narrow).

## Concrete Example
Label "Street address *" above the input field, user reads and fills immediately without eye-jumping. Vs label "Suburb, town or city" on the left — long text breaks layout, or right-aligned but ironically creates a jagged-left edge.

## Anti-pattern (what this is NOT)
Label on the left of input "for horizontal compactness" — variable label-input gap based on label length, eye can't focus, breaks on mobile. Right-aligned label "to fix jagged edge" but ironically creates a jagged-left.

## Application for Paper.id
All Paper.id forms use label-top (Aurora form-field default is already correct). Locked — don't experiment with label-left "for compactness" even for long forms.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — form patterns
- Other cards: `[[single-column-form-layout]]` (paired rule), `[[dont-use-placeholder-as-label]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 215-216
- Quote verbatim:
  > "Your eyes can see both the label and input in a single focus."
- Extraction date: 2026-05-22
- Reviewed by user: yes
