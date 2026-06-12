---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 2: Hierarchy is Everything"
  page: 60
  quote_verbatim: "Every action on a page sits somewhere in a pyramid of importance. Most pages only have one true primary action, a couple of less important secondary actions, and a few seldom used tertiary actions."
slug: "action-hierarchy-semantics"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, button, action, destructive]
apply_value: "high"
problem_domain: "hierarchy"
---

# Action Visual Weight = Semantic Importance

## Problem Trigger
> A page feels "action-heavy" — several buttons look equally important, or a destructive action (Delete) looks the same as the primary action (Save).

---

## The Thinking
> An action's visual weight must match its importance: primary action = filled/solid pill (one per page, dominant), secondary action = outline or ghost, tertiary/rarely used = text-link only, destructive = visually dangerous (red) but weight matches frequency (if rarely used = red text-link, not red filled). A destructive action that is rare but potentially harmful = hide in a sub-menu/kebab. If two buttons have the same visual weight, users can't tell which is more important.

---

## Concrete Example (1 real example)
> GitHub: "Merge pull request" = filled green (primary), "Close pull request" = outline grey (secondary, not emphasized), "Delete branch" = only appears after merge, small red text-link. Hierarchy is very clear even with three actions in one area.

---

## Anti-pattern (what this is NOT)
> A form with three buttons: "Save" (filled blue), "Cancel" (filled grey), "Delete" (filled red) — all filled, all large, all equal weight. Users are confused about which is most important. Or a destructive action is highlighted with a large solid red color — which actually draws attention to the dangerous action.

---

## Application for Paper.id
> Already documented in `prototyping-gap-lessons.md` point 0h: 4-step action hierarchy. Implementation reference: `_output/expense-management/02-ui-aurora.html` — "Other Actions" (text-link left) + "Record Expense" (pill primary right). On Detail page: "Edit" becomes a standalone button, destructive "Delete" goes in the Actions ▾ sub-menu (text-link, red inside the menu). Ref: `[[action-menu-derivation-rule]]`.

---

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — point 0h action hierarchy 4-step
- Memory rule: `[[action-menu-derivation-rule]]` — menu derivation from table 3-dot
- Other card: `[[hierarchy-weight-color]]` — broader hierarchy framework
- DS / rules: `paper-designer/rules/design-rules.md` — "Action Hierarchy by Page Purpose"

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch2 — Hierarchy is Everything
- Page: 60
- Quote verbatim: "Every action on a page sits somewhere in a pyramid of importance. Most pages only have one true primary action, a couple of less important secondary actions, and a few seldom used tertiary actions."
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
