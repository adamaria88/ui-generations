# Knowledge Library — Master Index

> **How to read this file:** one-line index per book + list of card topics. Claude scans this file first when needing insights in Mode 2 (Consultant), then loads the relevant summary/card files.

## Setup Checkpoint (lock 2026-05-22)

✅ Folder structure ready (`books/`, `articles/`, `_pdf/`)
✅ Templates ready (`_template-ringkasan.md`, `_template-kartu.md`)
✅ CLAUDE.md Knowledge Library section + Mode 1/2 trigger documented
✅ Memory rules: `knowledge-mode-trigger-rule`, `knowledge-extraction-workflow`
✅ Pipeline.md Step 0a Mode Classification

**Decisions locked:**
- Granularity: **B1 — Pyramid summary + atomic cards per topic**
- Sub-agent for PDF reading: **NO** (inline is sufficient, no over-engineering)
- Synthesis layer (`thinking-modes.md`): **DEFERRED** until 5+ books
- Mode 2 trigger: explicit opt-in (words "other ideas", "revamp", "improvement", "can we do better", tag `@book` / `@article`)
- Review: user review required for first 2 books
- Citation: frontmatter `source.*` required, no hallucinated page/quote

**Status:** ready to receive first book (PDF) or first article (Medium URL / NN/g / blog).

---

## Registered Books

## Refactoring UI — Adam Wathan & Steve Schoger
- **Slug:** `refactoring-ui`
- **Summary file:** `books/refactoring-ui-ringkasan.md`
- **Thinking framework:** `books/refactoring-ui/thinking-archived-2026-05-22.md` ← archived, use `paper-designer-thinking.md` instead
- **Thesis:** Good-looking UI is the result of applying specific learnable techniques — hierarchy, spacing, color, depth, and polish — not artistic talent.
- **Best for:** Visual polish pass, hierarchy problems, component upgrade, empty state, color system, form UX
- **Tags:** [hierarchy, spacing, color, typography, depth, visual-polish, empty-state, form, component]
- **Available card topics:**
  - `hierarchy-weight-color` (`books/refactoring-ui/kartu/hierarchy-weight-color.md`)
  - `labels-secondary-value-primary` (`books/refactoring-ui/kartu/labels-secondary-value-primary.md`)
  - `spacing-system-scale` (`books/refactoring-ui/kartu/spacing-system-scale.md`)
  - `empty-state-priority` (`books/refactoring-ui/kartu/empty-state-priority.md`)
  - `fewer-borders-alternatives` (`books/refactoring-ui/kartu/fewer-borders-alternatives.md`)
  - `color-palette-hsl-shades` (`books/refactoring-ui/kartu/color-palette-hsl-shades.md`)
  - `action-hierarchy-semantics` (`books/refactoring-ui/kartu/action-hierarchy-semantics.md`)
  - `accent-borders-visual-polish` (`books/refactoring-ui/kartu/accent-borders-visual-polish.md`)
  - `selectable-cards-vs-radio` (`books/refactoring-ui/kartu/selectable-cards-vs-radio.md`)
  - `line-height-by-context` (`books/refactoring-ui/kartu/line-height-by-context.md`)
  - `shadow-two-layers` (`books/refactoring-ui/kartu/shadow-two-layers.md`)
  - `think-outside-box-component` (`books/refactoring-ui/kartu/think-outside-box-component.md`)
  - `text-contrast-on-images` (`books/refactoring-ui/kartu/text-contrast-on-images.md`)
  - `supercharge-defaults` (`books/refactoring-ui/kartu/supercharge-defaults.md`)
- **Conflicts with Aurora/Paper.id:** yes — see summary (selectable card not in Aurora, empty state illustration not in Aurora library)
- **Status:** reviewed
- **Reviewed by:** user (2026-05-25)
- **Extracted:** 2026-05-22

## Practical UI — Adham Dannaway
- **Slug:** `practical-ui`
- **Summary file:** `books/practical-ui-ringkasan.md`
- **Casual reading file:** `books/practical-ui-bacaan.md` — 2700-word narrative, ~18–20 min read, format for complete reading (thesis + top 10 insights + 5 quotes + per-chapter + 3 actionables)
- **Thesis:** UI design is a system of logical rules — every detail MUST have a *logical reason* that satisfies 3 principles: minimise usability risks, minimise interaction cost, minimise cognitive load.
- **Best for:** Form UX (deepest coverage), Button hierarchy, Destructive action friction, Visual hierarchy variables, Conventional patterns (Jakob's Law), UX copywriting
- **Tags:** [forms, buttons, layout, visual-hierarchy, copywriting, typography, accessibility, design-system, destructive-actions, color]
- **Available card topics (45 cards):**
  - **Forms (12 cards):**
    - `single-column-form-layout` — Forms use 1 column by default
    - `label-on-top-of-input` — Label stacks vertically, NOT on the left
    - `field-width-matches-input` — Width matches expected input length
    - `hint-text-above-field` — ⚠️ Hint ABOVE the field (conflicts with Aurora)
    - `dont-use-placeholder-as-label` — Placeholder disappears while typing
    - `stack-checkbox-radio-vertically` — Not inline
    - `mark-both-required-and-optional` — Asterisk `*` + word "(optional)"
    - `conventional-form-field-styles` — Stick to conventional, don't experiment
    - `validate-on-submit-not-inline` — ⚠️ Enable + validate on submit (conflict)
    - `stacked-related-fields-side-by-side` — Exception to single-column
    - `break-long-forms-into-steps` — Multi-step for >10 fields
    - `group-form-fields-under-headings` — Section heading when multi-step isn't possible
  - **Buttons (8 cards):**
    - `3-button-weight-system` — Primary + Secondary + Tertiary
    - `one-primary-button-per-screen` — MAX 1 primary
    - `secondary-for-equal-weight-actions` — Neutral choice without bias
    - `tertiary-for-multiple-or-destructive` — Low-prominence
    - `try-to-avoid-disabled-buttons` — ⚠️ Enable + validate (conflict)
    - `button-text-descriptive-verb-noun` — "Save post" not "OK"
    - `friction-ladder-for-destructive` — 4-tier friction
    - `allow-undo-better-than-friction` — Undo > friction
  - **Layout & Spacing (6 cards):**
    - `4-grouping-methods` — Container + proximity + similarity + continuity
    - `visual-hierarchy-variables` — 6 levers (size/colour/contrast/spacing/position/depth)
    - `squint-test-validation` — Validate hierarchy
    - `predefined-spacing-scale` — XS/S/M/L/XL/XXL = 8/16/24/32/48/80pt
    - `inner-spacing-smaller-than-outer` — Proximity rule
    - `keep-related-actions-close` — Fitts's Law
  - **Less is more (4 cards):**
    - `remove-unnecessary-information` — Cut redundant
    - `progressive-disclosure` — Reveal gradually
    - `minimalism-not-simplicity` — Don't confuse
    - `break-choices-hicks-law` — 4 tactics to speed up decisions
  - **Input decisions (3 cards):**
    - `radio-vs-dropdown-threshold` — ⚠️ Book ≤10 vs Paper.id ≤4 (conflict)
    - `autocomplete-for-long-lists` — Predictive search for >10 options
    - `stepper-vs-dropdown-for-numeric` — Stepper for small ranges
  - **Copywriting (4 cards):**
    - `be-concise-cut-filler-words` — Cut filler words
    - `use-sentence-case` — "Save post" not "Save Post"
    - `front-load-key-info` — Important info first
    - `inverted-pyramid-content-structure` — Most important at top
  - **Typography (2 cards):**
    - `regular-bold-only-no-weight-explosion` — 2 weights is enough
    - `line-length-40-80-chars` — Optimal line length
  - **Framework foundational (4 cards):**
    - `logical-reason-rationale` — Why every design detail
    - `3-pillar-minimization` — Usability risk + interaction cost + cognitive load
    - `conventional-patterns-jakob-law` — Stick to conventional
    - `modular-design-build-from-small` — Build from smallest components
  - **Money Quotes (2 cards):**
    - `quote-if-everything-important-nothing-is` — Hierarchy quote
    - `quote-minimal-doesnt-mean-simple` — Anti-minimalism trap quote
- **Conflicts with Aurora/Paper.id:** 5 conflicts — see summary + `IMPROVEMENT-OPPORTUNITIES.md` (hint position, disabled buttons, radio threshold, inline validation, APCA migration)
- **Status:** reviewed
- **Reviewed by:** user (2026-05-25)
- **Extracted:** 2026-05-22

### Entry format (reference when adding a new book)

```markdown
## <Book Title> — <Author>
- **Slug:** `<book-slug>`
- **Summary file:** `books/<book-slug>-ringkasan.md`
- **Thesis:** <1 core sentence of the book>
- **Best for:** <relevant problem categories>
- **Tags:** [navigation, error-state, form, ...]
- **Available card topics:**
  - `<topic-1>` (`books/<book-slug>/kartu/<topic-1>.md`)
  - `<topic-2>`
  - ...
- **Conflicts with Aurora/Paper.id:** [none / yes — see summary]
- **Status:** [draft / reviewed by user / locked]
- **Extracted:** <YYYY-MM-DD>
```

---

## Topic Tag Index (cross-book)

> Auto-populated based on card tags. Update when adding a new book.

### #hierarchy / #visual-hierarchy
- `refactoring-ui`: `hierarchy-weight-color`, `labels-secondary-value-primary`, `action-hierarchy-semantics`
- `practical-ui`: `visual-hierarchy-variables`, `squint-test-validation`, `one-primary-button-per-screen`, `3-button-weight-system`, `quote-if-everything-important-nothing-is`

### #spacing / #design-system
- `refactoring-ui`: `spacing-system-scale`
- `practical-ui`: `predefined-spacing-scale`, `inner-spacing-smaller-than-outer`, `modular-design-build-from-small`

### #form
- `refactoring-ui`: `selectable-cards-vs-radio`
- `practical-ui`: `single-column-form-layout`, `label-on-top-of-input`, `field-width-matches-input`, `hint-text-above-field`, `dont-use-placeholder-as-label`, `stack-checkbox-radio-vertically`, `mark-both-required-and-optional`, `conventional-form-field-styles`, `validate-on-submit-not-inline`, `stacked-related-fields-side-by-side`, `break-long-forms-into-steps`, `group-form-fields-under-headings`, `radio-vs-dropdown-threshold`, `autocomplete-for-long-lists`, `stepper-vs-dropdown-for-numeric`

### #button / #action-hierarchy
- `refactoring-ui`: `action-hierarchy-semantics`
- `practical-ui`: `3-button-weight-system`, `one-primary-button-per-screen`, `secondary-for-equal-weight-actions`, `tertiary-for-multiple-or-destructive`, `try-to-avoid-disabled-buttons`, `button-text-descriptive-verb-noun`

### #destructive / #confirmation
- `practical-ui`: `friction-ladder-for-destructive`, `allow-undo-better-than-friction`, `tertiary-for-multiple-or-destructive`

### #color / #contrast
- `refactoring-ui`: `color-palette-hsl-shades`, `text-contrast-on-images`

### #typography / #readability
- `refactoring-ui`: `line-height-by-context`
- `practical-ui`: `regular-bold-only-no-weight-explosion`, `line-length-40-80-chars`

### #copywriting / #ux-writing
- `practical-ui`: `be-concise-cut-filler-words`, `use-sentence-case`, `front-load-key-info`, `inverted-pyramid-content-structure`, `button-text-descriptive-verb-noun`

### #minimize / #cognitive-load
- `refactoring-ui`: `empty-state-priority`, `fewer-borders-alternatives`
- `practical-ui`: `remove-unnecessary-information`, `progressive-disclosure`, `minimalism-not-simplicity`, `break-choices-hicks-law`, `3-pillar-minimization`

### #grouping / #layout
- `refactoring-ui`: `fewer-borders-alternatives`
- `practical-ui`: `4-grouping-methods`, `inner-spacing-smaller-than-outer`, `keep-related-actions-close`

### #depth / #shadow
- `refactoring-ui`: `shadow-two-layers`, `accent-borders-visual-polish`

### #mindset / #foundation
- `refactoring-ui`: `think-outside-box-component`, `supercharge-defaults`
- `practical-ui`: `logical-reason-rationale`, `3-pillar-minimization`, `conventional-patterns-jakob-law`, `modular-design-build-from-small`

### #conflict-aurora (cards that conflict with Aurora rules)
- `practical-ui`: `hint-text-above-field`, `validate-on-submit-not-inline`, `try-to-avoid-disabled-buttons`, `radio-vs-dropdown-threshold` → all logged in `IMPROVEMENT-OPPORTUNITIES.md`

### #quote (signature money quotes)
- `practical-ui`: `quote-if-everything-important-nothing-is`, `quote-minimal-doesnt-mean-simple`

---

## Synthesis layer status

`thinking-modes.md` not yet created — **waiting for 5+ books** before cross-patterns are reliably detectable. See README.md.

**Current status:** 2 books registered (Refactoring UI + Practical UI). Cross-patterns emerging: hierarchy + spacing + action hierarchy + form UX. Not yet enough for a synthesis layer.
