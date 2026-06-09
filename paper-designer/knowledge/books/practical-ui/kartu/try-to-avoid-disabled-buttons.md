---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 262
slug: "try-to-avoid-disabled-buttons"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, accessibility, conflict-aurora]
apply_value: "high"
problem_domain: "button"
---

# Try to avoid disabled buttons (⚠️ potential conflict)

## Problem Trigger
> Your form's Submit button is disabled until all fields are valid — a classic habit. Or a Follow button locked for users who haven't subscribed — disabled.

## The Thinking
Disabled button problems:
1. **User stuck**: no feedback on "why can't I click?". Assume the user knows the form is invalid? NO.
2. **Low contrast**: disabled styling is usually grey-on-grey, hard for vision-impaired users.
3. **Keyboard inaccessible**: focus skips the disabled button → keyboard users confused.

## Alternatives (pick by context)
1. **Enable + validate on submit** (preferred): click submit → highlight error fields + message. See [[validate-on-submit-not-inline]].
2. **Lock icon on button** (for premium/paywall): "Follow" + lock icon → the user knows it's available but locked, clicking triggers a paywall modal.
3. **Remove the unavailable action**: if the action isn't relevant to the user's state, just remove it + show a reason ("Request to follow this person to message them").
4. **Tooltip + keyboard-accessible**: if you MUST disable, add a tooltip "Fill all fields to register" + ensure it's focusable.

## Concrete Example
A Login form — DON'T disable "Log in" until email+password are filled. Always enable, clicking when empty → "Enter email" inline error.

## Anti-pattern (what this is NOT)
An Edit modal with Save disabled until formDirty → the user idly presses it 3x with no response, abandons the edit. Or a "Pay" button disabled when 1 field is wrong → the user is stuck guessing.

## Application for Paper.id
⚠️ **Conflict vs the current pattern** (many Aurora modals disable Save). Log it in `IMPROVEMENT-OPPORTUNITIES.md`.

Compromise:
- Simple forms (login, search, subscribe) → enable+validate.
- Complex forms with inter-field dependencies → safer to disable + tooltip.
- Lock-feature pattern (paywall) → use a lock icon, not disabled.

## Cross-refs
- Memory rule: `[[knowledge-vs-ds-priority-flow]]`
- Other cards: `[[validate-on-submit-not-inline]]` (paired solution)
- File: `paper-designer/knowledge/IMPROVEMENT-OPPORTUNITIES.md` entry "Disabled submit button pattern"

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 262-266
- Extraction date: 2026-05-22
- Reviewed by user: yes
