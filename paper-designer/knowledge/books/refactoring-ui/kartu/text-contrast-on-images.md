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
> Teks di atas foto atau background image sulit dibaca — terutama kalau foto punya area terang yang tidak terduga.

---

## The Thinking
> Ada 4 teknik untuk guarantee teks terbaca di atas image: (1) **Semi-transparent overlay** — dark overlay (`rgba(0,0,0,0.4)`) di atas image sebelum teks. (2) **Low-brightness image** — pastikan gambar sendiri sufficiently dark/low-contrast sebelum teks diletakkan. (3) **Color tint overlay** — overlay warna brand (misal brand blue semi-transparent) yang sekaligus bikin image feel branded. (4) **Text shadow** — `text-shadow: 0 1px 3px rgba(0,0,0,0.5)` tipis untuk teks di atas image yang busy. Jangan rely pada "gambarnya kebetulan dark di sini" — selalu gunakan salah satu teknik di atas untuk kontrol yang predictable.

---

## Contoh Konkret (1 contoh nyata)
> Hero banner Paper.id yang pakai foto tim: tambah `background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))` dari atas ke bawah — area bawah (tempat teks) jadi gelap predictable. Teks putih di atas gradien hitam = selalu readable.

---

## Anti-pattern (yang BUKAN ini)
> Teks putih langsung di atas foto tanpa overlay, berharap foto cukup gelap — kadang readable, kadang tidak (tergantung konten foto yang user upload).

---

## Aplikasi untuk Paper.id
> Relevan untuk: avatar/banner upload di profile bisnis, header document yang punya background pattern. Untuk UI internal yang biasanya tidak pakai foto background, teknik ini lebih relevan untuk landing page / onboarding screen. Kalau ada user-generated image di dalam app, selalu pakai `object-fit: cover` + `background-color: fallback` + pastikan teks ada di area aman.

---

## Cross-refs
- Kartu lain: `[[color-palette-hsl-shades]]` — tint overlay pakai color dari palette
- DS / rules: `paper-designer/rules/design-rules.md`

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch7 — Working with Images
- Halaman: 202 (section "Text needs consistent contrast", dari TOC)
- Quote verbatim: —
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no (Claude-verified TOC p.3-4)
