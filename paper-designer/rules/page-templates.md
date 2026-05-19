# Page Templates — Paper.id Form & Page Structure

> **PURPOSE**: Aturan untuk menentukan struktur halaman yang tepat dan template visual masing-masing jenis. Agent WAJIB baca file ini sebelum generate design baru.
> **SOURCE**: Paperverse 1.0 — Form Structure (Last update: 10/10/2025)

---

## Decision Flow: Memilih Struktur yang Tepat

```
Apakah ini flow utama atau kompleks?
    │
    ├── YA → FORM PAGE (Full Page)
    │
    └── TIDAK
         │
         Apakah user perlu melihat konteks halaman utama?
              │
              ├── YA → SIDE SHEET FORM
              │
              └── TIDAK → MODAL FORM
```

---

## Perbandingan 3 Tipe Form

| Tipe | Kapan Digunakan | Kompleksitas | Fokus User | Best For | Contoh |
|------|----------------|--------------|------------|----------|--------|
| **Form Page** (Full Page) | Core process, multi-step flow | Tinggi | Full screen | Primary tasks | Create Invoice, Create Partner, dll |
| **Side Sheet Form** | Edit kontekstual dalam main view | Sedang | Partial | Contextual tasks | Buat Mitra Baru dari halaman Invoice |
| **Modal Form** | Task cepat & sederhana (1-4 fields) | Rendah | Focused | Secondary tasks | Edit Nama, Tambah Note, dll |

---

## Template 1: Form Page (Full Page)

### Kapan Digunakan
- Bagian dari proses utama atau task high-impact
- Butuh banyak section atau multi-step
- User perlu fokus penuh tanpa distraksi

### Kapan TIDAK Digunakan
- Task pendek atau ringan
- Bisa diselesaikan tanpa meninggalkan halaman saat ini

### Struktur Visual (Contoh: Create Sales Invoice)

```
+------------------------------------------------------------------+
| Judul Halaman (misal: "Invoice Penjualan")    [Panduan ▾]       |
|                                        ⚙ Pengaturan Lanjutan     |
+------------------------------------------------------------------+
| +--------------------------------------------------------------+ |
| |  [Company Logo]                              Invoice          | |
| |  ☑ Simpan logo untuk semua dokumen                           | |
| |                                                               | |
| |  No. Invoice *          Tgl. Invoice *                        | |
| |  [_______________]      [_______________] 📅                  | |
| |                                                               | |
| |  Salesperson            Tgl. Jatuh Tempo *                    | |
| |  [_______________▾]     [_______________] 📅                  | |
| |                                                               | |
| |  Mata Uang                                                    | |
| |  Rupiah (Rp)                                                  | |
| |                                                               | |
| |  Pilih Mitra *          Kontak Person (UP)                    | |
| |  [_______________▾]     [_______________▾]                    | |
| |                    [Buat Mitra Baru]                           | |
| |                                                               | |
| |  Info Perusahaan        Info Pelanggan                        | |
| |  PT xxx                 Nama Client                           | |
| |  Alamat: ...            Alamat: ...                           | |
| +--------------------------------------------------------------+ |
|                                                                   |
| +--------------------------------------------------------------+ |
| | Produk | Deskripsi | Kuantitas | Harga | Diskon | Pajak | Jml| |
| |--------|-----------|-----------|-------|--------|-------|----| |
| | [+] [input row...]                                           | |
| +--------------------------------------------------------------+ |
| [+ Tambah Baris]  [+ Tambah Produk dari Stok]                   |
|                                                                   |
|                               Subtotal          0.00             |
|                               Total Diskon      0.00             |
|                               Diskon Tambahan   [Rp▾] [___]     |
|                               Biaya Kirim       [___]            |
|                               Pajak             0.00             |
|                               Uang Muka    [Tambah Invoice ▾]   |
|                               Total             0.00             |
|                                                                   |
| +-------------------------------+  +---------------------------+ |
| | Keterangan ⓘ                  |  | Tanda Tangan (Opsional) ⓘ| |
| | [Rich Text Editor]            |  | [Tanggal]                 | |
| |                               |  | [Signature Area]          | |
| +-------------------------------+  | [Nama]                    | |
| +-------------------------------+  +---------------------------+ |
| | Syarat & Ketentuan ⓘ         |                               |
| | [Rich Text Editor]            |                               |
| +-------------------------------+                               |
|                                                                   |
|                          [Simpan Invoice ▾]  [Batal]             |
+------------------------------------------------------------------+
```

### Aturan Form Page

#### Container / Card Styling
- **Form dibungkus dalam card putih** dengan border (`1px solid` border color dari Aurora tokens)
- **Background card**: putih (`#fff` / `var(--color-surface-light-default)`)
- **Border radius card**: mengikuti Aurora token (`var(--radius-md)` = 8px)
- **Padding card**: `24px` atau `32px` (sesuai spacing scale Aurora)
- **Background di belakang card**: light grey (`var(--color-surface-light-secondary)` atau equivalent)

#### Header Area (di atas card)
- **Breadcrumb** (Aurora `au-breadcrumb` component) — WAJIB muncul di halaman child (Create, View, Edit). TIDAK muncul di halaman root/list.
  - Contoh Create: `Invoice Penjualan > Buat Invoice Penjualan`
  - Contoh View: `Invoice Penjualan > INV/2025/0008`
  - Item pertama = link kembali ke halaman list
- **Judul halaman** di bawah breadcrumb
- Tombol panduan (opsional) + pengaturan lanjutan di kanan atas

#### Form Body (di dalam card)
- Satu area scrollable di Main Area
- **Layout fields**: 2 kolom untuk field yang berhubungan (No. Invoice | Tgl. Invoice), 1 kolom untuk field panjang
- **Tabel produk** (jika ada): Full width, dengan tombol "Tambah Baris" dan "Tambah Produk dari Stok"
- **Summary** (jika ada): Right-aligned di bawah tabel produk

#### Footer Actions
- **Posisi**: kanan bawah form (di dalam atau tepat di bawah card)
- **Primary CTA** di kiri (misal "Simpan Invoice" dengan dropdown opsi)
- **Secondary/Destructive** di kanan (misal "Batal" — warna merah/destructive)
- **Contoh**: `[Simpan Invoice ▾] [Batal]`

#### Aturan Visual WAJIB
- Semua form create/edit page **HARUS** dibungkus card putih dengan border
- Button save & cancel **SELALU** di kanan bawah
- Style ini berlaku untuk SEMUA form page: Sales Invoice, Order Penjualan, Surat Jalan, dan document lainnya

---

## Template 2: Side Sheet Form

### Kapan Digunakan
- User perlu edit data sambil melihat halaman utama
- Kompleksitas sedang (4-10 fields)
- Mendukung contextual editing atau extended quick actions

### Kapan TIDAK Digunakan
- Form panjang atau core process
- Butuh multi-step flow

### Struktur Visual

```
+------------------------------------------+------------------+
|                                          |  Side Sheet      |
|         Main Page (dimmed/partial)       |  ──────────────  |
|                                          |  [Form Title]    |
|                                          |                  |
|                                          |  Field 1 *       |
|                                          |  [__________]    |
|                                          |                  |
|                                          |  Field 2         |
|                                          |  [__________]    |
|                                          |                  |
|                                          |  ...             |
|                                          |                  |
|                                          |  [Simpan] [Batal]|
+------------------------------------------+------------------+
```

### Aturan Side Sheet
- Muncul dari kanan, overlay di atas Main Area
- Halaman utama tetap terlihat (dimmed) di belakang
- Lebar: ~40-50% dari Main Area
- Scrollable jika konten panjang
- Contoh: Buat Mitra Baru dari halaman Create Invoice

---

## Template 3: Modal Form

### Kapan Digunakan
- Task cepat dan sekunder
- Hanya 1-4 fields
- Tidak butuh navigasi atau preview

### Kapan TIDAK Digunakan
- Form panjang atau mengandung logika kompleks
- User perlu mempertahankan konteks halaman

### Struktur Visual

```
+------------------------------------------------------------------+
|                                                                    |
|         Main Page (dimmed)                                        |
|                                                                    |
|         +------------------------------------------+              |
|         |  Modal Title                        [X]  |              |
|         |------------------------------------------|              |
|         |                                          |              |
|         |  Field 1 *                               |              |
|         |  [________________________]              |              |
|         |                                          |              |
|         |  Field 2                                 |              |
|         |  [________________________]              |              |
|         |                                          |              |
|         |           [Simpan]  [Batal]              |              |
|         +------------------------------------------+              |
|                                                                    |
+------------------------------------------------------------------+
```

### Aturan Modal
- Center di layar, backdrop dimmed
- Maksimal 1-4 fields
- Tidak boleh ada navigasi di dalam modal
- Contoh: Edit nama user, tambah note

---

## Behaviour Guidelines

### 1. Input Behavior — Pilih Format Jawaban Paling Sederhana

| Kondisi | Gunakan | Jangan Gunakan |
|---------|---------|----------------|
| Opsi < 4 | **Radio Group** (tampilkan langsung) | Select/Dropdown |
| Opsi >= 4 | **Select/Dropdown** | Radio Group |
| Opsi banyak + perlu search | **Autocomplete/Combobox** | Radio/Select |
| Teks panjang | **Rich Text Editor / Textarea** | Input biasa |
| Tanggal | **Date Picker** (support typing + kalender) | Input teks biasa |

### 2. Guidance & Flow — Satu Path yang Jelas

- **Selalu sediakan 2 tombol**:
  - **Primary CTA**: aksi utama (misal "Simpan Invoice")
  - **Secondary**: aksi alternatif (misal "Batal", "Simpan Draf", "Skip")
- **Judul harus deskriptif dan pendek**: "Create Sales Invoice", bukan judul generik
- **Cancel** harus membersihkan unsaved changes, bukan cuma tutup form

### 3. Error & Validation — Bantu User dengan Lembut

| ✅ Benar | ❌ Salah |
|----------|---------|
| "No partner selected yet" — natural, informatif | "Partner cannot be empty" — teknis, menyalahkan |
| Preserve input yang sudah diisi | Reset semua field saat error |
| Feedback spesifik per field | Pesan error generik di atas form |

### 4. Copy & Communication — Label & Helper yang Jelas

- **Label harus jelas** menunjukkan jawaban yang diharapkan
- **Helper text** untuk rules, format, atau contoh (misal: "Masukkan nomor yang terdaftar di WhatsApp")
- **Jangan andalkan placeholder saja** — placeholder boleh kosong jika label + helper sudah jelas
- **Gunakan prefix** untuk memandu user (misal: +62 di depan nomor telepon)

### 5. Accessibility

- Label harus bisa dibaca screen reader
- Tab & Shift+Tab harus berfungsi di semua field dan action

---

## Product & UX Impact

| Tipe | Keuntungan UX | Risiko Jika Salah Pakai |
|------|--------------|------------------------|
| Form Page | Menjaga fokus user untuk core process | Terasa berat untuk task sederhana |
| Side Sheet | Menjaga konteks dan flow continuity | Terasa sempit jika overloaded |
| Modal Form | Cepat dan efisien untuk quick actions | Menyembunyikan konteks untuk flow kompleks |
