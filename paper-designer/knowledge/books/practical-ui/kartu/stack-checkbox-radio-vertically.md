---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 217
slug: "stack-checkbox-radio-vertically"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, checkbox, radio, layout]
apply_value: "high"
problem_domain: "form"
---

# Stack checkboxes and radio buttons vertically

## Problem Trigger
> You have 3 notification options (Email/SMS/Post) — lay them out horizontally inline or stack them vertically?

## The Thinking
Vertical stacking = clear separation between options, no risk of the user clicking the wrong neighboring option. Horizontal inline = harder to scan + screen-magnifier might miss the rightmost option. Consistent with the single-column form rule.

## Concrete Example
"How would you like to be notified?":
- ✅ Vertical: Email \n SMS \n Post
- ❌ Inline: [Email] [SMS] [Post]

## Anti-pattern (what this is NOT)
Horizontal radio buttons "to be compact" — options overlap on mobile, accidental taps on the neighboring option, hard to scan when there are many options.

## Application for Paper.id
- Payment method, document type, status filter forms — all radio/checkbox vertical.
- Aurora `au-radio` + `au-checkbox` are likely vertical by default already.

## Cross-refs
- Other cards: `[[single-column-form-layout]]` (consistent principle)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 217
- Extraction date: 2026-05-22
- Reviewed by user: yes
