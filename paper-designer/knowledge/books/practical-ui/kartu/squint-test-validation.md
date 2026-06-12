---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 4: Layout and spacing"
  page: 128
slug: "squint-test-validation"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, audit, validation]
apply_value: "high"
problem_domain: "audit"
---

# Squint test — validate visual hierarchy

## Problem Trigger
> You've set up a visual hierarchy, but you're not sure it's "actually right" — how do you validate it objectively?

## The Thinking
The Squint Test = a quick validation. 3 ways:
1. **Close your eyes 50%** (squint).
2. **Step back** from the monitor / zoom out.
3. **Blur the design** with a filter.

If you can still identify:
- (a) what the page is for
- (b) the most important element

→ the hierarchy is correct.

If the blur makes all elements look equally "busy" → the hierarchy is broken.

## Concrete Example
**Invoice Detail** — squint, and it's still clear: company logo + name in the header, total amount (big), action button (filled). ✓ hierarchy OK.

**Expense List** — squint, and if the toolbar is all primary pills, squinting = everything is busy blue, hierarchy broken. ✗

## Anti-pattern (what this is NOT)
Verifying hierarchy by "feeling" — subjective, biased. The designer has seen the design 10x, their brain is biased toward "this is good" but the user has no context. The squint = an objective check, free of familiarity bias.

## Application for Paper.id
ALWAYS run the squint test before delivering a prototype. Part of the Pre-Generation Checklist in `design-rules.md`. ALREADY locked in [[prototyping-gap-lessons]] 0h Action Hierarchy.

Apply to:
- Every new page before commit.
- Auditing a page the user complains is "busy".
- When picking the primary action on a new page.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Other cards: `[[visual-hierarchy-variables]]` (paired), `[[one-primary-button-per-screen]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 4 — Layout and spacing
- Page: 128
- Extraction date: 2026-05-22
- Reviewed by user: yes
