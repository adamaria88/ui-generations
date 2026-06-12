---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 244
slug: "group-form-fields-under-headings"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, grouping, hierarchy, cognitive-load]
apply_value: "high"
problem_domain: "form"
---

# Group related fields under headings

## Problem Trigger
> A long form can't be multi-step (product constraint), but 20 fields on 1 page is overwhelming.

## The Thinking
If multi-step isn't possible, **group related fields under section headings**. Users get a mental break into manageable chunks. "Personal info / Contact info / Payment info" — 3 chunks × 7 fields is more digestible than a flat list of 21 fields.

## Concrete Example
Company Profile Form:
- **Section "Legal Data"** (H3 heading + spacing-L above): NPWP, deed, SIUP, etc.
- **Section "Contact Data"**: address, phone, email
- **Section "Bank Data"**: account number, bank name, swift code

Heading style: H3 or H4 + spacing M (24pt) above + optional bottom border.

## Anti-pattern (what this is NOT)
20-field flat list with no headings → users get lost, don't know their progress, don't know "how far have I gone, how much is left", abandon mid-form.

## Application for Paper.id
Long forms that must be 1 page (product constraint / SEO) → must use section headings.

Heading style:
- Aurora heading-3 (28px bold) or heading-4 (22px bold)
- Spacing M (24pt) above the heading
- Spacing S (16pt) heading → first field
- Optional bottom border for visual divider

## Cross-refs
- Other card: `[[break-long-forms-into-steps]]` (preferred alternative if possible)
- Other card: `[[4-grouping-methods]]` (grouping principles)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 244
- Extraction date: 2026-05-22
- Reviewed by user: yes
