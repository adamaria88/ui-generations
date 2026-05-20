---
name: paperverse-design-decisions
description: "Keputusan desain eksplisit user 2026-05-19 saat audit Paperverse 1.0 — override DS, threshold, definisi destructive"
metadata: 
  node_type: memory
  type: project
  originSessionId: 2dd5a558-3385-4042-a732-8aa9b3c65ad4
---

Saat audit Paperverse 1.0 (file Figma `KjmdMheQSYqqJoKyniNMnB`, 14 halaman doc di-export jadi JPG), user memutuskan 4 hal yang **override / mempertegas** rules:

1. **Toast: width `380px`, radius `8px`** — override Aurora SCSS (450px/12px) DAN Paperverse Toast doc 2023 (300px/4px). Sudah ditulis di `design-rules.md` section Toast + ds-core.md.
2. **Threshold input: Radio ≤ 4 opsi, Dropdown ≥ 5.** Autocomplete hanya kalau ≥5 DAN butuh search. Sebelumnya ada kontradiksi internal di ds-core.md (<4 vs ≤5) — sudah disamakan.
3. **Side Sheet width: default 40%, naik ke 50% kalau form kompleks banget** (analisa per kasus, bukan fixed range).
4. **Definisi "Destructive" = permanen & susah dibatalkan.** Konsekuensi: hapus baris form belum tersimpan = BUKAN destructive (no confirmation modal); hapus entity tersimpan (invoice/mitra) = destructive (wajib Confirmation Modal).

**Why:** Paperverse 1.0 adalah dokumentasi DS resmi terbaru, tapi sebagian doc lama (Toast 2023) konflik dengan Aurora SCSS. User jadi arbiter final untuk nilai yang konflik.

**How to apply:** Pakai nilai-nilai ini saat generate. Kalau ada doc/source lain yang beda, keputusan user ini menang. Lihat juga [[page-templates-summary]] dan [[showcase-audit-status]].

## Paperverse 1.0 — doc yang sudah diserap ke rules
Form Structure, Button, Confirmation Modal, Information Modal, Create Document, Page Navigation, Error Message, Autocomplete/Multi-Select, Side Sheet, Tab, Table List, Toast, View Document, Number Input-OTP.
Hasil masuk ke: `page-templates.md` (Form Page detail, Side Sheet, Modal 3-tipe, Page Navigation), `design-rules.md` (section baru "Behavioral & Pattern Rules"), `ds-core.md` (resync).
