# Component Guideline — Coachmark

> **Component name: `Coachmark`** (renamed from "Spotlight", 2026-07-15). Earlier candidates: Tour ([Ant Design](https://ant.design/components/tour)), Spotlight ([Atlassian](https://atlassian.design/components/onboarding/)), Walkthrough.
> **Button labels are in English** (`Previous` · `Next` · `Done`). The library component stays generic; copy is filled in at usage time.
> Written in English per the locked guideline rule (`component-explorer/pipeline.md`, Fase 4 → R1).
> Reflects the 2026-07-15 revamp: close icon (replaces Skip), two navigation types (Dots / Counter as a nested component), dots moved into the footer.

> 9-section Component Guideline. Phase 5 · live in Figma — **web and mobile**.
> Property model source: Phase 3.5 Playground + revamp explorations (`explore-nav-close.html`, `explore-close-c.html`); mobile from Phase 3.7 (`mobile-alt-a.html`).
> Color binding: the **LIBRARY** `semantic` (`Semantic Token (Color)`) + `primitive_text_and_layout` (`Primitive Token (Text & Layout)`) collections only — **not** the identically-named local copies, and never the `Color` collection. See `paperverse-source-of-truth.md` → "LOKAL vs LIBRARY".

## 0. Platforms

| | **Web** | **Mobile** |
|---|---|---|
| Figma file | `KjmdMheQSYqqJoKyniNMnB` | `2Fga9lAogbeZ0q2uGlhFTc` |
| Page | `↳ Coachmark ⌛️` | `↳ Coachmark` (`7793:23`) |
| Card set | `8621:253341` — **24 variants** | `7830:27839` — **18 variants** |
| `Placement` | Bottom · Top · Left · Right | **Bottom · Top only** |
| `Arrow` | **Start · Center · End** on Bottom/Top · Center only on Left/Right | **Start · Center · End** |
| Card width | 344 (Bottom/Top) · 320 (Left/Right) | **320** (360 frame − 20 margins) |
| Card radius | 8 (`radius/md`) | **12 (`radius/lg`)** — mobile surface convention |
| Container padding | 20 all sides | **16 top/bottom · 20 left/right** |
| Content gap | 12 (`spacing/md`) | **16 (`spacing/lg`)** |
| Title | 16/20 (unbound size) | **18/24** (`text/heading/size/sm` — bound) |
| Button size | `Compact` (30px) | **`Default` (38px)** — mobile Compact is only 26px |
| Close | 16px glyph | **24px glyph** (`x-close`) |
| Dots default | `Steps=5` | **`Steps=3`** — mobile tours run 2–3 steps |
| Interaction state | `Hover` | **`Pressed`** |
| Arrow | 4 directions | **2 (Up/Down)** |

Everything else — Scrim, Shadow Neutral-01, dot size 8/gap 8, description 14/22, `Navigation` Dots/Counter, `Back Action` — is identical across platforms.

**Mobile component IDs:** `_Coachmark/Content` `7801:92` · `/Navigation` `7800:61` · `/Dots` `7795:91` · `/Dot` `7794:27` · `/Arrow` `7798:27281` · `/Close` `7798:29`. Reuses mobile DS `Button` `6078:20485` and the `x-close` 24px icon.

⚠️ **Mobile touch targets:** the DS `Button` Default is **38px**, below the 44px guideline — accepted, per the decision to follow the DS rather than diverge. Dots (8px) and Close (24px) render small by design; implementations must extend the tap area to ≥44px around them.

### The `Arrow` axis (mobile) — why it is a variant, not a draggable element

**Figma cannot override a nested layer's position inside an instance.** Verified 2026-07-21 by direct test: `set_x` → *"This property cannot be overridden in an instance"*. Wrapping the arrow in a full-width row does not help — the wrapper cannot be moved either. The only things overridable on a nested layer are **visibility** and **variant / property swaps**.

An arrow built into the card would therefore be permanently stuck at centre. Since a coachmark arrow must point at a real target — rarely centred under a 320px card on a 360px screen — that would be wrong most of the time while still *looking* plausible in isolation.

**Solution: arrow position is a variant axis.**

| `Arrow` | Arrow x (within the 320px card) | Use when the target sits… |
|---|---|---|
| `Start` | 24px | near the left of the screen |
| `Center` | 154px | mid-screen |
| `End` | 284px | near the right of the screen |

Combined with `Placement`, the arrow direction follows automatically — `Bottom` → arrow points **up** (card below the target), `Top` → arrow points **down** (card above it).

**Variant count:** `Placement` (2) × `Arrow` (3) × `Step` (3) = **18**.

#### Fine-tuning beyond the three presets (mobile)

Three positions do not cover every target — a 4-item tab bar puts targets at roughly 45 / 135 / 225 / 315px, and the middle two land ~45px away from the nearest preset, which reads as the arrow pointing at nothing.

So the arrow is **also freely adjustable**:

1. Pick the nearest `Arrow` preset — one click, covers most cases.
2. Need it exact? Select **`Arrow Row`** inside the instance and set its **left padding**.

| | |
|---|---|
| Mechanism | `Arrow Row` is a HORIZONTAL auto-layout; the arrow's offset is its `paddingLeft` |
| Presets | `Start` 24 · `Center` 154 · `End` 284 |
| Safe range | **16 – 292** — below 16 the arrow collides with the 12px corner radius; above 292 it runs off the right edge |
| Formula | `paddingLeft = targetCentreX − 20 − 6` (card starts at x=20, arrow is 12 wide) |

**Why padding rather than position:** Figma refuses `x` overrides on a nested layer (`"This property cannot be overridden in an instance"`) but **allows padding overrides** — verified by test before this was designed. Concept prototype: [`playground-arrow-offset.html`](playground-arrow-offset.html).

⚠️ `paddingLeft` is deliberately a **raw number, not a token** — it is a position, not spacing, so no variable is bound to it.

**Web (2026-07-21):** the same `Arrow` axis was added to `Placement=Bottom` and `Top` — arrow x = **24 / 166 / 308** within the 344px card. `Left` and `Right` keep `Arrow=Center` only: there the arrow travels vertically along the card edge, a different problem, and on a wide viewport a target rarely sits at the very top or bottom of the card. Web went **12 → 24 variants** (an incomplete matrix, which Figma allows — `_Coachmark/Dots` already works this way).

The 12 existing variants were **renamed in place** rather than rebuilt, so all **21 placed instances kept their link** and inherited `Arrow=Center` — which is exactly how they already looked.

### Shadow goes on the variant root, not the Card

The shadow must be applied to the **variant root** (the frame holding Arrow + Card), never to the `Card` frame alone.

With the shadow on `Card`, the arrow sits outside the shadowed layer and casts nothing — it reads as a flat white triangle pasted onto a softly-shadowed card, with a visible seam. On the root, Figma composites arrow + card into one silhouette and casts a single continuous shadow, so the arrow reads as part of the same surface.

Verified 2026-07-21 by rendering both at 3× with the shadow temporarily boosted to 45% opacity — at the production 8% the difference is real but too subtle to judge by eye.

Requires `clipsContent = false` on the root, otherwise the shadow is clipped at the frame bounds. Applied to **all 18 mobile variants and all 12 web variants**.

## 1. Preview Design Component
A multi-step tour layered over a product page:
- **Scrim** dims the entire viewport; a **cutout** punches a hole around the target element.
- **Ring** — 2px white outline around the target (4px offset).
- **Card** (Paperverse Pop Over) anchored to the target, with an arrow pointing at it.
- Card content: **close icon** (top-right) → image (optional) → title → description (optional) → **footer navigation** (Dots or Counter + buttons).

(In Figma: the component preview frame sits at the top of the guideline.)

## 2. Overview
Coachmark is an educational overlay that **highlights UI elements one at a time** while showing an explanatory card next to each one. Use it to introduce a new feature or guide a first-time user through a page in Paper.id (e.g. the *Shared Invoice* tab in Purchase Invoice). The flow is multi-step: users can move forward, go back, jump between steps, or leave at any time.

## 3. When to Use
- ✅ **Use when** a new feature ships and existing users need to know **where** it is, not just **what** it does.
- ✅ **Use when** a page has 2–5 related points of interest that are easier to understand when pointed at in their real context.
- ✅ **Use when** it is first-time-use education that should appear **once** per user.
- ❌ **Don't use when:**
  - Only **one thing** needs explaining → use a plain **Tooltip** / **Popover** (no scrim needed).
  - The information must be read before proceeding → use an **Information Modal** (blocking, not a tour).
  - It's a general announcement that doesn't point at a specific element → use a **Banner**.
  - The tour would exceed a handful of steps → users dismiss it. Split it into separate tours, or move it to a help page.

*Source: NN/g, "Instructional Overlays and Coach Marks" — coachmarks only work when they are short, dismissible, and anchored to concrete elements. Atlassian's Spotlight/onboarding pattern recommends a maximum of 3–4 steps.*

## 4. Design Principle
- **Visual weight = importance.** The scrim lowers the weight of the ENTIRE page so that one element is the only lit thing on screen. This is the most extreme hierarchy tool we have — reserve it for education, never for everyday navigation. *(paper-designer-thinking — One Lens)*
- **Action color is reserved for interactive elements.** The ring is **white**, NOT brand blue. A blue ring reads as "this is a button you must click", when the ring is only a marker. Blue stays reserved for the Next button and the active dot. *(thinking — Color rule)*
- **The exit is a quiet secondary action.** The close icon is a muted X (top-right), deliberately toned down (opacity ~65%) so it is **findable but does not compete with Next**. A tour still needs a clear way out on every step, but the primary path is forward. *(thinking — visual weight; close-affordance reasoning)*
- **Recovery beats prevention.** Clicking the scrim is deliberately a **no-op**: the tour only appears once, so an accidental dismissal cannot be undone. A little friction here is cheaper than losing the education entirely.
- **Accessibility:** `Esc` dismisses the tour. Keyboard focus is trapped inside the card while the tour is active. The close icon and dot hit areas are ≥ 24px even though the glyphs render smaller. Card text contrast ≥ 4.5:1 (measured on the white card, not against the scrim). ⚠️ The muted close must stay legible — do not tone it below what a low-vision user can find.

## 5. Anatomy & Properties

**Anatomy (outside → in):**
1. **Scrim** — full-viewport dim layer; blocks interaction outside the target. *(NEW component)*
2. **Cutout** — a hole in the scrim matching the target's bounds; the target stays lit.
3. **Ring** — white outline around the cutout, 4px offset, 4px radius.
4. **Card / Pop Over** — the DS container (`component/Pop Over`), radius 4, `table/option` shadow.
   - **Close icon** *(top-right)* — muted X in a faint circle. Dismisses the tour. *(NEW component, replaces Skip)*
   - **Arrow** — triangle pointing at the target; follows `Placement`. *(NEW component)*
   - **Image** *(optional, SLOT)* — 16:9, radius 4.
   - **Title** *(required)* — Heading/S, `color/text/primary`.
   - **Description** *(optional)* — Body/M, `color/text/secondary`.
   - **Footer navigation** *(one component, two variants)*:
     - **Dots** — one dot per step (active = blue, clickable to jump) · **Next**. No Back.
     - **Counter** — "1 / N" · **Previous** · **Next**.

**Component architecture in Figma** (composition — each piece is its own component):

```
Coachmark  (card set, 12 variants: Placement × Step)
 ├ Arrow  →  _Coachmark/Arrow  (set: Direction Up/Down/Left/Right)  ← sibling of Card
 └ Card   (plain FRAME — see note)
    └ Container  (padding 20, gap 10)
       └ _Coachmark/Content  (SET: Image False/True)
          ├ Text
          │   ├ Container (gap 4) → Title  +  _Coachmark/Close (set: Default/Hover)
          │   └ Description
          └ _Coachmark/Navigation  (set: Dots / Counter · + Back Action BOOLEAN)
              └ _Coachmark/Dots  (set: Steps × Active)  →  _Coachmark/Dot
Scrim  (separate — anchors to the page, not the card)
```

> **Naming:** every sub-part uses the private `_Coachmark/…` prefix so it stays out of the picker. Only `Coachmark` itself is public.
>
> ⚠️ **`Card` is a plain FRAME, not an instance of `component/Pop Over`** (changed by the designer, 2026-07-20 — deliberate). Trade-off accepted: the card no longer inherits Pop Over updates, in exchange for full control over padding/radius/width. Any future Pop Over change must be mirrored here by hand.
>
> ⚠️ **Close moved inline next to the Title** (2026-07-20), inside `Text > Container` with a 4px gap — it is no longer absolutely positioned in the card corner. The Title shrinks to make room (304 → 284).

**Properties:**
> Names are short (no "Show" prefix) so they don't truncate in the Figma toolbar.

*1. `Coachmark` — the card (component set, 12 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Placement` | VARIANT | `Bottom` · `Top` · `Left` · `Right` | `Bottom` |
| `Step` | VARIANT | `First` · `Middle` · `Last` | `First` |

> `Placement` drives the arrow direction. `Step` is a label for the intended position in the flow. ⚠️ **Since Navigation became a nested component, `Step` no longer auto-drives the footer** — see the note under Behaviour: `Next → Done` (last) and hiding `Previous` (first) are set per instance.

*2. `_Coachmark/Content` — the card body (**component SET**, id `8726:9809`). Nests Navigation, Close, Dots.*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Image` | **VARIANT** | `False` · `True` | **`False`** |
| `Image Slot` | **SLOT** | any content (illustration / screenshot) | empty |
| `Description` | BOOLEAN | true · false | `true` |

> ⚠️ **Changed 2026-07-20:** `Image` was a BOOLEAN defaulting to `true`; it is now a **VARIANT** defaulting to **`False`** — so a new Coachmark starts **text-only** and you opt into the image. Content was promoted from a single component to a component set to carry the variant.
>
> Title & description are plain text — edit them directly on the instance. The image is a **real SLOT** (drop any component in; empty = the card closes up).

*3. `_Coachmark/Navigation` — the footer (component set, 2 variants, id `8712:10610`) · nested inside Content*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Navigation` | VARIANT | `Dots` · `Counter` | `Dots` |
| `Back Action` | **BOOLEAN** | true · false | `true` |

> ⚠️ **New 2026-07-20:** `Back Action` toggles the back affordance from the footer directly — so hiding *Previous* on the first step is now a **property**, not a manual per-instance edit. See the wiring note under Behaviour (partly superseded).

> **`Dots`** = dots + Next, **no Back** (dots let you jump). **`Counter`** = "1 / N" + Previous + Next. **Guidance:** ≤5 steps → `Dots` · ≥6 steps → `Counter` (dots stop being readable past ~5).

*4. `_Coachmark/Close` — the close icon (component set, 2 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `State` | VARIANT | `Default` · `Hover` | `Default` |

> Placed top-right of the card at **opacity 65%** (the "Sedang" emphasis level). Default = circle `surface/raised` + X `text/muted`. Hover = circle `surface/muted` + X `text/secondary`.

*5. `_Coachmark/Dots` — step indicator (set, id `8618:277683`) + `_Coachmark/Dot` (atomic, Active × State)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Steps` | VARIANT | `2` · `3` · `4` · `5` | **`5`** |
| `Active` | VARIANT | `1` … `5` (≤ Steps) | `1` |

> ⚠️ **Changed 2026-07-20:** default `Steps` 3 → **5**.

> Dot hover: inactive → `action/primary/hover` (`#89bde5`, "clickable"); active → `action/primary/pressed` (`#3385b5`).

**Tokens (Paperverse names):** — ✅ = verified live in Figma 2026-07-20

| Part | Token | Value |
|---|---|---|
| Card background | ⚠️ **`semantic/background/White`** — collection **`Color`** | `#ffffff` |
| Card radius | — **unbound raw value** | **8px** |
| Card padding · gap | `spacing/xl` ✅ · gap **unbound** | 20px · **10px** |
| Card shadow | Effect style **`Shadow Neutral-01`** — library `Primitive Token (Text & Layout)` ✅ · applied to the **variant root**, not the Card (see below) | `0 3px 10px #000000` @ 8% |
| Card width | — | **344px** (Placement Bottom/Top) · **320px** (Left/Right) |
| Title | `color/text/primary` + Heading/S | `#133f5d` · 16/20 bold |
| Description · Counter "1/N" | `color/text/secondary` + Body/M | `#718c9e` · 14/22 |
| Next / Done button | `color/action/primary/bg` · `/fg` | `#4199d5` · `#ffffff` |
| Previous button | `color/action/neutral/*` | bg `#ffffff` · border `#eaedef` · text `#133f5d` |
| **Close** — icon stroke | ⚠️ **`color/action/disabled/fg`** (was `color/text/muted`) | — |
| Close opacity | — | 65% |
| Dot active · inactive | `color/action/primary/bg` · `color/border/default` | `#4199d5` · `#dde1e5` |
| **Scrim** | `color/text/primary` @ 70% | `#133f5d` @ .7 |
| **Ring** | `color/surface/light/default` + `stroke/lg` | `#ffffff` · 2px |
| Card content gap · card↔target | `spacing/md` · `spacing/lg` | 12px · 16px |

## 6. Behaviour
| State | Visual / behaviour |
|---|---|
| **Default** | Scrim + cutout + ring active; the card anchors to the target per `Placement`. Close icon top-right. |
| **Nav = Dots** | Footer = dots (active in blue) + **Next**. No Back — mundur lewat clicking a dot. |
| **Nav = Counter** | Footer = "1 / N" + **Previous** + **Next**. |
| **First step** | Hide `Previous` (Counter only). |
| **Last step** | Primary button reads **"Done"**; clicking it closes the tour. |
| **Close hover** | Circle darkens (`surface/muted`) + X darkens (`text/secondary`); opacity → 100%. |
| **Button hover** | Next → `#89bde5`. Previous → bg `#f2f4f5`. |
| **Dismissed** | Scrim, ring and card disappear; the page becomes interactive again. |
| **No image** | The card closes up — the title starts at the top padding, no empty gap. |

- **Close is the exit:** clicking the top-right X dismisses the whole tour (not one step). `Esc` does the same.
- **Step change:** cutout, ring and card animate to the new target (~300ms, `--ease-out-regular`). Content swaps without a reload.
- **Dots are clickable:** jump straight to any step.
- **Clicking the scrim:** **no-op** (prevents accidental dismissal).
- **Auto-scroll:** if the target sits outside the viewport, the page scrolls to it first.
- **Missing or hidden target:** skip that step; if every target is missing, the tour does not open.

> ⚠️ **Wiring note (consequence of Navigation being a nested component):** `Next → Done` on the last step and hiding `Previous` on the first step are **set per instance** (edit the Next label; toggle Previous), not auto-driven by the card's `Step` variant. The 12 card variants ship with sensible defaults (Step=Last shows "Done"). Reason: the footer now lives in a swappable nested component, so it can't read the parent's `Step`. Trade-off accepted to keep variant count low (Navigation = 2, not 6).

## 7. Variant
| Variant | Where | When to use |
|---|---|---|
| `Navigation` **Dots / Counter** | Coachmark Navigation (nested) | ≤5 steps → Dots · ≥6 → Counter. |
| `Placement` **Bottom / Top / Left / Right** | Coachmark card | Card direction; arrow follows. If the target is near a screen edge, pick the side that fits. |
| `Step` **First / Middle / Last** | Coachmark card | Intended flow position (label; footer state is set per instance — see Behaviour note). |
| `Steps` **2–5** · `Active` | Coachmark Dots | Number of dots + which is active. |
| `State` **Default / Hover** | _Coachmark/Close | Close interaction state. |

In code, `Placement` also supports `auto` (computes the side that fits). Figma has no `auto` — the designer picks manually.

### Choosing navigation — Dots vs Counter

The single most common decision on this component. **Rule of thumb: 5 is the cutoff.**

| | **Dots** | **Counter "1 / N"** |
|---|---|---|
| **Use for** | ≤ 5 steps | ≥ 6 steps |
| **Reads as** | progress by *quantity* — total visible at a glance | progress by *number* — "3 / 12", legible at any length |
| **Going back** | none — **jump by clicking a dot** | **Previous** button (linear, one at a time) |
| **Feels** | light, quick, browsable | structured, progress-tracking |
| **Best for** | short feature intros, non-linear peeks | long or strictly-linear walkthroughs |

**Why the cutoff is 5:** dots show progress by *how many* there are, and the eye can only count a row of dots at a glance up to ~5 ("is that 6 or 7?"). Past that, dots stop communicating — switch to the numeric counter, which stays readable at any length. The trade-off: a counter can't be clicked to jump, so it needs a **Previous** button; dots don't.

**If a tour needs more than ~8 steps** it's usually two tours — split it rather than pushing the counter higher.

*Aligns with common practice (carousels, onboarding, Ant Design Tour): dots for few, numeric indicator for many.*

## 8. Do's & Don'ts
> ⚠️ **This section is VISUAL in Figma** (rule R2). See the `Guideline — Coachmark` frame: each row pairs a correct and an incorrect card side by side, built from real `Coachmark` instances with Paper.id content. The table below is the written summary only.

| ✅ Do | ❌ Don't |
|---|---|
| Keep tours short (≤5 steps) | Build an 8-step tour — users dismiss it |
| Keep the close icon on every step | Remove the exit to "force" users to pay attention |
| Keep the close muted (secondary exit) | Make the close as loud as Next (it competes) |
| Dots for ≤5 steps, Counter for ≥6 | Cram 8 dots — they stop being readable |
| Use a white ring (it's a marker) | Use a brand-blue ring (reads as a button) |
| Write a specific title: "Payment status, in real time" | Write a generic title: "New feature!" |
| Point at elements **actually on screen** | Point at hidden elements, or ones another role can't see |
| Keep descriptions to 1–2 lines | Put a long paragraph inside the card |

## 9. Edge Cases
> ⚠️ **This section is VISUAL in Figma** (rule R2). See the `Guideline — Coachmark` frame → *Edge Cases — visual*: live `Coachmark` instances over a scrim, real Paper.id content (invoices, suppliers, column settings), each with a ✅ / ⚠️ verdict.

- **Long title:** wraps to max 2 lines; never truncate with an ellipsis.
- **Long description:** wraps, card grows. Past 4 lines = the copy is too long, cut it.
- **No image:** the card closes up rather than leaving an empty slot.
- **Target near a screen edge:** move `Placement` to the side that fits; clamp the card inside the viewport.
- **Target larger than the viewport** (a full table): the cutout matches the target; the card anchors to the visible edge.
- **Target disappears mid-tour** (row deleted, filter changed): skip that step — no ring floating over empty space.
- **Page scrolls during the tour:** cutout + card reposition with the target.
- **Many steps:** past ~5, switch `Navigation` to Counter; past ~8, split into separate tours.
- **Narrow screens:** the 320px card fits at ≥360px. **Mobile not yet in scope** (deferred).
- **i18n:** Indonesian copy runs longer than English — never fix the card height.
- **Two tours at once:** queue them; never stack two scrims.
