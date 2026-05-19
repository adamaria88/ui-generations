# Pattern: List Sales Invoice

**Modul:** sales-invoice  
**Figma Node:** `0Af9STRmxhIh0asCcjrZkZ` / `2027:32395`  
**Terakhir Di-fetch:** 2026-05-19  
**Catatan versi:** Figma node (2027:32395) = desain lama. Production saat ini punya struktur kolom + tab berbeda — lihat bagian "Gap Figma vs Production" di bawah.

---

## Layout
- **Sidemenu aktif:** Penjualan → Invoice Penjualan
- **Page title:** Invoice Penjualan
- **Breadcrumb:** tidak ada (ini root list)
- **Padding konten:** 40px horizontal, 20px top

## Tabs
Versi Figma: `Invoice Penjualan` (default) · `Invoice Uang Muka` · `Jatuh Tempo` · `Invoice Terhapus`  
**Production saat ini:** `My Invoice` (default) · `Shared Invoice` (badge NEW)

> ⚠️ Pakai pola production (2 tab) untuk brief baru. Figma belum diupdate.

## Konten Utama: Table

### Kolom (Production)
| # | Kolom | Tipe | Sort | Filter Inline |
|---|-------|------|------|---------------|
| - | checkbox | boolean | ✗ | ✗ |
| - | expand row | icon (chevron) | ✗ | ✗ |
| 1 | No. Invoice | text | ✓ | search (`Cari nomor invoice`) |
| 2 | Pelanggan | text | ✓ | dropdown (`Cari klien`) |
| 3 | No. Ref | text | ✓ | search (`Cari nomor referensi`) |
| 4 | Status Dokumen | badge | ✗ | dropdown (`Pilih status`) |
| 5 | Status Pembayaran | badge | ✗ | dropdown (`Pilih status`) |
| 6 | Jumlah (Rp) | amount | ✓ | search (`Cari jumlah`) |
| - | ⋮ menu | action | ✗ | ✗ |

### Filter Inline Pattern
Setiap kolom header punya **baris filter di bawah label kolom** (bukan di top bar).
- Search input: outline field, placeholder bertipe `Cari <nama kolom>`
- Dropdown: field + arrow icon, placeholder `Pilih status`
- Tidak ada global search bar terpisah di versi production

### Row Structure
```
[▶] [☐] | No. Invoice | Pelanggan | No. Ref | Status Dok | Status Bayar | Jumlah | [⋮]
                ↳ (expand) detail row / sub-item
```

### CTAs (Top Area)
- Kiri: `Tindakan Lainnya ▼` (dropdown secondary, diikuti bulk actions saat row dicentang)
- Kanan: `Unggah Invoice` (secondary) · `Buat Invoice Baru` (primary, icon + teks)
- Posisi: row terpisah di atas tabel, layout flex space-between

### 3-dot Menu (Row Actions)
Dari Figma context, ada beberapa action columns. Production items (dari screenshot sebelumnya):
- Kirim / Send
- Lihat / View
- Edit
- Duplikat
- Tambah Label
- Hapus

### Bulk Actions (saat row dicentang)
- Muncul di area atas tabel (replace/tambah CTA area)
- Perlu dikonfirmasi — tidak terlihat jelas di current screenshot

### Pagination
- Format: `Menampilkan 1 sampai 8 dari 256 invoice`
- Komponen: `au-pagination` (Aurora Paginator)
- Posisi: di bawah tabel, center

---

## Status & Badge

### Status Dokumen
| Label | Variant Aurora | Keterangan |
|-------|---------------|------------|
| Draft | neutral/muted | invoice belum dikirim |
| Sent | neutral outline | invoice sudah dikirim |
| Terkirim | neutral outline | alias Sent dalam bahasa ID |

### Status Pembayaran
| Label | Variant Aurora | Keterangan |
|-------|---------------|------------|
| Paid | success (green filled) | sudah lunas |
| Unpaid | danger outline | belum dibayar |
| Partially Paid | warning | dibayar sebagian |
| Overdue | danger filled | melewati due date |
| Draft | muted | belum dikonfirmasi |

> Badge "Paid" = chip hijau solid. "Unpaid" = chip merah/danger.

---

## Pola Khusus

### Modal: Buat Invoice Penjualan
**Trigger:** klik `Buat Invoice Baru`  
**Isi modal:** pilih format input
- Opsi 1: **Tampilan Ringkas** — buat invoice lebih cepat dengan tampilan sederhana
- Opsi 2: **Tampilan Lengkap** — buat invoice menyeluruh dengan tampilan lengkap
- Header modal: "Buat Invoice Penjualan" + sub "Pilih Format Input"
- Close: icon X (kanan atas)

### Expand Row
- Baris bisa di-expand dengan klik `▶` untuk lihat sub-item/detail ringkas
- Icon rotate 90° saat expanded

### Empty State
- [tidak terlihat di screenshot — perlu fetch node empty state terpisah]

### Banner
- Tidak ada banner default di list view

---

## Gap Figma vs Production

| Aspek | Figma (2027:32395) | Production Sekarang |
|-------|-------------------|---------------------|
| Tabs | 4 tab (Invoice PJ, Uang Muka, Jatuh Tempo, Terhapus) | 2 tab (My Invoice, Shared Invoice) |
| Kolom | berbeda (Col 1-15, belum terpetakan semua) | 6 kolom eksplisit + per-column filter |
| Search | global search bar | filter per-kolom inline |
| CTA kiri | tidak visible | Tindakan Lainnya dropdown |

**Rekomendasi:** Untuk brief yang modifikasi screen ini, ikuti pola **production** (2 tab, kolom 6, filter inline). Kalau butuh Figma fresh, fetch node production terbaru dari user.
