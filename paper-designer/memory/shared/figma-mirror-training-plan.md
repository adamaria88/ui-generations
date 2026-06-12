---
name: figma-mirror-training-plan
description: "Peta training Figma→HTML mirror: 6 archetype screen buat ngeraskan metode lawan variasi. Cover TIPE, bukan jumlah. Companion [[figma-mirror-method]]."
metadata:
  node_type: memory
  type: project
---

# Figma Mirror — Training Case Set (peta)

> **Tujuan:** ngeraskan `[[figma-mirror-method]]` lawan **variasi**, bukan ngafalin screen.
> Prinsip: **cover TIPE (archetype), bukan JUMLAH.** ~6 archetype beda > 100 form yang sama.
> Tiap case nguji **gap baru** yang archetype sebelumnya nggak punya → SOP nambah → mateng → stabil.

## Kenapa archetype, bukan banyak

Ratusan screen Paper.id sebenernya cuma **segelintir pola**. Latih 1 wakil tiap pola → metode kebal ke semua varian-nya. Form udah ngajarin: input, posisi, tabel, ikon. Tipe lain munculin failure mode lain.

## Protokol per case (WAJIB sama tiap kali)

1. User share node Figma archetype-nya.
2. Jalanin SOP penuh (`[[figma-mirror-method]]`): decompose → per-blok {tree → aset → token → build → verify}.
3. **Catat CUMA yang BARU**: leak baru / quirk tooling baru / pola komponen baru / aturan baru.
4. Kalau generalizable → masukin ke `figma-mirror-method.md` (SOP = dokumen hidup).
5. Update status di tabel bawah + tulis "apa yang case ini tambahin".

## Peta case (urut prioritas)

| # | Archetype | Contoh screen | Gap BARU yang diuji | Status |
|---|---|---|---|---|
| 1 | **Form / Create** | SI Invoice Penjualan | input/label, tabel inline, posisi blok, ikon copas, totals | ✅ **DONE** (2026-06-09) |
| 2 | **List + Tabel** | List Invoice / List Pengeluaran | **baris berulang** (tarik POLA + array data, bukan tiap baris), pagination, filter inline per kolom, sticky action column + scroll horizontal, row-click→detail, in-card toolbar, empty state | 🟡 **PARTIAL** — varian **empty-state** ✅ (2026-06-12); filled-table (baris/pagination/sticky) ⬜ |
| 3 | **Detail / View** | View Invoice | label-value read-only (nol input, densitas beda), breadcrumb back, action menu (Tindakan ▾), status chip, layout dokumen | ⬜ |
| 4 | **Modal / Overlay** | Confirmation / Side Sheet | **positioning portal/backdrop/z-index** (area bug kita — ref prototyping-gap 0g), sectioned dialog Aurora, friction destructive, side sheet 40/50% | ⬜ |
| 5 | **Dashboard** | Dashboard utama | **chart/grafik sebagai aset** (copas SVG viz / gimana Figma export chart), stat cards, grid mixed-widget, format angka | ⬜ |
| 6 | **Multi-state** | Empty/Loading/Error/No-akses | **keputusan S5** (state mana ada di Figma vs diturunin), skeleton, empty+ilustrasi+CTA, error recovery, conditional render dari variant Figma | ⬜ |

*(Opsional ke-7: Settings/multi-section — section grouping, tab, long-form. Prioritas rendah.)*

### Kenapa urutan ini
List (2) didahuluin: paling sering dipakai + paling beda dari form → paling mungkin munculin gap. Modal (4) dinaikin karena **overlay positioning udah jadi bug aktif** kita — case ini sekalian forsir fix-nya.

## Apa yang dicari di tiap case (hipotesis gap)

- **List** → apakah SOP nahan baris berulang tanpa narik tiap baris (efisiensi + anti-truncate)? Pagination & sticky column ke-handle?
- **Detail** → label-value tanpa input bikin densitas beda — apakah spacing/grouping kebaca dari tree?
- **Modal** → `position:fixed` + portal: apakah ketebak dari tree, atau butuh aturan render khusus (containing-block leak)?
- **Dashboard** → chart itu aset apa kode? Copas SVG-nya jalan?
- **Multi-state** → state yang nggak ada di node yang di-share → SOP bilang "lapor, jangan ngarang" (S5). Konsisten?

## Ukuran lulus ("Paper Designer = front-end")

Bukan "screen yang udah pernah". Tapi: **screen BARU (belum pernah dilihat) dari archetype yang udah dicover, kereproduksi bener SEKALI JALAN ngikut SOP** — sisa beda cuma L5 (sub-pixel).

**Kriteria graduasi:** 2 screen baru beruntun (tipe udah dicover) lolos first-pass → metode dianggap kebal buat tipe itu.

## Lever sebenernya: enforcement, bukan ilmu

Temuan SI: gue **tau** langkahnya, tapi **skip pas kepepet**. Jadi training ≠ ngajarin langkah. Training = bikin langkah **unskippable**:
- Gerbang 4-centang per blok (dari SOP)
- Verifikasi per-blok (bukan sekilas full page)
- (opsional, lebih kuat) **workflow deterministik** yang ngepaksa loop per-blok — mustahil lompat

Tiap case = latihan ngejalanin gerbang itu sampe jadi refleks.

## Progress & gap yang dimunculin tiap case

- **Case #1 (Form, SI Invoice)** ✅ — header & tabel pixel-faithful, full page. Munculin: leak deterministik (eyeball vs data), copas-aset-vs-ngarang, gerbang per-blok.
- **Case #2 (List, varian EMPTY-STATE)** 🟡 partial (2026-06-12) — 10 region full-page match + interaktif (button hover, accordion expand). **Gap baru yang dimunculin → masuk SOP:** S11 reuse-bawa-nilai-basi (sidemenu/nav isi default canonical), S12 kanvas-diwarisi (bg #EEF1F4 vs #F8FBFE), S13 scaffolding-bocor (note debug + menu off-canvas), + **behavior dari Aurora bukan Figma** (`behavior-recipes.md`). **Sisa:** filled-table (baris berulang, pagination, sticky kolom) belum diuji.

> Prototype = artifact disposable (regenerate dari Figma, ga di-commit). Yang tersimpan = pelajaran di SOP + recipe.
