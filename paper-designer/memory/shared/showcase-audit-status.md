---
name: showcase-audit-status
description: "Status audit showcase.html vs Aurora production — apa yang sudah fix, apa yang masih gap"
metadata: 
  node_type: memory
  type: project
  originSessionId: 2dd5a558-3385-4042-a732-8aa9b3c65ad4
---

Showcase di `paper-designer/components/showcase.html` sudah cukup akurat tapi belum sempurna.

**Why:** Showcase adalah plain HTML, bukan Angular app. Targetnya ~90-95% visual match dengan Aurora production. Angular build tidak diperlukan karena kita punya token source CSS + component SCSS sebagai referensi.

**How to apply:** Sebelum mulai brief baru yang butuh komponen yang ada di showcase, cek dulu apakah komponen tersebut masih punya gap yang belum fix.

---

## Sudah fix (sesi ini)

- **chip-status compact variant** — ditambahkan sebagai subsection (CSS `.badge.compact` + HTML row)
- **Table badges** — semua 8 badge di tabel diupdate ke `.badge.compact`
- **Pagination** — ditambahkan "Jumlah Baris" dropdown + Aurora chevron SVG exact paths (18px, stroke-width 1.5, vector-effect non-scaling-stroke) + disabled state pakai `color: var(--color-dark-blue-35)` bukan opacity
- **Banner icons** — semua 6 banner (info-subtle, info-attention, success-subtle, danger-subtle, danger-attention, warning-subtle) diganti ke Aurora's exact filled circle SVGs dari `banner-icon.component.ts`
- **Toast icons** — default (info, blue double-circle + white "i") dan danger (white double-circle + pink "×") diganti ke Aurora's exact SVGs dari `toast.component.html`, viewBox 32×32
- **Near-zero SVG dot bug** — ditemukan di tooltip button icon (`<line x1="12" y1="16" x2="12.01" y2="16"/>` tanpa stroke-linecap="round" = rectangle, bukan titik). Fix: tambah `stroke-linecap="round"` + ubah ke vertikal kecil

---

## Masih gap (belum fix)

- **Table header vs Aurora storybook** — perbedaan visual:
  - Sort icon: showcase pakai text `^`, storybook pakai SVG icon proper
  - Column filter input: showcase polos tanpa search icon, storybook punya icon di dalam input
  - Category/type filter: showcase belum ada dropdown per kolom seperti storybook
  - Root cause: Angular generate HTML otomatis, plain HTML harus manual
- **page-registry.md** — hanya 3 modul terdaftar, banyak modul Paper.id lain belum ada
- **Pattern docs** — hanya 1 file (`sales-invoice-list.md`), modul lain belum punya pattern docs
- **Pola belum terdokumentasi**: side panel/Tindakan dropdown, banner/notification bar, modal pilih format

---

## Aurora icon bug pattern yang perlu diperhatikan

Feather icon SVG yang punya near-zero line (contoh: `<line x1="12" y1="8" x2="12.01" y2="8"/>`) tanpa `stroke-linecap="round"` akan render sebagai rectangle kecil, bukan titik. Selalu cek icon sebelum pakai. Aurora pakai custom filled SVG untuk status icons (info, success, warning, danger) — **jangan pakai Feather stroke icons untuk komponen status**.
