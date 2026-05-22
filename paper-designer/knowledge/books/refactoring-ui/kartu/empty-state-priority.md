---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 234
  quote_verbatim: "Use them as an opportunity to be interesting and exciting — don't settle for plain and boring."
slug: "empty-state-priority"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [empty-state, onboarding, visual-polish]
apply_value: "high"
problem_domain: "empty-state"
---

# Empty State as First Impression

## Problem Trigger
> User buka fitur baru untuk pertama kali dan langsung lihat "Belum ada data" atau table kosong tanpa arahan selanjutnya.

---

## The Thinking
> Empty state adalah PERTAMA yang user lihat saat coba fitur baru — bukan afterthought, tapi priority design. Empty state harus: (1) punya ilustrasi / visual yang menarik (bukan hanya icon), (2) punya CTA button yang jelas (action pertama yang harus user lakukan), (3) HIDE UI controls yang tidak ada fungsinya saat kosong (tab, filter, kolom sort — kalau data kosong, kontrol ini misleading dan meaningless). Empty state yang baik = excited user untuk mulai. Empty state yang buruk = confused user yang tidak tau apa yang harus dilakukan.

---

## Contoh Konkret (1 contoh nyata)
> Notion empty database page: ilustrasi kecil + "Add a row to get started" + tombol "+ New" primary yang besar. Tab dan filter disembunyikan. User langsung tau action pertama mereka.

---

## Anti-pattern (yang BUKAN ini)
> Table kosong dengan header kolom lengkap, tab filter aktif, pagination "Menampilkan 0 dari 0 entri" — semua kontrol yang irrelevant tetap terlihat. User bingung, tidak ada direction.

---

## Aplikasi untuk Paper.id
> Untuk semua List Page (Pengeluaran, Invoice, Customer, dll): saat zero data, hide in-card toolbar + filter row, tampilkan ilustrasi + teks motivasi + tombol "Catat Pengeluaran Pertama" / "Buat Invoice". Empty state pakai Aurora empty state component jika tersedia, atau custom dengan approval AURORA-OVERRIDES.md. Prioritas implementasi: fitur baru yang user belum pernah pakai > fitur existing yang sudah ada data.

---

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` — cek Aurora empty state component dulu sebelum custom
- Kartu lain: `[[supercharge-defaults]]` — visual enhancement lain untuk polish

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch8 — Finishing Touches
- Halaman: 234-237
- Quote verbatim:
  > "Use them as an opportunity to be interesting and exciting — don't settle for plain and boring."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
