---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 238
  quote_verbatim: "Borders are a great way to distinguish two elements, but they aren't the only way, and using too many can make your design feel busy and cluttered."
slug: "fewer-borders-alternatives"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [visual-polish, spacing, depth, border]
apply_value: "high"
problem_domain: "visual-polish"
---

# Fewer Borders — 3 Alternatives

## Problem Trigger
> Layout terasa "busy" atau "cluttered" karena terlalu banyak garis border sebagai separator, atau design terlihat terlalu kotak-kotak.

---

## The Thinking
> Border adalah cara paling obvious untuk memisahkan dua elemen — tapi bukan satu-satunya, dan terlalu banyak border bikin design terasa ramai. Tiga alternatif yang lebih subtle: (1) **Box shadow** — outline element seperti border tapi lebih halus dan tidak "cutting", works best kalau element warnanya beda dari background. (2) **Two different background colors** — adjacent element pakai bg yang sedikit berbeda (misal `hsl(200, 10%, 94%)` vs white) — cukup untuk menciptakan batas tanpa garis fisik. (3) **Extra spacing** — tambah margin/padding lebih besar antara group — spacing sendiri cukup untuk menciptakan separasi tanpa UI tambahan.

---

## Contoh Konkret (1 contoh nyata)
> Contacts list dialog: search field dipisahkan dari list bukan dengan border — pakai `background: hsl(200,10%,94%)` di search area vs white di list. Atau pakai `box-shadow: 0 5px 15px 0 hsla(0,0%,0%,.15)` di card vs flat page background. Keduanya menciptakan separasi yang jelas tanpa satu garis border pun.

---

## Anti-pattern (yang BUKAN ini)
> Setiap row table punya border-bottom, tiap section punya border atas dan bawah, card punya border semua sisi + ada divider internal juga. Design terlihat seperti spreadsheet.

---

## Aplikasi untuk Paper.id
> Untuk table list: row separator bisa pakai spacing (lebih airy) atau subtle bg alternating, bukan border-bottom tebal. Untuk card section di Detail page: gunakan bg color difference (`--color-surface-light-raised` vs white) untuk separasi antar block info — kurangi border. Untuk form section divider: extra spacing 32px antara section group sudah cukup tanpa garis `<hr>`.

---

## Cross-refs
- Kartu lain: `[[spacing-system-scale]]` — spacing sebagai tools separasi
- Kartu lain: `[[shadow-two-layers]]` — box shadow implementation
- DS / rules: `paper-designer/rules/design-rules.md`

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch8 — Finishing Touches, "Use fewer borders"
- Halaman: 238-241
- Quote verbatim:
  > "Borders are a great way to distinguish two elements, but they aren't the only way, and using too many can make your design feel busy and cluttered."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
