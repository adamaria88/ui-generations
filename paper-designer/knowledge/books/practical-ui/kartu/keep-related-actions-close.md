---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 4: Layout + Chapter 8: Buttons"
  page: 156
slug: "keep-related-actions-close"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [layout, button, fitts-law, target-size]
apply_value: "high"
problem_domain: "interaction"
---

# Keep related actions close (Fitts's Law)

## Problem Trigger
> "Remove" action button on a list item — is it better in a global toolbar or on each row?

## The Thinking
Fitts's Law — closer + larger target = faster click. Place the action close to the element it relates to. Action on the element row = clear context "this operates on this element". Action on the global toolbar = ambiguous "operates on what?".

**Plus**: Min target size 48pt × 48pt (mobile-safe). Aurora may be lighter on desktop.

## Concrete Example
- **List editor** (Share with people) — "Remove" button on each editor row. Not a "Remove" button in the toolbar with row checkboxes.
- **Invoice table list** — action ⋮ on each row (last column sticky). Not a global "Action" button that requires selecting a row first.

## Anti-pattern (what this is NOT)
Toolbar "Delete selected" + table row checkboxes → 2 steps (select + click toolbar). Slower interaction cost. Ambiguous "operates on which row?".

## Application for Paper.id
Already locked in [[prototyping-gap-lessons]] 0d (table action ⋮ on the right of each row, sticky right). Book confirms the pattern.

**Bulk action exception**: If an action needs to operate on multiple rows at once (e.g., "Delete all drafts older than 30 days"), a bulk action in the toolbar is OK — but use a checkbox column + bulk action visible when selection exists.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0d Table standard pattern
- Other card: `[[tertiary-for-multiple-or-destructive]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 4 — Layout (p. 156) + Chapter 8 — Buttons (p. 273-274)
- Extraction date: 2026-05-22
- Reviewed by user: yes
