---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 229
slug: "conventional-form-field-styles"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, convention, jakob-law]
apply_value: "high"
problem_domain: "form"
---

# Stick with conventional form field styles

## Problem Trigger
> Tempted to experiment with unique form styling — replacing round radio buttons with squares, borderless inputs, custom emoji for multi-choice.

## The Thinking
Jakob's Law — users' mental models are formed from other products they frequently use. Stick with: input = bordered box, radio = circle + selected fill, checkbox = box + checkmark, dropdown = field + chevron down. Innovative form styling = high usability risk — gain aesthetics, lose comprehension.

## Concrete Example
Custom rectangular radio button with emoji "😊 Happy / ☹️ Sad" → user confused "is this a button? checkbox? can I select multiple?". Use standard radio with circle on the left of label → immediately clear "select 1 of 2".

## Anti-pattern (what this is NOT)
- Radio button without the characteristic circle — high usability risk.
- Input field without border ("clean look") — user doesn't know it can be clicked or is just text.
- Custom dropdown without chevron — ambiguous.

## Application for Paper.id
STOP experimenting with form styling. Use Aurora `au-form-field`, `au-radio`, `au-checkbox`, `au-dropdown` as-is. Custom styling only for decorative wrappers, NOT core component shapes.

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` — strict use of Aurora components
- Other card: `[[conventional-patterns-jakob-law]]` (parent principle)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 229-230
- Extraction date: 2026-05-22
- Reviewed by user: yes
