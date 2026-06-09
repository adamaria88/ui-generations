---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons + Chapter 7: Forms"
  page: 263
  quote_verbatim: "Instead of disabling the submit button, enable it and display error messages on submit."
slug: "validate-on-submit-not-inline"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, validation, button, conflict-aurora]
apply_value: "high"
problem_domain: "form"
---

# Validate on submit, not inline (⚠️ potential conflict)

## Problem Trigger
> The Submit button on a form is disabled until all fields are correct — the user taps submit, gets no response, stuck with no feedback.

## The Thinking
Disabling submit-until-valid = the user is stuck with no feedback on "why can't I". A better solution: **always enable submit**, validate on click, and if there's an error → highlight the field + error message. The user immediately knows "oh, field X isn't right yet". Plus a disabled button = low contrast, keyboard inaccessible.

## Concrete Example
A payment form — the user forgets to fill "Name on card", all other fields are correct. They press "Pay $99.00" → instead of a silent disabled button, it's enabled and shows an "Enter name on card" error message on the empty field. The user immediately knows.

## Anti-pattern (what this is NOT)
A disabled "Pay" button → the user presses it 3x, no feedback, frustration spikes → abandons the form. Or worse: the user assumes "the disabled button means it was already submitted, success?" — confusion.

## Application for Paper.id
⚠️ **Conflict with the current Aurora pattern** (many Paper.id modals disable Save until the form is valid).

Log it in `IMPROVEMENT-OPPORTUNITIES.md`. Considerations:
- Simple forms (2-5 fields) → enable + validate-on-submit (preferred per the book).
- Complex forms with inter-field dependencies → disabling might be safer (the current Paper.id pattern).

Discussion needed with the DS maintainer.

## Cross-refs
- Memory rule: `[[knowledge-vs-ds-priority-flow]]` — handling DS conflicts
- Other cards: `[[try-to-avoid-disabled-buttons]]` (paired insight)
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Disabled submit button pattern"

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons (p. 263) + Chapter 7 — Forms (p. 248)
- Quote verbatim:
  > "Instead of disabling the submit button, enable it and display error messages on submit."
- Extraction date: 2026-05-22
- Reviewed by user: yes
