---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 4: Designing Text"
  page: 122
  quote_verbatim: ""
slug: "line-height-by-context"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [typography, readability]
apply_value: "high"
problem_domain: "typography"
---

# Line Height by Context

## Problem Trigger
> Headline terasa terlalu spaced-out / loose, atau body paragraph terasa cramped / hard to read.

---

## The Thinking
> Line height bukan satu nilai untuk semua — harus disesuaikan konteks. Rumusnya: semakin panjang baris teks dan semakin kecil font, semakin besar line-height yang dibutuhkan. Headline (large, sedikit kata): 1.0-1.2 (tight). Body text (medium size, banyak kata): 1.5-1.8 (loose untuk readability). Small UI labels (≤12px): 1.2-1.4. Nilai 1.5 sebagai universal default tidak tepat — headline dengan `line-height: 1.5` terlihat "airy" dan aneh.

---

## Contoh Konkret (1 contoh nyata)
> H1 "Buat Invoice" di page header: `font-size: 24px; line-height: 1.2` — tight, authority. Paragraph deskripsi di bawahnya: `font-size: 14px; line-height: 1.6` — loose, readable. Table cell text: `font-size: 14px; line-height: 1.4` — cukup, konteks UI bukan reading.

---

## Anti-pattern (yang BUKAN ini)
> Semua text di page pakai `line-height: 1.5` tanpa pertimbangan — heading jadi aneh spaced, atau label compact field jadi terlalu tinggi.

---

## Aplikasi untuk Paper.id
> - Page title / section heading: `line-height: 1.2-1.3`
> - Table cell content: `line-height: 1.4`
> - Form helper text / description: `line-height: 1.6`
> - Toast message: `line-height: 1.4` (2-line max)
> Aurora biasanya sudah set nilai ini di component — ikuti Aurora default kecuali ada override eksplisit di AURORA-OVERRIDES.md.

---

## Cross-refs
- DS / rules: `paper-designer/rules/design-rules.md` — section Typography
- Kartu lain: `[[hierarchy-weight-color]]` — line-height sebagai bagian dari hierarchy system

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch4 — Designing Text
- Halaman: 122 (section "Line-height is proportional", dari TOC)
- Quote verbatim: —
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no (Claude-verified TOC p.3-4)
