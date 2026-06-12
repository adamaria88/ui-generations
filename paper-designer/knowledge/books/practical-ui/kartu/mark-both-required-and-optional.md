---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 222
slug: "mark-both-required-and-optional"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, required, optional, accessibility]
apply_value: "high"
problem_domain: "form"
---

# Mark both required and optional fields

## Problem Trigger
> Unsure how to mark required vs optional in a long form — use asterisk only? or text "optional"? or "all required unless marked"?

## The Thinking
2 popular anti-patterns:
- (a) "All required unless marked optional" instruction at the top — often skipped by users when scanning.
- (b) Only a red asterisk `*` — some users don't know what it means.

**Safe**: Mark BOTH — `*` (or "(required)") for required + "(optional)" for optional. Cleanest UX, no ambiguity, accessible for screen reader users.

## Concrete Example
```
First name *
Email *
Mobile number (optional) — To receive updates via text message
```

Users scanning immediately know what's required and what they can skip.

## Anti-pattern (what this is NOT)
"All fields are required unless marked optional" at the top of the form → users scan directly to the fields, miss the instruction, confused about what's required.

Only a red asterisk `*` without an "(optional)" marker — ambiguous for optional fields.

## Application for Paper.id
- Create Invoice Form, Add Partner Form, Record Expense Form: required `*`, explicit optional "(optional)".
- Exception (no marking needed): short 1-2 field forms — Search, Login, Newsletter subscribe.
- Long complex forms: ALL marked.

## Cross-refs
- Other card: `[[label-on-top-of-input]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 222-225
- Extraction date: 2026-05-22
- Reviewed by user: yes
