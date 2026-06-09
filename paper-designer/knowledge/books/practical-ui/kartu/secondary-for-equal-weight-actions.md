---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 260
  quote_verbatim: "Don't make one button more prominent than the other as it creates bias."
slug: "secondary-for-equal-weight-actions"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, neutral-choice]
apply_value: "high"
problem_domain: "button"
---

# Use secondary buttons for equal-weight actions

## Problem Trigger
> A confirm dialog "Report email as junk?" — Report vs Don't Report are equally valid choices. Which one is primary?

## The Thinking
If 2 (or more) actions have equal importance and are user-decisions (not a "recommended path"), DON'T bias one as primary. **Both secondary** = neutral presentation. Supports user autonomy, not manipulative.

## Concrete Example
"Report this email as junk?" → [Report] + [Don't report], both secondary. The user is genuinely free to choose based on context.

## Anti-pattern (what this is NOT)
"Save changes? [Save] + [Discard]" — if Save is set as a blue primary and Discard is tertiary, the user is nudged to save even when discarding is sometimes more correct. Manipulative UX.

## Application for Paper.id
- Dialog "Discard changes?" → [Discard changes] + [Keep editing] both secondary. The user decides freely.
- Dialog "Send for approval or Save draft?" → both secondary.

**Exception** — destructive cases with a "recommend the safer path":
- "Delete invoice?" → [Delete invoice] medium friction (red) + [Cancel] secondary. Here there's an intentional bias toward the safer path (cancel) to protect the user from accidents.

## Cross-refs
- Other cards: `[[3-button-weight-system]]`, `[[friction-ladder-for-destructive]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 260
- Quote verbatim:
  > "Don't make one button more prominent than the other as it creates bias."
- Extraction date: 2026-05-22
- Reviewed by user: yes
