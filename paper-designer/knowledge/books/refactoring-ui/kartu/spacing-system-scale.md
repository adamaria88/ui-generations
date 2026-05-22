---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 3: Layout and Spacing"
  page: 66
  quote_verbatim: "A better approach is to start by giving something way too much space, then remove it until you're happy with the result."
slug: "spacing-system-scale"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [spacing, layout]
apply_value: "high"
problem_domain: "spacing"
---

# Spacing System — Start Big, Then Tighten

## Problem Trigger
> Layout terasa cramped, atau spacing antar elemen terasa inkonsisten / arbitrary ("kenapa ini 13px dan itu 17px?").

---

## The Thinking
> Default ke lebih banyak whitespace dari yang kamu kira perlu — lebih mudah dikurangi daripada ditambah setelah struktur terbentuk. Gunakan spacing scale berbasis kelipatan 4 (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px) bukan angka sembarang. Proximity = relasi: elemen yang berhubungan harus lebih dekat satu sama lain dibanding elemen yang tidak. Group-group konten harus punya gap lebih besar antar-group dibanding internal-group.

---

## Contoh Konkret (1 contoh nyata)
> Form dengan label di atas input: gap label→input = 4px (sangat dekat, clearly related), gap antar field = 16px (related tapi distinct), gap antar section = 32px (clearly separate groups). Hierarchy spacing yang jelas tanpa perlu border divider.

---

## Anti-pattern (yang BUKAN ini)
> Spacing 15px di satu tempat, 13px di tempat lain, 20px di tempat lain — arbitrary values yang tidak punya sistem. Atau semua gap sama 8px sehingga group boundaries tidak terasa.

---

## Aplikasi untuk Paper.id
> Untuk in-card toolbar dan table: gap antar action button di toolbar = 8px, gap toolbar ke table = 16px, gap antar section di form = 24-32px. Sudah sebagian implemented di `_output/expense-management/02-ui-aurora.html` — referensi hidup. Saat bikin page baru, mulai dari spacing yang cukup generous, baru tighten saat review.

---

## Cross-refs
- DS / rules: `paper-designer/rules/design-rules.md` — section spacing/layout
- Kartu lain: `[[fewer-borders-alternatives]]` — spacing sebagai alternatif border

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch3 — Layout and Spacing
- Halaman: 66 (section "Start with too much white space"), quote dari p.68
- Quote verbatim: "A better approach is to start by giving something way too much space, then remove it until you're happy with the result."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
