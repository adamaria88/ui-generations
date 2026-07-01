# Component Guideline — {{COMPONENT_NAME}}

> Template 9-section. Diisi saat Fase 4. Nanti di-generate ke Figma (Fase 5).
> Alt terpilih: **{{SELECTED_ALT}}**

## 1. Preview Design Component
Gambar/embed alternatif terpilih. (Di Figma: frame preview komponen di paling atas.)

## 2. Overview
1-2 kalimat: komponen ini apa, kegunaannya di produk Paper.id.

## 3. When to Use
- ✅ Pakai saat: ...
- ❌ Jangan pakai saat: ... (sebut komponen alternatif yang lebih tepat)

## 4. Design Principle
Prinsip desain yang mendasari (tarik dari `paper-designer-thinking.md` — visual weight, hierarchy, accessibility, familiarity). Cite kalau dari buku.

## 5. Anatomy & Properties
- **Anatomy:** breakdown bagian (dari atas ke bawah / luar ke dalam).
- **Properties:** tabel `Property | Tipe | Opsi | Default`. Termasuk variant + boolean toggle.
- **Token:** color / text style / spacing yang dipakai — **nama token Paperverse**, bukan hex mentah.

## 6. Behaviour
Interaksi & state: default, hover, pressed, focus, disabled, loading, empty, error. Animasi/transisi (durasi, easing dari token). Auto-dismiss/timer kalau ada.

## 7. Variant
Daftar varian + kapan tiap varian dipakai (mis. Severity: Info/Success/Warning/Danger; Size: default/compact).

## 8. Do's & Don'ts
Tabel `✅ Do | ❌ Don't` — konkret, visual kalau bisa. Fokus ke kesalahan yang sering kejadian.

## 9. Edge Cases
Kasus pinggir: teks kepanjangan, konten kosong, angka besar, multi-line, RTL/i18n, layar sempit, banyak item sekaligus. Gimana komponen tetap nggak rusak.
