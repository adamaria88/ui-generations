---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 242
  quote_verbatim: "Don't let your existing beliefs hold back your designs — constraints are powerful but sometimes a bit of freedom is just what you need to take an interface to the next level."
slug: "think-outside-box-component"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [component, visual-polish, table, navigation]
apply_value: "medium"
problem_domain: "component"
---

# Question Component Defaults

## Problem Trigger
> Komponen terasa "generic" atau boring — dropdown, table, form terlihat seperti template tanpa karakter, tapi tidak tau harus diubah apa.

---

## The Thinking
> Setiap komponen punya mental default yang sudah terkondisikan: dropdown = white box + plain text list, table = kolom independen per data field, radio = circle + label. Default itu adalah starting point, bukan constraint. Pertanyaan yang harus diajukan: "Apa yang komponen ini sebenarnya ingin capai untuk user?" Dropdown navigasi dengan 6 fitur? Bisa jadi mega-menu 2-kolom dengan icon + deskripsi pendek. Table dengan kolom Name + Role yang tidak perlu disortir sendiri-sendiri? Bisa di-stack jadi satu kolom "Name (Role di bawahnya, muted)". Radio plan selection yang penting? Upgrade ke selectable cards.

---

## Contoh Konkret (1 contoh nyata)
> Table sebelum (p.244): 6 kolom terpisah (Name | Role | Policy | Policy Type | Location | Status). Setelah (p.244): 4 kolom — "Name + Role" di-stack jadi 1 kolom (Name bold, Role muted di bawah), "Policy + Policy Type" di-stack jadi 1, Location, Status. Lebih readable, lebih compact, lebih kaya informasi per baris.

---

## Anti-pattern (yang BUKAN ini)
> Desain setiap komponen persis seperti browser default atau Bootstrap default — "karena itulah tampilan dropdown" — tanpa tanya apakah itu cara terbaik untuk use case spesifik ini.

---

## Aplikasi untuk Paper.id
> - **Table di List Page**: kolom yang related dan tidak perlu disortir sendiri bisa di-stack (contoh: "Nama Mitra" + "Email" dalam 1 cell). Sudah dipertimbangkan di expense-management table.
> - **Dropdown Tindakan**: sudah upgraded dengan icons (sesuai `prototyping-gap-lessons.md` poin 0f).
> - **Navigation/mega menu**: kalau Paper.id punya sub-features banyak, pertimbangkan grouped menu dengan kategori + icon daripada flat list.

---

## Cross-refs
- Kartu lain: `[[selectable-cards-vs-radio]]` — contoh konkret upgrade radio
- Memory rule: `[[prototyping-gap-lessons]]` — poin 0f icon wajib di action menu
- DS / rules: `paper-designer/rules/design-rules.md`

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch8 — Finishing Touches, "Think outside the box"
- Halaman: 242-246
- Quote verbatim:
  > "Don't let your existing beliefs hold back your designs — constraints are powerful but sometimes a bit of freedom is just what you need to take an interface to the next level."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
