---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 2: Hierarchy is Everything"
  page: TBD
  quote_verbatim: ""
slug: "labels-secondary-value-primary"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [hierarchy, typography, form, detail-page]
apply_value: "high"
problem_domain: "hierarchy"
---

# Labels Secondary, Values Primary

## Problem Trigger
> Detail card atau info section terasa "flat" — semua teks berat sama, label dan value bersaing visual.

---

## The Thinking
> Di pasangan label-value ("Tanggal: 12 Mei 2026"), yang penting bagi user adalah VALUE-nya. Label hanya konteks. Oleh karena itu: value = bold / dark / larger, label = muted / grey / smaller. Label bahkan bisa dihilangkan kalau value sudah self-explanatory. Kalau semua label dan value pakai weight/color yang sama, user harus "parse" lebih keras untuk tau mana data yang mereka cari.

---

## Contoh Konkret (1 contoh nyata)
> Invoice detail di Linear: "Due date" (label, 11px grey) di atas "March 15, 2026" (value, 14px dark bold). User langsung scan ke value; label hanya membantu kalau ada ambiguitas.

---

## Anti-pattern (yang BUKAN ini)
> Detail section dengan 8 baris `Label: Value` semuanya 14px #333 regular — user harus baca semua untuk orientasi. Atau label di-bold padahal nilai yang dicari user ada di value-nya.

---

## Aplikasi untuk Paper.id
> Di View Invoice / View Pengeluaran: semua field di detail card (Tanggal, Jatuh Tempo, Nomor Invoice, Mitra) — label = muted small, value = dark regular/medium. Untuk data moneter (Total, Subtotal): value bold + larger. Sesuai `[[label-disambiguation-rule]]`: label HANYA muncul kalau ada ambiguitas (2 tanggal, 2 jumlah, dll).

---

## Cross-refs
- Memory rule: `[[label-disambiguation-rule]]` — kapan label perlu/tidak perlu
- Kartu lain: `[[hierarchy-weight-color]]` — framework hierarki lebih luas
- DS / rules: `paper-designer/rules/design-rules.md` — section View Document

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch2 — Hierarchy is Everything
- Halaman: TBD
- Quote verbatim: —
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
