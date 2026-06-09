---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 7: Forms"
  page: 231
  quote_verbatim: "If a password needs to be at least 6 characters long, tell people before they fill out the password field, not after."
slug: "hint-text-above-field"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [form, hint, helper-text, conflict-aurora]
apply_value: "high"
problem_domain: "form"
---

# Hint text above field (⚠️ potential conflict)

## Problem Trigger
> Want to add helper text "Password min 8 characters" — above or below the field?

## The Thinking
Hint ABOVE the field = (1) user reads it before filling in, preventing errors; (2) maintains downward momentum while scrolling through the form; (3) hint below can be covered by the autofill dropdown / mobile keyboard. Tell people upfront, not after they've made a mistake.

## Concrete Example
"Gas meter reading" label → hint "Enter all numbers left to right including leading zeros" ABOVE the input field. User reads the hint first → fills in correctly. Vs hint below → Chrome autofill menu covers the hint → user submits with an error.

## Anti-pattern (what this is NOT)
Hint below the field — covered by the autofill menu / mobile keyboard / browser suggestion. User submits with an error before seeing the field rules.

## Application for Paper.id
⚠️ **Conflict vs current Aurora pattern** (if Aurora form-field has `aurora-form-hint` below by default).

**Compromise:**
- Critical hint (changes how the user fills in the field) → move to above.
- Decorative hint (optional additional description) → OK below.

Log to `IMPROVEMENT-OPPORTUNITIES.md` for Aurora maintainer review.

## Cross-refs
- Memory rule: `[[knowledge-vs-ds-priority-flow]]` — flow for handling DS conflicts
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Hint text position"

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 7 — Forms
- Page: 231-232
- Quote verbatim:
  > "If a password needs to be at least 6 characters long, tell people before they fill out the password field, not after."
- Extraction date: 2026-05-22
- Reviewed by user: yes
