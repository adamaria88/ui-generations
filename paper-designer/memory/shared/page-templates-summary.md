---
name: page-templates-summary
description: Decision tree memilih Form Page vs Side Sheet vs Modal Form — dengan aturan visual masing-masing tipe
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2dd5a558-3385-4042-a732-8aa9b3c65ad4
---

Source: `paper-designer/rules/page-templates.md`

## Decision Tree

```
Apakah ini flow utama atau kompleks?
    ├── YA  → FORM PAGE (Full Page)
    └── TIDAK
         Apakah user perlu lihat konteks halaman utama?
              ├── YA  → SIDE SHEET FORM
              └── TIDAK → MODAL FORM
```

## Perbandingan Cepat

| Tipe | Kapan | Kompleksitas | Contoh |
|------|-------|--------------|--------|
| Form Page | Core process, multi-step | Tinggi | Create Invoice, Create Partner |
| Side Sheet | Edit kontekstual sambil lihat main, ATAU form pendek dalam cross-process flow | Sedang | Buat Mitra Baru dari Create Invoice |
| Modal Form | Task cepat maks 3 fields | Rendah | Edit Nama, Tambah Note |

## Form Page — Aturan Visual
- Form dibungkus **card putih** dengan border (`1px solid` border color)
- Background card: `var(--color-surface-light-default)` (#fff)
- Radius card: `var(--radius-md)` (8px)
- Background belakang card: `var(--color-surface-light-secondary)` (light grey)
- **Breadcrumb** WAJIB di halaman child (Create/Edit/View), TIDAK ada di list/root
- Layout fields: 2 kolom untuk field berkaitan, 1 kolom untuk field panjang
- **Footer actions**: primary CTA kiri + secondary (Batal) kanan, posisi kanan bawah form

## Side Sheet — Aturan
- Muncul dari kanan, overlay di atas Main Area, main area dimmed di belakang
- Lebar: **default 40%, naik 50% kalau form kompleks banget** (analisa per kasus)
- **TIDAK bisa close klik di luar** — hanya via X (header) / Cancel (footer)
- Scrollable kalau konten panjang

## Modal — 3 TIPE BEDA (jangan dicampur)
- **Modal Form**: input task cepat, maks 3 fields, default focus = field pertama
- **Confirmation Modal**: consent sebelum aksi destructive/permanen, default focus = **Cancel**, async gagal → modal tetap buka + Try Again
- **Information Modal**: inform/acknowledgment risk rendah, default focus = **Primary**, soft illustration
- Default focus Confirmation vs Information **berlawanan**. Detail: page-templates.md Template 3a/3b/3c

## Page Navigation
- 3 elemen: Back Link (`← Kembali`, paling kiri) + Breadcrumb (`Entity > Section > Current`, current bold non-clickable) + Pagination Detail (`X dari Y`, kanan atas, navigasi antar item tanpa reload)
- Breadcrumb WAJIB di child page; jangan di standalone form / root

## Input Behavior Rules
| Kondisi | Gunakan |
|---------|---------|
| Opsi ≤ 4 | Radio Group |
| Opsi ≥ 5 | Select/Dropdown |
| Opsi ≥ 5 + perlu search | Autocomplete/Combobox |
| Teks panjang | Rich Text Editor / Textarea |
| Tanggal | Date Picker |

Detail behavior (Button hierarchy, Autocomplete states, Error Message, Tab, Table) → section "Behavioral & Pattern Rules" di `design-rules.md`. Keputusan override user → [[paperverse-design-decisions]].

**Why:** Template menentukan struktur visual yang tepat agar UX konsisten.
**How to apply:** Sebelum generate halaman baru, gunakan decision tree ini. [[layout-rules-summary]]
