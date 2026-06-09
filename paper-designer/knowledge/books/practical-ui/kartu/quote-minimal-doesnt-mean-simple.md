---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 2: Less is more"
  page: 52
  quote_verbatim: "Minimal doesn't mean simple."
slug: "quote-minimal-doesnt-mean-simple"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [quote, anti-pattern, mindset, signature]
apply_value: "high"
problem_domain: "mindset"
---

# Quote: "Minimal doesn't mean simple."

## Problem Trigger
> A designer pushes "this design is super minimal, clean — let's ship" — but usability testing reveals users are confused "what is this feature for".

## The Thinking
**"Minimal doesn't mean simple."** — Adham Dannaway, Chapter 2 p. 52.

Critical distinction that often gets blurred:
- **Minimal** = visual term. Fewer elements. Fewer styles. Less colour. Less decoration.
- **Simple** = comprehension term. Easy to understand. Easy to use. Predictable.

Can be minimal AND complex (icon-only nav = minimal visually, complex mentally). Can be NOT-minimal AND simple (fully-labeled forms = lots of text but clear).

## Minimalism traps
- Strip labels → "icon-only" → guessing game.
- Remove affordance → "clean look" → user doesn't know what's interactive.
- Reduce contrast → "sleek" → vision-impaired fails.
- Hide secondary action → "uncluttered" → user can't find it.

## Goal
**SIMPLE first, minimal if compatible**. If forced to choose, pick simple > minimal.

## Concrete Example
Filter app with 5 icon-only filter buttons + selected state as a subtle 1px outline → minimal but NOT simple. Add labels + visible selected state → less minimal but SIMPLE.

## Anti-pattern (what this is NOT)
Camera filter chrome (subtle selected ring, hidden label) → looks beautiful in Dribbble, fails in usability test.

## Application for Paper.id
- Aurora `au-icon-button` ALWAYS paired with tooltip or adjacent label.
- Active state high-contrast (already locked [[sidemenu-active-color-rule]]).
- Action menu items ALWAYS icon + text ([[prototyping-gap-lessons]] 0f).
- Empty state heading + 1-line subtext + primary CTA (don't go "minimal" without explanation).

**When PM/stakeholder pushes "make it cleaner"**, PUSHBACK with quote + rationale "minimal ≠ simple". Show alternative that is simple AND visually clean.

## Cross-refs
- Memory rule: `[[sidemenu-active-color-rule]]`, `[[prototyping-gap-lessons]]` 0f
- Other cards: `[[minimalism-not-simplicity]]` (paired insight), `[[3-pillar-minimization]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 2 — Less is more
- Page: 52
- Quote verbatim:
  > "Minimal doesn't mean simple."
- Extraction date: 2026-05-22
- Reviewed by user: yes
