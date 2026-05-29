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

## Thesis (1 kalimat inti)

> **"UI design itu bukan intuisi magis, tapi sistem rules logical — setiap detail WAJIB ada *logical reason* di belakangnya yang memenuhi 3 prinsip: minimise usability risks, minimise interaction cost, minimise cognitive load."**

Quote verbatim author:
> "Most of my UI design decisions are governed by a system of logical rules. Not artistic flair or magical intuition, just simple rules." — hal 11

---

## 8 Framework Utama (mental model reusable)

### Framework 1: Logical reason rationale
- **When to invoke:** Setiap kali mau bikin/tambah/ubah element UI — sebelum approve design decision.
- **The thinking:** Tiap detail design (size, color, position, spacing, shape) harus bisa dijawab "kenapa begitu". Bukan "looks nice" atau "I don't like" — itu subjective opinion, BUKAN rationale. Rationale = objective + articulable + tied to usability/accessibility/conventions.
- **Anti-pattern:** Pasang badge biru karena "biru lagi ngetren" tanpa tau itu bisa di-mistaken sebagai link. Review feedback "I just feel like the button should be bigger" tanpa rationale.
- **Source:** Bab 1, hal 17-18

### Framework 2: 3-Pillar Minimization (usability risk + interaction cost + cognitive load)
- **When to invoke:** Saat audit decision design apapun. Audit framework universal.
- **The thinking:** 3 pillar:
  - **Usability risk** = anything vague/confusing/unclear → simplify dulu sebelum testing
  - **Interaction cost** = sum of physical & mental effort (looking, scrolling, searching, clicking, thinking, remembering)
  - **Cognitive load** = mental effort untuk understand. Reduce simultaneous choices, novel patterns, memorization burden.
- **Anti-pattern:** Light grey text "biar sleek" — high usability risk. Multi-column form "save space" — increase interaction cost + cognitive load.
- **Source:** Bab 1, hal 15-23

### Framework 3: Predefined sets (design system foundation)
- **When to invoke:** Saat establish atau audit design system.
- **The thinking:** Limited set untuk color/typography/spacing/shadow/border-radius. Speed up decisions + improve consistency + result in neater interface. Setiap option harus punya purpose jelas.
- **Anti-pattern:** Push pixel back-and-forth nyari spacing perfect tiap kali. Cari shade grey baru untuk tiap input border.
- **Source:** Bab 1, hal 25-28

### Framework 4: 4 Grouping Methods (container, proximity, similarity, continuity)
- **When to invoke:** Saat punya group of related elements untuk di-display.
- **The thinking:** Container = strongest tapi paling clutter. Proximity = decent + cleaner. Similarity = visual treatment serupa. Continuity = aligned in line. Combine 2-3 untuk strong grouping tanpa container clutter.
- **Anti-pattern:** Bungkus segala card pake border padahal proximity udah cukup. Mixed methods inconsistent.
- **Source:** Bab 4, hal 105-119

### Framework 5: Visual Hierarchy (size + colour + contrast + spacing + position + depth)
- **When to invoke:** Saat multiple info di 1 page, perlu prioritize what user looks first.
- **The thinking:** 6 lever variabel — size, colour, contrast, spacing, position, depth. Apply by importance order. Validate dengan **Squint Test** (tutup mata 50% / blur design).
- **Anti-pattern:** Semua action pakai pill primary biru semua — hierarchy hancur. "If everything is important, nothing is important."
- **Source:** Bab 4, hal 120-128

### Framework 6: 3-Tier Button System (primary single + secondary + tertiary)
- **When to invoke:** Pasang button pertama-tama, hierarchy action di page.
- **The thinking:** 1 primary per page MAX (filled action color). Secondary untuk less important atau multiple equal-weight (border only). Tertiary untuk least important / destructive (text-link underlined). Visual hierarchy can't depend on colour ALONE.
- **Anti-pattern:** 2 primary di 1 page. Pakai grey secondary (di-mistaken disabled). Tertiary cuma text biru tanpa underline.
- **Source:** Bab 8, hal 251-261

### Framework 7: Friction Ladder for Destructive Actions
- **When to invoke:** User mau hapus/delete/destructive irreversible action.
- **The thinking:** 4-tier:
  - Initial (less prominent UI)
  - Light (confirm dialog)
  - Medium (confirm + red button + warning icon)
  - Heavy (confirm + checkbox required)
  - **Better alternative**: Allow UNDO via snackbar/toast.
- **Anti-pattern:** All delete = "Delete account" instant tanpa confirm. Atau all delete = heavy modal (annoying untuk small actions).
- **Source:** Bab 8, hal 277-279

### Framework 8: Form Layout Stack (single column + label-top + match-width)
- **When to invoke:** Design form apapun.
- **The thinking:** Single column = downward momentum. Label di atas input. Field width = match expected input length. Hint ABOVE input. Stick conventional styles. Stack checkbox/radio vertically. Side-by-side OK kalau related & short.
- **Anti-pattern:** 2-column form "save space". Label di samping field. Field semua full-width. Placeholder as label.
- **Source:** Bab 7, hal 214-230

---

## Reading Map (peta topik kartu)

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

Total: 45 kartu.

---

## Money Quotes (5 quote signature)

1. > "If everything is important, nothing is important."
   — Bab 8 (Buttons), hal 259

2. > "Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."
   — Bab 1 (Fundamentals), hal 17

3. > "The higher the interaction cost, the harder it is for someone to achieve their task."
   — Bab 1 (Fundamentals), hal 19

4. > "Minimal doesn't mean simple."
   — Bab 2 (Less is more), hal 52

5. > "Buttons should have a clear visual hierarchy that isn't reliant on colour."
   — Bab 8 (Buttons), hal 254

---

## Aplikasi untuk Paper.id

> Apply by modul / pattern context.

**Untuk semua Form di Paper.id** (Tambah Mitra, Buat Invoice, Catat Pengeluaran, KYC, Setup):
- Single column layout (Framework 8) — wajib default
- Label di atas input (KARTU #2) — Aurora form-field udah default benar
- Field width match expected (KARTU #3) — audit current, banyak yang full-width unnecessary
- Mark required + optional (KARTU #7) — asterisk `*` + word "opsional"
- Conventional styling (KARTU #8) — stick Aurora component, jangan eksperimen styling
- Multi-step kalau >10 field (KARTU #11) — Setup Bisnis, KYC
- Section heading kalau ga bisa multi-step (KARTU #12) — Edit Profile Perusahaan

**Untuk Buttons di seluruh prototype**:
- 3-tier system Aurora primary/secondary/tertiary (KARTU #13)
- 1 primary per screen (KARTU #14) — sudah lock di Action Hierarchy
- Button text verb+noun deskriptif (KARTU #18) — "Simpan invoice" bukan "OK"
- Friction ladder per severity (KARTU #19) — match definisi destructive Paperverse

**Untuk Table list pattern**:
- Action ⋮ dekat row, bukan global toolbar (KARTU #26)
- Sticky kanan kolom action, klik row = detail (lock pattern existing)
- 4-grouping methods (KARTU #21) — combine proximity + similarity + container untuk row grouping

**Untuk Destructive actions**:
- Allow undo via snackbar (KARTU #20) > heavy friction modal
- Hapus draft = light/no friction. Hapus published = medium. Hapus account = heavy.

**Untuk Copywriting Indonesia**:
- Be concise (KARTU #34) — coincide dengan [[user-prefers-plain-indonesian]]
- Sentence case (KARTU #35) — "Hapus invoice?" bukan "Hapus Invoice?"
- Front-load (KARTU #36) — important info di awal heading

**Untuk Decision Mindset**:
- Logical reason rationale (KARTU #40) — setiap rule di memory WAJIB punya Why + How to apply
- 3-pillar audit (KARTU #41) — Pre-Generation Checklist
- Jakob's Law (KARTU #42) — Aurora pattern conventional, jangan reinvent

---

## Konflik dengan Aurora / Paper.id Rules

5 konflik teridentifikasi — semua di-log ke `IMPROVEMENT-OPPORTUNITIES.md` untuk diskusi maintainer DS.

### Konflik 1: Hint text position (above vs below field)
- **Topik:** Posisi helper/hint text relatif ke input field
- **Buku bilang:** WAJIB di ATAS field — prevent error + maintain downward momentum + ga ke-cover autofill
- **Paper.id pilih:** TBD — perlu audit Aurora form-field current pattern
- **Alasan:** Konflik dengan kemungkinan pattern current. Critical hint mungkin pindah ke atas, decorative hint OK di bawah.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Hint text position"

### Konflik 2: Disabled submit buttons
- **Topik:** Apakah Submit/Save button di-disable sampai form valid?
- **Buku bilang:** TRY TO AVOID disabled buttons. Enable + validate on submit. Disabled = user stuck, low contrast, keyboard inaccessible.
- **Paper.id pilih:** Banyak modal Aurora pakai disabled Save pattern (perlu konfirmasi).
- **Alasan:** Trade-off — disabled prevent invalid submission upfront, tapi sacrifice UX feedback clarity. Form kompleks dengan inter-field dependency mungkin perlu disable. Form simple mendingan enable+validate.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Disabled submit button pattern"

### Konflik 3: Radio button threshold
- **Topik:** Threshold opsi untuk pakai radio vs dropdown
- **Buku bilang:** ≤10 opsi = radio
- **Paper.id pilih:** ≤4 opsi = radio (lebih konservatif, per [[paperverse-design-decisions]])
- **Alasan:** Paper.id menang — lebih strict = lebih safe. Buku threshold longgar, Paper.id rule lock 4. Catat data point untuk future evaluation.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Radio threshold evaluation"

### Konflik 4: Inline validation vs validate-on-submit
- **Topik:** Kapan show error message di form
- **Buku bilang:** Validate on SUBMIT, bukan inline (real-time). Inline = annoying.
- **Paper.id pilih:** TBD — perlu audit current pattern
- **Alasan:** Trade-off — inline catches error faster tapi feel intrusive. On-submit feel batch tapi user finalize input first.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "Validation timing"

### Konflik 5: WCAG 2 vs APCA contrast
- **Topik:** Color contrast measurement system
- **Buku bilang:** Pakai APCA (WCAG 3 draft) — more accessible, better for dark interfaces
- **Paper.id pilih:** Pakai WCAG 2 (current standard)
- **Alasan:** Commercial product perlu compliance dengan existing standard (WCAG 2 AA). APCA masih draft. Future migration evaluation kalau WCAG 3 finalized.
- **Log:** `IMPROVEMENT-OPPORTUNITIES.md` entry "APCA migration evaluation"

---

## Adaptation Note

Buku 2022 (2 tahun lalu), masih sangat current. Tidak ada outdated context. Beberapa contoh visual (e-commerce, travel app) ga match B2B finance — sudah di-adapt ke Paper.id context di setiap kartu. Bahasa Inggris — money quotes di-keep original + paraphrase Indonesia untuk apply.

---

## Cross-refs (ke buku lain / rule lain)

**Overlap dengan `[[refactoring-ui]]` (Wathan & Schoger):**
- `hierarchy-weight-color` ↔ `visual-hierarchy-variables` (Practical UI lebih granular: 6 lever)
- `action-hierarchy-semantics` ↔ `3-button-weight-system` (3-tier system konsisten)
- `spacing-system-scale` ↔ `predefined-spacing-scale` (predefined sets concept reinforce)
- `selectable-cards-vs-radio` ↔ `radio-vs-dropdown-threshold` (input pattern decision)
- `empty-state-priority` ↔ `inverted-pyramid-content-structure` (information ordering)

**Memperkuat memory rules existing:**
- `[[aurora-lookup-ritual]]` — Practical UI Framework 1 (logical reason) + Framework 8 (conventional patterns) confirm pendekatan strict.
- `[[prototyping-gap-lessons]]` 0h Action Hierarchy — KARTU #14 + Money Quote #1 reinforce.
- `[[paperverse-design-decisions]]` destructive definition — KARTU #19 friction ladder + KARTU #20 undo apply.
- `[[user-prefers-plain-indonesian]]` — KARTU #34 be-concise + KARTU #35 sentence case + KARTU #36 front-load align dengan preference.
- `[[smooth-transitions-rule]]` — KARTU #20 undo via toast align dengan toast pattern existing.
- `[[composition-thinking-rule]]` — KARTU #43 modular design = framework parent.
- `[[knowledge-vs-ds-priority-flow]]` — workflow handle konflik per Step 3 (surface to user + log) sudah diapply.
