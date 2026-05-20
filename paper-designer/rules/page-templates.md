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
| **Modal Form** | Task cepat & sederhana (maks 3 fields) | Rendah | Focused | Secondary tasks | Edit Nama, Tambah Note, dll |

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

#### Detail Field & Text (sumber: Paperverse "Create Document")
- **Label**: 14px, dark blue, **bold** (readability kuat)
- **Input text**: 14px, regular
- **Font minimum**: 12px — jangan lebih kecil
- **Required field**: selalu ditandai `*`
- **Text color by state**: placeholder = muted grey | filled = dark text | disabled = grey + **wajib tooltip jelasin kenapa disabled**
- Semua text area panjang (keterangan, S&K) = **rich text editor**

#### Detail Numeric & Financial
- Semua angka di tabel form (jumlah, qty, harga, total) **WAJIB right-aligned** — buat scanning finansial
- Line item: **default quantity = 1** saat produk/jasa ditambahkan

#### Detail Field Actions
- **Primary button selalu enabled** — error ditampilkan inline, jangan block flow user
- Semua aksi di dalam form / advance settings = **text button + icon + label** (BUKAN standalone icon)
- **Delete baris tabel = BUKAN destructive** (gampang di-add lagi, belum tersimpan permanen) → tidak perlu confirmation modal. (Definisi destructive: permanen & susah dibatalkan)

#### Primary Action Placement
- Primary action **selalu kanan**, secondary (Cancel/Back) **kiri**, **hanya 1 primary per page**
- Urutan kiri→kanan: `[Text Button] [Secondary] [Primary]`
- **Sticky di bottom-right** walau form panjang (selalu kelihatan)
- Tooltip untuk disabled action wajib jelasin alasannya saat hover

#### Help & Advanced Options
- Panel digrup di **kanan halaman**, scroll vertikal ikut konten parent
- Setting yang **impact form langsung** → taruh di atas
- Setting indirect / tambahan → taruh di bawah
- Pisahkan kedua grup dengan **divider**

#### Keyboard Shortcuts (Form Page)
| Key | Aksi |
|-----|------|
| `Tab` | Pindah field berikutnya. Kalau next field = date picker / dropdown → auto-open. Field aktif wajib punya signifier visible (highlight/border) |
| `Enter` | Submit aksi yang sedang dipilih (pilih dropdown, confirm date) |
| `Esc` | Cancel / tutup form Create Document |
| `Ctrl/Cmd + V` | Paste data |
| `Ctrl/Cmd + C` | Copy data |
| `Ctrl/Cmd + S` | Save data |

> Di list form (table rows): saat pindah antar baris, tawarkan suggested action (misal "Copy nilai baris sebelumnya") yang bisa di-accept / skip cepat.

---

## Template 2: Side Sheet Form

### Kapan Digunakan
- User perlu edit data sambil melihat halaman utama
- Form pendek ATAU bagian dari cross-process flow (misal: buat mitra baru saat sedang isi invoice)
- Kompleksitas sedang (4-10 fields)
- Mendukung contextual editing atau extended quick actions

### Kapan TIDAK Digunakan
- Quick Action ≤ 4 fields → pakai **Modal Form** (lebih simpel, nggak makan space)
- Primary/core flow (bikin invoice penuh, setup mitra lengkap) → pakai **Form Page**
- Task yang butuh fokus penuh (verifikasi identitas, input finansial detail) → **Form Page**
- Butuh multi-step flow

### Struktur Visual

```
+------------------------------------------+------------------+
|                                          |  Side Sheet  [X] |
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
- **Lebar: default 40% dari Main Area. Naik ke 50% kalau form-nya kompleks banget** (banyak field / nested section) — analisa per kasus
- **TIDAK bisa ditutup dengan klik di luar** (cegah kehilangan data tak sengaja). Hanya bisa ditutup via tombol Close (X) di header ATAU tombol Cancel di footer
- Konten Side Sheet scroll independen
- **Header**: judul jelas & singkat (contoh: "Buat Mitra Baru", "Tambah Produk") + tombol Close (X) di kanan atas
- **Footer**: Primary Action (Save/Apply) + Secondary (Cancel). Label = kata kerja jelas (Simpan, Update, Batal). Selalu sediakan exit aman (Cancel)
- Background: subtle shadow untuk bedain dari halaman utama
- Contoh: Buat Mitra Baru dari halaman Create Invoice

---

## Template 3: Modal — 3 Tipe Berbeda

> Paperverse punya **3 tipe modal** dengan fungsi & behavior BERBEDA. Jangan dicampur. Default focus-nya bahkan berlawanan (Confirmation = Cancel, Information = Primary).

| Tipe | Fungsi | Risk | Default focus | Action |
|------|--------|------|---------------|--------|
| **Modal Form** | Input task cepat sekunder | Low | Field pertama | Save / Cancel |
| **Confirmation Modal** | Minta consent sebelum aksi berat | **High** | **Cancel** (aksi aman) | Destructive / Permanent |
| **Information Modal** | Kasih tau info / acknowledgment | Low | **Primary** | Safe / Reversible |

---

### 3a. Modal Form

**Kapan**: task cepat & sekunder, maks **3 fields**, tidak butuh navigasi/preview.
**Jangan**: form panjang / logika kompleks / user perlu pertahankan konteks halaman (→ Side Sheet / Form Page).

```
+----------------------------------------------+
|         Main Page (dimmed)                   |
|     +----------------------------------+     |
|     |  Modal Title                [X]  |     |
|     |----------------------------------|     |
|     |  Field 1 *                       |     |
|     |  [______________________]        |     |
|     |  Field 2                         |     |
|     |  [______________________]        |     |
|     |          [Simpan]  [Batal]       |     |
|     +----------------------------------+     |
+----------------------------------------------+
```

- Center di layar, backdrop dimmed
- Maks 3 fields, tidak ada navigasi di dalam modal
- Contoh: Edit nama user, tambah note

---

### 3b. Confirmation Modal

**Tujuan**: checkpoint sadar sebelum aksi berat/irreversible — bukan sekadar warning, tapi momen refleksi sengaja.

**Kapan dipakai:**
- Destructive action (delete/void/overwrite) **pada entity tersimpan** (permanen & susah dibatalkan)
- Navigasi dengan unsaved changes (mau keluar tanpa simpan)
- High-impact org action (update nama/NPWP yang trigger re-verifikasi KYC, atau pengaruhi data legal)

**JANGAN dipakai untuk:** success/completion state ("Invoice berhasil dibuat" → itu Toast / Information Modal), atau delete baris form yang belum tersimpan (bukan destructive).

**Anatomy:**
1. Illustration (visual warning/destructive)
2. Title — `verb + object` (mis. "Hapus 3 Invoice?")
3. Body text — jelasin konsekuensi (mis. "Aksi ini tidak bisa dibatalkan. 3 invoice akan dihapus permanen")
4. Primary button — aksi destructive (merah)
5. Secondary button — Cancel (aksi aman)

**Behavior:**
- **Default focus = Cancel** (aksi aman). `Esc` hanya nutup modal kalau kondisi aman
- Primary di-klik → loading state di tombol
- **Async**: sukses → modal auto-close → tampilkan success toast. Gagal → modal **tetap buka** + opsi Try Again
- Cancel → tutup modal langsung, tanpa perubahan
- Mobile → tampil sebagai bottom sheet, tombol Cancel sticky footer

**Copy rules:** `What happened → What can do → Action/next step`
| Rule | ✅ Good | ❌ Bad |
|------|--------|-------|
| Clear action | "Hapus 3 Invoice?" | "Yakin?" |
| Explain consequence | "Invoice akan dihapus permanen" | "OK / Ya" |
| Explicit label | "Hapus" / "Batal" | label generik |

---

### 3c. Information Modal

**Tujuan**: inform info penting / minta acknowledgment / minta keputusan sederhana risk rendah. Tujuan utama: bikin flow tetap smooth & predictable — hindari "eh moment".

**Kapan dipakai:**
- Acknowledge info penting sebelum lanjut (mis. "Maintenance terjadwal jam 11 malam")
- Inform kondisi sistem yang block aksi (mis. "Pembayaran melebihi batas waktu")
- Minta keputusan sederhana (mis. "Sesi berakhir")
- Saran next step setelah selesai (opsional — kalau info opsional, mending pakai Toast/inline)

**JANGAN dipakai untuk:** destructive action (→ Confirmation Modal), paragraf panjang, kebanyakan opsi, modal chain (modal nyambung modal), block flow dengan modal berulang.

**Anatomy:** Illustration (info/success/warning — pakai soft illustration, BUKAN harsh warning icon) → Title (singkat, to the point) → Body (what happened + what to do next) → Primary button (resolve/lanjut) → Secondary (cancel/close, opsional).

**Behavior:**
- **Default focus = Primary action** (beda dari Confirmation Modal!). `Enter` → trigger primary. `Esc`/klik luar → tutup aman
- 1 primary action, 1 secondary opsional. Hindari destructive action di sini
- **Async**: aksi butuh waktu → loading di tombol. Sukses → modal auto-close → success toast

**Copy rules:** `What happened → Why it matters → What to do next`. Title deskriptif ("A Currency Adjustment Has Been Applied"), bukan "Something changed!". Primary "Continue Payment" bukan "OK". Secondary "Cancel Payment" bukan "Later".

---

## Page Navigation (sumber: Paperverse "Page Navigation")

Pola navigasi di halaman child/detail. **3 elemen**: Back Link + Breadcrumb + Pagination Detail.

### Kapan Dipakai
- User di halaman detail yang berasal dari sebuah list
- Perlu lihat struktur hierarki konten
- Pindah antar item tanpa balik ke list dulu

### Kapan TIDAK Dipakai
- Halaman single-task / standalone form (nggak ada hierarki)
- User sudah di root level (nggak ada origin page)

### Anatomy

```
[← Kembali]  Invoice Penjualan  >  Buat Invoice Penjualan        [←] 1 dari 24 Invoice [→]
 └ Back Link  └────────── Breadcrumb ──────────┘                  └── Pagination Detail ──┘
```

1. **Back Link** — paling kiri, sebelum breadcrumb. Teks `← Kembali` / `← Back`. Selalu balik ke origin page.
2. **Breadcrumb** — format `Entity > Section > Current Page`. Tiap level **clickable kecuali current** (current = bold, non-clickable). Ellipsis `...` kalau hierarki kepanjangan.
3. **Pagination Detail View** — kanan atas, dipisah dari breadcrumb. Format `X dari Y [entity]` (mis. "1 dari 24 Invoice"). Navigasi antar item **tanpa full reload**. Prev/next disabled di item pertama/terakhir.

### Behavior
- Transition antar item = smooth, **bukan full reload**
- Responsive: breadcrumb boleh dipersingkat dengan ellipsis di viewport sempit; back link & pagination tetap visible & accessible di mobile

> Relasi dengan Form Page: **Breadcrumb WAJIB** di halaman child (Create/View/Edit), TIDAK ada di list/root. Back Link & Pagination Detail opsional sesuai konteks (ada origin list atau enggak).

---

## Behaviour Guidelines

### 1. Input Behavior — Pilih Format Jawaban Paling Sederhana

| Kondisi | Gunakan | Jangan Gunakan |
|---------|---------|----------------|
| Opsi ≤ 4 | **Radio Group** (tampilkan langsung) | Select/Dropdown |
| Opsi ≥ 5 | **Select/Dropdown** | Radio Group |
| Opsi banyak (≥ 5) + perlu search | **Autocomplete/Combobox** | Radio/Select |
| Teks panjang | **Rich Text Editor / Textarea** | Input biasa |
| Tanggal | **Date Picker** (support typing + kalender) | Input teks biasa |

> **Threshold (keputusan user 2026-05-19):** Radio kalau opsi **≤ 4**, Dropdown kalau **≥ 5**. Autocomplete hanya kalau opsi banyak DAN butuh search (kalau < 5 opsi → tetap Dropdown, jangan Autocomplete).

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
