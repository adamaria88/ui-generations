---
type: "unified-thinking-framework"
owner: "paper-designer"
created_at: "2026-05-22"
last_updated: "2026-05-29"
sources:
  - book: "Refactoring UI"
    author: "Adam Wathan & Steve Schoger"
    slug: "refactoring-ui"
  - book: "Practical UI"
    author: "Adham Dannaway"
    slug: "practical-ui"
---

# Design Thinking — Paper Designer (Unified)

> This file is a **distillation of Paper Designer's thinking** from all UIUX books read + user decisions at conflict points. Not a per-book summary. Not a checklist.
>
> Auto-loaded when `/paper-designer` is active. Default mindset when a brief comes in.

---

## One Lens

> **Visual weight is proportional to importance — AND — every design detail earns its place: logical, accessible, familiar by default.**

This lens combines two complementary perspectives:
- Refactoring UI: reading **visual hierarchy** (weight, color, contrast, polish)
- Practical UI: reading **usability** (logical reason, accessibility, conventional patterns)

When internalized, default choices become automatically correct: 1 primary, single-column form, hierarchy via color (not bold), border as last resort. No need to cite a book first.

---

## How the Lens Works

Every design choice = a trade-off between user effort, accessibility, and clarity. Goal: minimize effort without sacrificing accessibility & clarity.

**3 audits for every choice:**

1. **Logical** — Can I articulate why I chose this? (Not "looks nice".)
2. **Accessible** — Friendly to vision-impaired, motor-impaired, color-blind, cognitive-impaired, screen reader users? (WCAG 2.1 AA minimum.)
3. **Familiar** — Matches the user's mental model from other products? (Default to convention; explore only when there's substantial gain.)

**Plus weight check:**
- Is the most important thing here visually heaviest?
- Is the unimportant stuff quiet enough?

When in doubt: *"Logical + accessible + familiar + visual weight matches importance?"* If any FAIL → change it or argue with rationale.

---

## How the Lens Generates Decisions

### Convention vs Exploration Mindset

**Default to Convention for operational contexts, Exploration for specific cases.** (Decided 2026-05-22)

- **Default convention** for: operational forms (Create Invoice, KYC, Add Partner), table list, detail page, settings, dashboard.
- **Exploration OK** for: marketing landing, onboarding hero, pricing comparison, feature selection where visual identity matters.

**Concrete threshold for radio vs selectable cards:**
- ≤5 fields per page = selectable cards OK if visual cues help (icon + title + sub).
- >5 fields per page = radio default (cards make the form feel crowded).

**See a long form with many sections → immediately: standard radio. See a single-choice form in onboarding → cards OK if visual cues help.**

**Extra rule for cards:** Important numbers/values MUST be highlighted (typography emphasis). Not just labels. The user needs to know "what does Micro cost", "what are Pro's benefits". No guessing.

### Form (default stack)

Single-column + label-top + match-width + required `*` + optional `(optional)` + conventional styles. See a form? Reflexive — don't experiment.

**See multi-column form / label-left / placeholder-as-label → immediately: fix to default stack.**

**Field width = cognitive cue for expected input length:**
- Name / description / address → full-width ✅
- Zip code / OTP / month-year → narrow (30–50%) ✅
- All fields same width despite different input sizes → user confused about "how much should I fill?"

**See a zip code field at full-width or a name field at 40% → resize per expected input length.**

*Source: Practical UI — Adham Dannaway*

**Form spacing sub-rules (decided 2026-05-22):**
- Label-input gap = **4px** (intimately related, "clearly belongs to").
- Field-to-field gap = 16px (related but distinct).
- Section-to-section gap = 32px+ (clearly separate groups).

Inner spacing < outer spacing — always.

### Buttons & Action Hierarchy

**1 primary per screen** (law, because primary works by being RARE). Button text verb+noun ("Save invoice", not "OK"). 3-tier system: primary (filled action color), secondary (bordered, not grey fill), tertiary (underlined text-link).

**See 2+ filled primary buttons → immediately demote one to secondary. Does the squint test still show 1 dominant?**
**See generic "OK" / "Submit" → replace with specific verb+noun.**

### Destructive Actions (friction ladder + undo)

Severity = friction tier:
- Recoverable draft = no friction / toast undo.
- Significant (saved invoice) = medium (red + warning icon).
- Catastrophic (permanent account deletion) = heavy (checkbox required).

**Allow undo > add friction.** Recovery beats prevention.

**See Delete button without confirmation → what's the severity? Is the tier appropriate?**
**See heavy modal for deleting an empty draft → over-engineered, undo is enough.**

### Flow & Navigation Rules (3-Pillars at Navigation Level)

> The 3-pillar framework isn't just for visual elements — every navigation step must also be justifiable by these 3 measures. If you can't answer "why does this step exist?" → the step is suspicious.

**Every flow decision requires a logical reason:**
- ❌ "To add a confirmation step" with no severity reason → over-friction
- ✅ "This is destructive + irreversible → needs medium friction tier" → logical
- ❌ "Add an extra step to feel more premium" → interaction cost rises with no gain
- ✅ "Group in sub-menu because rarely used → reduces cognitive load on the main surface" → logical

**Minimize Interaction Cost** — fewer clicks to goal:
- Click table row = goes directly to Detail (Paper.id rule: `prototyping-gap-lessons` 0k)
- Primary action always visible on surface, no need to open a sub-menu first
- Main user task must be reachable in ≤ 3 clicks from the relevant page
- Frequently used actions = fixed position, don't move between screens

**Minimize Usability Risk** — no dead ends:
- Every screen has a clear escape route (back / breadcrumb — ref: `breadcrumb-back-button-rule`)
- Error states MUST have a recovery path — "Try again" / "Back to list"
- Destructive = friction tier matching severity (ref: Destructive Actions section)
- Failed form submit = user returns to form with fields filled + clear per-field errors

**Minimize Cognitive Load** — user doesn't need to think hard at every step:
- 1 decision per screen — don't ask 3+ things at once on 1 page
- Progressive disclosure: show advanced info when relevant, don't dump everything upfront
- Same action = same position across all modules (consistency = zero re-learning cost)
- Action labels = specific verb+noun ("Save invoice") — user knows exactly what happens after clicking

**Flow Audit (pre-delivery):**
- Can the main task be completed in ≤ 3 clicks from the relevant page?
- Any dead ends? (screen with no exit / next step)
- Error recovery path available at every error state?
- Same action consistent in position + label across all modules?
- Can every step be justified using one of the 3 pillars? If not → suspicious.

*Source: Practical UI — Adham Dannaway, Ch. 1 p. 14–23 (3-Pillar Framework + Logical Reason)*

### Visual Hierarchy

**6 levers**: size, color, contrast, spacing, position, depth. Important = many levers. Unimportant = 1–2 light levers.

**Validate with squint test**: close eyes 50% / blur the design. Is 1 element still dominant? Yes = OK. No = hierarchy broken.

**Text over images/photos — 3 valid techniques:**
1. **Dark overlay** (`rgba(0,0,0,0.4–0.6)`) — most reliable, good for hero + banner
2. **Brand color tint** (brand color opacity 60–80%) — brand-forward, good for illustration backgrounds
3. **Text shadow** (`0 1px 3px rgba(0,0,0,.6)`) — subtle, good for photos with natural contrast areas

Minimum contrast for text over images = **4.5:1 (WCAG AA)**. Don't assume a dark photo is enough — photos can be swapped/changed.

**See text over an image without an overlay → immediately: add overlay/tint/shadow. Check contrast first.**

*Source: Refactoring UI — Wathan & Schoger, Ch. 5 — Working with Color*

### Grouping Methods (4 ways to group content)

4 ways to group elements, ordered by grouping strength:

1. **Container** (border/background box) — strongest, but "noisiest". Use when separation must be explicit (modal, card, form section).
2. **Proximity** (close spacing) — sufficient for light grouping, zero visual noise. Label close to input = clearly belongs.
3. **Similarity** (uniform visual treatment) — same font-size, same color, same style = brain groups automatically. Muted labels on all fields = one category.
4. **Continuity** (alignment / imaginary line) — eye follows straight alignment. Vertical stack = grouped by axis.

**Rule**: Combining 2–3 methods > 1 strong method. Inner spacing within a group ALWAYS < outer spacing between groups.

**See a section full of borders → check: is proximity + similarity already enough? If yes, remove borders.**

*Source: Practical UI — Adham Dannaway, Ch. 4 p. 105–119*

### Borders & Containers — Hybrid Context-Dependent

**Decided 2026-05-22.**

- **Detail / Info display page**: SKEPTICAL. Try spacing (proximity) + similarity first. Border is last resort.
- **Modal / Dialog / Form section**: PRAGMATIC. Clear border boundary is fine.
- **Card in list page**: PRAGMATIC. Container helps separate items.

**See detail page card with a thin border → check: is spacing alone enough? If yes, remove border.**
**See modal without border → check: is the boundary clear from the background? If no, add border.**

### Bold Weight — Hybrid

**Decided 2026-05-22.**

Concrete rules:
- **Bold**: Page title, Section heading, Data hero (Total Amount, Grand Total), CTA button text.
- **Regular**: Label, value (label-value pair), body text, helper text, secondary info.
- **Label-value hierarchy via color** (NOT via bold): label `text-muted` (neutral grey), value `text-primary` (neutral dark grey).

**When in doubt:** *"If this is bold, is there something more important that needs to stand out more?"* If yes, don't bold.

### Typography — Body Rules

Concrete specs for optimal readability:
- **Font**: Single sans-serif — don't mix 2+ font families
- **Weight**: Regular + Bold ONLY — don't add Light/Medium/SemiBold (weight explosion)
- **Body text minimum 16px** — below that is hard to read on mobile + for users with vision impairment
- **Line height 1.5× font size** — e.g. 16px font = 24px line height. Never below 1.4×
- **Left align** for long body text — don't justify (justified creates "rivers of whitespace" that disrupt eye-tracking)
- **Line length 40–80 characters per line** — sweet spot is 60–70 chars. Too short (<30) = too many lines. Too long (>100) = eyes struggle to find the start of the next line

**See an overly wide text block → check: how many chars per line? >80? Narrow the container or add max-width.**
**See justified text → change to left align.**

*Source: Practical UI — Adham Dannaway, Ch. 5 p. 167 & 182*

### Color — Pure Neutral for Info, Brand for Action ONLY

**Decided 2026-05-22.**

**Strict color rule:**
- **Info text** (label, value, body, secondary) = **pure neutral grey** (no hue tint). E.g. `#2a3038` (text-primary), `#6b7280` (text-muted), `#9ca3af` (text-disabled).
- **Action color** (brand blue `#4199d5`) = **EXCLUSIVELY for interactive elements** (button, text link, checkbox/radio active state, focus ring).

**Why strict?** When info text and action color overlap (e.g. dark navy `#133f5d` blue-tinted), users can mistake static text for interactive. Action color must be exclusively reserved.

**Avoid pure black `#000` for text** — 21:1 contrast on white is too harsh, eyes get tired reading long-form. Use dark navy tinged brand (e.g. `#0d2d45` or `#133f5d`) — sufficient contrast, more comfortable. Monochromatic from 1 brand color is far more cohesive than a mix of random colors.

**See blue-tinted muted text → check: is this info or interactive? If info, change to pure grey.**
**See `#000` text in long body → replace with dark navy tinged brand.**

### Shadow & Elevation — 3-Level Discrete + 2-Layer Internal

**Decided 2026-05-22.**

Systematic DS tokens (3 levels) with aesthetic composition (2 layers per level):

| Token | Use case | Layer 1 (sharp) | Layer 2 (ambient) |
|-------|----------|-----------------|-------------------|
| **shadow-sm** | Card, raised button | `0 1px 2px rgba(0,0,0,.05)` | `0 1px 3px rgba(0,0,0,.10)` |
| **shadow-md** | Dropdown, local modal | `0 1px 2px rgba(0,0,0,.05)` | `0 4px 8px rgba(0,0,0,.10)` |
| **shadow-lg** | Full-screen dialog, recommended card | `0 1px 2px rgba(0,0,0,.05)` | `0 12px 24px rgba(0,0,0,.12)` |

**Recommended option in selectable cards** = shadow-lg (higher than sibling cards). Visual cue is sufficient, no need for a badge label.

### Cognitive Load (less is more)

Every element competes for attention. Elements MUST earn their place — if redundant without purpose → remove. Or progressively disclose.

**"Minimal ≠ simple."** — Don't confuse minimalism as the goal. The goal = simplicity of outcome (easy for users to use). Minimalism-as-aesthetic can kill affordances: button doesn't look clickable, field doesn't look fillable, no labels. Aim for simple outcome, not minimal look.

- ❌ Remove label "to keep it clean" → user doesn't know what the field is for
- ❌ Remove input border "to be minimal" → user doesn't know it's editable
- ✅ Remove redundant info that's unnecessary → cognitive load drops, clarity rises

**Layout feels cluttered → for each element ask "if removed, does the user lose critical info?" If no → remove.**
**Wall of paragraphs → progressively disclose. Punchy heading + 1-line + "Learn more" link.**
**Design looks minimal but user is confused → not good minimal. Add affordance back.**

*Source: Practical UI — Adham Dannaway, Ch. 2 p. 52*

### Accessibility (foundation, not an add-on)

WCAG 2.1 AA minimum baked into every choice — not a final checklist.
- Text contrast 4.5:1 / UI element 3:1.
- Don't rely on color alone (icon + label + state).
- Target size 48pt × 48pt minimum (mobile-safe).
- Keyboard accessible (focus visible, no disabled-button-trap).

**Adding a status indicator → color only? Add icon + label.**
**Adding a small touch target → check 48pt minimum.**

### Disabled Buttons (avoid, case-by-case at Paper.id)

Disabled = user stuck without feedback. Alternatives:
- Simple form → enable + validate-on-submit.
- Complex form with inter-field dependency → disable + tooltip explaining why.
- Locked feature (paywall) → lock icon, not disabled.

⚠️ Logged in `IMPROVEMENT-OPPORTUNITIES.md` — Aurora DS review.

### Copywriting

Be concise — cut filler phrases. Sentence case ("Save invoice"). Front-load key info. Consistent vocabulary ("Delete" vs "Remove" — pick 1 + stick).

**Writing modal copy → cut filler, sentence case, important info first, conversational tone.**

### Modular Design & Convention (Jakob's Law)

Aurora DS = Paper.id's component library. MUST use existing components (per `[[aurora-lookup-ritual]]`). When needing a composite, COMPOSE Aurora pieces — DON'T build new ones (per `[[composition-thinking-rule]]`).

**Tempted by a new pattern → ask: does it offer substantial user-effort gain that Aurora patterns can't achieve? If no → use Aurora.**

### Logical Reason (foundation)

Every design detail has an articulable "why". Not "looks nice" / "feels right". If I can't articulate why, the design choice isn't solid.

**Reviewer asks "why did you do that?" → cite rule / source / convention / measurement. If "feel-based" → revisit.**

---

## How to Use When Designing (Pre-Delivery Audit)

Before delivering a prototype, look at the whole and ask:

> **"Every detail here: (1) logical? (2) accessible? (3) familiar? (4) visual weight matches importance? If anything FAILS, change it or argue with rationale."**

Squint test → is 1 element still dominant? If no → hierarchy broken, fix it.

---

## Conflict Resolution Log

Record of decisions when conflicts arise between books. Each entry: date + source + Paper.id position + reason.

### 2026-05-22 — Initial batch (2 books: Refactoring UI + Practical UI)

#### Conflict 1 — Convention vs Exploration
- **Refactoring UI**: "Default = starting point, NOT a constraint. Explore beyond."
- **Practical UI**: "Stick to convention unless there's a compelling reason (Jakob's Law)."
- **Paper.id position**: Hybrid. Default convention for operational forms (>5 fields), exploration OK for simple forms (≤5 fields) or specific contexts (marketing/pricing/onboarding).
- **New rule**: Cards = highlight numbers/values (typography emphasis).
- **Reason**: B2B finance users are familiar with tool conventions. But onboarding/pricing still needs visual appeal.

#### Conflict 2 — Borders & Containers
- **Refactoring UI**: Skeptical of borders. Try spacing/proximity/bg color first. Border as last resort.
- **Practical UI**: Pragmatic. Container = strongest grouping cue, fine to use.
- **Paper.id position**: Hybrid context-dependent. Detail page = skeptical (no border). Modal/dialog = pragmatic (border).
- **Reason**: Detail pages are dense (many sections), borders create clutter. Modal boundary must be clear from the background.

#### Conflict 3 — Bold Weight Strictness
- **Refactoring UI**: Restrictive. Bold only for data hero/title. Hierarchy via color.
- **Practical UI**: Flexible. Bold for all headings + emphasis (Jakob's Law convention).
- **Paper.id position**: Hybrid. Headings bold (convention), label-value via color (not bold), data hero bold.
- **New rule**: Info text color = pure neutral grey. Action color = brand blue, exclusively interactive.
- **Reason**: Convention-friendly (heading bold) + elegant (label-value via color). Strict color separation prevents action/info confusion.

#### Conflict 4 — Shadow Approach
- **Refactoring UI**: 2-layer composition (sharp + ambient) for real-world depth feel.
- **Practical UI**: 3-level discrete (small/medium/large) for systematic DS.
- **Paper.id position**: Best of both. 3-level discrete tokens, each level uses 2-layer composition internally.
- **Reason**: DS-friendly tokens + aesthetically-friendly composition.

#### Conflict 5 — Selectable Cards vs Radio
- Sub-aspect of Conflict 1. Same 5-field threshold.
- **New rule**: Recommended option in cards = higher shadow (shadow-lg vs shadow-sm siblings). Visual cue is sufficient without a badge label.

#### Conflict 6 — Label-Input Spacing Gap
- **Refactoring UI**: 4px (intimately related, "clearly belongs to").
- **Practical UI**: 8pt XS spacing.
- **Paper.id position**: 4px (Refactoring lean). Locked.
- **Reason**: Label-input visual binding is stronger at 4px. Form rhythm is cleaner.
- **Status**: Logged in `IMPROVEMENT-OPPORTUNITIES.md` — Aurora `.field` default is 8px, needs update to 4px.

---

## Detail Reference (for deep-dives)

Active insights are already baked in above. For full context per book:

### Refactoring UI (Wathan & Schoger)
- Summary: `books/refactoring-ui-ringkasan.md`
- Archived thinking: `books/refactoring-ui/thinking-archived-2026-05-22.md`
- Deep-dive cards: `books/refactoring-ui/kartu/*.md`

### Practical UI (Dannaway)
- Summary: `books/practical-ui-ringkasan.md`
- Deep-dive cards (45 cards): `books/practical-ui/kartu/*.md`

---

## Workflow When a New Book Is Added

1. User extracts new book → cards go to `books/<slug>/kartu/`.
2. Compare new book insights vs this file (`paper-designer-thinking.md`).
3. Conflict with existing thinking? → surface to user using "belajar bareng" format (visual HTML).
4. User decides → update this file with a new entry in the **Conflict Resolution Log**.
5. Once synced, archive old per-book thinking if any (for history).
