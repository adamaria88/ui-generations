---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 245
  quote_verbatim: "If a set of radio buttons are an important part of the UI you're designing, try something like selectable cards instead."
slug: "selectable-cards-vs-radio"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [form, component, visual-polish]
apply_value: "high"
problem_domain: "form"
---

# Radio → Selectable Cards for Important Choices

## Problem Trigger
> A form has important choices (pricing plan, document type, payment mode) displayed as plain radio buttons — feels undersized for a significant decision.

---

## The Thinking
> Default radio buttons (circle + label) are functional but low-emphasis controls — suitable for simple technical choices (sort order, filter). But for choices that are IMPORTANT to the user (selecting a plan, selecting a method, selecting a type), a radio circle feels mismatched with the weight of the decision. Upgrade to selectable cards: cards with borders, richer content (name + price + short description), and highlighted border/background when selected. Users can scan and compare options much more easily.

---

## Concrete Example (1 real example)
> Change Plan UI: default (radio) = stacked labels "Hobby / Growth / Business / Enterprise" with circles. Upgraded (selectable card) = 4 horizontal cards each with tier name, GB, price/mo, teal border when selected + checkmark icon. Users can immediately compare all options.

---

## Anti-pattern (what this is NOT)
> Selecting a Rp 500k/month plan via a 16px small radio circle next to plain text "Business Plan". A big decision with small affordance = disconnect.

---

## Application for Paper.id
> Relevant for: selecting payment type (Cash/Transfer/Card), selecting invoice plan (COD/NET30/NET60), selecting expense type (Operational/Capital/Personal). **NOTE:** Aurora does not yet have an `au-selectable-card` component — if implemented, it must be custom + recorded in AURORA-OVERRIDES.md. Only use for truly significant choices. For simple choices with ≤4 options = stick with Aurora radio (per [[paperverse-design-decisions]] threshold).

---

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` — Radio ≤4 options threshold
- Memory rule: `[[aurora-lookup-ritual]]` — check first, if not available → custom + AURORA-OVERRIDES.md
- DS / rules: `paper-designer/ds/AURORA-OVERRIDES.md` — custom component registry

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch8 — Finishing Touches, "Think outside the box"
- Page: 245-246
- Quote verbatim:
  > "If a set of radio buttons are an important part of the UI you're designing, try something like selectable cards instead."
- Extraction date: 2026-05-22
- Reviewed by user: no
