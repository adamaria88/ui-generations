---
book: "Practical UI"
author: "Adham Dannaway"
edition: "2022 (1st edition)"
isbn: "978-0-6456766-0-0"
slug: "practical-ui"
type: "bacaan-naratif"
extracted_at: "2026-05-22"
extracted_by: "claude-opus-4-7"
review_status: "reviewed"
reviewer: "design.paper.id"
companion_to: "practical-ui-ringkasan.md"
target_audience: "Paper.id senior designer, B2B finance SaaS, hasn't read this book yet"
reading_time: "~18-20 minutes"
word_count: "~2700"
---

# Practical UI — Casual Read

> **[VISUAL: Hero / Cover Section]**
> Full-width banner at the very top of the document, height ~400-500px:
> - Background: subtle gradient (light cream → light blue) or solid light tint
> - Left (60% width): main heading "Practical UI" at a very large size (60-72px bold), sub-heading "18-Minute Casual Read" (24px medium), author name "by Adham Dannaway · 2022 · 282 p." (16px muted). Below it, 3 small chips: "📖 ~2700 words", "⏱️ 18-20 minutes", "🎯 B2B finance designer"
> - Right (40% width): illustration/cover mock — could be 3 simple UI components (form field, primary button, color swatch) arranged with slight overlap and a soft shadow, or the Practical UI book cover if an image is available
> - Below the banner, a horizontal callout "Reading outline" — 5 chips in a row with icons: (A) Thesis · (B) Top 10 Insights · (C) 5 Quotes · (D) Per Chapter · (E) 3 Actionable

A narrative reading summary of the book **Practical UI** (Adham Dannaway, 2022, 282 p.). This format is for a relaxed 15-20 minute read; if you want detailed reference cards for Mode 2 retrieval, see `practical-ui-ringkasan.md` + the 45 cards in this folder.

---

## A. BOOK THESIS

Adham Dannaway wants to bust the myth that UI design is about "talent" or some magical aesthetic taste. According to him, almost every good interface decision is actually the result of a set of simple logical rules you can learn. Every detail — button size, color, spacing between elements, the order of fields in a form — should have a rational reason you can articulate, not just "it feels right". He distills two decades of experience into three measuring sticks: reduce the risk of confusion (**usability risk**), reduce the user's physical + mental effort (**interaction cost**), and reduce the brain's effort to understand (**cognitive load**). If you can answer "why this way" using those three measures — not "because it looks cool" — your design already beats 80% of the UI out there.

> **[VISUAL: 3-Pillar Framework Diagram]**
> Draw 3 large circles in a horizontal row (or Venn-style with slight overlap). Each one has a large label in the center:
> - **Pillar 1: Usability Risk** — icon ⚠️/eye. Sub-text: "Is anything confusing/unclear/ambiguous?"
> - **Pillar 2: Interaction Cost** — icon click/cursor. Sub-text: "How many clicks, scrolls, searches, reads does the user have to do?"
> - **Pillar 3: Cognitive Load** — icon brain. Sub-text: "How much does the user have to think/remember/decide at once?"
> Above the three circles: heading "Three measures that replace 'taste'". Below: a small line "Audit your design with these 3 levers, not opinion."
> Monochromatic brand colors (navy blue + shade variations), not rainbow.

Why this thesis is powerful: it turns the review meeting from a taste debate ("I feel like the button isn't big enough") into an objective one ("the Save button is the primary action — does it still dominate when you squint? if not, make it bigger"). And he applies it consistently across all 282 pages of the book — from color to copywriting, everything is justified with the same logic.

Important note: this book is **not a theoretical textbook**. Adham just gives practical guidance that "works well in most cases" — he says so himself in the intro, design is rarely black and white. So treat all the rules as defaults, not dogma.

---

## B. TOP 10 INSIGHTS (ordered by impact)

### 1. Every design detail must have an articulable "logical reason"
This is the foundation of every chapter. Before you enlarge a button or change a border color, ask yourself: "why". If the answer is "because it looks nicer" or "for consistency" with nothing more, that's not a rationale — that's an opinion. A valid rationale always ties back to one of these: helping the user see (usability), reducing effort (interaction cost), or reducing brain load (cognitive load).
**Concrete example in the book:** Adham rejects the feedback "I just feel like the button should be bigger" as a non-rationale, and asks the person to answer "bigger for what — so it's easier to tap on mobile? so it's more dominant than the secondary?". Once it's specific, you can decide. (Chapter 1, p. 17-18)

### 2. Three measures that replace "taste": usability risk, interaction cost, cognitive load
This is an audit framework you can apply to everything: forms, tables, modals, even copy. **Usability risk** = is anything confusing/unclear/ambiguous? **Interaction cost** = the number of clicks, scrolls, searches, and reads the user has to do. **Cognitive load** = how much the user has to think, remember, or decide at once. If one of them goes up with no gain in the others, the design loses.
**Concrete example:** Light grey text "to look sleek" — it looks minimalist but its usability risk is sky-high (elderly people, or anyone in glare outdoors, can't read it). A 2-column form "to save space" — it makes the user's eyes zig-zag (interaction cost goes up) and forces them to remember which fields they've already filled (cognitive load goes up). (Chapter 1, p. 15-23)

### 3. "If everything is important, nothing is important"
Visual hierarchy is literally how the user knows what to look at first. You have 6 levers: size, color, contrast, spacing, position, depth (shadow). Apply them in order of importance, not evenly. To validate, use the **Squint Test**: close your eyes halfway or blur the Figma — if you can still point to one main focal point, your hierarchy is right. If everything looks equally heavy, you've failed.
**Concrete example:** A page has 4 equally heavy blue pill buttons ("Filter", "Sort", "Export", "Buat Invoice") — the squint test gives you 4 dominant points, the user is confused about which to click first. Fix: only "Buat Invoice" is the primary pill, the rest are text links. (Chapter 4 + Chapter 8, p. 120 & 259)

> **[VISUAL: Squint Test Before/After]**
> 2-column side-by-side layout, each mocking up the toolbar of a List Invoice page:
> - **Left column (label "Wrong — everything equally heavy"):** 4 solid blue primary pills in a row: [Filter] [Sort] [Export] [Buat Invoice]. Below it, an 8px-blur version — you see 4 equally large blue blobs, no focal point.
> - **Right column (label "Right — 1 anchor"):** 1 solid blue primary pill [Buat Invoice] on the far right, plus 3 blue text links (Filter · Sort · Export) on the left. Below it, an 8px-blur version — you see only 1 dominant blue blob on the right, the rest faint.
> Caption below: "Close your eyes halfway or blur the Figma — if the focal point still reads as a single point, your hierarchy wins."

### 4. One primary button per page. Maximum.
This is the most concrete implementation of insight #3. The primary button (filled, brand color) is the **visual anchor** — it becomes the focal point because it's RARE. The moment you place 2-3 primaries on one page, its dominance is gone, and the user is confused again. For other actions on the same page: secondary (border only) for equal-weight, tertiary (text link) for the lowest or destructive ones.
**Concrete example:** An Add Partner form has "Simpan" + "Batal" + "Simpan & Tambah Lagi" buttons — if all three are primary pills, a first-time user will surely click "Simpan & Tambah Lagi" without realizing. Fix: "Simpan" primary, "Simpan & Tambah Lagi" secondary (border), "Batal" tertiary (text link). (Chapter 8, p. 258)

> **[VISUAL: 3-Tier Button System]**
> A horizontal row of 3 buttons side-by-side, with tier labels above them:
> - **Primary:** Solid blue pill, white text "Simpan invoice", 1 dominant arrow/icon above (label "1 per page MAX")
> - **Secondary:** Pill with white background + thin 1px blue border, blue text "Simpan & buat baru" (label "For equal-weight actions")
> - **Tertiary:** Text only "Batal" in blue with a thin underline (label "For least important")
> Below: a visual explanation of why hierarchy can't rely on color alone — show those 3 buttons in grayscale mode, and you must still be able to tell the tiers apart (filled vs border vs text).
> Caption: "Different tier = different fill style, not just different color. Color-blind users can still read the hierarchy."

### 5. Forms MUST be single column, label above the input
People read downward, not zigzag. Single column = a clear top-to-bottom momentum, the user doesn't have to "hunt for where the next field is". Label above the input is also critical — because once the user is focused on typing, a label beside the field gets covered by the mobile keyboard or drops out of peripheral vision. Field width should also **match the expected input** (a zip code doesn't need to be as wide as a long name) — that gives the user a silent hint about the expected input length.
**Concrete example in Paper.id:** A Catat Pengeluaran form with "Tanggal" + "Jumlah" + "Vendor" fields — don't force 2 columns. Stack them vertically, label above, and make the Tanggal field 12 characters wide (dd/mm/yyyy), Jumlah 15 characters wide, Vendor full-row. (Chapter 7, p. 214-225)

> **[VISUAL: Form Layout Comparison — Single vs Multi Column + Field Width]**
> 2 side-by-side panels, a Catat Pengeluaran form mock-up:
> - **Left panel (label "❌ Multi-column + everything full-width"):** 2-column layout — Tanggal next to Jumlah, all fields the same shape and width (full container width). Add a red zigzag arrow from Tanggal to Jumlah to Vendor illustrating the user's eye path.
> - **Right panel (label "✅ Single column + field width matches input"):** Single vertical column — Tanggal at the top (short width ~140px, looks like dd/mm/yyyy), Jumlah below (medium width ~200px), Vendor below (full row). Add a straight green arrow going down illustrating the downward momentum.
> Caption: "Field width = a silent hint to the user about the expected input length. Eyes read downward, not zigzag."

### 6. For destructive actions: give UNDO, not a confirmation modal
Counter-intuitive but research-backed. The friction ladder (no-friction → light confirm → medium red-button → heavy checkbox) does have its place — but for 80% of everyday destructive cases, **allowing undo via toast/snackbar is better than a confirmation modal**. The reason: a modal interrupts the flow, and a user who's sure gets annoyed; whereas a "Item deleted — Undo?" toast that shows for 5-10 seconds gives a safety net without blocking. Heavy friction (modal + type the name to confirm) is only valid for genuinely irreversible nuclear options: delete account, delete organization.
**Concrete example:** Gmail archives an email instantly with a "Message deleted — Undo" toast — compare that to an app that pops up a "Are you sure you want to delete this message?" modal every single time. (Chapter 8, p. 277-279)

> **[VISUAL: Friction Ladder + Toast Undo Alternative]**
> A vertical display of 4 rows (the friction ladder) + 1 alternative at the very bottom:
> - **Level 1 (no friction):** A small trash icon. Caption "Hidden/rarely-used action."
> - **Level 2 (light confirm):** A simple modal "Delete item?" + buttons [Batal] [Hapus]. Caption "Confirm without heavy visuals."
> - **Level 3 (medium):** A modal with a ⚠️ icon + buttons [Batal] (secondary) + [Hapus] (filled red). Caption "Visual emphasis on the consequence."
> - **Level 4 (heavy):** A modal with a checkbox "I understand this action cannot be undone" + an input "Type the name to confirm" + button [Hapus selamanya] (disabled until the checkbox + typing are done). Caption "Nuclear option: delete account/organization."
> A horizontal divider line.
> - **Better alternative:** A snackbar toast at the bottom of the viewport "Pengeluaran dihapus" + a white text button "Urungkan" + a thin timer bar counting down 7 seconds. Caption "For 80% of everyday destructive actions — 1 click, done, the safety net is still there."
> Overall caption: "The ladder has its place. But for deleting a table row / draft / unsaved item — toast undo is far faster and doesn't bother a user who's sure."

### 7. 4 ways to group: container, proximity, similarity, continuity — combine 2-3
You've got a set of related info that should read as one group. A container (box/border) is the strongest but the most crowded — used too much, the design becomes "border soup". **Proximity** (place related elements closer together, with more distance to unrelated ones) is often already enough. **Similarity** (same color/font/size) can add to it. **Continuity** (line alignment) works too. What Adham stresses: 2-3 methods combined > 1 strong method. Inner spacing within a group should always be < the outer spacing between groups.
**Concrete example:** A "Total Pengeluaran" card on the dashboard — instead of wrapping it in a thick border, just use a light background tint + tight proximity between the value & label. Cleaner. (Chapter 4, p. 105-119)

> **[VISUAL: 4 Grouping Methods Side-by-Side]**
> A 2x2 grid, each box demonstrating 1 grouping method on the same data (e.g. 3 rows of "Label: Value" — Tanggal: 22 Mei 2026 / Jumlah: Rp 1.500.000 / Vendor: PT Kopi Nusantara):
> - **Top-left: Container** — the 3 rows wrapped in a 1px grey border + padding. Caption "Strongest, but the most crowded."
> - **Top-right: Proximity** — the 3 rows without a border, with tight spacing between rows (4px), but a large distance to other content outside the group (32px+). Caption "Enough for light grouping."
> - **Bottom-left: Similarity** — the 3 rows with the same visual treatment (same label color, same weight, same alignment). Caption "Uniform visual treatment = a grouping signal."
> - **Bottom-right: Continuity** — the 3 rows left-aligned on an invisible grid. Caption "The eye follows a straight line = a group signal."
> Below the grid, a fifth panel with the label "💡 Recommended: Combine 2-3" — show a card with a light background tint (mild container) + tight proximity (4px gap) + similarity (all labels bold-small, values regular-medium). Caption "2-3 methods combined > 1 strongest method. Inner spacing < outer spacing."

### 8. Avoid disabled submit buttons (by default), enable + validate on submit
One of the most counter-current insights in the book. The popular "Submit disabled until the form is valid" pattern turns out to have several problems: (a) the user doesn't know why it's disabled, (b) disabled text usually has low contrast so accessibility is poor, (c) keyboard users can skip over a disabled button, (d) the flow gets stuck with no feedback. Better: enable the button, then validate on click. If there's an error, scroll to the first error field + show a clear inline error message.
**Concrete example:** A KYC form with 8 fields. Old pattern: Submit disabled. The user fills 7 fields, thinks "why can't I click?" — there's no feedback about which field is missing. New pattern: Submit enabled. The user clicks, and immediately learns "NPWP wajib diisi" + auto-scrolls to that field. (Chapter 7, p. 248)

> **[VISUAL: Disabled vs Enabled Submit — Flow Comparison]**
> 2 side-by-side panels, a KYC form mock-up with 8 fields (some filled, 1 empty NPWP field):
> - **Left panel (label "❌ Disabled — user stuck"):** The Submit button is muted (light grey, grey text, no cursor). Show a thought bubble at the user icon: "Why can't I click it? Which field is missing?" Add the annotation: "Low contrast = accessibility issue. Keyboard skip-over. No feedback."
> - **Right panel (label "✅ Enabled + validate on submit"):** The Submit button is fully active (blue, white text). After clicking, a red inline error appears at the NPWP field: "NPWP wajib diisi" + auto-scroll to that field + red outline. Add the annotation: "The user immediately knows which field is missing. Clear feedback."
> Caption: "Counter-intuitive: enabling is better than disabling. The user gets clarity, accessibility wins."

### 9. For brand color: build a monochromatic palette, avoid pure black
Instead of picking dozens of grey shades for border, background, text — build a **monochromatic palette** from a single brand color. The variations differ only in brightness/saturation. The result is neater, more cohesive, and decisions are faster (you won't agonize over "grey #888 or #999"). Plus: avoid pure black (#000) on pure white — a 21:1 contrast tires the eyes during long reads. Use dark navy or dark grey, or give black a "tinge" of the brand color.
**Concrete example:** Aurora uses `#133f5d` (dark navy) as text-primary, not pure black. It's automatically more comfortable for long reads, and has a "brand feel" because the color connects to the brand blue. (Chapter 3, p. 79 & 158)

> **[VISUAL: Monochromatic Palette + Pure Black vs Tinged Black]**
> Part 1 — Palette swatches: show a single horizontal row of 5 large boxes (~120×120px), monochromatic from Paper.id's brand blue:
> - Darkest (the darkest, for text) → Dark → Medium → Light → Lightest (for background/tint)
> Below each swatch: an example HSL value + use case ("text-primary", "primary action", "hover bg", "selected row", "page background").
> Part 2 — Side-by-side text contrast comparison, 2 white boxes:
> - **Left:** Heading + 4-line body paragraph in pure black #000. Tag "❌ Pure black — 21:1 contrast, tires the eyes on long reads."
> - **Right:** Heading + 4-line body paragraph in dark navy tinged #133f5d. Tag "✅ Tinged dark — softer, still high contrast, brand feel connects."
> Caption: "A predefined palette > picking a random color every time. Automatic consistency, faster decisions."

### 10. Typography: single sans-serif, regular + bold only, line length 40-80 characters
A safe default for 95% of interfaces: a single sans-serif typeface. Effortless consistency. Just two weights: **regular and bold** — don't explore light/medium/black, the more weights the more clutter. For long body text, keep the line length between 40-80 characters per line (including spaces). Too long = the eyes tire returning to the start of the line; too short = constant zigzagging.
**Concrete example:** The Invoice Detail page in Paper.id, the description/notes column. If you leave it at full-width 1200px, the user struggles to read long paragraphs. Limit the max-width to ~600-700px (= ~70 characters at 16px font). (Chapter 5, p. 167 & 182)

> **[VISUAL: Line Length Comparison 40-80 Sweet Spot]**
> 3 identical body text paragraphs (dummy text ~3 lines) shown stacked vertically:
> - **Paragraph 1 (label "Too short — ~30 chars"):** Narrow width (e.g. 200px), show a ruler above marked at 30 chars. Add a zigzag arrow on the side illustrating eyes that have to return too often.
> - **Paragraph 2 (label "✅ Ideal — 60-70 chars"):** Medium width (e.g. 600px), show a ruler above marked at 60-70 chars (the 40-80 sweet spot highlighted green). A slow straight arrow on the side.
> - **Paragraph 3 (label "Too long — ~110 chars"):** Wide width (e.g. 1100px), show a ruler marked at 110 chars. A long arrow on the side illustrating eyes that tire returning to the start of the line.
> Below: a callout text "Sweet spot: 40-80 characters per line. 16px body text = ~600-700px max-width."
> Add a mini-tip box: "Single sans-serif + Regular + Bold = the default for 95% of interfaces. Don't explore 5 weights."

---

## C. MONEY QUOTES — 5 signature quotes

> **[VISUAL: Quote Treatment Style — Global for all 5 quotes]**
> Each quote in this section is rendered like a "poster card" — not just a plain blockquote:
> - Card background: light tinted (e.g. light blue-50 or cream), large padding (40-60px)
> - Quote text: serif or sans-serif bold weight, large size (24-32px), dark navy color
> - A large quotation mark in the top-left corner of the card (typographic mark `"` at 80px+, low opacity 20%)
> - Author/source below, regular weight, small size (14px), muted color
> - Between quotes: generous vertical spacing (~64px)
> - The English paraphrase + 1-2 sentences of explanation below the card, plain regular text
> Goal: these quotes should stand out — if someone scans the page quickly, their eyes should catch the quote first.

### 1.
> *"If everything is important, nothing is important."*
> — Chapter 8 (Buttons), p. 259

**Paraphrase:** If you mark everything as important, nothing ends up being important.

This quote is super concise but ties into the entire hierarchy concept — from the button system, color, typography, to placement. Every time you're tempted to add "just one more primary pill", remember this line.

### 2.
> *"Designing interfaces using objective logic, rather than subjective opinion, makes it faster and easier to make design decisions."*
> — Chapter 1 (Fundamentals), p. 17

**Paraphrase:** Design with objective logic, not subjective opinion — decisions become faster and easier.

This is Adham's thesis statement. The implication for you: when a review meeting stalls over a taste debate, go back to logic. "Is your argument an opinion or a rationale? If it's an opinion, let's test it."

### 3.
> *"The higher the interaction cost, the harder it is for someone to achieve their task."*
> — Chapter 1 (Fundamentals), p. 19

**Paraphrase:** The higher the interaction cost, the harder it is for the user to complete their task.

A reminder that "just one more click" really is a cost. Every extra step, scroll, search, modal — it genuinely lowers the completion rate, not just annoying.

### 4.
> *"Minimal doesn't mean simple."*
> — Chapter 2 (Less is more), p. 52

**Paraphrase:** Minimal is not the same as simple.

This quote pushes back on the "lots of white space + tiny text + ghost buttons everywhere" trend. Adham says: minimal is a STYLE; simple is an OUTCOME. You can be minimal but confusing (hidden affordances). You can be visually rich but simple to use (old Microsoft Word). Aim for simple, not minimal-as-aesthetic.

### 5.
> *"Buttons should have a clear visual hierarchy that isn't reliant on colour."*
> — Chapter 8 (Buttons), p. 254

**Paraphrase:** Buttons should have a clear visual hierarchy, and it must not rely on color alone.

Hugely important for accessibility. About 8% of men are color-blind. If the only thing distinguishing primary from secondary is blue vs grey, a color-blind user can't tell which is the primary. The fix: combine color + weight (filled vs border) + size. The hierarchy stays readable even if you print it in black-and-white.

---

## D. PER CHAPTER HIGHLIGHTS

> **[VISUAL: Per-Chapter Treatment — Global pattern for the 8 chapters]**
> Each chapter in this section is rendered as a "chapter card" with a consistent structure:
> - **Chapter header bar:** A large chapter number (e.g. "01" circular, 64×64px solid blue badge, white bold text at 32px) aligned horizontally with the chapter title (24px bold) and the muted page range on the right ("p. 14-44").
> - **Body:** Normal narrative paragraph text 16-18px, line-length max 700px.
> - **Side accent:** A thin 4px vertical bar in the brand color to the left of the body, as a "chapter content" signal.
> - **Quick takeaway pill:** Below the paragraph, a single soft-yellow highlight line "💡 In one read: <1 short sentence with the chapter's core>" — giving each chapter a visible TL;DR.
>
> For the chapters with heavy visual concepts — Chapter 3 (Colour), Chapter 4 (Layout), Chapter 5 (Typography), Chapter 7 (Forms), Chapter 8 (Buttons) — add 1 inline mini-visual (e.g. a swatch row for Colour, a 6-lever icon row for Layout hierarchy, a type-scale sample for Typography). Per-chapter details below.

### Chapter 1 — Fundamentals (p. 14-44)
The densest and most important chapter. Adham says **most design decisions are governed by a system of logical rules** — not talent. He introduces the 3 measuring pillars (usability risk, interaction cost, cognitive load) used consistently throughout the book. The concept of "**predefined sets**" is also introduced here: instead of picking colors/spacing/font-sizes from unlimited options each time, build a limited set with a clear purpose. That's what later becomes a design system. An extra insight that often gets skipped: he distinguishes between *patterns* (Jakob's Law — use a convention users already know by heart) versus *novel solutions* (riskier, must be validated via testing). For Paper.id, this directly supports why the Aurora Lookup Ritual is enforced so hard: convention > creativity. This chapter is worth reading twice.

### Chapter 2 — Less is more (p. 45-59)
The shortest chapter but it holds the most dangerous quote: "**minimal doesn't mean simple**". Adham accuses the minimalism trend of being misleading — many designers reduce the visuals to too little, until the **affordance** (the visual cue "this is clickable") disappears. Buttons become ghosts (border only, no fill), an input field without a border looks like a plain text label, a link without an underline looks like a headline. He also explains **progressive disclosure**: hide non-critical info first, expose it when the user needs it. For example: on Invoice Detail, don't show 30 fields all at once — an "Info Tambahan" section can be collapsed by default. But Adham warns: progressive disclosure ≠ hide a critical action. A "Hapus" button hidden in a kebab menu (⋮) is OK because destructive actions are rarely used; but hiding a "Simpan" button in a sub-menu = a sin.

### Chapter 3 — Colour (p. 60-103)
The most technical chapter in the book. Adham starts with **WCAG 2.1 AA contrast ratios**: 4.5:1 for small text (≤18px), 3:1 for large text and UI elements (form field border, icon). He also introduces APCA (the WCAG 3 draft) which he considers more accurate for dark interfaces — but the industry still uses WCAG 2 because it's the official standard. What's practical for you: **avoid pure black (#000)** on pure white — a 21:1 contrast tires the eyes on long reads (use dark grey or dark navy with a "tinge" of the brand color). For the brand palette, he recommends **monochromatic** from one main color: 5 shades (darkest, dark, medium, light, lightest) plus separate neutral greys. That gives a color design system that's easy to maintain. Another often-skipped tip: don't use the brand color too much — reserve it for **interactive elements** (button, link, focus state), not decoration.

> **[VISUAL Chapter 3 — Contrast Ratio Cheat Sheet]**
> An inline mini-visual below the Chapter 3 paragraph:
> Show 2 rows of contrast examples side-by-side, each with a ratio label:
> - Row 1 "For small text ≤18px → minimum 4.5:1": a white box with text "Lorem ipsum dolor sit amet" in a dark color (✅ 7:1 pass) on the left, vs the same but in light grey #999 (❌ 2.8:1 fail) on the right.
> - Row 2 "For large text / UI element → minimum 3:1": a white box with a "Heading 24px" heading + a solid form field border on the left (✅ 4:1 pass), vs a version with a pale border (❌ 2:1 fail) on the right.
> Caption: "Avoid pure black (21:1) — too much contrast = tired eyes. Sweet spot is dark navy/dark grey."

### Chapter 4 — Layout & spacing (p. 104-162)
The most reusable chapter. Adham introduces the **4 grouping methods**: container (border/background), proximity (spacing), similarity (same visual treatment), continuity (alignment). The tip: use 2-3 methods combined, not the single strongest method. Use containers sparingly — they're the most crowded tool. The golden rule of spacing: **inner spacing is always smaller than outer spacing**. If the card padding is 16px, the gap between cards should be 24-32px — so the user's eyes automatically catch what's a group and what's a divider. He also breaks down the **6 levers of visual hierarchy**: size, color, contrast, spacing, position, depth (shadow). Use them in order of importance — don't apply every lever to every element. To validate: the **Squint Test** (close your eyes halfway or blur 8px) — if the focal point is still visible = correct. A useful addition: keep related actions close. An "Edit" button for a card should be near that card, not in a global toolbar far above.

> **[VISUAL Chapter 4 — 6 Lever Visual Hierarchy Row]**
> A horizontal row of 6 labeled icons, each demonstrating 1 lever:
> 1. **Size** — small "Hello" text vs large "Hello"
> 2. **Colour** — muted grey text vs brand blue text
> 3. **Contrast** — low-contrast text vs high-contrast
> 4. **Spacing** — 2 elements close together vs 2 elements far apart
> 5. **Position** — an element at the edge vs in the center/top
> 6. **Depth** — a flat element vs an element with a soft shadow
> Caption: "6 levers you can turn to build hierarchy. Use them in order of importance — DON'T apply every lever to every element."
>
> **[VISUAL Chapter 4 — Inner vs Outer Spacing]**
> 2 horizontal cards shown the same size:
> - Version A (label "✅ Inner < Outer"): card inner padding 16px, gap between cards 32px. Annotation arrows show both distances.
> - Version B (label "❌ Inner = Outer"): card inner padding 24px, gap between cards 24px. Looks stuck together/ambiguous.
> Caption: "Inner spacing must always be smaller than outer — that's how the eye catches what's a group and what's a divider."

### Chapter 5 — Typography (p. 163-191)
The most minimal chapter in its advice. The default recommendation: **single sans-serif, regular + bold only**. Don't explore 5 weights (light, regular, medium, semibold, bold) — that just adds clutter. For heading hierarchy: use a size scale (e.g. 14/16/20/24/32/40), not a weight scale. **Line length 40-80 characters per line** for body text — above 80 the eyes tire returning to the start, below 40 it's constant zigzagging. Body text minimum 16px (18px is better on mobile). **Line height** 1.5× for body, tighter for large headings (1.2×). **Left align for long body text** — center align is only allowed for headlines or short text (≤2 lines). Justified text is forbidden for web/app: it creates distracting "rivers of white space" + makes it harder for dyslexic readers. For Paper.id: check the Invoice Detail / Partner Detail pages — if the notes/description is full-width 1200px, the user's eyes tire. Cap the body max-width to ~600-700px.

> **[VISUAL Chapter 5 — Type Scale Sample]**
> A vertical stack of 6 text rows, each demonstrating a level in the type scale (all using 1 sans-serif Inter/SF):
> - "Heading 1 — 40px Bold" (Bold weight)
> - "Heading 2 — 32px Bold" (Bold weight)
> - "Heading 3 — 24px Bold" (Bold weight)
> - "Heading 4 — 20px Bold" (Bold weight)
> - "Body — 16px Regular" (Regular weight)
> - "Small — 14px Regular" (Regular weight)
> Annotation on the right: "✅ Only 2 weights: Regular + Bold. The size scale carries the hierarchy, not the weight."
> A small addition below: an example of a ❌ bad scale → all 7 weights (Thin/Light/Regular/Medium/Semibold/Bold/Black) shown together, looking chaotic.

### Chapter 6 — Copywriting (p. 192-211)
A short chapter but one designers often skip because it's seen as "the copywriter's job". Adham pushes back: **UI copy is a UI element**. The main rule: **be concise, cut filler words**. "Please click here to download your invoice" → "Unduh invoice". **Use sentence case** ("Hapus invoice?") not Title Case ("Hapus Invoice?") — sentence case reads faster and more naturally. **Front-load key info** — put the most important word at the start of a sentence/heading, not the middle or end (people scan, they don't read in full). Use the **inverted pyramid** for long content: conclusion/headline first, details later — so if the user stops reading midway, they still get the gist. For error messages: avoid "Error 4023: Invalid input" — replace it with something specific + actionable ("NPWP must be 15 digits"). An often-skipped tip: **avoid jargon unless your audience is expert**. For Paper.id, "accounts receivable" is better written as "tagihan yang belum dibayar" — unless the user is genuinely an accountant.

### Chapter 7 — Forms (p. 213-249)
The most actionable chapter for a B2B SaaS designer — Paper.id has lots of forms (Add Partner, Create Invoice, Catat Pengeluaran, KYC). The key rules: **single column** (vertical stack, downward momentum), **label above the input** (not beside), **field width matches expected input** (a 5-char zip code ≠ a 40-char name), **hint text above the field** not below (so it doesn't get covered by autofill or truncated), **stack checkboxes/radios vertically** for easy scanning, **mark both required and optional** (asterisk \* + the word "opsional" on optional fields — so there's no ambiguity). **Break long forms into steps** if >10 fields — with a progress indicator. A controversial insight: **validate on submit, not inline real-time** — inline validation that fires every time the user types feels intrusive ("yeah, I'm not done typing yet, chill!"). Better to validate when the user blurs the field or clicks Submit. This conflicts with Aurora — Paper.id uses a lot of inline real-time validation, which needs discussion. **Don't use placeholder as label** — the moment the user starts typing, the label disappears and they forget what the field is for.

> **[VISUAL Chapter 7 — Anatomy of an Ideal Form Field]**
> Show 1 large form field (zoomed in) with annotation arrows pointing to each part:
> ```
> Email Bisnis *                ← Label ABOVE (bold-small, asterisk for required)
> Email aktif untuk login       ← Hint text ABOVE the field (muted-small)
> ┌──────────────────────────┐
> │ kontak@perusahaan.com    │ ← Input field, width matches expected
> └──────────────────────────┘
> ```
> Annotation on the right with arrows:
> - "✅ Label above — not covered by the mobile keyboard"
> - "✅ Hint above — not truncated by autofill"
> - "✅ Width matches input — a silent hint to the user"
> - "✅ Asterisk * for required; optional fields get the word 'opsional'"
> Below: a row of 3 mini-example fields — Kode Pos (5-char width), Email (medium length), Catatan (full-width textarea). Caption: "Width = the expected input length."

### Chapter 8 — Buttons (p. 250-279)
The most decision-dense chapter. **3 weight system**: primary (filled, brand color, for the most important action — MAX 1 per page), secondary (border only, for less important or multiple equal-weight actions), tertiary (text link, for the least important or destructive). The hierarchy must not rely on color alone — combine it with weight/fill. **Button text should be descriptive verb+noun**: "Simpan invoice" > "OK", "Hapus pengeluaran" > "Lanjut". Avoid generic "Submit", "Continue" — the user has to mentally re-confirm ("submit what again?"). **Target size minimum 44×44px** for touch (mobile). **Friction ladder for destructive**: no-friction (less prominent UI) → light (simple confirm) → medium (red button + warning icon) → heavy (confirm checkbox). But **a better alternative: allow undo**. A "Message deleted — Undo" toast for 5-10 seconds > a "Are you sure?" modal every time. **Try to avoid disabled buttons** — enable + validate on submit is better. Disabled leaves the user stuck without knowing why, plus accessibility issues (low contrast, keyboard skipped).

---

## E. IF YOU ONLY READ 3 THINGS, READ THESE

> **[VISUAL: Section opener — Action Checklist Banner]**
> This section becomes a large visual callout. Build a banner header:
> - Background: bold color (e.g. solid brand blue or gold accent), full-width
> - Heading: "If you only have 1 hour, do these 3 things" — white text, large size (32-40px)
> - Sub-text: "The 3 highest-impact changes for the daily work of a B2B finance designer" — white semi-transparent text
> - Decorative icon in the top-right corner: a checklist ✅ or bullseye 🎯 (as an SVG, not an emoji)
> After the banner, the three actions are shown as 3 vertical cards with large numbers 1, 2, 3 on the left (a circular 60×60px blue badge with a white bold number).

### 1. Place 1 Primary Button per page. Audit it today.
Open your 3 favorite Paper.id pages — Dashboard, List Invoice, Partner Detail. Count how many blue primary pills are on each. If there's >1, you've already wrecked the hierarchy. **The fix is easy:** determine the "1 most important action" per page. Demote the rest to secondary (border only) or tertiary (text link). Validate with the Squint Test (blur 8px in Figma) — if the primary still reads as a single dominant point, you win. This is insight #3 and #4 from the book, and the impact shows up immediately in the user's completion rate for the main action.

### 2. Replace the "Submit disabled" pattern with "Submit enabled + validate on submit"
This is a small change with a big effect. The default Aurora form button "Simpan" is probably disabled until the form is valid — Adham says that's problematic: (a) the user doesn't know why it's disabled, (b) accessibility is poor because disabled text usually has low contrast, (c) keyboard users can skip it, (d) no feedback. **New pattern:** the button is always enabled; when the user clicks, validate; if there's an error, scroll to the first error field + show a clear inline error message. You get a clearer UX + better accessibility. Note: this conflicts with current Aurora — it needs a consult with the DS maintainer, but it's worth pushing.

### 3. Replace destructive confirmation modals with toast undo (for non-nuclear actions)
The mapping Adham recommends: delete a draft / delete a table row / delete an unsaved item = **TOAST UNDO** (5-10 seconds), not a modal. A confirmation modal is only for genuinely destructive, irreversible things: delete account, delete organization, delete an invoice already sent to a customer. The reasoning: a modal interrupts a user who's sure (and 95% of users who click Delete are sure), whereas a toast gives a safety net without blocking. Plus it's faster: 1 click to delete + auto-dismiss > 1 click to delete + 1 click to confirm + auto-dismiss. Paper.id's destructive definition is already locked (see memory [[paperverse-design-decisions]]) — now it's just a matter of attaching an **undo mechanism** for non-nuclear destructive actions. First application: list page delete row → snackbar "Item dihapus — Urungkan?" with a 7-second timer.

---

## Cross-refs

- **Detailed reference cards (45 cards)** → `practical-ui-ringkasan.md` + `practical-ui/kartu/`
- **Conflicts with Paper.id rules** → `IMPROVEMENT-OPPORTUNITIES.md` (5 conflicts identified)
- **Companion book** → `refactoring-ui-ringkasan.md` (Wathan & Schoger, similar philosophy)

---

*Total: ~2700 words. Estimated reading time: 18-20 minutes.*
