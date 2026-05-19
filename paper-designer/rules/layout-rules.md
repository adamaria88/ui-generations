# Layout Rules — Paper.id Page Structure

> **PURPOSE**: File ini berisi aturan layout yang WAJIB diikuti saat generate UI design untuk Paper.id. Semua halaman menggunakan struktur **3 Zone Layout** yang konsisten. **JANGAN** membuat layout yang menyimpang dari aturan ini.

---

## 3-Zone Layout

Setiap halaman Paper.id terdiri dari **3 zona utama**:

```
+-------------+------------------------------------------+
|             |         Navigation Header                |
|             +------------------------------------------+
|             |                                          |
|   Sidemenu  |              Main Area                   |
|   (fixed)   |                                          |
|   240px     |    (semua konten muncul di sini:         |
|             |     list, form create, form view, dll)   |
|             |                                          |
+-------------+------------------------------------------+
```

---

## Zone 1: Sidemenu (Kiri, Fixed)

- **Width**: 240px
- **Posisi**: Fixed di sisi kiri, selalu tampil, tidak berubah antar halaman
- **Konten dari atas ke bawah**:
  1. **Logo PAPER** — area logo di atas (height ~110px)
  2. **Info bisnis / Promo** — area promosi PaperPlus atau panduan memulai
  3. **Menu navigasi utama**:
     - Dashboard
     - Mitra (Partner)
     - Invoice (Sales)
     - Order (Purchase)
     - Pembayaran (Digital Payment)
     - Produk (Products & Stock)
     - More

### Aturan Sidemenu
- Sidemenu **TIDAK BERUBAH** saat berpindah halaman — hanya highlight menu aktif yang berubah
- Setiap menu item height: **52px**
- Detail styling sidemenu akan ditambahkan nanti

---

## Zone 2: Navigation Header (Atas Main Area)

- **Posisi**: Di atas Main Area, sejajar horizontal dengan bagian atas Main Area
- **Height**: ~48px content area (dengan padding menjadi ~88px total)
- **Lebar**: Mengikuti lebar Main Area (viewport width - 240px sidemenu)

### Struktur Navigation Header

```
+------------------------------------------------------+
| [Avatar] PT Bambang Jaya Abadi ▾    🔔 | Bantuan ▾ | Adam ▾ |
|          ✓ Verified · Company ID: XXX                |
+------------------------------------------------------+
```

**Kiri:**
- Avatar/logo perusahaan
- Nama perusahaan (dengan dropdown)
- Badge "Verified"
- Company ID

**Kanan:**
- Notification (bell icon)
- Divider
- Bantuan (icon headset + text + dropdown arrow)
- Profile user (icon profile + nama + dropdown arrow)

### Aturan Navigation Header
- Bentuk header **selalu konsisten** di semua halaman
- Ada beberapa variasi detail (akan dibahas nanti), tapi struktur general selalu sama
- Header **TIDAK BERUBAH** saat konten Main Area berubah

---

## Zone 3: Main Area (Tengah-Kanan)

- **Posisi**: Di kanan Sidemenu, di bawah Navigation Header
- **Lebar**: Viewport width - 240px (sidemenu)
- **Tinggi**: Viewport height - Navigation Header height
- **Scrollable**: Main Area bisa di-scroll secara independen

### Aturan KRITIS Main Area

1. **SEMUA konten di-render di Main Area** — termasuk:
   - List/tabel (daftar data)
   - Form create (buat data baru)
   - Form edit (ubah data)
   - Form view/detail (lihat detail data)
   - Dashboard widgets
   - Settings pages

2. **Konten MENGGANTIKAN (replace)** isi Main Area, bukan:
   - ❌ Bukan di tab terpisah
   - ❌ Bukan di dialog/modal (kecuali untuk konfirmasi singkat seperti delete confirmation)
   - ❌ Bukan di halaman baru terpisah
   - ✅ Konten langsung replace di Main Area

3. **Navigasi antar konten**:
   - Dari **list → create**: Klik tombol "Tambah" → Main Area berubah jadi form create
   - Dari **list → view/detail**: Klik row/item → Main Area berubah jadi detail view
   - Dari **list → edit**: Klik edit pada item → Main Area berubah jadi form edit
   - Dari **create/edit/view → list**: Klik back/cancel/save → Main Area kembali ke list

---

## Contoh Flow: CRUD di Main Area

```
State 1: LIST                    State 2: CREATE
+-------------+------------+    +-------------+------------------+
|             | Nav Header |    |             | Nav Header       |
|             +------------+    |             +------------------+
|   Sidemenu  |            |    |   Sidemenu  |                  |
|             | [Tabel     |    |             | [Form Create     |
|             |  Data]     | →  |             |  Input fields    |
|             |            |    |             |  ...             |
|             | [+Tambah]  |    |             |  [Simpan][Batal] |
+-------------+------------+    +-------------+------------------+

State 3: VIEW/DETAIL             State 4: EDIT
+-------------+------------+    +-------------+------------------+
|             | Nav Header |    |             | Nav Header       |
|             +------------+    |             +------------------+
|   Sidemenu  |            |    |   Sidemenu  |                  |
|             | [Detail    |    |             | [Form Edit       |
|             |  View      | →  |             |  Input fields    |
|             |  Info]     |    |             |  (pre-filled)    |
|             | [Edit][Del]|    |             |  [Simpan][Batal] |
+-------------+------------+    +-------------+------------------+
```

**PENTING**: Sidemenu dan Navigation Header **TETAP** di posisinya. Hanya konten Main Area yang berubah.

---

## Anti-Patterns (JANGAN LAKUKAN)

| ❌ Salah | ✅ Benar |
|----------|----------|
| Menaruh "Tambah", "Edit", "Hapus" sebagai tab navigasi | Tombol aksi di dalam konten Main Area (misal di header list atau di row) |
| Membuka form create di modal/dialog | Form create tampil di Main Area, menggantikan list |
| Membuat layout tanpa sidemenu | Sidemenu SELALU ada di semua halaman |
| Mengubah Navigation Header per halaman | Navigation Header konsisten, hanya Main Area yang berubah |
| Scroll seluruh halaman termasuk sidemenu | Hanya Main Area yang scroll, sidemenu fixed |

---

## Catatan

> Detail lebih lanjut akan ditambahkan untuk:
> - Variasi Navigation Header
> - Detail styling Sidemenu (hover, active, sub-menu)
> - Aturan spesifik form create/edit layout
> - Responsive behavior (tablet/mobile)
