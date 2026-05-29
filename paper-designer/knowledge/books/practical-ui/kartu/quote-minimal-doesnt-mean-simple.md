---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Bab 2: Less is more"
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
> Designer push "design ini minimal banget, clean — let's ship" — tapi user testing reveal user bingung "ini fitur apa".

## The Thinking
**"Minimal doesn't mean simple."** — Adham Dannaway, Bab 2 hal 52.

Critical distinction yang sering ke-blur:
- **Minimal** = visual term. Less elements. Less styles. Less colour. Less decoration.
- **Simple** = comprehension term. Easy to understand. Easy to use. Predictable.

Bisa minimal AND complex (icon-only nav = minimal visual, complex mental). Bisa NOT-minimal AND simple (full-labeled forms = lots of text but clear).

## Trap minimalism
- Strip label → "icon-only" → guessing game.
- Remove affordance → "clean look" → user ga tau interactive.
- Reduce contrast → "sleek" → vision-impaired fail.
- Hide secondary action → "uncluttered" → user can't find.

## Goal
**SIMPLE first, minimal if compatible**. Kalau forced to choose, pick simple > minimal.

## Contoh Konkret
Filter app dengan 5 icon-only filter button + selected state subtle 1px outline → minimal but NOT simple. Add labels + visible selected state → less minimal but SIMPLE.

## Anti-pattern (yang BUKAN ini)
Camera filter chrome (selected ring subtle, label hidden) → looks beautiful in dribbble, fails in usability test.

## Aplikasi untuk Paper.id
- Aurora `au-icon-button` ALWAYS pair with tooltip or adjacent label.
- Active state high-contrast (sudah lock [[sidemenu-active-color-rule]]).
- Action menu items ALWAYS icon + text ([[prototyping-gap-lessons]] 0f).
- Empty state heading + 1-line subtext + CTA primary (jangan "minimal" tanpa explanation).

**Saat ada PM/stakeholder push "make it cleaner"**, PUSHBACK dengan quote + rationale "minimal ≠ simple". Show alt yang simple AND visually clean.

## Cross-refs
- Memory rule: `[[sidemenu-active-color-rule]]`, `[[prototyping-gap-lessons]]` 0f
- Kartu lain: `[[minimalism-not-simplicity]]` (paired insight), `[[3-pillar-minimization]]`

## Source Verification
- Buku: Practical UI oleh Adham Dannaway
- Bab: 2 — Less is more
- Halaman: 52
- Quote verbatim:
  > "Minimal doesn't mean simple."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: yes
