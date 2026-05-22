---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 245
  quote_verbatim: "If a set of radio buttons are an important part of the UI you're designing, try something like selectable cards instead."
slug: "selectable-cards-vs-radio"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [form, component, visual-polish]
apply_value: "high"
problem_domain: "form"
---

# Radio → Selectable Cards for Important Choices

## Problem Trigger
> Form punya pilihan penting (paket harga, tipe dokumen, mode bayar) yang tampil sebagai radio button plain — terasa undersized untuk keputusan yang significant.

---

## The Thinking
> Radio button default (circle + label) adalah kontrol yang fungsional tapi low-emphasis — cocok untuk pilihan teknis sederhana (sort order, filter). Tapi untuk pilihan yang PENTING bagi user (memilih paket, memilih metode, memilih tipe), radio circle terasa tidak match dengan bobot keputusannya. Upgrade ke selectable card: card dengan border, konten lebih kaya (nama + harga + deskripsi singkat), dan highlight border/bg saat selected. User bisa scan dan compare pilihan jauh lebih mudah.

---

## Contoh Konkret (1 contoh nyata)
> Change Plan UI: default (radio) = stack label "Hobby / Growth / Business / Enterprise" dengan circle. Upgraded (selectable card) = 4 kartu horizontal masing-masing dengan tier name, GB, price/mo, border-teal saat selected + checkmark icon. User langsung bisa compare semua opsi.

---

## Anti-pattern (yang BUKAN ini)
> Memilih paket harga Rp 500rb/bulan via radio circle 16px kecil di sebelah teks plain "Business Plan". Decision yang besar dengan affordance yang kecil = disconnect.

---

## Aplikasi untuk Paper.id
> Relevan untuk: pilihan tipe pembayaran (Cash/Transfer/Kartu), pilihan paket invoice (COD/NET30/NET60), pilihan tipe pengeluaran (Operasional/Kapital/Personal). **CATATAN:** Aurora belum punya `au-selectable-card` component — kalau implement, wajib custom + catat di AURORA-OVERRIDES.md. Hanya gunakan untuk pilihan yang truly significant. Untuk pilihan sederhana ≤4 opsi = tetap pakai Aurora radio (sesuai [[paperverse-design-decisions]] threshold).

---

## Cross-refs
- Memory rule: `[[paperverse-design-decisions]]` — Radio ≤4 opsi threshold
- Memory rule: `[[aurora-lookup-ritual]]` — cek dulu, kalau tidak ada → custom + AURORA-OVERRIDES.md
- DS / rules: `paper-designer/ds/AURORA-OVERRIDES.md` — registrasi custom component

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch8 — Finishing Touches, "Think outside the box"
- Halaman: 245-246
- Quote verbatim:
  > "If a set of radio buttons are an important part of the UI you're designing, try something like selectable cards instead."
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
