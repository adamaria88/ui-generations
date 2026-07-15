# Component Guideline — Spotlight

> **Component name: `Spotlight`** (decided by user, 2026-07-13). Other candidates considered: Tour ([Ant Design](https://ant.design/components/tour)), Walkthrough, Coachmark. `Spotlight` was chosen — aligned with [Atlassian Spotlight](https://atlassian.design/components/onboarding/).
> **Button labels are in English** (`Skip` · `Previous` · `Next` · `Done`) — the library component stays generic; copy is filled in at usage time.
> Written in English per the locked guideline rule (`component-explorer/pipeline.md`, Fase 4 → R1).

> 9-section Component Guideline. Phase 4 · shipped to Figma (Phase 5).
> Selected alt: **Alt A** (the only treatment — entered from a SPEC, so the 5-alternative exploration was skipped).
> Property model source: Phase 3.5 Playground (`playground-alt-a.html`) — mapped 1:1 into Figma.
> Color binding: `semantic` + `primitive_text_and_layout` collections only. The `Color` collection is **forbidden**.

## 1. Preview Design Component
A multi-step tour layered over a product page:
- **Scrim** dims the entire viewport; a **cutout** punches a hole around the target element.
- **Ring** — 2px white outline around the target (4px offset).
- **Card** (Paperverse Pop Over) anchored to the target, with an arrow pointing at it.
- Card content: image (optional) → title → description (optional) → dots → footer (Skip · Previous · Next/Done).

(In Figma: the component preview frame sits at the top of the guideline.)

## 2. Overview
Spotlight is an educational overlay that **highlights UI elements one at a time** while showing an explanatory card next to each one. Use it to introduce a new feature or guide a first-time user through a page in Paper.id (e.g. the *Shared Invoice* tab in Purchase Invoice). The flow is multi-step: users can move forward, go back, jump between steps, or leave at any time.

## 3. When to Use
- ✅ **Use when** a new feature ships and existing users need to know **where** it is, not just **what** it does.
- ✅ **Use when** a page has 2–5 related points of interest that are easier to understand when pointed at in their real context.
- ✅ **Use when** it is first-time-use education that should appear **once** per user.
- ❌ **Don't use when:**
  - Only **one thing** needs explaining → use a plain **Tooltip** / **Popover** (no scrim needed).
  - The information must be read before proceeding → use an **Information Modal** (blocking, not a tour).
  - It's a general announcement that doesn't point at a specific element → use a **Banner**.
  - The tour would exceed 5 steps → users will hit Skip. Split it into separate tours, or move it to a help page.

*Source: NN/g, "Instructional Overlays and Coach Marks" — coachmarks only work when they are short, skippable, and anchored to concrete elements. Atlassian's Spotlight pattern recommends a maximum of 3–4 steps.*

## 4. Design Principle
- **Visual weight = importance.** The scrim lowers the weight of the ENTIRE page so that one element is the only lit thing on screen. This is the most extreme hierarchy tool we have — reserve it for education, never for everyday navigation. *(paper-designer-thinking — One Lens)*
- **Action color is reserved for interactive elements.** The spotlight ring is **white**, NOT brand blue. A blue ring reads as "this is a button you must click", when the ring is only a marker. Blue stays reserved for the Next button and the active dot. *(thinking — Color rule)*
- **Always provide an exit.** Skip appears on **every** step, not just the first. A tour you can't leave is a dead end. *(thinking — Flow Rules: minimize usability risk)*
- **Recovery beats prevention.** Clicking the scrim is deliberately a **no-op**: the tour only appears once, so an accidental dismissal cannot be undone. A little friction here is cheaper than losing the education entirely.
- **Accessibility:** `Esc` = Skip. Keyboard focus is trapped inside the card while the tour is active. Dot hit area ≥ 24px even though the dot renders at 8px. Card text contrast ≥ 4.5:1 (measured on the white card, not against the scrim).

## 5. Anatomy & Properties

**Anatomy (outside → in):**
1. **Scrim** — full-viewport dim layer; blocks interaction outside the target. *(NEW)*
2. **Cutout** — a hole in the scrim matching the target's bounds; the target stays lit. *(NEW)*
3. **Ring** — white outline around the cutout, 4px offset, 4px radius. *(NEW)*
4. **Card / Pop Over** — the DS container (`component/Pop Over`), radius 4, `table/option` shadow.
   - **Arrow** — triangle pointing at the target; follows `Placement`. *(NEW)*
   - **Image** *(optional)* — 16:9, radius 4. **SLOT**.
   - **Title** *(required)* — Heading/S, `color/text/primary`.
   - **Description** *(optional)* — Body/M, `color/text/secondary`.
   - **Dots** — one per step; active dot is blue. Clickable to jump. *(NEW)*
   - **Footer** — `Skip` (left) · `Previous` + `Next`/`Done` (right).

**Properties (from the Phase 3.5 Playground — mapped 1:1 into Figma):**
> Property names are deliberately **short and without a "Show" prefix** so they don't get truncated in the Figma toolbar (`figma-build-sop`, convention 1).

Split into three components in Figma, following the DS **atomic + group** pattern (mirroring `_Chips/Chip` + `Chips`):

*1. `Spotlight` — the card (component set, 12 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Placement` | VARIANT | `Bottom` · `Top` · `Left` · `Right` | `Bottom` |
| `Step` | VARIANT | `First` · `Middle` · `Last` | `First` |

> `Step=First` hides `Back`. `Step=Last` turns the primary button into **"Done"**. `Placement` drives the arrow position.

*2. `Spotlight Content` — the card body (swapped into the Pop Over's Content Frame)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Image Slot` | **SLOT** | any content (illustration / screenshot) | empty |
| `Image` | BOOLEAN | true · false | `true` |
| `Description` | BOOLEAN | true · false | `true` |
| `Dots` | BOOLEAN | true · false | `true` |
| `Skip` | BOOLEAN | true · false | `true` |
| `Back` | BOOLEAN | true · false | `true` |

> Title and description are plain text — edit them directly on the instance (double-click). The image area is a **real SLOT**: drop any component into it; leave it empty and the card closes up.

*3. `Spotlight Dots` — the step indicator (component set, 14 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Steps` | VARIANT | `2` · `3` · `4` · `5` | `3` |
| `Active` | VARIANT | `1` … `5` (≤ Steps) | `1` |

*3b. `_Spotlight/Dot` — the atomic dot (4 variants)*

| Property | Figma type | Options | Default |
|---|---|---|---|
| `Active` | VARIANT | `True` · `False` | `False` |
| `State` | VARIANT | `Default` · `Hover` | `Default` |

> **Dot hover:** an **inactive** dot on hover → `color/action/primary/hover` (`#89bde5`), signalling "this is clickable". The **active** dot on hover → `color/action/primary/pressed` (`#3385b5`), a quiet acknowledgement even though clicking it is a no-op. Hover is set per dot via the nested instance, not as a group-level property.

> **Deviations from the original plan (recorded for honesty):**
> 1. **`Steps` lives on `Spotlight Dots`**, not on the card. Reason: combining `Steps` (4) × `Step` (3) × `Placement` (4) on the card would produce **48 variants** — unmanageable. Split instead into 12 card variants + 14 dot variants. Consequence: designers set the step count through the nested instance, not from the card's property panel.
> 2. **`Image` started as a BOOLEAN and was upgraded to a real SLOT** (by the DS designer, after the initial build). The BOOLEAN toggle remains for quick show/hide.
>
> **Scrim + Ring** live in a separate component (`Spotlight Scrim`), NOT as card properties — they anchor to the page, not to the card.

**Tokens (Paperverse names):**
| Part | Token | Value |
|---|---|---|
| Card background | `color/surface/light/default` ⚠️ **NOT** `semantic/background/White` | `#ffffff` |
| Card radius · padding | `radius/sm` · `spacing/xs` + `spacing/md`/`lg` | 4px · 4px + 12/16px |
| Card shadow | Effect style `table/option` | `0 1px 5px #133f5d26` |
| Card width | — | **320px** ⚠️ drift (DS Pop Over is 281px) |
| Title | `color/text/primary` + Heading/S | `#133f5d` · 16/20 bold |
| Description | `color/text/secondary` + Body/M | `#718c9e` · 14/22 |
| Image (empty) | **no fill, no border** — an empty 16:9 slot | — |
| Next / Done button | `color/action/primary/bg` · `/fg` | `#4199d5` · `#ffffff` |
| Previous button | `color/action/neutral/*` | bg `#ffffff` · border `#eaedef` · text `#133f5d` |
| Skip (text link) | `color/action/primary/bg` | `#4199d5` |
| Dot active · inactive | `color/action/primary/bg` · `color/border/default` | `#4199d5` · `#dde1e5` |
| **Scrim** ⚠️ NEW | `color/text/primary` @ 70% | `#133f5d` @ .7 |
| **Ring** ⚠️ NEW | `color/surface/light/default` + `stroke/lg` | `#ffffff` · 2px |
| Card content gap | `spacing/md` | 12px |
| Title ↔ description gap | `spacing/xs` | 4px |
| Card ↔ target distance | `spacing/lg` | 16px |

## 6. Behaviour
| State | Visual / behaviour |
|---|---|
| **Default** | Scrim + cutout + ring active; the card anchors to the target per `Placement`. |
| **First step** | `Skip` + `Next` visible. `Previous` is **hidden** (not disabled — a disabled button leaves a hole in the footer). |
| **Middle step** | `Skip` · `Previous` · `Next` all visible. |
| **Last step** | The primary button becomes **"Done"**. Clicking it closes the tour entirely. |
| **Hover** (required) | Next → `#89bde5`. Previous → bg `#f2f4f5`. Skip → `#3385b5`. Inactive dot → `#89bde5`; active dot → `#3385b5`. |
| **Pressed** | Next → `#3385b5`. Previous → bg `#dde1e5`. |
| **Dismissed** | Scrim, ring and card all disappear; the page becomes interactive again. |
| **No image** | The card closes up — the title starts at the top padding, leaving no empty gap. |

- **Step change:** the cutout, ring and card animate to the new target (~300ms, `--ease-out-regular`). Card content swaps without a reload.
- **Dots are clickable:** clicking a dot jumps straight to that step — navigation is not strictly sequential.
- **Clicking the scrim:** **no-op** (user decision — prevents accidental dismissal).
- **Esc:** same as Skip (closes the tour).
- **Auto-scroll:** if the target sits outside the viewport, the page scrolls to it before the spotlight appears.
- **Missing or hidden target:** that step is **skipped automatically** and the tour moves on (user decision). If every target is missing, the tour does not open at all.

## 7. Variant
| Variant | When to use |
|---|---|
| `Steps` **2–5** | Match the number of points you're explaining. Above 5 the tour is too long — split it up. |
| `Step` **First / Middle / Last** | Drives the footer automatically (Previous appears/disappears, Next → Done). |
| `Placement` **Bottom / Top / Left / Right** | Card direction relative to the target. Default `Bottom`. If the target is near a screen edge, pick the direction that fits. |
| `Image` on/off | Turn on when a visual explains the feature faster. Turn off for short tours. |

In code, `Placement` also supports `auto` (it computes the direction that fits). Figma has no `auto` — variants must be discrete, so the designer picks manually.

## 8. Do's & Don'ts
> ⚠️ **This section is VISUAL in Figma** (rule R2). See the `Guideline — Spotlight` frame: each row pairs a correct and an incorrect card side by side, built from real `Spotlight` instances with Paper.id content. The table below is the written summary only.

| ✅ Do | ❌ Don't |
|---|---|
| Keep tours to 5 steps maximum | Build an 8-step tour — users will hit Skip |
| Show `Skip` on **every** step | Hide Skip to "force" users to pay attention |
| Use a white ring (it's a marker) | Use a brand-blue ring (it reads as a button) |
| Write a specific title: "Payment status, in real time" | Write a generic title: "New feature!" |
| Point at elements that are **actually on screen** | Point at hidden elements, or ones another role can't see |
| Show once per user and store the flag | Reappear on every page visit |
| Keep descriptions to 1–2 lines | Put a long paragraph inside the card |
| Use a 16:9 image for visual features | Use a full screenshot that becomes illegible at 320px |

## 9. Edge Cases
> ⚠️ **This section is VISUAL in Figma** (rule R2). See the `Guideline — Spotlight` frame → *Edge Cases — visual*: six live `Spotlight` instances over a scrim, using real Paper.id content (invoices, suppliers, column settings), each with a ✅ / ⚠️ verdict. The list below is the written summary only.

- **Long title:** wraps to a maximum of 2 lines; never truncate with an ellipsis (the user loses the point).
- **Long description:** wraps and the card grows vertically. Past 4 lines, treat it as a signal that the copy is too long — cut it.
- **No image:** the card closes up rather than leaving an empty slot.
- **Target near a screen edge:** move `Placement` to the direction that fits; the card is clamped so it never leaves the viewport.
- **Target larger than the viewport** (e.g. a full table): the cutout matches the target's bounds and the card anchors to whichever edge is visible.
- **Target disappears mid-tour** (row deleted, filter changed): skip that step — never leave a ring floating over empty space.
- **Page scrolls during the tour:** the cutout and card reposition with the target; they must not stay pinned in place.
- **Narrow screens:** the 320px card still fits at ≥360px. **Mobile is not yet in scope** (user decision — deferred).
- **i18n:** Indonesian copy runs longer than English — never give the card a fixed height.
- **Two tours open at once** (e.g. two features shipping together): queue them; never stack two scrims.
