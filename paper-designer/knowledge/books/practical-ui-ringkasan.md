---
book: "Practical UI"
author: "Adham Dannaway"
edition: "2022 (1st edition)"
isbn: "978-0-6456766-0-0"
slug: "practical-ui"
extracted_at: "2026-05-22"
extracted_by: "claude-opus-4-7"
review_status: "reviewed"
reviewer: "design.paper.id"
tags: [forms, buttons, layout, visual-hierarchy, copywriting, typography, accessibility, design-system, destructive-actions, color]
---

# Practical UI — Adham Dannaway

## Thesis (1-sentence core)

> **"UI design isn't magical intuition, it's a system of logical rules — every detail MUST have a *logical reason* behind it that satisfies 3 principles: minimise usability risks, minimise interaction cost, minimise cognitive load."**

Verbatim author quote:
> "Most of my UI design decisions are governed by a system of logical rules. Not artistic flair or magical intuition, just simple rules." — p. 11

---

## 8 Core Frameworks (reusable mental models)

### Framework 1: Logical reason rationale
- **When to invoke:** Every time you want to create/add/change a UI element — before approving a design decision.
- **The thinking:** Every design detail (size, color, position, spacing, shape) must be answerable with "why this way". Not "looks nice" or "I don't like it" — those are subjective opinions, NOT rationale. Rationale = objective + articulable + tied to usability/accessibility/conventions.
- **Anti-pattern:** Adding a blue badge because "blue is trending" without realizing it can be mistaken for a link. Review feedback "I just feel like the button should be bigger" without rationale.
- **Source:** Chapter 1, p. 17-18

### Framework 2: 3-Pillar Minimization (usability risk + interaction cost + cognitive load)
- **When to invoke:** When auditing any design decision. Universal audit framework.
- **The thinking:** 3 pillars:
  - **Usability risk** = anything vague/confusing/unclear → simplify first before testing
  - **Interaction cost** = sum of physical & mental effort (looking, scrolling, searching, clicking, thinking, remembering)
  - **Cognitive load** = mental effort to understand. Reduce simultaneous choices, novel patterns, memorization burden.
- **Anti-pattern:** Light grey text "to keep it sleek" — high usability risk. Multi-column form "to save space" — increases interaction cost + cognitive load.
- **Source:** Chapter 1, p. 15-23

### Framework 3: Predefined sets (design system foundation)
- **When to invoke:** When establishing or auditing a design system.
- **The thinking:** A limited set for color/typography/spacing/shadow/border-radius. Speeds up decisions + improves consistency + results in a neater interface. Each option must have a clear purpose.
- **Anti-pattern:** Pushing pixels back-and-forth looking for the perfect spacing every time. Hunting for a new grey shade for each input border.
- **Source:** Chapter 1, p. 25-28

### Framework 4: 4 Grouping Methods (container, proximity, similarity, continuity)
- **When to invoke:** When you have a group of related elements to display.
- **The thinking:** Container = strongest but most cluttered. Proximity = decent + cleaner. Similarity = matching visual treatment. Continuity = aligned in a line. Combine 2-3 for strong grouping without container clutter.
- **Anti-pattern:** Wrapping every card in a border when proximity is already enough. Mixed, inconsistent methods.
- **Source:** Chapter 4, p. 105-119

### Framework 5: Visual Hierarchy (size + colour + contrast + spacing + position + depth)
- **When to invoke:** When there's multiple info on one page, and you need to prioritize what the user looks at first.
- **The thinking:** 6 variable levers — size, colour, contrast, spacing, position, depth. Apply in order of importance. Validate with the **Squint Test** (close your eyes 50% / blur the design).
- **Anti-pattern:** Every action using a blue primary pill — hierarchy destroyed. "If everything is important, nothing is important."
- **Source:** Chapter 4, p. 120-128

### Framework 6: 3-Tier Button System (single primary + secondary + tertiary)
- **When to invoke:** When placing buttons first, action hierarchy on a page.
- **The thinking:** 1 primary per page MAX (filled action color). Secondary for less important or multiple equal-weight (border only). Tertiary for least important / destructive (underlined text-link). Visual hierarchy can't depend on colour ALONE.
- **Anti-pattern:** 2 primaries on one page. Using a grey secondary (mistaken for disabled). Tertiary that's just blue text without underline.
- **Source:** Chapter 8, p. 251-261

### Framework 7: Friction Ladder for Destructive Actions
- **When to invoke:** User wants to delete/perform a destructive irreversible action.
- **The thinking:** 4-tier:
  - Initial (less prominent UI)
  - Light (confirm dialog)
  - Medium (confirm + red button + warning icon)
  - Heavy (confirm + checkbox required)
  - **Better alternative**: Allow UNDO via snackbar/toast.
- **Anti-pattern:** All deletes = "Delete account" instantly without confirm. Or all deletes = heavy modal (annoying for small actions).
- **Source:** Chapter 8, p. 277-279

### Framework 8: Form Layout Stack (single column + label-top + match-width)
- **When to invoke:** Designing any form.
- **The thinking:** Single column = downward momentum. Label above input. Field width = match expected input length. Hint ABOVE input. Stick to conventional styles. Stack checkbox/radio vertically. Side-by-side OK if related & short.
- **Anti-pattern:** 2-column form "to save space". Label beside the field. All fields full-width. Placeholder as label.
- **Source:** Chapter 7, p. 214-230

---

## Reading Map (card topic map)

| Topik | File | Tag | Apply-value |
|-------|------|-----|-------------|
| single-column-form-layout | `kartu/single-column-form-layout.md` | `#form` | high |
| label-on-top-of-input | `kartu/label-on-top-of-input.md` | `#form` | high |
| field-width-matches-input | `kartu/field-width-matches-input.md` | `#form` | high |
| hint-text-above-field | `kartu/hint-text-above-field.md` | `#form` | high |
| dont-use-placeholder-as-label | `kartu/dont-use-placeholder-as-label.md` | `#form` | high |
| stack-checkbox-radio-vertically | `kartu/stack-checkbox-radio-vertically.md` | `#form` | high |
| mark-both-required-and-optional | `kartu/mark-both-required-and-optional.md` | `#form` | high |
| conventional-form-field-styles | `kartu/conventional-form-field-styles.md` | `#form` | high |
| validate-on-submit-not-inline | `kartu/validate-on-submit-not-inline.md` | `#form` `#conflict` | high |
| stacked-related-fields-side-by-side | `kartu/stacked-related-fields-side-by-side.md` | `#form` | high |
| break-long-forms-into-steps | `kartu/break-long-forms-into-steps.md` | `#form` `#multi-step` | high |
| group-form-fields-under-headings | `kartu/group-form-fields-under-headings.md` | `#form` | high |
| 3-button-weight-system | `kartu/3-button-weight-system.md` | `#button` `#hierarchy` | high |
| one-primary-button-per-screen | `kartu/one-primary-button-per-screen.md` | `#button` `#hierarchy` | high |
| secondary-for-equal-weight-actions | `kartu/secondary-for-equal-weight-actions.md` | `#button` | high |
| tertiary-for-multiple-or-destructive | `kartu/tertiary-for-multiple-or-destructive.md` | `#button` `#destructive` | high |
| try-to-avoid-disabled-buttons | `kartu/try-to-avoid-disabled-buttons.md` | `#button` `#conflict` | high |
| button-text-descriptive-verb-noun | `kartu/button-text-descriptive-verb-noun.md` | `#button` `#copywriting` | high |
| friction-ladder-for-destructive | `kartu/friction-ladder-for-destructive.md` | `#destructive` `#confirmation` | high |
| allow-undo-better-than-friction | `kartu/allow-undo-better-than-friction.md` | `#destructive` `#toast` | high |
| 4-grouping-methods | `kartu/4-grouping-methods.md` | `#layout` `#grouping` | high |
| visual-hierarchy-variables | `kartu/visual-hierarchy-variables.md` | `#hierarchy` | high |
| squint-test-validation | `kartu/squint-test-validation.md` | `#hierarchy` `#audit` | high |
| predefined-spacing-scale | `kartu/predefined-spacing-scale.md` | `#spacing` `#design-system` | medium |
| inner-spacing-smaller-than-outer | `kartu/inner-spacing-smaller-than-outer.md` | `#spacing` `#grouping` | high |
| keep-related-actions-close | `kartu/keep-related-actions-close.md` | `#layout` `#button` | high |
| remove-unnecessary-information | `kartu/remove-unnecessary-information.md` | `#minimize` | medium |
| progressive-disclosure | `kartu/progressive-disclosure.md` | `#minimize` `#cognitive-load` | high |
| minimalism-not-simplicity | `kartu/minimalism-not-simplicity.md` | `#minimize` `#anti-pattern` | high |
| break-choices-hicks-law | `kartu/break-choices-hicks-law.md` | `#cognitive-load` | medium |
| radio-vs-dropdown-threshold | `kartu/radio-vs-dropdown-threshold.md` | `#form` `#conflict` | medium |
| autocomplete-for-long-lists | `kartu/autocomplete-for-long-lists.md` | `#form` | high |
| stepper-vs-dropdown-for-numeric | `kartu/stepper-vs-dropdown-for-numeric.md` | `#form` | medium |
| be-concise-cut-filler-words | `kartu/be-concise-cut-filler-words.md` | `#copywriting` | high |
| use-sentence-case | `kartu/use-sentence-case.md` | `#copywriting` | high |
| front-load-key-info | `kartu/front-load-key-info.md` | `#copywriting` | medium |
| inverted-pyramid-content-structure | `kartu/inverted-pyramid-content-structure.md` | `#copywriting` | medium |
| regular-bold-only-no-weight-explosion | `kartu/regular-bold-only-no-weight-explosion.md` | `#typography` | medium |
| line-length-40-80-chars | `kartu/line-length-40-80-chars.md` | `#typography` `#readability` | medium |
| logical-reason-rationale | `kartu/logical-reason-rationale.md` | `#mindset` `#foundation` | high |
| 3-pillar-minimization | `kartu/3-pillar-minimization.md` | `#mindset` `#audit` | high |
| conventional-patterns-jakob-law | `kartu/conventional-patterns-jakob-law.md` | `#mindset` `#convention` | high |
| modular-design-build-from-small | `kartu/modular-design-build-from-small.md` | `#mindset` `#design-system` | medium |
| quote-if-everything-important-nothing-is | `kartu/quote-if-everything-important-nothing-is.md` | `#quote` `#hierarchy` | high |
| quote-minimal-doesnt-mean-simple | `kartu/quote-minimal-doesnt-mean-simple.md` | `#quote` `#anti-pattern` | high |

Total: 45 cards.

---

## Money Quotes (5 signature quotes)

1. > "If everything is important, nothing is important."
   — Chapter 8 (Buttons), p. 259

2. > "Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."
   — Chapter 1 (Fundamentals), p. 17

3. > "The higher the interaction cost, the harder it is for someone to achieve their task."
   — Chapter 1 (Fundamentals), p. 19

4. > "Minimal doesn't mean simple."
   — Chapter 2 (Less is more), p. 52

5. > "Buttons should have a clear visual hierarchy that isn't reliant on colour."
   — Chapter 8 (Buttons), p. 254

---

## Application for Paper.id

> Apply by module / pattern context.

**For all Forms in Paper.id** (Tambah Mitra, Buat Invoice, Catat Pengeluaran, KYC, Setup):
- Single column layout (Framework 8) — mandatory default
- Label above input (CARD #2) — Aurora form-field is already default-correct
- Field width matches expected (CARD #3) — audit current, many are full-width unnecessarily
- Mark required + optional (CARD #7) — asterisk `*` + the word "opsional"
- Conventional styling (CARD #8) — stick to the Aurora component, don't experiment with styling
- Multi-step if >10 fields (CARD #11) — Setup Bisnis, KYC
- Section heading if multi-step isn't possible (CARD #12) — Edit Profil Perusahaan

**For Buttons across the whole prototype**:
- 3-tier system Aurora primary/secondary/tertiary (CARD #13)
- 1 primary per screen (CARD #14) — already locked in Action Hierarchy
- Descriptive verb+noun button text (CARD #18) — "Simpan invoice" not "OK"
- Friction ladder per severity (CARD #19) — match the Paperverse destructive definition

**For the Table list pattern**:
- Action ⋮ near the row, not the global toolbar (CARD #26)
- Action column sticky right, click row = detail (lock existing pattern)
- 4-grouping methods (CARD #21) — combine proximity + similarity + container for row grouping

**For Destructive actions**:
- Allow undo via snackbar (CARD #20) > heavy friction modal
- Delete draft = light/no friction. Delete published = medium. Delete account = heavy.

**For Indonesian Copywriting**:
- Be concise (CARD #34) — coincides with [[user-prefers-plain-indonesian]]
- Sentence case (CARD #35) — "Hapus invoice?" not "Hapus Invoice?"
- Front-load (CARD #36) — important info at the start of the heading

**For Decision Mindset**:
- Logical reason rationale (CARD #40) — every rule in memory MUST have a Why + How to apply
- 3-pillar audit (CARD #41) — Pre-Generation Checklist
- Jakob's Law (CARD #42) — Aurora patterns are conventional, don't reinvent

---

## Conflict with Aurora / Paper.id Rules

5 conflicts identified — all logged to `IMPROVEMENT-OPPORTUNITIES.md` for discussion with the DS maintainer.

### Conflict 1: Hint text position (above vs below field)
- **Topic:** Position of helper/hint text relative to the input field
- **Book says:** MUST be ABOVE the field — prevents errors + maintains downward momentum + isn't covered by autofill
- **Paper.id chooses:** TBD — need to audit the current Aurora form-field pattern
- **Reason:** Conflicts with the possible current pattern. Critical hints may move above, decorative hints OK below.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Hint text position"

### Conflict 2: Disabled submit buttons
- **Topic:** Should the Submit/Save button be disabled until the form is valid?
- **Book says:** TRY TO AVOID disabled buttons. Enable + validate on submit. Disabled = user stuck, low contrast, keyboard inaccessible.
- **Paper.id chooses:** Many Aurora modals use the disabled Save pattern (needs confirmation).
- **Reason:** Trade-off — disabled prevents invalid submission upfront, but sacrifices UX feedback clarity. Complex forms with inter-field dependency may need disable. Simple forms are better with enable+validate.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Disabled submit button pattern"

### Conflict 3: Radio button threshold
- **Topic:** Option threshold for using radio vs dropdown
- **Book says:** ≤10 options = radio
- **Paper.id chooses:** ≤4 options = radio (more conservative, per [[paperverse-design-decisions]])
- **Reason:** Paper.id wins — stricter = safer. The book's threshold is looser, Paper.id rule locks at 4. Note the data point for future evaluation.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Radio threshold evaluation"

### Conflict 4: Inline validation vs validate-on-submit
- **Topic:** When to show the error message in a form
- **Book says:** Validate on SUBMIT, not inline (real-time). Inline = annoying.
- **Paper.id chooses:** TBD — need to audit the current pattern
- **Reason:** Trade-off — inline catches errors faster but feels intrusive. On-submit feels batched but lets the user finalize input first.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Validation timing"

### Conflict 5: WCAG 2 vs APCA contrast
- **Topic:** Color contrast measurement system
- **Book says:** Use APCA (WCAG 3 draft) — more accessible, better for dark interfaces
- **Paper.id chooses:** Use WCAG 2 (current standard)
- **Reason:** A commercial product needs compliance with the existing standard (WCAG 2 AA). APCA is still a draft. Future migration evaluation if WCAG 3 is finalized.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "APCA migration evaluation"

---

## Adaptation Note

A 2022 book (2 years ago), still very current. No outdated context. Some visual examples (e-commerce, travel app) don't match B2B finance — already adapted to the Paper.id context in each card. English — money quotes are kept original + paraphrased into Indonesian for application.

---

## Cross-refs (to other books / rules)

**Overlap with `[[refactoring-ui]]` (Wathan & Schoger):**
- `hierarchy-weight-color` ↔ `visual-hierarchy-variables` (Practical UI is more granular: 6 levers)
- `action-hierarchy-semantics` ↔ `3-button-weight-system` (3-tier system consistent)
- `spacing-system-scale` ↔ `predefined-spacing-scale` (predefined sets concept reinforced)
- `selectable-cards-vs-radio` ↔ `radio-vs-dropdown-threshold` (input pattern decision)
- `empty-state-priority` ↔ `inverted-pyramid-content-structure` (information ordering)

**Reinforcing existing memory rules:**
- `[[aurora-lookup-ritual]]` — Practical UI Framework 1 (logical reason) + Framework 8 (conventional patterns) confirm the strict approach.
- `[[prototyping-gap-lessons]]` 0h Action Hierarchy — CARD #14 + Money Quote #1 reinforce.
- `[[paperverse-design-decisions]]` destructive definition — CARD #19 friction ladder + CARD #20 undo apply.
- `[[user-prefers-plain-indonesian]]` — CARD #34 be-concise + CARD #35 sentence case + CARD #36 front-load align with the preference.
- `[[smooth-transitions-rule]]` — CARD #20 undo via toast aligns with the existing toast pattern.
- `[[composition-thinking-rule]]` — CARD #43 modular design = parent framework.
- `[[knowledge-vs-ds-priority-flow]]` — workflow handling conflicts per Step 3 (surface to user + log) is already applied.
