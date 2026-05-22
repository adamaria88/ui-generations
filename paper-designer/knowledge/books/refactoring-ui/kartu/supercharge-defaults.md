---
source:
  book: "Refactoring UI"
  author: "Adam Wathan & Steve Schoger"
  chapter: "Chapter 8: Finishing Touches"
  page: 220
  quote_verbatim: ""
slug: "supercharge-defaults"
buku_slug: "refactoring-ui"
extracted_at: "2026-05-22"
review_status: "draft"
tags: [visual-polish, form, typography, icon]
apply_value: "medium"
problem_domain: "visual-polish"
---

# Supercharge Default UI Elements

## Problem Trigger
> UI terasa "plain dan belum selesai" meski semua elemen sudah ada — bullet list biasa, checkbox browser default, blockquote tampak seperti paragraph biasa.

---

## The Thinking
> Elemen default browser (bullet, checkbox, radio, blockquote) berfungsi tapi tidak berkarakter. Beberapa upgrade mudah yang dramatically meningkatkan kualitas visual: (1) **Bullet list → icons**: ganti `<li>` bullet dengan icon yang relevan konteks (checkmark untuk feature list, shield untuk security, star untuk highlight). (2) **Blockquote → dekoratif**: tambah oversized colored quotation mark icon sebagai visual element. (3) **Custom checkbox/radio**: `appearance:none` + custom 18px square dengan brand color saat checked. (4) **Link styling**: bold + warna saja (tanpa underline) untuk non-paragraph context, atau custom gradient underline.

---

## Contoh Konkret (1 contoh nyata)
> Feature comparison list: ganti `•` dengan Aurora checkmark icon 18px warna brand green. Langsung terasa premium. Security-related list: gunakan padlock icon. Satu perubahan, dampak visual besar.

---

## Anti-pattern (yang BUKAN ini)
> Native browser checkbox yang beda-beda tampilannya di Chrome/Firefox/Safari/macOS. Atau bullet list `•` untuk semua konteks meski bullet tidak meaningful (mengapa list feature pakai bullet yang sama dengan list error?).

---

## Aplikasi untuk Paper.id
> - **Checkbox di table**: sudah implement custom `.chk` class (sesuai `prototyping-gap-lessons.md` poin 0j). Pertahankan pattern ini di semua table baru.
> - **Feature list di onboarding / empty state**: pakai Aurora icon checkmark (bukan bullet) untuk memberi karakter.
> - **Blockquote / testimonial** (kalau ada di marketing/onboarding page): tambah dekoratif quotation mark icon.
> - **Custom radio**: jika upgrade ke selectable card tidak memungkinkan, setidaknya custom radio styling (lingkaran brand blue saat selected, bukan browser default).

---

## Cross-refs
- Memory rule: `[[prototyping-gap-lessons]]` — poin 0j custom checkbox wajib, poin 3 no emoji icons
- Memory rule: `[[aurora-lookup-ritual]]` — pakai Aurora SVG icon, bukan ngarang inline
- Kartu lain: `[[empty-state-priority]]` — icon/ilustrasi di empty state
- Kartu lain: `[[selectable-cards-vs-radio]]` — upgrade radio yang lebih jauh

---

## Source Verification

- Buku: Refactoring UI oleh Adam Wathan & Steve Schoger
- Bab: Ch8 — Finishing Touches, "Supercharge the defaults"
- Halaman: 220-223
- Quote verbatim: —
- Tanggal ekstrak: 2026-05-22
- Reviewed by user: no
