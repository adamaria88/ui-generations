---
book: "Refactoring UI"
author: "Adam Wathan & Steve Schoger"
edition: "2018"
isbn: ""
slug: "refactoring-ui"
extracted_at: "2026-05-22"
extracted_by: "claude-sonnet-4-6"
review_status: "reviewed"
reviewer: "claude-verified-pages"
tags: [hierarchy, spacing, color, typography, depth, visual-polish, empty-state, form, component]
---

# Refactoring UI — Adam Wathan & Steve Schoger

## Thesis (1-sentence core)

Good-looking UI is not a talent — it's the result of applying specific learnable techniques: visual hierarchy through weight and color, systematic spacing, intentional color palettes, depth through layered shadows, and deliberate polish details.

---

## 3-5 Core Frameworks (reusable mental models)

### Framework 1: Visual Hierarchy — De-emphasize, Don't Always Emphasize
- **When to invoke:** Anytime a page feels "noisy" or you want to highlight a primary element but everything looks the same weight
- **The thinking:** Hierarchy is created through three levers: size, weight (bold/regular), and color (primary vs muted). The instinct is to make primary things bigger — but it's often more effective to de-emphasize secondary things (make labels grey, make supporting text lighter) so the primary element wins by contrast. Visual hierarchy is independent from semantic hierarchy (h1-h6).
- **Anti-pattern:** Making every action a filled button, every label the same color as its value, every section header as bold as body text — everything shouts, nothing stands out
- **Source:** Ch2 — Hierarchy is Everything, p.36

### Framework 2: Spacing System — Start Big, Then Tighten
- **When to invoke:** Any time you start a new layout, add a new component, or a page feels cramped
- **The thinking:** Default to more whitespace than you think you need — it's easier to reduce than to add. Use a systematic scale (multiples of 4: 4/8/12/16/24/32/48/64/96/128) instead of arbitrary pixel values. Proximity signals relationship: elements that belong together should be closer than elements that don't.
- **Anti-pattern:** Filling available width because the space exists; using inconsistent spacing values; placing labels right next to unrelated elements because there's room
- **Source:** Ch3 — Layout and Spacing, p.66

### Framework 3: Color Palette — HSL + Intentional Shades
- **When to invoke:** Setting up a color system, extending a DS palette, or when colors feel inconsistent or clash
- **The thinking:** Use HSL (not hex/RGB) — adjusting lightness and saturation is intuitive. Each hue needs 8-10 shades (100 lightest → 900 darkest). Pure greys (#777, #ccc) look wrong on screen — add a subtle hue hint (blue-grey, warm grey). Never use color as the sole signal for state — pair with icon, weight, or text.
- **Anti-pattern:** Random hex values that don't relate to each other; true grey (#888) that looks lifeless; blue link on colored background that fails WCAG
- **Source:** Ch5 — Working with Color, p.138

### Framework 4: Finishing Touches Checklist
- **When to invoke:** UI is "functional but plain" — ready for polish pass before delivery
- **The thinking:** Small targeted additions dramatically raise perceived quality without changing structure: replace bullets with context-specific icons, add a thin colored accent border to cards/nav/alerts, custom checkbox/radio with brand colors, an illustration + strong CTA in empty states. Also: reduce border clutter by replacing dividers with box-shadow, background color difference, or extra spacing.
- **Anti-pattern:** Shipping the default browser form elements; adding borders everywhere creating visual noise; empty states with just "No results found" text and no CTA
- **Source:** Ch8 — Finishing Touches, p.220-241

### Framework 5: Think Outside the Box — Question Component Defaults
- **When to invoke:** A component looks boring, a form feels plain, or a UI pattern feels like a generic template
- **The thinking:** Every component has a mental default (dropdown = white box + list, table = grid of same-size cells, radio = circles + labels). That default is a starting point, not a constraint. Ask: "What's this component actually trying to do?" Dropdowns can be multi-column with icons + descriptions. Tables can stack related non-sortable columns. Radio buttons for important selections can become selectable cards.
- **Anti-pattern:** Defaulting to the most generic implementation of every component; designing "what a dropdown looks like" instead of "what helps the user choose"
- **Source:** Ch8 — Finishing Touches, p.242-246

---

## Reading Map (card topic map)

| Topik | File | Tag | Apply-value |
|-------|------|-----|-------------|
| Hierarchy via weight + color (de-emphasize pattern) | `kartu/hierarchy-weight-color.md` | `#hierarchy` | high |
| Labels secondary, values primary | `kartu/labels-secondary-value-primary.md` | `#hierarchy` | high |
| Spacing system + start with too much whitespace | `kartu/spacing-system-scale.md` | `#spacing` | high |
| Empty state as first impression | `kartu/empty-state-priority.md` | `#empty-state` | high |
| Fewer borders — 3 alternatives | `kartu/fewer-borders-alternatives.md` | `#visual-polish` | high |
| Color palette via HSL, 8-10 shades, grey with hue | `kartu/color-palette-hsl-shades.md` | `#color` | high |
| Action visual weight = semantic importance | `kartu/action-hierarchy-semantics.md` | `#hierarchy` | high |
| Accent border as quick polish | `kartu/accent-borders-visual-polish.md` | `#visual-polish` | high |
| Radio → selectable cards for important choices | `kartu/selectable-cards-vs-radio.md` | `#form` | high |
| Line height by context (headline vs body) | `kartu/line-height-by-context.md` | `#typography` | high |
| Two-layer shadows for realistic depth | `kartu/shadow-two-layers.md` | `#depth` | medium |
| Question component defaults | `kartu/think-outside-box-component.md` | `#component` | medium |
| Text contrast over images | `kartu/text-contrast-on-images.md` | `#imagery` | medium |
| Supercharge default UI elements | `kartu/supercharge-defaults.md` | `#visual-polish` | medium |

---

## Money Quotes (1-3 memorable quotes)

1. > "Don't let your existing beliefs hold back your designs — constraints are powerful but sometimes a bit of freedom is just what you need to take an interface to the next level."
   — Ch8 — Think outside the box, p.246

2. > "Did the designer do anything here that I never would have thought to do?"
   — Ch9 — Leveling Up, p.251 (question to ask when studying good designs)

3. > "By continually studying the work that inspires you with a careful eye, you'll be picking up design tricks for years to come."
   — Ch9 — Leveling Up, p.252

---

## Application for Paper.id

- **For List Pages (Invoice, Pengeluaran, Customer):** Framework 1 (hierarchy) applies directly — status badges use colored chips + de-emphasize secondary text. Value amounts = large/bold, currency label = muted. See `_output/expense-management/02-ui-aurora.html` for reference.
- **For Empty States across all modules:** Ch8 rule: add an illustration + a clear primary CTA button. Don't leave a plain "Belum ada data" without an action. Hide tabs/filters that are irrelevant when empty.
- **For Form pages:** Selectable cards can apply to important plan/type choices (≥2 significant differences). Aurora radio remains the default for simple choices.
- **For card/table design:** An accent border (thin colored top strip) can differentiate a section without adding noisy borders. Fewer borders rule: use a bg color difference or spacing first before adding a `border`.
- **For the Color System:** The HSL mental model is highly relevant when extending the Aurora palette — e.g. custom state colors for a particular status.

---

## Conflict with Aurora / Paper.id Rules

- **Topic:** Selectable cards for radio buttons
  - **The book says:** If a radio button is an important part of the UI, upgrade it to selectable cards (cards with a highlighted border when selected)
  - **Paper.id chooses:** Standard radio buttons for ≤4 options (Aurora component au-radio). Selectable cards do NOT yet exist in the Aurora DS.
  - **Reason:** Aurora doesn't have au-selectable-card yet. If needed, it must be custom + recorded in AURORA-OVERRIDES.md. Ref: [[paperverse-design-decisions]] radio threshold ≤4.

- **Topic:** Link styling (fancy underlines)
  - **The book says:** Custom link underlines (gradient clip, partial overlap) for emphasis
  - **Paper.id chooses:** Aurora au-link styling (standard blue). Override only if there's a specific need.
  - **Reason:** Aurora DS consistency matters more than decorative variation for B2B.

- **Topic:** Illustrations in empty states
  - **The book says:** Empty state = an opportunity to be appealing, add an illustration
  - **Paper.id:** Aurora has a more restrained empty state pattern (icon + text + button). Full custom illustrations not yet decided.
  - **Reason:** There's no Aurora illustration library yet. Use the Aurora empty state component for now, and report to the DS maintainer if custom illustrations are needed.

_(minor conflicts — the Aurora decision wins unless there's an explicit user decision)_

---

## Adaptation Note

The book was published in 2018 — 8 years ago. The majority of the techniques are still 100% current for web SaaS. Things to keep in mind:
- Some example screenshots are marketing/landing pages (not pure app UI). The mental model still holds, but adapting to an in-app context may be needed.
- No specific CSS library is mentioned (the book is tool-agnostic). Applying it to the Aurora DS is fine.
- Typography advice: the fonts mentioned have partly been superseded by Inter, DM Sans, etc. — but the line-height/line-length heuristics remain valid.

---

## Cross-refs (to other books / rules)

- Reinforces the rule `[[aurora-lookup-ritual]]` — the book emphasizes "build from real components, don't make things up"
- Reinforces the rule `[[prototyping-gap-lessons]]` point 0h — Action Hierarchy by Page Purpose
- Reinforces the rule `[[paperverse-design-decisions]]` — radio/dropdown thresholds, definition of destructive
- Reinforces the rule `[[label-disambiguation-rule]]` — labels secondary, values primary (Framework 1)
