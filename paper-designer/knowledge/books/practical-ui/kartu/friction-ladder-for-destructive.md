---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 277
slug: "friction-ladder-for-destructive"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [destructive, confirmation, button, severity]
apply_value: "high"
problem_domain: "destructive-action"
---

# Friction ladder for destructive actions

## Problem Trigger
> User wants to Delete an invoice — is a plain Delete button enough? Or is a confirmation modal required? Or more?

## The Thinking
**4-tier friction ladder** based on data loss severity:

### Tier 1 — Initial Friction (pre-action)
- Action button less prominent (tertiary, not filled).
- Less central position / in sub-menu (3-dot ⋮).
- Progressive disclosure (tucked behind menu).
- DON'T color it red — red makes it more prominent, which is ironic.

### Tier 2 — Light Friction (small data loss)
- Confirm dialog: "Delete message? [Delete] [Cancel]".
- No red, no warning icon.

### Tier 3 — Medium Friction (significant loss)
- Confirm dialog + RED button + warning icon.
- Message: "You won't be able to recover it."

### Tier 4 — Heavy Friction (catastrophic loss)
- Confirm dialog + RED button + required checkbox ("I confirm I want to delete my account").
- User physically clicks an extra checkbox before they can execute.

## Concrete Example
- Delete draft message = Light. "Delete message? [Delete] [Cancel]".
- Delete saved invoice = Medium. Red button + "You won't be able to recover this".
- Delete account permanently = Heavy. Red + checkbox "I confirm I want to delete my account".

## Anti-pattern (what this is NOT)
- Delete invoice immediately without confirmation → user accidentally clicks, data is gone.
- Delete an unfilled draft form → Heavy modal with checkbox → annoying, harms UX.

## Application for Paper.id
Match with [[paperverse-design-decisions]] definition — destructive = permanent & hard to undo.

Match tier to severity:
- Delete unsaved draft = no friction / toast only.
- Delete a row in an unsubmitted form = Initial (less prominent).
- Delete saved invoice/partner = Medium (red + warning).
- Delete account / business = Heavy (checkbox required).

**Combine with [[allow-undo-better-than-friction]]** — undo via toast is better than adding friction.

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` (destructive definition), `[[aurora-sectioned-modal-rule]]`
- Other cards: `[[allow-undo-better-than-friction]]` (preferred alternative), `[[tertiary-for-multiple-or-destructive]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 277-279
- Extraction date: 2026-05-22
- Reviewed by user: yes
