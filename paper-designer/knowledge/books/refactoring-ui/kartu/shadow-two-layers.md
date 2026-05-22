---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 6: Depth"
  page: 186
  quote_verbatim: ""
slug: "shadow-two-layers"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [depth, shadow, visual-polish]
apply_value: "medium"
problem_domain: "depth"
---

# Two-Layer Box Shadow for Realistic Depth

## Problem Trigger
> Card atau floating element terasa "flat" atau shadow terlihat artificial / tidak natural.

---

## The Thinking
> Shadow di dunia nyata terdiri dari dua komponen: (1) **direct shadow** — kecil, sharp, dekat sumber cahaya (offset kecil, blur kecil, opacity tinggi), dan (2) **ambient shadow** — besar, soft, menyebar ke segala arah (offset lebih besar, blur besar, opacity rendah). Kombinasi keduanya = shadow yang terlihat natural. Single shadow saja terasa artificial. Contoh pattern: `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)` (close shadow + ambient). Untuk floating element lebih tinggi: `box-shadow: 0 4px 6px rgba(0,0,0,0.07), 0 10px 15px rgba(0,0,0,0.1)`.

---

## Contoh Konkret (1 contoh nyata)
> Dari buku p.239: dialog/modal dengan `box-shadow: 0 5px 15px 0 hsla(0,0%,0%,.15)` — satu layer untuk dialog yang "floating". Untuk card yang lebih subtle: dua layer tipis. Untuk dropdown menu (high elevation): dua layer dengan spread lebih besar.

---

## Anti-pattern (yang BUKAN ini)
> `box-shadow: 0px 4px 4px rgba(0,0,0,0.25)` — single symmetric shadow yang terlihat flat dan "copy-paste from Figma default". Atau shadow dengan opacity terlalu tinggi (0.5+) yang terlihat harsh.

---

## Aplikasi untuk Paper.id
> - Card summary di halaman: single soft shadow (`0 2px 8px hsla(0,0%,0%,.08)`)
> - Dropdown menu (portal): `0 4px 6px hsla(0,0%,0%,.07), 0 10px 20px hsla(0,0%,0%,.1)`
> - Modal dialog: `0 5px 15px hsla(0,0%,0%,.15)` (sudah ada di Aurora Dialog component)
> Cek `au-dialog.component.scss` untuk nilai Aurora official sebelum custom.

---

## Cross-refs
- Kartu lain: `[[fewer-borders-alternatives]]` — shadow sebagai alternatif border
- Memory rule: `[[aurora-lookup-ritual]]` — cek Aurora shadow token dulu
- DS / rules: `paper-designer/ds/ds-core.md` — shadow tokens

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch6 — Depth / Ch8 screenshot p.239
- Halaman: 186 (section "Shadows can have two parts", dari TOC) + 239 (Ch8 shadow example)
- Quote verbatim: —
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no (Claude-verified TOC p.3-4)
