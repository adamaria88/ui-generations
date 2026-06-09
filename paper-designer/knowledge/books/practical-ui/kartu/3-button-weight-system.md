---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 8: Buttons"
  page: 251
slug: "3-button-weight-system"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [button, hierarchy, action-hierarchy]
apply_value: "high"
problem_domain: "button"
---

# Define 3 button weights (primary + secondary + tertiary)

## Problem Trigger
> A page has many actions — should they all use the same button style or different ones?

## The Thinking
3-tier system:
- **Primary** = filled rectangle with action color + white text. For the MOST IMPORTANT action. Strongest visual anchor.
- **Secondary** = unfilled rectangle with border + colored text. For less important or equal-weight alternatives. AVOID grey fill (mistaken for disabled).
- **Tertiary** = clear button with colored underlined text (text-link). For least important / destructive / multiple actions. Underline is REQUIRED so color-blind users know it's interactive.

Hierarchy must be clear WITHOUT relying on color alone — visual weight (filled vs outlined vs text-only) is the primary distinguisher.

## Concrete Example
Dialog "Save post for later?" — Primary "Save post" + Tertiary "Cancel". Not 2 primary blue buttons.

## Anti-pattern (what this is NOT)
- All actions use pill primary → hierarchy destroyed.
- Secondary uses grey fill → mistaken for disabled.
- Tertiary is just blue text without underline → color-blind users don't know it's interactive.

## Application for Paper.id
Aurora `au-btn--primary` + `au-btn--secondary` + `au-btn-text` (tertiary). Already locked in [[prototyping-gap-lessons]] 0h Action Hierarchy.

Book confirms the approach — apply consistently across all prototypes.

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` 0h Action Hierarchy
- Other cards: `[[one-primary-button-per-screen]]`, `[[secondary-for-equal-weight-actions]]`, `[[tertiary-for-multiple-or-destructive]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 8 — Buttons
- Page: 251
- Extraction date: 2026-05-22
- Reviewed by user: yes
