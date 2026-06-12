---
name: layout-rules-summary
description: 3-Zone Layout Paper.id — sidemenu 240px fixed + nav header + main area scrollable. Aturan anti-pattern halaman.
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2dd5a558-3385-4042-a732-8aa9b3c65ad4
---

Source: `paper-designer/rules/layout-rules.md`

## 3-Zone Layout

```
+-------------+------------------------------------------+
|             |         Navigation Header (~88px)        |
|             +------------------------------------------+
|   Sidemenu  |                                          |
|   (fixed)   |              Main Area                   |
|   240px     |           (scrollable)                   |
+-------------+------------------------------------------+
```

## Zone 1: Sidemenu
- Width: **240px**, fixed
- Menu items height: **44px** each (dari Aurora SCSS; layout-rules.md lama salah tulis 52px — sudah difix 2026-05-19)
- Konten: Logo (atas ~110px) → Info bisnis/promo → Menu navigasi utama
- Menu: Dashboard, Mitra, Invoice, Order, Pembayaran, Produk, More
- TIDAK berubah antar halaman — hanya active highlight yang berubah

## Zone 2: Nav Header
- Height: ~88px total (content ~48px + padding)
- Kiri: Avatar perusahaan + nama + badge Verified + Company ID
- Kanan: Bell notif | Bantuan ▾ | Profile user ▾
- Konsisten di semua halaman — TIDAK berubah saat konten ganti

## Zone 3: Main Area
- Width: viewport - 240px
- Scrollable independen
- **SEMUA konten di-render di sini** (list, form, detail, dashboard, settings)
- Konten REPLACE (menggantikan) isi Main Area — BUKAN tab terpisah, BUKAN modal (kecuali konfirmasi singkat)

## Anti-Patterns (JANGAN)
| ❌ Salah | ✅ Benar |
|----------|----------|
| Tambah/Edit/Hapus sebagai tab nav | Tombol aksi di dalam konten Main Area |
| Form create di modal/dialog | Form create tampil di Main Area, replace list |
| Layout tanpa sidemenu | Sidemenu SELALU ada |
| Scroll halaman termasuk sidemenu | Hanya Main Area yang scroll |

**Why:** Konsistensi shell app Paper.id.
**How to apply:** Setiap halaman harus pakai shell ini. Shell source: `paper-designer/components/sidemenu.html` + `nav-header.html`.
