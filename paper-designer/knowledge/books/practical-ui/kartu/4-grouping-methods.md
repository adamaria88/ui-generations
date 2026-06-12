---
source:
  book: "Practical UI"
  author: "Adham Dannaway"
  chapter: "Chapter 4: Layout and spacing"
  page: 105
slug: "4-grouping-methods"
buku_slug: "practical-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [layout, grouping, gestalt]
apply_value: "high"
problem_domain: "layout"
---

# 4 grouping methods (container + proximity + similarity + continuity)

## Problem Trigger
> You have 6 product cards on a page — how do you group them so it's clear which ones are related, not random?

## The Thinking
4 grouping methods (Gestalt principles):

1. **Container** — Place inside a border/shadow/background color. STRONGEST visual cue. But most cluttered. Use for main structure.
2. **Proximity** — Spacing within a group < spacing between groups. Cleaner than a container. Often sufficient.
3. **Similarity** — Similar visual treatment (size, shape, color, icon style). Groups via uniform appearance.
4. **Continuity** — Aligned in a continuous line. Eye naturally follows the line. Common in lists.

**Combination**: Combine 2-3 methods for strong grouping WITHOUT container clutter. E.g.: similarity (uniform card style) + proximity (16pt between cards, 32pt between sections) + continuity (aligned grid) = clear grouping without borders.

## Concrete Example
Music player playlist — songs grouped via container (table border) + similarity (uniform row style) + proximity (close-packed) + continuity (column alignment). REMOVE the container — still looks grouped via the other 3 methods. Cleaner.

## Anti-pattern (what this is NOT)
Wrapping all 6 cards in a border when proximity + similarity is already enough → clutter, visual noise. Or mixing methods inconsistently (some cards with borders, some without).

## Application for Paper.id
Audit current cards/sections:
- If there's a container that doesn't "earn" its purpose (just decorative), consider removing it.
- Inline filter in table = can use background tint (light container) + proximity to header — clear grouping without border noise.
- Detail page section: combine proximity (16pt inner / 32pt outer) + similarity (uniform card style) → clear grouping without individual borders.

## Cross-refs
- Other cards: `[[inner-spacing-smaller-than-outer]]` (proximity rule detail), `[[visual-hierarchy-variables]]`

## Source Verification
- Book: Practical UI by Adham Dannaway
- Chapter: 4 — Layout and spacing
- Page: 105-119
- Extraction date: 2026-05-22
- Reviewed by user: yes
