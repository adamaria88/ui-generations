---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 1: Fundamentals"
  page: 17
  quote_verbatim: "Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."
slug: "logical-reason-rationale"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, foundation, design-thinking]
apply_value: "high"
problem_domain: "mindset"
---

# Have a logical reason for every design detail

## Problem Trigger
> A reviewer designer asks "why is the button blue?" — you answer "looks nice" or "it felt right". Subjective.

## The Thinking
**Every design detail must have a logical reason** behind it that improves usability. This is the foundational mindset of the book. "That looks nice" / "I don't like it" = subjective opinion, NOT a rationale. Rationale = objective + articulable + tied to usability/accessibility/conventions.

**Benefits:**
- Faster decisions (rules guide, no agonizing over feeling).
- Defensible — can be argued in a review meeting.
- Improvable — rules can be iterated with new data.
- Onboardable — new designers can follow the rules, no need to guess.

## Concrete Example
Card design with 8 logical rationales:
1. Icons + text left-aligned → neat edge + readability.
2. Descriptive heading → screen-reader scannable.
3. Secondary text smaller + lower contrast → visual hierarchy.
4. Line height 1.5+ for body → readability.
5. Text link blue + underlined → colour-blind accessible.
6. Inner spacing < outer spacing → grouping clear.
7. Info chunked → faster decisions.
8. Accessible monochromatic color palette → consistency.

## Anti-pattern (what this is NOT)
Design review "I just feel like the button should be bigger" — no rationale. Replace with "Fitts's Law — primary action target ≥48pt, currently 32pt, increase to 48pt".

## Application for Paper.id
- Every rule in `design-rules.md` + memory files MUST have **Why:** and **How to apply:** lines (already locked in memory pattern).
- When proposing design alternatives to the user, ALWAYS cite rationale + source (rule / book / production pattern).
- Audit prototype: every design choice can be articulated.

When a user requests "change this color to blue", ask for rationale or confirm using the brand color token. DON'T just use a custom value.

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]`, `[[knowledge-vs-ds-priority-flow]]`
- Other cards: `[[3-pillar-minimization]]`, `[[conventional-patterns-jakob-law]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 1 — Fundamentals
- Page: 17-18
- Quote verbatim:
  > "Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."
- Extraction date: 2026-05-22
- Reviewed by user: yes
