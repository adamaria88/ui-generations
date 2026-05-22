---
book: "Refactoring UI"
author: "Adam Wathan & Steve Schoger"
edition: "2018"
isbn: ""
slug: "refactoring-ui"
extracted_at: "2026-05-22"
extracted_by: "claude-sonnet-4-6"
review_status: "draft"
reviewer: ""
tags: [hierarchy, spacing, color, typography, depth, visual-polish, empty-state, form, component]
---

# Refactoring UI — Adam Wathan & Steve Schoger

## Thesis (1 kalimat inti)

Good-looking UI is not a talent — it's the result of applying specific learnable techniques: visual hierarchy through weight and color, systematic spacing, intentional color palettes, depth through layered shadows, and deliberate polish details.

---

## 3-5 Framework Utama (mental model reusable)

### Framework 1: Visual Hierarchy — De-emphasize, Don't Always Emphasize
- **When to invoke:** Anytime a page feels "noisy" or you want to highlight a primary element but everything looks the same weight
- **The thinking:** Hierarchy is created through three levers: size, weight (bold/regular), and color (primary vs muted). The instinct is to make primary things bigger — but it's often more effective to de-emphasize secondary things (make labels grey, make supporting text lighter) so the primary element wins by contrast. Visual hierarchy is independent from semantic hierarchy (h1-h6).
- **Anti-pattern:** Making every action a filled button, every label the same color as its value, every section header as bold as body text — everything shouts, nothing stands out
- **Source:** Ch2 — Hierarchy is Everything, page TBD

### Framework 2: Spacing System — Start Big, Then Tighten
- **When to invoke:** Any time you start a new layout, add a new component, or a page feels cramped
- **The thinking:** Default to more whitespace than you think you need — it's easier to reduce than to add. Use a systematic scale (multiples of 4: 4/8/12/16/24/32/48/64/96/128) instead of arbitrary pixel values. Proximity signals relationship: elements that belong together should be closer than elements that don't.
- **Anti-pattern:** Filling available width because the space exists; using inconsistent spacing values; placing labels right next to unrelated elements because there's room
- **Source:** Ch3 — Layout and Spacing, page TBD

### Framework 3: Color Palette — HSL + Intentional Shades
- **When to invoke:** Setting up a color system, extending a DS palette, or when colors feel inconsistent or clash
- **The thinking:** Use HSL (not hex/RGB) — adjusting lightness and saturation is intuitive. Each hue needs 8-10 shades (100 lightest → 900 darkest). Pure greys (#777, #ccc) look wrong on screen — add a subtle hue hint (blue-grey, warm grey). Never use color as the sole signal for state — pair with icon, weight, or text.
- **Anti-pattern:** Random hex values that don't relate to each other; true grey (#888) that looks lifeless; blue link on colored background that fails WCAG
- **Source:** Ch5 — Working with Color, page TBD

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

## Reading Map (peta topik kartu)

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

## Money Quotes (1-3 quote berkesan)

1. > "Don't let your existing beliefs hold back your designs — constraints are powerful but sometimes a bit of freedom is just what you need to take an interface to the next level."
   — Ch8 — Think outside the box, p.246

2. > "Did the designer do anything here that I never would have thought to do?"
   — Ch9 — Leveling Up, p.251 (question to ask when studying good designs)

3. > "By continually studying the work that inspires you with a careful eye, you'll be picking up design tricks for years to come."
   — Ch9 — Leveling Up, p.252

---

## Aplikasi untuk Paper.id

- **Untuk List Page (Invoice, Pengeluaran, Customer):** Framework 1 (hierarchy) langsung apply — badge status pakai chip warna + de-emphasize secondary text. Value amounts = besar/bold, currency label = muted. Lihat `_output/expense-management/02-ui-aurora.html` untuk reference.
- **Untuk Empty States semua modul:** Ch8 rule: tambahkan ilustrasi + tombol CTA primary yang jelas. Jangan biarkan "Belum ada data" plain tanpa action. Hide tab/filter yang irrelevant saat kosong.
- **Untuk Form page:** Selectable cards bisa apply ke pilihan paket/tipe yang penting (≥2 perbedaan signifikan). Aurora radio tetap jadi default untuk pilihan sederhana.
- **Untuk card/table design:** Accent border (thin colored top strip) bisa jadi pembeda section tanpa menambah border yang noisy. Fewer borders rule: gunakan bg color difference atau spacing dulu sebelum pasang `border`.
- **Untuk Color System:** HSL mental model sangat relevan saat extend Aurora palette — misal state warna custom untuk status tertentu.

---

## Konflik dengan Aurora / Paper.id Rules

- **Topik:** Selectable card untuk radio buttons
  - **Buku bilang:** Kalau radio button adalah bagian UI yang penting, upgrade ke selectable cards (card dengan border highlight saat selected)
  - **Paper.id pilih:** Radio button standar untuk ≤4 opsi (Aurora component au-radio). Selectable card BELUM ada di Aurora DS.
  - **Alasan:** Aurora belum punya au-selectable-card. Kalau butuh, harus custom + catat di AURORA-OVERRIDES.md. Ref: [[paperverse-design-decisions]] threshold radio ≤4.

- **Topik:** Link styling (fancy underlines)
  - **Buku bilang:** Custom link underlines (gradient clip, partial overlap) untuk emphasis
  - **Paper.id pilih:** Aurora au-link styling (biru standard). Override hanya kalau ada kebutuhan spesifik.
  - **Alasan:** Konsistensi Aurora DS lebih penting dari variasi dekoratif untuk B2B.

- **Topik:** Ilustrasi di empty state
  - **Buku bilang:** Empty state = kesempatan jadi menarik, tambah ilustrasi
  - **Paper.id:** Aurora punya empty state pattern yang lebih restraint (icon + text + button). Full ilustrasi custom belum diputuskan.
  - **Alasan:** Belum ada Aurora illustration library. Gunakan Aurora empty state component dulu, lapor ke DS maintainer jika perlu ilustrasi custom.

_(konflik minor — keputusan Aurora menang kecuali ada keputusan user eksplisit)_

---

## Adaptation Note

Buku published 2018 — 8 tahun yang lalu. Mayoritas teknik masih 100% current untuk web SaaS. Yang perlu diperhatikan:
- Beberapa screenshot contoh adalah marketing/landing page (bukan pure app UI). Mental model tetap berlaku, tapi adaptasi ke in-app context mungkin perlu.
- Contoh library CSS tidak disebut (buku tool-agnostic). Apply ke Aurora DS fine.
- Typography advice: sistem font yang disebut sudah sebagian digantikan Inter, DM Sans, dll — tapi heuristik line-height/line-length tetap valid.

---

## Cross-refs (ke buku lain / rule lain)

- Memperkuat rule `[[aurora-lookup-ritual]]` — buku menekankan "build from real components, tidak ngarang"
- Memperkuat rule `[[prototyping-gap-lessons]]` poin 0h — Action Hierarchy by Page Purpose
- Memperkuat rule `[[paperverse-design-decisions]]` — threshold radio/dropdown, definisi destructive
- Memperkuat rule `[[label-disambiguation-rule]]` — labels secondary, values primary (Framework 1)
