# Component Guideline — {{COMPONENT_NAME}}

> Template 9-section. Diisi saat Fase 4. Nanti di-generate ke Figma (Fase 5).
> Alt terpilih: **{{SELECTED_ALT}}**

---

## ⛔ 2 ATURAN KERAS (lock 2026-07-13, keputusan user)

**R1 — Guideline SELALU ditulis dalam BAHASA INGGRIS.** Berlaku buat `.md` DAN frame guideline di Figma. Alasan: guideline = dokumen DS yang dibaca lintas tim (designer, tech, PM, dan pihak luar). Chat sama user tetap Bahasa Indonesia santai — yang Inggris cuma **artifact guideline**-nya.
> Konsekuensi: nama property, label tombol default, copy contoh, verdict edge case — semua Inggris.

**R2 — Section 8 (Do's & Don'ts) dan Section 9 (Edge Cases) WAJIB VISUAL, bukan teks doang.**
- Pakai **instance komponen yang beneran** (dari component set yang baru dibikin) — DILARANG cuma tabel teks, DILARANG screenshot mati.
- Kontennya pakai **konteks Paper.id yang nyambung** — invoice, supplier, pembayaran, mitra, pengeluaran, dst. DILARANG lorem ipsum / "Title / Description" generik di section ini.
- Tiap kasus = **1 sel**: caption (apa kasusnya) → komponen live (di atas scrim/konteks yang relevan) → **verdict** ✅ / ⚠️ / ❌ + alasan singkat.
- Do's & Don'ts: sandingin **side-by-side** — versi bener vs versi salah, pakai komponen yang sama.

> **Kenapa keras:** guideline berbentuk teks doang nggak kebaca sebagai spec — designer lain tetap nebak. Kasus pinggir (judul kepanjangan, konten kosong, target mepet tepi) baru kelihatan rusaknya kalau **dirender beneran**. Ini juga yang bikin bug ketahuan sebelum dipakai.

---

## 1. Preview Design Component
Gambar/embed alternatif terpilih. (Di Figma: frame preview komponen di paling atas.)

## 2. Overview
1-2 kalimat: komponen ini apa, kegunaannya di produk Paper.id.

## 3. When to Use
- ✅ Use when: ...
- ❌ Don't use when: ... (sebut komponen alternatif yang lebih tepat)

## 4. Design Principle
Prinsip desain yang mendasari (tarik dari `paper-designer-thinking.md` — visual weight, hierarchy, accessibility, familiarity). Cite kalau dari buku.

## 5. Anatomy & Properties
- **Anatomy:** breakdown bagian (dari atas ke bawah / luar ke dalam).
- **Properties:** tabel `Property | Type | Options | Default`. Termasuk variant + boolean toggle.
- **Token:** color / text style / spacing yang dipakai — **nama token Paperverse**, bukan hex mentah.

## 6. Behaviour
Interaksi & state: default, hover, pressed, focus, disabled, loading, empty, error. Animasi/transisi (durasi, easing dari token). Auto-dismiss/timer kalau ada.

## 7. Variant
Daftar varian + kapan tiap varian dipakai (mis. Severity: Info/Success/Warning/Danger; Size: default/compact).

## 8. Do's & Don'ts — **VISUAL (R2)**
Side-by-side pakai instance komponen beneran + konten Paper.id.

| ✅ Do | ❌ Don't |
|---|---|
| [instance komponen — versi bener] | [instance komponen — versi salah] |
| alasan singkat | alasan singkat |

Fokus ke kesalahan yang **sering kejadian**, bukan yang teoritis.

## 9. Edge Cases — **VISUAL (R2)**
Grid sel. Tiap sel: caption → instance komponen live (konten Paper.id) → verdict ✅/⚠️/❌ + alasan.

Kasus yang wajib dicek (sesuaikan per komponen):
- Teks kepanjangan (judul wrap, deskripsi panjang)
- Konten kosong / opsional dimatiin
- Jumlah maksimum (item/step/chip terbanyak)
- Bentuk paling minimal
- Angka besar (mis. `Rp1.499.000.000`)
- Ruang sempit / mepet tepi viewport
- i18n (teks Indonesia lebih panjang dari Inggris)
