# Knowledge Library — Master Index

> **Cara baca file ini:** ini index 1-baris per buku + list topik kartu. Claude scan dulu file ini saat butuh insight di Mode 2 (Konsultan), baru load file ringkasan/kartu yang relevant.

## Setup Checkpoint (lock 2026-05-22)

✅ Folder structure ready (`books/`, `articles/`, `_pdf/`)
✅ Templates ready (`_template-ringkasan.md`, `_template-kartu.md`)
✅ CLAUDE.md Knowledge Library section + Mode 1/2 trigger documented
✅ Memory rules: `knowledge-mode-trigger-rule`, `knowledge-extraction-workflow`
✅ Pipeline.md Langkah 0a Mode Classification

**Decision lockedown:**
- Granularity: **B1 — Ringkasan pyramid + Kartu atomic per topik**
- Sub-agent untuk PDF reading: **NO** (inline cukup, ga over-engineer)
- Synthesis layer (`thinking-modes.md`): **TUNDA** sampai 5+ buku
- Trigger Mode 2: opt-in eksplisit (kata "ide lain", "revamp", "improvement", "bisa lebih baik", tag `@book` / `@article`)
- Review: wajib user review 2 buku pertama
- Citation: frontmatter `source.*` wajib, no halusinasi page/quote

**Status:** siap terima buku pertama (PDF) atau artikel pertama (URL Medium / NN/g / blog).

---

## Daftar Buku Terdaftar

## Refactoring UI — Adam Wathan & Steve Schoger
- **Slug:** `refactoring-ui`
- **File ringkasan:** `books/refactoring-ui-ringkasan.md`
- **Thinking framework:** `books/refactoring-ui/thinking.md` ← pakai ini saat evaluate / desain, kartu untuk deep-dive
- **Thesis:** Good-looking UI is the result of applying specific learnable techniques — hierarchy, spacing, color, depth, and polish — not artistic talent.
- **Best for:** Visual polish pass, hierarchy problems, component upgrade, empty state, color system, form UX
- **Tags:** [hierarchy, spacing, color, typography, depth, visual-polish, empty-state, form, component]
- **Topik kartu tersedia:**
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
- **Konflik dengan Aurora/Paper.id:** ada — lihat ringkasan (selectable card belum di Aurora, ilustrasi empty state belum ada Aurora library)
- **Status:** reviewed
- **Reviewed by:** user (2026-05-25)
- **Extracted:** 2026-05-22

## Practical UI — Adham Dannaway
- **Slug:** `practical-ui`
- **File ringkasan:** `books/practical-ui-ringkasan.md`
- **File bacaan santai:** `books/practical-ui-bacaan.md` — naratif 2700 kata, ~18-20 menit, format buat baca tuntas (thesis + top 10 insight + 5 quote + per-chapter + 3 actionable)
- **Thesis:** UI design itu sistem rules logical — setiap detail WAJIB ada *logical reason* yang memenuhi 3 prinsip: minimise usability risks, minimise interaction cost, minimise cognitive load.
- **Best for:** Form UX (paling dalam coverage-nya), Button hierarchy, Destructive action friction, Visual hierarchy variables, Conventional patterns (Jakob's Law), UX copywriting Indonesia adapt
- **Tags:** [forms, buttons, layout, visual-hierarchy, copywriting, typography, accessibility, design-system, destructive-actions, color]
- **Topik kartu tersedia (45 kartu):**
  - **Forms (12 kartu):**
    - `single-column-form-layout` — Form pakai 1 kolom default
    - `label-on-top-of-input` — Label stack vertikal, BUKAN di kiri
    - `field-width-matches-input` — Width match expected input length
    - `hint-text-above-field` — ⚠️ Hint di ATAS field (konflik Aurora)
    - `dont-use-placeholder-as-label` — Placeholder hilang saat ngetik
    - `stack-checkbox-radio-vertically` — Bukan inline
    - `mark-both-required-and-optional` — Asterisk `*` + word "(optional)"
    - `conventional-form-field-styles` — Stick conventional, jangan eksperimen
    - `validate-on-submit-not-inline` — ⚠️ Enable + validate on submit (konflik)
    - `stacked-related-fields-side-by-side` — Pengecualian single-column
    - `break-long-forms-into-steps` — Multi-step >10 field
    - `group-form-fields-under-headings` — Section heading kalau ga bisa multi-step
  - **Buttons (8 kartu):**
    - `3-button-weight-system` — Primary + Secondary + Tertiary
    - `one-primary-button-per-screen` — MAX 1 primary
    - `secondary-for-equal-weight-actions` — Neutral choice tanpa bias
    - `tertiary-for-multiple-or-destructive` — Low-prominence
    - `try-to-avoid-disabled-buttons` — ⚠️ Enable + validate (konflik)
    - `button-text-descriptive-verb-noun` — "Save post" bukan "OK"
    - `friction-ladder-for-destructive` — 4-tier friction
    - `allow-undo-better-than-friction` — Undo > friction
  - **Layout & Spacing (6 kartu):**
    - `4-grouping-methods` — Container + proximity + similarity + continuity
    - `visual-hierarchy-variables` — 6 lever (size/colour/contrast/spacing/position/depth)
    - `squint-test-validation` — Validate hierarchy
    - `predefined-spacing-scale` — XS/S/M/L/XL/XXL = 8/16/24/32/48/80pt
    - `inner-spacing-smaller-than-outer` — Proximity rule
    - `keep-related-actions-close` — Fitts's Law
  - **Less is more (4 kartu):**
    - `remove-unnecessary-information` — Cut redundant
    - `progressive-disclosure` — Reveal gradually
    - `minimalism-not-simplicity` — Don't confuse
    - `break-choices-hicks-law` — 4 taktik speed up decisions
  - **Input decisions (3 kartu):**
    - `radio-vs-dropdown-threshold` — ⚠️ Buku ≤10 vs Paper.id ≤4 (konflik)
    - `autocomplete-for-long-lists` — Predictive search untuk >10 opsi
    - `stepper-vs-dropdown-for-numeric` — Stepper untuk small range
  - **Copywriting (4 kartu):**
    - `be-concise-cut-filler-words` — Cut filler words
    - `use-sentence-case` — "Save post" bukan "Save Post"
    - `front-load-key-info` — Important info di awal
    - `inverted-pyramid-content-structure` — Most important top
  - **Typography (2 kartu):**
    - `regular-bold-only-no-weight-explosion` — 2 weight cukup
    - `line-length-40-80-chars` — Optimal line length
  - **Framework foundational (4 kartu):**
    - `logical-reason-rationale` — Why every design detail
    - `3-pillar-minimization` — Usability risk + interaction cost + cognitive load
    - `conventional-patterns-jakob-law` — Stick conventional
    - `modular-design-build-from-small` — Build from smallest components
  - **Money Quotes (2 kartu):**
    - `quote-if-everything-important-nothing-is` — Hierarchy quote
    - `quote-minimal-doesnt-mean-simple` — Anti-minimalism trap quote
- **Konflik dengan Aurora/Paper.id:** ada 5 — lihat ringkasan + `IMPROVEMENT-OPPORTUNITIES.md` (hint position, disabled buttons, radio threshold, inline validation, APCA migration)
- **Status:** reviewed
- **Reviewed by:** user (2026-05-25)
- **Extracted:** 2026-05-22

### Format entry (untuk reference saat tambah buku)

```markdown
## <Judul Buku> — <Author>
- **Slug:** `<buku-slug>`
- **File ringkasan:** `books/<buku-slug>-ringkasan.md`
- **Thesis:** <1 kalimat inti buku>
- **Best for:** <kategori problem yang relevan>
- **Tags:** [navigation, error-state, form, ...]
- **Topik kartu tersedia:**
  - `<topik-1>` (`books/<buku-slug>/kartu/<topik-1>.md`)
  - `<topik-2>`
  - ...
- **Konflik dengan Aurora/Paper.id:** [tidak ada / ada — lihat ringkasan]
- **Status:** [draft / reviewed by user / locked]
- **Extracted:** <YYYY-MM-DD>
```

---

## Topic Tag Index (cross-buku)

> Auto-populate berdasarkan tag di kartu. Update saat tambah buku baru.

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

### #conflict-aurora (kartu yang konflik vs Aurora rules)
- `practical-ui`: `hint-text-above-field`, `validate-on-submit-not-inline`, `try-to-avoid-disabled-buttons`, `radio-vs-dropdown-threshold` → semua logged di `IMPROVEMENT-OPPORTUNITIES.md`

### #quote (money quotes signature)
- `practical-ui`: `quote-if-everything-important-nothing-is`, `quote-minimal-doesnt-mean-simple`

---

## Status synthesis layer

`thinking-modes.md` belum dibuat — **menunggu 5+ buku** sebelum cross-pattern reliable terdeteksi. Lihat README.md.

**Status saat ini:** 2 buku terdaftar (Refactoring UI + Practical UI). Cross-pattern muncul: hierarchy + spacing + action hierarchy + form UX. Belum cukup untuk synthesis layer.
