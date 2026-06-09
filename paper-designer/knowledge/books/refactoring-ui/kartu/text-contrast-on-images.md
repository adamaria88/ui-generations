---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 7: Working with Images"
  page: 202
  quote_verbatim: ""
slug: "text-contrast-on-images"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [imagery, color, accessibility]
apply_value: "medium"
problem_domain: "imagery"
---

# Text Contrast Over Images

## Problem Trigger
> Text over a photo or background image is hard to read — especially if the photo has unexpected bright areas.

---

## The Thinking
> There are 4 techniques to guarantee text is readable over an image: (1) **Semi-transparent overlay** — dark overlay (`rgba(0,0,0,0.4)`) over the image before placing text. (2) **Low-brightness image** — ensure the image itself is sufficiently dark/low-contrast before placing text. (3) **Color tint overlay** — brand-colored overlay (e.g., brand blue semi-transparent) that also makes the image feel branded. (4) **Text shadow** — thin `text-shadow: 0 1px 3px rgba(0,0,0,0.5)` for text on busy images. Don't rely on "the image happens to be dark here" — always use one of the techniques above for predictable control.

---

## Concrete Example (1 real example)
> Paper.id hero banner using a team photo: add `background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))` from top to bottom — the bottom area (where text lives) becomes predictably dark. White text over a black gradient = always readable.

---

## Anti-pattern (what this is NOT)
> White text directly over a photo without an overlay, hoping the photo is dark enough — sometimes readable, sometimes not (depending on user-uploaded photo content).

---

## Application for Paper.id
> Relevant for: avatar/banner uploads on business profiles, document headers with background patterns. For internal UI that typically doesn't use photo backgrounds, this technique is more relevant for landing pages / onboarding screens. If there are user-generated images inside the app, always use `object-fit: cover` + `background-color: fallback` + ensure text is in a safe area.

---

## Cross-refs
- Other card: `[[color-palette-hsl-shades]]` — tint overlay uses color from the palette
- DS / rules: `paper-designer/rules/design-rules.md`

---

## Source Verification

- Book: Refactoring UI by Adam Wathan & Steve Schoger
- Chapter: Ch7 — Working with Images
- Page: 202 (section "Text needs consistent contrast", from TOC)
- Quote verbatim: —
- Extraction date: 2026-05-22
- Reviewed by user: no (Claude-verified TOC p.3-4)
