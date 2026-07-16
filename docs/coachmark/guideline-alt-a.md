# Component Guideline — Coachmark

> **Component name: `Coachmark`** (renamed from "Spotlight", 2026-07-15). Earlier candidates: Tour ([Ant Design](https://ant.design/components/tour)), Spotlight ([Atlassian](https://atlassian.design/components/onboarding/)), Walkthrough.
> **Button labels are in English** (`Previous` · `Next` · `Done`). The library component stays generic; copy is filled in at usage time.
> Written in English per the locked guideline rule (`component-explorer/pipeline.md`, Fase 4 → R1).
> Reflects the 2026-07-15 revamp: close icon (replaces Skip), two navigation types (Dots / Counter as a nested component), dots moved into the footer.

> 9-section Component Guideline. Phase 5 · live in Figma.
> Property model source: Phase 3.5 Playground + revamp explorations (`explore-nav-close.html`, `explore-close-c.html`).
> Color binding: `semantic` + `primitive_text_and_layout` collections only. The `Color` collection is **forbidden**.

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
 └ Coachmark Content  (single component)
    ├ Coachmark Navigation  (set: Dots / Counter)   ← nested, exposed on the card
    ├ _Coachmark/Close      (set: Default / Hover)
    └ Coachmark Dots        (set: Steps × Active)
Scrim · _Coachmark/Arrow    (separate — anchor to the page, not the card)
```

**Properties:**
> Names are short (no "Show" prefix) so they don't truncate in the Figma toolbar.

*1. `Coachmark` — the card (component set, 12 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Placement` | VARIANT | `Bottom` · `Top` · `Left` · `Right` | `Bottom` |
| `Step` | VARIANT | `First` · `Middle` · `Last` | `First` |

> `Placement` drives the arrow direction. `Step` is a label for the intended position in the flow. ⚠️ **Since Navigation became a nested component, `Step` no longer auto-drives the footer** — see the note under Behaviour: `Next → Done` (last) and hiding `Previous` (first) are set per instance.

*2. `Coachmark Content` — the card body (swapped into the Pop Over's Content Frame). Nests Navigation, Close, Dots — all reachable on the placed card via exposed nested instances.*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Image Slot` | **SLOT** | any content (illustration / screenshot) | empty |
| `Image` | BOOLEAN | true · false | `true` |
| `Description` | BOOLEAN | true · false | `true` |

> Title & description are plain text — edit them directly on the instance. The image is a **real SLOT** (drop any component in; empty = the card closes up).

*3. `Coachmark Navigation` — the footer (component set, 2 variants) · nested inside Content*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Navigation` | VARIANT | `Dots` · `Counter` | `Dots` |

> **`Dots`** = dots + Next, **no Back** (dots let you jump). **`Counter`** = "1 / N" + Previous + Next. **Guidance:** ≤5 steps → `Dots` · ≥6 steps → `Counter` (dots stop being readable past ~5).

*4. `_Coachmark/Close` — the close icon (component set, 2 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `State` | VARIANT | `Default` · `Hover` | `Default` |

> Placed top-right of the card at **opacity 65%** (the "Sedang" emphasis level). Default = circle `surface/raised` + X `text/muted`. Hover = circle `surface/muted` + X `text/secondary`.

*5. `Coachmark Dots` — step indicator (set, 14 variants) + `_Coachmark/Dot` (atomic, Active × State)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Steps` | VARIANT | `2` · `3` · `4` · `5` | `3` |
| `Active` | VARIANT | `1` … `5` (≤ Steps) | `1` |

> Dot hover: inactive → `action/primary/hover` (`#89bde5`, "clickable"); active → `action/primary/pressed` (`#3385b5`).

**Tokens (Paperverse names):**
| Part | Token | Value |
|---|---|---|
| Card background | `color/surface/light/default` ⚠️ **NOT** `semantic/background/White` | `#ffffff` |
| Card radius · padding | `radius/sm` · `spacing/xs` + `spacing/md`/`lg` | 4px · 4px + 12/16px |
| Card shadow | Effect style `table/option` | `0 1px 5px #133f5d26` |
| Card width | — | **320px** ⚠️ drift (DS Pop Over is 281px) |
| Title | `color/text/primary` + Heading/S | `#133f5d` · 16/20 bold |
| Description · Counter "1/N" | `color/text/secondary` + Body/M | `#718c9e` · 14/22 |
| Next / Done button | `color/action/primary/bg` · `/fg` | `#4199d5` · `#ffffff` |
| Previous button | `color/action/neutral/*` | bg `#ffffff` · border `#eaedef` · text `#133f5d` |
| **Close** — circle default · hover | `color/surface/light/raised` · `/muted` | `#f3f6f9` · `#e7eaec` |
| **Close** — X default · hover | `color/text/muted` · `text/secondary` | `#a5b6c1` · `#718c9e` |
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
