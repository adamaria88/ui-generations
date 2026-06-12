---
book: "<Judul Buku>"
author: "<Author Name>"
edition: "<edisi atau tahun, kalau ada>"
isbn: "<isbn, kalau ada>"
slug: "<buku-slug-kebab-case>"
extracted_at: "<YYYY-MM-DD>"
extracted_by: "claude-opus-4-x"
review_status: "draft | reviewed | locked"
reviewer: "<user-name kalau sudah di-review>"
tags: [tag-1, tag-2, ...]
---

# <Judul Buku> — <Author>

## Thesis (1 kalimat inti)

<1 kalimat operasional yang merangkum buku ini. Bukan teori abstract — yang APPLY-able ke kerjaan design.>

**Contoh:**
> "User scan website, ga baca. Design harus bisa di-scan dalam 5 detik."

---

## 3-5 Framework Utama (mental model reusable)

### Framework 1: <Nama Framework>
- **When to invoke:** <kapan Claude harus inget framework ini — trigger context>
- **The thinking:** <2-3 kalimat cara berpikirnya>
- **Anti-pattern:** <yang dilanggar kalau framework ini di-skip>
- **Source:** Bab <X>, hal <Y>

### Framework 2: <Nama Framework>
...

### Framework 3: <Nama Framework>
...

(max 5 framework — lebih dari itu = noise. Pilih yang paling reusable.)

---

## Reading Map (peta topik kartu)

> Daftar kartu yang sudah di-extract. Per topik, Claude bisa load kartu langsung tanpa baca ringkasan ulang.

| Topik | File | Tag | Apply-value |
|-------|------|-----|-------------|
| <topik-1> | `kartu/<topik-1>.md` | `#navigation` | high |
| <topik-2> | `kartu/<topik-2>.md` | `#error-state` | medium |
| ... | ... | ... | ... |

---

## Money Quotes (1-3 quote berkesan)

> Quote verbatim yang quotable. Pengikat naratif saat Claude apply ke brief.

1. > "<Quote 1 verbatim>"
   — Bab <X>, hal <Y>

2. > "<Quote 2 verbatim>"
   — Bab <X>, hal <Y>

---

## Aplikasi untuk Paper.id

> Kapan + cara pakai insight buku ini di konteks Paper.id (B2B finance SaaS Indonesia). Bisa per modul atau per pattern.

- **Untuk pattern X di Paper.id**: <gimana framework buku apply>
- **Untuk modul Y**: <gimana heuristik buku apply>

---

## Konflik dengan Aurora / Paper.id Rules

> Kalau ada framework buku yang **bertentangan** dengan keputusan Aurora atau Paperverse 1.0 → catat di sini eksplisit.

**Format entry:**
- **Topik:** <topik>
- **Buku bilang:** <pendapat buku>
- **Paper.id pilih:** <keputusan kita> (ref: [[rule-name]] atau AURORA-OVERRIDES.md)
- **Alasan:** <kenapa Paper.id beda>

_(kosong kalau ga ada konflik)_

---

## Adaptation Note (kalau buku konteks lama)

> Kalau buku tua (>10 tahun) atau konteks beda (mis. mobile-first sedangkan kita web), kasih catatan apa yang masih relevan vs yang outdated.

_(opsional — kosong kalau buku masih current)_

---

## Cross-refs (ke buku lain / rule lain)

> Kalau insight buku ini overlap atau memperkuat insight buku lain / rule lain.

- Overlap dengan `[[<buku-lain>]]` — <topik>
- Memperkuat rule `[[<rule-name>]]` di memory

_(akan terisi pas buku ke-2+ extracted)_
