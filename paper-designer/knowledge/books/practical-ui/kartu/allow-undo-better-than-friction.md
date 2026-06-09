---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 279
slug: "allow-undo-better-than-friction"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [destructive, undo, toast, recovery]
apply_value: "high"
problem_domain: "destructive-action"
---

# Allow undo — better alternative than friction

## Problem Trigger
> You added heavy friction for Delete, but users still accidentally click it sometimes. What's the solution?

## The Thinking
Friction PREVENTS errors, but doesn't FIX them. A better alternative for MOST destructive actions: **allow undo**. User accidentally deletes? Snackbar "Message deleted [Restore]". Recovery > Prevention. Saves user time + reduces anxiety. Combining both (light friction + undo) is fine for extra safety.

## Concrete Example
- Gmail delete email → toast "Message moved to Trash [Undo]" for 10 seconds.
- iOS Notes delete → "Recently Deleted" folder for 30 days.
- Linear archive task → toast "Task archived [Undo]".

## Anti-pattern (what this is NOT)
Delete → instantly gone, no undo, no trash → user accidentally misclicks = permanent data loss. Even a heavy friction modal doesn't 100% prevent accidental clicks.

## Application for Paper.id
Audit current destructive actions:
- **Delete invoice/expense draft** → must have Undo toast for 10 seconds.
- **Delete saved/published invoice** → medium friction + undo recovery 24h (if possible on the backend).
- **Delete account** → heavy friction + email confirmation (24h cooling period).

Aurora Toast 380x8 already exists — use it to implement the undo pattern. See [[smooth-transitions-rule]].

## Cross-refs
- Memory rule: `[[smooth-transitions-rule]]` (toast pattern), `[[paperverse-design-decisions]]`
- Other card: `[[friction-ladder-for-destructive]]` (alternative + complement)

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 279
- Extraction date: 2026-05-22
- Reviewed by user: yes
