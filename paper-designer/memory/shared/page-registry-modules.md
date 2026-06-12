---
name: page-registry-modules
description: Daftar modul + Figma fileKey yang sudah terdaftar di page-registry.md — dengan screen list per modul
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2dd5a558-3385-4042-a732-8aa9b3c65ad4
---

Source: `paper-designer/rules/page-registry.md` (terakhir update: 2026-05-19)

> ⚠️ Hanya 3 modul terdaftar. Banyak modul Paper.id lain belum ada di registry.

## Sales Invoice
**Figma File:** `0Af9STRmxhIh0asCcjrZkZ`

| Screen | Node ID |
|--------|---------|
| List Sales Invoice | `2027:32395` |
| Create Invoice (Empty) | `2027:32614` |
| Create Invoice (Filled) | `2028:37004` |
| Save & Send Invoice | `2028:42853` |
| Success Create & Send | `2174:53737` |
| View Detail Invoice | `2174:55458` |
| View Detail (Dropdowns Open) | `2174:61843` |
| Popup: Buat Mitra Baru | `2028:41378` |
| Popup: Tambah Produk dari Stok | `2176:66097` |

## Sales Receipt (Kuitansi Penjualan)
**Figma File:** `u0IzFrBX0RxsZSpnh7nAS9`

| Screen | Node ID |
|--------|---------|
| List Sales Receipt | `227:33411` |

## Purchase Receipt (Kuitansi Pembelian)
**Figma File:** `TfRNePFB4IVc2NhdVUtZrK`

| Screen | Node ID |
|--------|---------|
| List Purchase Receipt | `4002:12596` |

## Cara Pakai
1. User sebut nama screen → cari di sini
2. Fetch screenshot via Figma MCP: `get_screenshot(fileKey, nodeId)`
3. Bandingkan dengan pattern file di `paper-designer/patterns/` (kalau ada)

**Why:** Figma nodes bisa stale vs production — pattern file lebih reliable untuk production state terkini.
**How to apply:** Untuk screen yang belum terdaftar, minta user tambahkan ke registry sebelum generate modifikasi.
