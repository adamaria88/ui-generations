---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 272
slug: "button-text-descriptive-verb-noun"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, copywriting, accessibility]
apply_value: "high"
problem_domain: "button"
---

# Ensure button text describes the action (verb + noun)

## Problem Trigger
> Dialog with buttons "OK" / "Cancel" / "Submit" — generic, low-information text. Users have to guess.

## The Thinking
Button text = verb (action) + noun (object). Not generic "OK / Submit / Send". Why:
- (a) Users who scan first (only reading buttons) immediately know the impact.
- (b) Screen reader users jump button-to-button — context-out-of-screen still meaningful. "Submit" → submit what? "Save invoice" → clear.
- (c) Confirms user intent, reduces errors.

## Concrete Example
- Dialog "Save post for later?" → button **"Save post"** (✓) not "OK" (✗).
- Dialog "Delete invoice?" → **"Delete invoice"** (✓) not "Yes" (✗).
- Form action → **"Submit application"** (✓) not "Submit" (✗).

## Anti-pattern (what this is NOT)
Dialog "Are you sure?" + [OK / Cancel]. User doesn't know what OK does. Out-of-context = useless for screen reader users.

## Application for Paper.id
All dialog button text MUST be descriptive verb+noun:
- "Delete invoice" / "Discard changes" / "Send to approver" / "Save draft"
- NOT "Yes / No / OK / Submit"

**Exception**: "Cancel" — universally understood as "close dialog without action", OK to keep.

## Cross-refs
- Other cards: `[[be-concise-cut-filler-words]]`, `[[use-sentence-case]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 272
- Extraction date: 2026-05-22
- Reviewed by user: yes
