---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 4: Layout and spacing"
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
> Your label-to-input spacing is 24px, and spacing between fields is 16px — backwards, which actually breaks the grouping.

## The Thinking
Spacing within a group MUST be smaller than spacing between groups. Makes proximity grouping clear. If reversed, the eye can't parse "this is 1 group" vs "different group".

**Visual rule**: Inner < Outer.
- Spacing label-input (inner) = 8pt.
- Spacing between field groups (outer) = 24pt.
- Eye automatically reads "label + input = 1 unit", "field 1 vs field 2 = different units".

## Concrete Example
Card list:
- Spacing within card (heading + description + meta) = 8pt each (inner tight)
- Spacing between cards = 24pt (outer breathing)
- Eye scan: card-as-unit is clear.

## Anti-pattern (what this is NOT)
Spacing within card 24pt + spacing between cards 24pt → all spacing the same, card identity lost, user can't parse "this is a separate card" vs "this is one long card".

## Application for Paper.id
Audit forms, lists, detail pages to check whether inner < outer.

**Common bug**: spacing between field-rows is too small and equals label-input spacing → grouping breaks. Fix: ensure inner (label-input) ≤ outer (field-field).

## Cross-refs
- Other cards: `[[4-grouping-methods]]` (proximity principle), `[[predefined-spacing-scale]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 4 — Layout and spacing
- Page: 137
- Extraction date: 2026-05-22
- Reviewed by user: yes
