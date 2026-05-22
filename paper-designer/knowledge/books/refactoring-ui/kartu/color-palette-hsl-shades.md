---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 5: Working with Color"
  page: TBD
  quote_verbatim: ""
slug: "color-palette-hsl-shades"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [color, accessibility, design-system]
apply_value: "high"
problem_domain: "color"
---

# Color Palette via HSL — 8-10 Shades per Hue

## Problem Trigger
> Warna di desain terasa inkonsisten, palette terasa random, atau warna grey terlihat "lifeless" dan tidak menyatu.

---

## The Thinking
> Gunakan model HSL (Hue/Saturation/Lightness) bukan hex atau RGB — karena intuitive untuk adjustment: naik lightness = lebih muda, turun saturation = lebih muted. Setiap hue yang dipakai butuh 8-10 shade (misal 100 = sangat muda / 900 = sangat gelap). Pure grey tanpa hue hint (`#777`, `#ccc`) terlihat lifeless di layar — tambahkan sedikit hue tint (blue-grey, warm grey). Jangan pakai warna sebagai satu-satunya sinyal untuk state — selalu pasangkan dengan icon, weight, atau teks (accessibility + color blindness).

---

## Contoh Konkret (1 contoh nyata)
> Aurora DS palette: `--color-light-brand-*` series (100-900) dengan hue consistent. Grey di Aurora (`--color-text-muted`, `--color-surface-light-raised`) punya subtle blue hint — tidak pure `#aaa`. Itulah kenapa Aurora grey terasa "bersih" bukan "flat".

---

## Anti-pattern (yang BUKAN ini)
> Menggunakan arbitrary hex (`#f5f5f5`, `#e0e0e0`, `#bdbdbd`) yang tidak punya relasi satu sama lain. Atau menggunakan warna biru untuk "approved" tanpa icon centang — color blind user tidak bisa bedakan.

---

## Aplikasi untuk Paper.id
> Saat extend Aurora palette untuk kebutuhan custom (misal state warna baru yang belum ada di Aurora): gunakan HSL-based approach — ambil hue yang sama dengan Aurora brand blue, adjust lightness. Jangan ngarang hex baru yang tidak connect ke sistem. Untuk status badge: icon + color (bukan color only). Sudah implemented di expense-management (badge status pakai icon + warna).

---

## Cross-refs
- Memory rule: `[[aurora-lookup-ritual]]` — cek Aurora color token dulu sebelum custom
- DS / rules: `paper-designer/ds/ds-core.md` — color token list
- Kartu lain: `[[accent-borders-visual-polish]]` — menggunakan warna sebagai accent

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch5 — Working with Color
- Halaman: TBD
- Quote verbatim: —
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
