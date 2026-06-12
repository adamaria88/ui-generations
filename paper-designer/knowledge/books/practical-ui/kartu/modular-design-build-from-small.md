---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 1: Fundamentals"
  page: 29
slug: "modular-design-build-from-small"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [mindset, design-system, modular, composition]
apply_value: "medium"
problem_domain: "design-system"
---

# Modular design — build from smallest reusable components

## Problem Trigger
> You're designing a Company Profile Page from scratch — drawing from a blank canvas.

## The Thinking
**Modular design** — build from the SMALLEST reusable components → combine into larger ones → arrange into templates. 3 tiers:

1. **Smallest components** (foundation): button, avatar, form-field, badge, icon, checkbox, radio.
2. **Larger components**: card (combines avatar + heading + text + button), modal (combines header + form + button-row), table-row.
3. **Templates** (assembled): page layout (combines cards in grid, sidebar, nav).

**Benefits:**
- Faster design (re-use existing pieces).
- Consistency (same button across all pages).
- Easier maintenance (update button once → propagates everywhere).
- Better dev handoff (engineers use existing components).

## Concrete Example
Avatar component → pair with text → card with avatar+text → list of cards = landing page. Same avatar component reused in profile, comment, notification, user list.

## Anti-pattern (what this is NOT)
Designer A creates a "Save" button on the Edit Profile page from scratch. Designer B creates a "Save" button on the Edit Invoice page from scratch. Slightly different style → DS broken.

## Application for Paper.id
- **Aurora `projects/ui/`** = component library.
- MUST use existing components (per [[aurora-lookup-ritual]] M1).
- When a composite is needed (e.g., "metadata + inline actions"), COMPOSE Aurora pieces — DON'T create new ones (per [[composition-thinking-rule]]).

When there's a new feature, FIRST check the Aurora library. If missing, report to the maintainer (per Aurora Lookup Ritual).

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]`, `[[composition-thinking-rule]]`
- Other cards: `[[conventional-form-field-styles]]`, `[[predefined-spacing-scale]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 1 — Fundamentals
- Page: 29-31
- Extraction date: 2026-05-22
- Reviewed by user: yes
