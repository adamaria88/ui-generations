# Page Registry — Paper.id Existing Screens

> **PURPOSE**: Daftar semua halaman/screen yang sudah ada di Paper.id. Agent WAJIB lookup file ini ketika user menyebut nama halaman untuk modifikasi. Gunakan Figma link untuk fetch tampilan terkini sebelum membuat perubahan.

---

## Cara Penggunaan

1. User menyebut nama screen (misal: "tambahkan banner di Create Sales Invoice")
2. Agent cari screen di registry ini
3. Fetch screenshot dari Figma node yang sesuai
4. Generate perubahan berdasarkan tampilan yang ada

---

## Sales Invoice

**Figma File**: `0Af9STRmxhIh0asCcjrZkZ` (Penjualan - Invoice Penjualan (SI))

| Screen | Node ID | Deskripsi |
|--------|---------|-----------|
| List Sales Invoice | `2027:32395` | Tabel daftar invoice dengan filter, search, pagination. Tab: Invoice Penjualan, Invoice Uang Muka, Invoice Terhapus |
| Create Invoice (Empty) | `2027:32614` | Form create invoice kosong. Fields: No. Invoice, Tgl, Salesperson, Mata Uang, Pilih Mitra, tabel produk, summary, keterangan, TTD |
| Create Invoice (Filled) | `2028:37004` | Form create invoice yang sudah diisi. Dropdown "Simpan Invoice" terbuka: Simpan dan Kirim, Simpan dan Konfirmasi, Simpan Draf |
| Save & Send Invoice | `2028:42853` | Modal "Kirim Invoice" — pilih channel (WhatsApp/Email/SMS), preview email, tombol Kirim Invoice |
| Success Create & Send | `2174:53737` | Success dialog setelah invoice berhasil dikirim — "Invoice Anda Berhasil Terkirim" |
| View Detail Invoice | `2174:55458` | Halaman detail invoice: header status (Unpaid/Terkirim), info summary, tabs (Lihat Invoice/Semua Pembayaran/Lihat Relasi), invoice preview, sidebar "Opsi Lain" |
| View Detail (Dropdowns Open) | `2174:61843` | Sama seperti View Detail tapi dengan dropdown "Tindakan" dan sidebar "Opsi Lain" terbuka. Tindakan: Buat Kuitansi, Percepat Pembayaran, Ubah, Duplicate, Tambah Label, Hapus, Unduh PDF, dll |
| Popup: Buat Mitra Baru | `2028:41378` | Dialog modal dari halaman Create — form buat mitra baru. Fields: Tipe Mitra, No. Mitra, Badan Usaha, Nama, Email, No. Telepon. Sidebar navigasi: Informasi Perusahaan, Kontak, Rekening, Metode Pembayaran, Pengaturan Akun |
| Popup: Tambah Produk dari Stok | `2176:66097` | Dialog modal dari halaman Create — tabel pilih produk dari stok. Kolom: Kode Produk (SKU), Nama Produk, Kategori, Kuantitas, Harga Beli, Track Stock, Keterangan. Ada tombol "Buat Produk Baru" |

---

## Sales Receipt (Kuitansi Penjualan)

**Figma File**: `u0IzFrBX0RxsZSpnh7nAS9` (Penjualan - Order Penjualan)

| Screen | Node ID | Deskripsi |
|--------|---------|-----------|
| List Sales Receipt | `227:33411` | Tabel Kuitansi Penjualan dengan tab: Kuitansi Penjualan (default) + Payment Reconciliation. Kolom: Payment No., Client, Finance Account, Payment Status, [badge], Payment Date, Description, Amount, Attachment, Label, Action. Banner "Receive Payment Sudah Dibaca" di atas list. Action 3-dot: Send Receipt, View Receipt, Edit, Delete, Add Attachment. Prefix payment no: `PYI/...` |

---

## Purchase Receipt (Kuitansi Pembelian)

**Figma File**: `TfRNePFB4IVc2NhdVUtZrK` (Pembelian - Kuitansi Pembelian)

| Screen | Node ID | Deskripsi |
|--------|---------|-----------|
| List Purchase Receipt | `4002:12596` | Tabel Kuitansi Pembelian (single list, no tabs). Kolom: Payment No., Client, Finance Account, Payment Status, Payment Date, Description, Amount, Attachment, Label, Action. Action 3-dot: View Receipt, Edit, Delete, Add Attachment, Add Label. Prefix payment no: `PYO/...` |

---

<!-- Tambahkan modul lain di bawah ini -->
