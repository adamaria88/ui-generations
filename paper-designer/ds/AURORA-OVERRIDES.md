# Aurora Overrides — Registry

> **Purpose:** Catatan eksplisit ketika kita override spec Aurora karena alasan tertentu (Aurora outdated, user prefer lain, kebutuhan UX spesifik). Override yang tidak ada di file ini = **pelanggaran HUKUM MATI** (custom diam-diam).
>
> **Mekanisme:** Lihat `paper-designer/rules/design-rules.md` section "⛔ HARGA MATI — Aurora Component Lookup Ritual" (4 Mekanisme). CSS class yang override pakai anotasi `OVERRIDE:` bukan `AURORA:`.

---

## Format Entry

```markdown
### Override: <component-name>--<variant>

- **Aurora spec:** `<class>` di `<scss-path>` — value/property X
- **Override jadi:** value Y
- **Alasan:** <kenapa override>
- **Approved by:** <user> on <YYYY-MM-DD>
- **Class CSS di output:** `<class-name-yang-dipakai>`
```

---

## Active Overrides

### Override: `au-toast` (width + radius)

- **Aurora spec:** `au-toast` di `aurora/projects/ui/toast/toast.component.scss` L1-10
  - `width: 450px`
  - `border-radius: var(--radius-lg)` (12px)
- **Override jadi:**
  - `width: 380px`
  - `border-radius: var(--radius-md)` (8px)
- **Alasan:** Toast 450px terlalu lebar untuk konteks Paper.id (dashboard padat); 380px lebih proporsional. Radius 8 (md) lebih konsisten dengan card surface lain di app — radius 12 (lg) cuma untuk dialog/modal yang lebih prominent.
- **Approved by:** user on 2026-05-19 (sesi Paperverse 1.0 ingestion — konflik Aurora vs Paperverse doc, user pilih 380/8)
- **Class CSS di output:** `.au-toast` (custom CSS dengan anotasi OVERRIDE:)

---

### Override: Empty State Component (TIDAK ADA di Aurora)

- **Aurora spec:** **TIDAK ADA** di `aurora/projects/ui/` — tidak ada folder `empty` / `empty-state` / `placeholder`
- **Override jadi:** Custom component `.empty` dengan struktur:
  - Container: flex column, center align, padding 64px 24px
  - Icon: 72px Aurora SVG (au-icon catalog)
  - Heading: 16px bold text-primary
  - Body: 13px text-secondary, max-width 340px
  - CTA: `au-btn--primary` (Aurora — bukan custom)
- **Alasan:** Belum ada `au-empty-state` di Aurora DS. User butuh pattern empty state untuk "Belum ada pengeluaran" / "Belum ada invoice" / dll. Daripada skip fitur atau tunda development DS, custom dengan menggunakan **token Aurora & komponen Aurora di dalamnya** (icon dari au-icon, CTA dari au-btn).
- **Approved by:** user on 2026-05-20 (sesi audit Expense Management)
- **Class CSS di output:** `.empty`, `.empty h3`, `.empty p`
- **TODO follow-up:** Lapor ke maintainer Aurora DS — usulkan `au-empty-state` component. Setelah Aurora punya, migrate prototype.

---

### Override: File Upload Dropzone (TIDAK ADA di Aurora)

- **Aurora spec:** **TIDAK ADA** di `aurora/projects/ui/` — tidak ada folder `upload` / `dropzone` / `file-input`
- **Override jadi:** Custom component `.upload`:
  - Container: dashed border 1.5px light-grey-40, radius-md, padding spacing-xl, text center
  - Background: surface-light-platform
  - Color: text-secondary, font-size 13px
  - Hover: border action-primary-bg + color action-primary-bg
- **Alasan:** Upload bukti pengeluaran (gambar/PDF) butuh dropzone pattern. Aurora belum punya komponen ini. Fallback ke `<input type="file">` plain terlihat ga professional untuk B2B SaaS. Custom dropzone pakai token Aurora (radius, spacing, color, transition).
- **Approved by:** user on 2026-05-20 (sesi audit Expense Management)
- **Class CSS di output:** `.upload`, `.upload:hover`
- **TODO follow-up:** Lapor ke maintainer Aurora DS — usulkan `au-file-upload` / `au-dropzone` component.

---

## Hubungan dengan Aurora Lookup Ritual

- Mekanisme 1 (Pre-coding lookup) → kalau hasilnya ❌ TIDAK ADA → STOP & lapor user → user pilih (a/b/c)
- Kalau user pilih (c) custom → tulis entry di file ini
- Mekanisme 2 (Anotasi) → CSS block pakai `OVERRIDE:` (bukan `AURORA:`) dengan reference ke entry di sini
- Mekanisme 3 (Audit) → class dengan `OVERRIDE:` lolos kalau ada entry di file ini

**Tidak ada entry = pelanggaran.** Override harus eksplisit, beralasan, dan punya tanggal/approver.

---

## Removed Overrides (history)

_(belum ada — section ini untuk kasus override yang nantinya di-revert karena Aurora sudah punya, atau user ubah pikiran)_
