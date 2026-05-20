# Pattern: List Sales Receipt (Kuitansi Penjualan)

**Modul:** sales-receipt  
**Figma Node:** `u0IzFrBX0RxsZSpnh7nAS9` / `227:33411`  
**Terakhir Di-fetch:** 2026-05-19  
**Screenshot:** [lihat Figma]  

> Catatan fetch: `get_screenshot` berhasil (full + crop table/toolbar/tabs/action-dropdown). `get_design_context` >135KB → exceed token limit, tapi payload disimpan ke file & dianalisa via grep struktur node. Label tab, kolom, & menu item diverifikasi dari screenshot (lebih dekat production). `[design_context: terlalu besar, struktur dipakai dari file, teks dari screenshot]`

---

## Layout
- **Sidemenu aktif:** Penjualan → Kuitansi Penjualan (sub-item)
- **Page title:** `Semua Kuitansi Penjualan`
- **Breadcrumb:** tidak ada (sesuai rules — list/root TIDAK pakai breadcrumb)
- **Tabs:** `Kuitansi Penjualan` (default, aktif — underline biru), `Payment Reconciliation`
  - Tab dipakai untuk switch view dalam entity yang sama (sesuai rules Tab)

## Konten Utama: Table

### Kolom
| Kolom | Tipe | Sort | Filter |
|-------|------|------|--------|
| (checkbox) | selection | ✗ | ✗ (header punya master checkbox → bulk select) |
| (expand) | chevron `>` row expander | ✗ | ✗ |
| Payment No. | text (prefix `PYI/2024/00xx`) | ✓ | ✗ |
| Client | text (nama mitra, mis. "PT. ABC Company") | ✓ | ✗ |
| Finance Account | text ("Bank - -") | ✓ | ✗ |
| Payment Status | badge (`Settlement`) | ✓ | ✗ |
| Delivery Status | badge (`Accepted`) + dropdown caret | ✓ | inline dropdown `Pilih` |
| Payment Date | date (`25-09-2024`) | ✓ | ✗ |
| Description | text (kosong = `-`) | ✓ | ✗ |
| Amount | amount (`Rp 50.000.000`) **right-aligned** | ✓ | ✗ |
| Attachment | count + paperclip icon (`📎 0`) | ✓ | ✗ |
| Label | chip (`Tanpa Label` / `● Cat +2`) | ✓ | inline dropdown `Pilih` |
| Action | action (tombol `Action ▾` hijau per row) | ✗ | ✗ |

> Header tiap kolom punya ikon sort dua-arah (✓ sortable). Empty field ditampilkan `-` (sesuai rules Table List).

### Search & Filter
- Search bar: placeholder `"Search"` — posisi kiri atas (di bawah title, sejajar toolbar), width ~300px, pill rounded
- Filter inline kolom: `Delivery Status` (placeholder `Pilih`) & `Label` (placeholder `Pilih`) — dropdown di header cell
- Tidak ada filter chip bar global terpisah

### Row Actions
- Inline: `Action ▾` (button hijau, dropdown per row) — bukan primary/secondary Aurora standar, ini action-menu trigger berwarna hijau `[BEDA DARI RULES: ...]` (lihat bawah)
- 3-dot / Action dropdown (node `227:34356`, ter-verifikasi via screenshot): **Send Receipt**, **View Receipt**, **Edit**, **Delete**, **Add Attachment** — flat list, TANPA divider, TANPA penanda warna merah pada Delete
- Bulk: master checkbox di header → multi-row selection (bulk action menu mengikuti pola Table List rules; item bulk tidak terlihat eksplisit di state ini → `[tidak terlihat]`)
- Row expander: chevron `>` di kiri tiap row (kemungkinan expand detail pembayaran)

## Status & Badge
| Label | Variant Aurora | Kapan muncul |
|-------|---------------|--------------|
| Settlement | success (hijau) | status pembayaran sudah settle |
| Accepted | active/info (biru, dengan caret dropdown) | delivery status diterima — bisa diubah inline |
| Tanpa Label | neutral chip (outline) | row belum diberi label |
| ● Cat +2 | neutral chip + counter | row punya label "Cat" + 2 label lain |

## CTAs
- Primary: `Buat Kuitansi Penjualan` (top-right, biru solid, icon `+`) — **1 primary** ✓ (sesuai rules)
- Secondary: `Unduh ▾` (top-right, outline pill, dropdown) — kiri dari primary
- Ada 1 button tambahan di toolbar `hidden=true` (node `227:34044`, ~126px) → kemungkinan "Unduh Semua Dokumen" (tidak tampil di state ini)
- Dropdown `Unduh ▾` (node `227:34339`):
  - Supporting: 1 item dengan icon DownloadFile (label "08" placeholder di context → kemungkinan "Unduh Semua Dokumen" / "Unduh Excel", `[teks tepat tidak terlihat — placeholder di Figma]`)
- Dropdown `Action ▾` (per-row, node `227:34356`) — kelompok per hierarchy:
  - **Page-Specific:** Send Receipt
  - **Core:** View Receipt → Edit → Delete `[destructive]`
  - **Supporting:** Add Attachment
  - `[BEDA DARI RULES: urutan production = Send Receipt, View, Edit, Delete, Add Attachment — Core (View→Edit→Delete) TIDAK di paling bawah, Supporting "Add Attachment" justru SETELAH Delete. Rules minta Core paling bawah dipisah divider & Delete SELALU paling akhir. Production tidak ada divider dan Delete bukan item terakhir.]`
- Icon-only button: ikon paperclip Attachment di kolom (display count, bukan action), banner punya icon-only button 46×36 (kemungkinan dismiss/close — `[tooltip/aria-label tidak terlihat]`)

## Pola Khusus
- Banner: **ada** — tipe **informative** (announcement fitur baru). Judul `Receive Payment Sudah Dibaca`, body `Nikmati fitur terbaru kami untuk mengetahui kapan invoice Anda sudah dibuka oleh Mitra. Pelajari Sekarang` (inline link `Pelajari Sekarang`). Ada icon ilustrasi kiri (read-receipts-banner) + button 46×36 di kanan → **dismissable: kemungkinan ya** (close/X button), `[konfirmasi dismiss tidak 100% terlihat]`. Posisi: di atas table, di bawah tabs.
- Modal dari screen ini: trigger `Delete` (Action dropdown) → **Confirmation Modal** (delete entity kuitansi tersimpan = destructive permanen → wajib Confirmation Modal, default focus: Cancel). Modal-nya sendiri tidak ada di node ini → `[modal tidak ter-render di screen list]`
- Side Sheet: tidak ada di screen ini
- Error pattern: tidak terlihat di state ini
- Destructive actions: **Delete** (hapus kuitansi tersimpan — permanen & susah dibatalkan) → wajib Confirmation Modal | Non-destructive: Send Receipt, View Receipt, Edit, Add Attachment, ubah Delivery Status inline, ubah Label inline
- Empty state: tidak terlihat (data terisi 8 row). Footer pagination: `Showing 1 to 8 of 8 Receipts`, halaman `1`, kontrol skip/prev/next + input page number + chip `08` (per-page) — `Help ▾` floating di bawah

---

## Ringkasan BEDA DARI RULES
1. **Action dropdown order**: production = `Send Receipt, View Receipt, Edit, Delete, Add Attachment` (flat, no divider, Delete bukan terakhir, no red marker). Rules: Core View→Edit→Delete paling bawah, Delete SELALU terakhir + merah + dipisah divider, Supporting di tengah.
2. **Row action trigger berwarna hijau** (`Action ▾`) — bukan variant Aurora primary/secondary/tertiary standar. Aurora button variants tidak punya "green action". Catat sebagai pola production yang menyimpang dari katalog button.
3. Tidak ada Confirmation Modal red styling/divider yang ter-set di dropdown — penegakan destructive (konfirmasi) harus ditambahkan saat implementasi sesuai rules meski Figma list tidak menampilkannya.
