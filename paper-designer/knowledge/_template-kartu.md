---
source:
  book: "<Judul Buku>"
  author: "<Author>"
  chapter: "<Bab X: Judul Bab>"
  page: <nomor halaman>
  quote_verbatim: "<quote exact dari buku, kalau ada>"
slug: "<topik-slug-kebab-case>"
buku_slug: "<buku-slug>"
extracted_at: "<YYYY-MM-DD>"
review_status: "draft | reviewed | locked"
tags: [tag-1, tag-2, ...]
apply_value: "high | medium | low"
problem_domain: "navigation | form | error-state | onboarding | ..."
---

# <Judul Topik Kartu>

## Problem Trigger
> Kapan insight ini relevan? Tulis 1 kalimat yang search-able. Bayangkan Claude grep INDEX dengan keyword — apa keyword yang harus match?

<Contoh: "User klik tombol tapi ga tau apa yang terjadi setelahnya.">

---

## The Thinking
> 2-3 kalimat cara berpikirnya. Bukan rule "harus begini" — tapi MENTAL MODEL atau heuristik.

<Contoh: "Setiap aksi harus punya feedback yang clear. Tanpa feedback, user assume aksinya gagal → click lagi → double-submit. Feedback bisa visual (loading spinner), textual (toast 'Berhasil disimpan'), atau state change (button disabled).">

---

## Contoh Konkret (1 contoh nyata)
> Bukan teori. Contoh dari buku ATAU contoh modern yang valid.

<Contoh: "Stripe checkout — setelah klik 'Pay', button instant disabled + spinner 200ms + toast 'Processing'. User ga ragu apakah berhasil.">

---

## Anti-pattern (yang BUKAN ini)
> Common mistake yang ngelanggar insight ini. Penting untuk disambiguation.

<Contoh: "Form submit tanpa feedback apa-apa. User klik 'Simpan' → ga ada perubahan visual → klik lagi 5x → server kebanjiran request.">

---

## Aplikasi untuk Paper.id
> Spesifik: dimana di Paper.id pattern ini relevan? Modul apa? Pattern apa?

<Contoh: "Untuk Catat Pengeluaran: setelah klik 'Simpan', button instant loading + skeleton table 700ms + toast 'Pengeluaran tercatat'. Lihat juga [[smooth-transitions-rule]].">

---

## Cross-refs
- Memory rule: `[[<rule-name>]]` (kalau insight ini reinforce rule existing)
- Kartu lain: `[[<topik-lain>]]` (kalau ada overlap di buku sama / buku lain)
- DS / rules: `paper-designer/rules/<file>.md` section X (kalau related)

---

## Source Verification

> Untuk audit — jangan dihapus saat review.

- Buku: <Judul Buku> oleh <Author>
- Bab: <X — Judul Bab>
- Halaman: <Y>
- Quote verbatim (jika ada):
  > "<exact quote dari buku>"
- Tanggal ekstrak: <YYYY-MM-DD>
- Reviewed by user: [yes / no]
