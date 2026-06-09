---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 2: Less is more"
  page: 52
  quote_verbatim: "Minimal doesn't mean simple."
slug: "minimalism-not-simplicity"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [minimize, anti-pattern, mindset]
apply_value: "high"
problem_domain: "mindset"
---

# Don't confuse minimalism with simplicity

## Problem Trigger
> You're tempted by a "minimal modern" design — strip all labels, hide affordances, everything is icon-only. Looks clean but users are confused.

## The Thinking
Minimal ≠ Simple.

- **Minimal** = fewer elements & styles.
- **Simple** = easy to understand & use.

A minimal interface can **harm usability** by removing:
- Critical labels (icon-only = guessing game)
- Selected state (user doesn't know what's active)
- Contrast (low-contrast icon = missed)
- Affordance (button doesn't look interactive)

Minimal/glassmorphic/neumorphic trends = aesthetic, but prone to usability + accessibility issues. Don't sacrifice clarity for a "clean look".

## Concrete Example
Bottom nav with 4 icons and no labels "modern":
- ❌ User guesses what each one is.
- ✅ Icon + label "Home / Search / Notifications / Profile" — extra visual elements, but crystal-clear navigation.

## Anti-pattern (what this is NOT)
Camera app with icon-only filter buttons without labels + subtle 1px line active state → users aren't sure which filter they've selected. Looks great in a Dribbble shot, fails in a usability test.

## Application for Paper.id
- Aurora `au-icon-button` ALWAYS paired with tooltip or adjacent label.
- Action menu items (3-dot) always icon + text (already locked [[prototyping-gap-lessons]] 0f).
- Active state of sidemenu high-contrast (already locked [[sidemenu-active-color-rule]]).
- Empty state heading + 1-line subtext + primary CTA (don't go "minimal" without explanation).

**When PM/stakeholder pushes "make it cleaner"**, PUSHBACK with the quote + rationale "minimal ≠ simple". Show an alternative that is simple AND visually clean.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0f Action menu items, `[[sidemenu-active-color-rule]]`
- Other cards: `[[quote-minimal-doesnt-mean-simple]]`, `[[3-pillar-minimization]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 2 — Less is more
- Page: 52-53
- Quote verbatim:
  > "Minimal doesn't mean simple."
- Extraction date: 2026-05-22
- Reviewed by user: yes
