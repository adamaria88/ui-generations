# Improvement Opportunities — DS Aurora upgrades dari Book Knowledge

> **Purpose:** Running log dari Step 3 finding (per [[knowledge-vs-ds-priority-flow]]) — saat book thinking SUGGEST improvement ke DS Aurora yang udah punya rule explicit. Bukan auto-apply — ini backlog untuk DS team review saat sprint planning / DS upgrade discussion.
>
> **Workflow:** kalau gue (Claude di Mode 2) nemu konflik antara DS spec dan book thinking → tambah entry di sini + surface ke user inline. User / DS team decide kalau worth upgrade.
>
> **Read order:** dari atas (terbaru). Status: `open` → `discussed` → `accepted` (DS updated) atau `rejected` (intentional, don't pursue).

---

## Format Entry

```markdown
## [Topic ringkas]

- **Date logged:** YYYY-MM-DD
- **Source insight:** Buku/Artikel + chapter + page + cite ([kartu](path))
- **Current DS:** spec sekarang + file source
- **Book suggests:** thinking buku + quote verbatim
- **Reasoning:** kenapa book suggest beda
- **Impact estimate:** [low / medium / high] — seberapa user-facing impact
- **Tech effort:** [low / medium / high] — seberapa effort developer
- **Status:** [open / discussed / accepted / rejected]
- **Notes:** discussion log, decision
```

---

## Active Opportunities

### Form label-input proximity gap

- **Date logged:** 2026-05-22
- **Source insight:** Refactoring UI by Wathan & Schoger Ch3 (Layout and Spacing), page TBD ([kartu](books/refactoring-ui/kartu/spacing-system-scale.md))
- **Current DS:** `.field` gap-sm = 8px (label → input)
  - Source: `_output/expense-management/02-ui-aurora.html` line ~465
  - Pattern dipakai SEMUA form di Paper.id prototype
- **Book suggests:** Label → input gap = 4px (spacing-xs)
- **Quote verbatim (paraphrase, page TBD):**
  > "Form dengan label di atas input: gap label→input = 4px (sangat dekat, clearly related), gap antar field = 16px (related tapi distinct), gap antar section = 32px (clearly separate groups)."
- **Reasoning:** Proximity = relationship signal. Gap 8px masih "comfortable readable", tapi 4px = "clearly belongs to" — stronger visual binding. Per book thinking: spacing scale exponential bukan linear, dan 4px adalah threshold "intimately related" (vs 8px "close enough").
- **Impact estimate:** low — perceptual difference subtle, tidak break usability
- **Tech effort:** low — single CSS token change `.field { gap: var(--spacing-xs) }`, butuh regression check semua form Paper.id
- **Status:** open
- **Notes:** Surface dari Mode 2 test-drive 2026-05-22 (Detail page audit). Aurora belum verify intentional design choice atau default Material/iOS pattern.

---

### Form field-to-field vertical spacing

- **Date logged:** 2026-05-22
- **Source insight:** Refactoring UI by Wathan & Schoger Ch3 ([kartu](books/refactoring-ui/kartu/spacing-system-scale.md))
- **Current DS:** `.form-grid` row-gap = `var(--spacing-xl)` = 24px (antar field vertical)
- **Book suggests:** Field-to-field gap = 16px (spacing-lg)
- **Quote verbatim:** sama dengan entry sebelumnya (paraphrase)
- **Reasoning:** Field-to-field 24px = "related tapi distinct". Book bilang 16px sufficient untuk distinct. 24px = sedikit over-generous, bisa dapet density lebih baik tanpa kehilangan visual separation.
- **Impact estimate:** low-medium — form jadi lebih dense / efficient screen real-estate
- **Tech effort:** low — single CSS token change
- **Status:** open
- **Notes:** Kemungkinan intentional choice Aurora untuk B2B finance form (yang sering long), biar ga overwhelming. Need designer/PM discussion.

---

### Hint text position (above vs below field)

- **Date logged:** 2026-05-22
- **Source insight:** Practical UI by Adham Dannaway, Bab 7 (Forms), hal 231-232 ([kartu](books/practical-ui/kartu/hint-text-above-field.md))
- **Current DS:** Aurora `aurora-form-hint` kemungkinan render di BAWAH field (perlu confirm — belum verified Aurora source)
- **Book suggests:** Hint text di ATAS field
- **Quote verbatim:**
  > "If a password needs to be at least 6 characters long, tell people before they fill out the password field, not after."
- **Reasoning:** Hint di atas = (1) user baca dulu sebelum isi, prevent error; (2) maintain downward momentum; (3) hint di bawah bisa ke-cover autofill dropdown / mobile keyboard.
- **Impact estimate:** medium — user prevent error vs corrective error. Critical hints (password rule, format rule) lebih impactful kalau pre-input.
- **Tech effort:** medium — Aurora form-field component perlu support `hint-position` prop atau split component. Regression check semua form Paper.id.
- **Status:** open
- **Notes:** Surface dari knowledge extraction Practical UI 2026-05-22. Compromise possible: critical hint atas, decorative hint bawah. Perlu audit Aurora source + diskusi maintainer.

---

### Disabled submit button pattern

- **Date logged:** 2026-05-22
- **Source insight:** Practical UI by Adham Dannaway, Bab 8 (Buttons), hal 262-266 ([kartu](books/practical-ui/kartu/try-to-avoid-disabled-buttons.md)) + Bab 7, hal 248 ([kartu](books/practical-ui/kartu/validate-on-submit-not-inline.md))
- **Current DS:** Banyak modal/form Aurora pakai disabled Save button pattern (sampai form valid). Perlu confirm pattern frekuensi vs case-by-case.
- **Book suggests:** Enable button always, validate on submit, show inline error messages. Avoid disabled buttons.
- **Quote verbatim:**
  > "Instead of disabling the submit button, enable it and display error messages on submit."
- **Reasoning:** Disabled button problems: (1) user stuck tanpa feedback "kenapa ga bisa"; (2) low contrast hard untuk vision-impaired; (3) keyboard inaccessible (focus skip). Enable + validate gives clear feedback.
- **Impact estimate:** high — direct UX impact, accessibility implications. Disabled-Save modal pattern widely used di Paper.id.
- **Tech effort:** high — perlu redesign validation flow, add inline error state untuk semua form, update Aurora dialog/form components.
- **Status:** open
- **Notes:** Trade-off real — disabled prevent invalid submission upfront, tapi sacrifice feedback clarity. Compromise: form simple (≤5 field) → enable+validate; form kompleks dengan inter-field dependency → safer disable + tooltip. Perlu diskusi DS team + UX research.

---

### Radio button threshold (5-8 evaluation)

- **Date logged:** 2026-05-22
- **Source insight:** Practical UI by Adham Dannaway, Bab 7 (Forms), hal 235 ([kartu](books/practical-ui/kartu/radio-vs-dropdown-threshold.md))
- **Current DS:** Paper.id rule ≤4 = radio, ≥5 = dropdown (per [[paperverse-design-decisions]] 2026-05-19)
- **Book suggests:** ≤10 = radio
- **Quote verbatim (paraphrase):**
  > "If there are around 10 options or fewer, consider displaying them as radio buttons instead of hiding them in a dropdown."
- **Reasoning:** Radio advantages clear (1-click vs 2-click, always visible, accessible). Threshold 10 lebih longgar dari ≤4. Paper.id konservatif untuk B2B finance context (form panjang, vertical space precious).
- **Impact estimate:** low — Paper.id rule menang for now. Data point future evaluation.
- **Tech effort:** none — keep Paper.id rule.
- **Status:** rejected (keep Paper.id rule, no change needed)
- **Notes:** Catat sebagai data point. Kalau future iteration mau evaluate looser threshold (5-8 opsi tertentu, mis. Status dengan 5 opsi pakai radio), buka diskusi pakai entry ini.

---

### Validation timing (inline vs on-submit)

- **Date logged:** 2026-05-22
- **Source insight:** Practical UI by Adham Dannaway, Bab 7 (Forms), hal 248 ([kartu](books/practical-ui/kartu/validate-on-submit-not-inline.md))
- **Current DS:** Pattern current TBD — perlu audit Aurora form-field apakah inline validation default atau on-submit.
- **Book suggests:** Validate on SUBMIT, bukan inline (real-time). Inline = intrusive, premature feedback.
- **Quote verbatim:** related to validate-on-submit-not-inline.md kartu (no specific quote — synthesized from chapter context)
- **Reasoning:** Inline validation catches error faster but feel premature/intrusive (mis. user belum selesai ngetik email, langsung "Invalid email"). On-submit batch tapi user finalize input first sebelum get feedback.
- **Impact estimate:** medium — UX feel. Inline = anxious, on-submit = bulk feedback.
- **Tech effort:** medium — depend on current implementation. Kalau current inline, refactor ke on-submit moderate.
- **Status:** open
- **Notes:** Compromise: late inline (validate setelah blur/onChange complete, not onKeyup) — best of both. Audit current pattern + diskusi UX research.

---

### APCA contrast migration evaluation

- **Date logged:** 2026-05-22
- **Source insight:** Practical UI by Adham Dannaway, Bab 3 (Colour), hal 63-66
- **Current DS:** Aurora pakai WCAG 2.1 AA contrast standard.
- **Book suggests:** Migrate ke APCA (Accessible Perceptual Contrast Algorithm — WCAG 3 draft). Lebih accurate untuk human perception, better untuk dark interfaces.
- **Quote verbatim:**
  > "The new APCA system is a bit more complex, but a lot more practical, especially for interfaces with a dark background."
- **Reasoning:** APCA solves WCAG 2 limitations (mis. white text on orange fail WCAG2 padahal jelas readable, black text pass padahal less readable). Better untuk dark interfaces. But WCAG 3 masih DRAFT, not finalized.
- **Impact estimate:** low (current) → high (future). Saat ini WCAG 2 cukup compliance. Future-proofing.
- **Tech effort:** high — semua design token color perlu re-audit, contrast measurement tool perlu update.
- **Status:** open (wait for WCAG 3 finalized)
- **Notes:** Buku rekomen: commercial product stick WCAG 2 sampai WCAG 3 finalized. Test design pass BOTH untuk optimal. Track WCAG 3 progress. Future migration kalau WCAG 3 stable.

---

## Resolved (history)

_(belum ada — section untuk entry yang udah discussed → accepted/rejected)_
