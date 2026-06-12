---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 6: Copywriting"
  page: 195
slug: "use-sentence-case"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [copywriting, ux-writing, capitalization]
apply_value: "high"
problem_domain: "copywriting"
---

# Use sentence case (not Title Case)

## Problem Trigger
> Capitalize a button as "Save Post" or "Save post"?

## The Thinking
Sentence case ("Save post") > Title Case ("Save Post"). Why:
- Easier to scan — capital letters on every word interrupt eye flow.
- Grammatically correct (a proper sentence).
- Title case rules are ambiguous (when do you capitalize "of", "the"?) — easy to be inconsistent.
- Title case = traditional book/article title context, NOT an interface action.

## Concrete Example
- ❌ "Save Post for Later?"
- ✅ "Save post for later?"
- ❌ "Discard Post" / "Save Post"
- ✅ "Discard post" / "Save post"

## Anti-pattern (what this is NOT)
All-caps button text "SAVE POST" (uppercase) — even worse, it screams + is harder to read.

Title Case On Every Button Because It Looks Premium — inconsistent capitalization of "of"/"the", harder to scan.

## Application for Paper.id
- **Button text** sentence case: "Save invoice" (not "Save Invoice").
- **Modal heading** sentence case: "Delete invoice?" (not "Delete Invoice?").
- **Section heading** can be sentence case too.

**Exception**: Proper nouns MUST be capitalized.
- "Add Partner" — if "Partner" is a generic noun, it can be lowercase → "Add partner".
- "Setup Paper.id" — Paper.id is a proper noun, capitalize.

## Cross-refs
- Memory rule: `[[user-prefers-plain-indonesian]]`
- Other cards: `[[be-concise-cut-filler-words]]`, `[[button-text-descriptive-verb-noun]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 6 — Copywriting
- Page: 195
- Extraction date: 2026-05-22
- Reviewed by user: yes
