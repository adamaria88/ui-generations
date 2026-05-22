---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 2: Hierarchy is Everything"
  page: 38
  quote_verbatim: "Instead of leaving all of the heavy lifting to font size alone, try using font weight or color to do the same job."
slug: "hierarchy-weight-color"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "reviewed"
tags: [hierarchy, typography, color]
apply_value: "high"
problem_domain: "hierarchy"
---

# Hierarchy via Weight + Color (De-emphasize Pattern)

## Problem Trigger
> Page terasa "ramai" atau primary element tidak terasa dominant meski sudah diperbesar.

---

## The Thinking
> Hierarchy punya tiga lever: size, weight (bold/regular), dan color (primary vs muted). Instinct awal selalu "bikin yang penting lebih besar" — tapi lebih efektif jika secondary element di-de-emphasize. Label bisa jadi abu-abu, teks pendukung bisa lighter weight, meta-info bisa ukuran lebih kecil. Primary element "menang" bukan karena dia lebih loud, tapi karena kompetitornya lebih quiet. Visual hierarchy juga terpisah dari semantic hierarchy (h1/h2 bisa dipakai karena tampilannya pas, bukan karena struktural HTML).

---

## Contoh Konkret (1 contoh nyata)
> Invoice list di Stripe: amount (bold, large, dark) + invoice number (regular, muted) + date (small, grey). Amount dominan bukan karena ada border atau warna — tapi karena semua elemen lain di-mute-kan.

---

## Anti-pattern (yang BUKAN ini)
> Semua text di page pakai warna yang sama (`color: #333`) dan ukuran mirip-mirip. Primary action sama berat visualnya dengan secondary action. User butuh effort ekstra untuk tau mana yang penting.

---

## Aplikasi untuk Paper.id
> Di List Pengeluaran: `Total` (bold, dark blue primary) vs `Nomor Ref` (regular, grey-muted) vs `Tanggal` (small, muted). Di card Detail Invoice: amount besar bold di atas, catatan/label bisa muted. Berlaku ke semua list page dan detail card. Lihat `[[labels-secondary-value-primary]]` untuk spesifik label pattern.

---

## Cross-refs
- Kartu lain: `[[labels-secondary-value-primary]]` (aplikasi spesifik ke label/value pair)
- Memory rule: `[[label-disambiguation-rule]]` — labels harus secondary kecuali ambiguous
- DS / rules: `paper-designer/rules/design-rules.md` — Action Hierarchy section

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch2 — Hierarchy is Everything
- Halaman: 38
- Quote verbatim: "Instead of leaving all of the heavy lifting to font size alone, try using font weight or color to do the same job."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no (Claude-verified via PDF read)
