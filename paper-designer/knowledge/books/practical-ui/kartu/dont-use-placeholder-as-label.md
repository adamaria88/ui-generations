---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 233
slug: "dont-use-placeholder-as-label"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, label, placeholder, accessibility]
apply_value: "high"
problem_domain: "form"
---

# Don't use placeholder text instead of a label

## Problem Trigger
> Tempted to use placeholder text "to save space" — a single-line input with "Email" as the placeholder instead of a label.

## The Thinking
3 problems with placeholder-as-label:
1. **Placeholder disappears when the user types** → user forgets the context "what is this field for?".
2. **Placeholder contrast is usually inaccessible** (default light grey, fails WCAG).
3. **Field with placeholder can be mistaken as already filled** → user skips the field.

## Concrete Example
Input with placeholder "Email" (no label) — user starts typing, "Email" disappears, they scroll up and down, forget if this field is for email or username. Vs label "Email *" above + empty placeholder or format hint "you@example.com".

## Anti-pattern (what this is NOT)
Login form with input placeholder "Email" + input placeholder "Password", no label above. Saves 16px of vertical space but is a UX disability.

## Application for Paper.id
All inputs MUST have a label above them. Placeholder OK for:
- Format hint: "+62 8xx xxxx xxxx" in a phone field
- Format hint: "dd/mm/yyyy" in a date field
- Single search field (search invoice) — ONLY IF contrast ≥4.5:1 + `aria-label` exists for screen readers

DON'T replace labels with placeholders.

## Cross-refs
- Other card: `[[label-on-top-of-input]]` (paired rule)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 233-234
- Extraction date: 2026-05-22
- Reviewed by user: yes
