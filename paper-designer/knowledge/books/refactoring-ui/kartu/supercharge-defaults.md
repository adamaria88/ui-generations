---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 220
  quote_verbatim: ""
slug: "supercharge-defaults"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [visual-polish, form, typography, icon]
apply_value: "medium"
problem_domain: "visual-polish"
---

# Supercharge Default UI Elements

## Problem Trigger
> The UI feels "plain and unfinished" even though all elements are present — plain bullet lists, browser-default checkboxes, blockquotes that look like regular paragraphs.

---

## The Thinking
> Browser default elements (bullets, checkboxes, radios, blockquotes) work but have no character. A few easy upgrades that dramatically improve visual quality: (1) **Bullet list → icons**: replace `<li>` bullets with contextually relevant icons (checkmark for feature lists, shield for security, star for highlights). (2) **Blockquote → decorative**: add an oversized colored quotation mark icon as a visual element. (3) **Custom checkbox/radio**: `appearance:none` + custom 18px square with brand color when checked. (4) **Link styling**: bold + color only (without underline) for non-paragraph context, or a custom gradient underline.

---

## Concrete Example (1 real example)
> Feature comparison list: replace `•` with an Aurora checkmark icon 18px in brand green. Immediately feels premium. Security-related list: use a padlock icon. One change, big visual impact.

---

## Anti-pattern (what this is NOT)
> Native browser checkboxes that look different across Chrome/Firefox/Safari/macOS. Or `•` bullet lists for all contexts even when bullets aren't meaningful (why does a feature list use the same bullet as an error list?).

---

## Application for Paper.id
> - **Checkbox in table**: already implemented with custom `.chk` class (per `prototyping-gap-lessons.md` point 0j). Maintain this pattern in all new tables.
> - **Feature list on onboarding / empty state**: use Aurora checkmark icon (not a bullet) to add character.
> - **Blockquote / testimonial** (if present on marketing/onboarding pages): add decorative quotation mark icon.
> - **Custom radio**: if upgrading to selectable cards isn't feasible, at least custom radio styling (brand blue circle when selected, not browser default).

---

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — point 0j custom checkbox required, point 3 no emoji icons
- Memory rule: `[[aurora-lookup-ritual]]` — use Aurora SVG icon, don't create inline
- Other card: `[[empty-state-priority]]` — icon/illustration in empty state
- Other card: `[[selectable-cards-vs-radio]]` — a further upgrade for radio

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch8 — Finishing Touches, "Supercharge the defaults"
- Page: 220-223
- Quote verbatim: —
- Extraction date: 2026-05-22
- Reviewed by user: no
