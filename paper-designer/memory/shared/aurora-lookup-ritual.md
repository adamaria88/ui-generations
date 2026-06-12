---
name: aurora-lookup-ritual
description: "4 mekanisme enforcement supaya komponen UI prototype 100% dari Aurora DS, bukan ngarang. Dikunci 2026-05-20 setelah 15/17 komponen di expense-management ternyata custom."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 841d9c99-3d7d-4112-a0d1-ab1486d3f927
---

User mengunci ini setelah audit Expense Management prototype: dari 17 komponen UI di [`_output/expense-management/02-ui.html`](../_output/expense-management/02-ui.html), gue cuma 2 yang asli dari Aurora source (sidemenu + nav-header). 15 sisanya custom/ngarang — termasuk button tertiary, banner, badge, table, pagination, checkbox, toast, dropdown, dst — padahal Aurora punya komponen dedicated untuk semua.

**Why dilanggar terus padahal HUKUM MATI #1 & #2 sudah ada:** Aturan ada di skill (`Semua komponen dari DS Aurora` dan `Komponen tidak ada → STOP & lapor`), tapi **tidak ada mekanisme prosedural** yang bikin pelanggaran tidak mungkin lolos. Setiap "ingatkan diri sendiri" ke-skip pas lagi ngebut.

**4 mekanisme yang dikunci (semua, bukan pilih sebagian):**

**M1 — Aurora Lookup Ritual (mandatory pre-coding).** Sebelum nulis CSS class apapun untuk UI component, 3 step urut: (a) tentukan UI need. (b) `ls /Users/working/aurora/projects/ui/` → cek folder yang exist → baca `<component>/<component>.component.scss` + `.interface.ts` untuk VALUE & variants persis (catalog di `ds-core.md` cuma overview, detail dari SCSS source). (c) kalau Aurora ga ada → STOP & lapor format spesifik (develop di DS dulu / skip fitur / custom dengan alasan).

**M2 — Anotasi wajib di tiap CSS block.** Setiap class untuk UI component WAJIB punya comment header:
```css
/* AURORA: au-btn--tertiary
   Source: aurora/projects/ui/button/button.component.scss L56-63
   Variants: ButtonType (button.interface.ts) */
```
Kalau ga ada anotasi `AURORA:` atau `OVERRIDE:` → dianggap melanggar, kecuali masuk approved-custom whitelist (`.app-layout`, `.main-area`, `.page-head`, `.action-bar`, `.tbl-toolbar`, `.form-grid`, `.field`, `.screen`, `.sidemenu*`, `.nav-header*`, `.suxc-*`).

**M3 — Audit otomatis sebelum "setor".** Pseudocode: extract semua class via grep, untuk tiap class cek (a) di whitelist? (b) punya anotasi AURORA/OVERRIDE? (c) match pattern Aurora? Kalau FAIL → STOP, ga boleh setor, report list class bermasalah ke user dengan format spesifik.

**M4 — Phase 1.5 Aurora Component Mapping di pipeline.** Antara Langkah 2 (understanding brief) dan Langkah 5 (UI prototype): build mapping table `| UI Need | Aurora Component | Variant | Source file | Notes |`, share ke user untuk approval EKSPLISIT sebelum coding. Phase ini ditambahkan ke [`pipeline.md`](../../../ui-generations/.claude/skills/senior-uiux-designer/pipeline.md) sebagai "Langkah 2.5".

**Override mekanisme:** Kalau user prefer custom diatas spec Aurora (Aurora-nya jelek/outdated), catat eksplisit di `paper-designer/ds/AURORA-OVERRIDES.md` dengan format: spec Aurora, override jadi apa, alasan + tanggal, approver. Class yang override pakai anotasi `OVERRIDE:` bukan `AURORA:`. Custom diam-diam tanpa entry = pelanggaran.

**Where it's documented:**
- `paper-designer/rules/design-rules.md` — section "⛔ HARGA MATI — Aurora Component Lookup Ritual (4 Mekanisme)" di paling atas, mengikat semua rule lain.
- `paper-designer/.../senior-uiux-designer/pipeline.md` — Langkah 2.5 mandatory phase.
- `paper-designer/ds/AURORA-OVERRIDES.md` — registry override (dibuat ad-hoc per kebutuhan).

**Why:** Sistematik kelolosan ngarang komponen bikin prototype tidak match production. Aurora punya komponen dedicated untuk hampir semua kebutuhan (button, banner, breadcrumb, checkbox, dialog, dropdown-menu, form-field, icons, pagination, chip-status, skeleton, table, toast, tooltip, dst — full list: `ls /Users/working/aurora/projects/ui/`). Cocokan 1:1, jangan ngarang.

**How to apply:** Setiap full prototype run, mulai dari M1 (pre-coding) → M4 (mapping table share) → coding dengan M2 (anotasi) → M3 (audit) sebelum setor. Hubungan ke [[prototyping-gap-lessons]] poin 0a-0j: itu semua gap empiris yang muncul karena M1-M4 belum ada. Sekarang setelah dikunci, harusnya semua gap baru bisa di-prevent at-source, bukan ditambal post-hoc.

---

## Aturan Tambahan — Training-period reporting (lock 2026-05-20)

Selama kerja di akun & laptop user (`/Users/working/`), **WAJIB report tiap komponen yang TIDAK ada di Aurora SEBELUM bikin**. Tidak boleh diam-diam custom. Ini berlaku untuk semua scope — bahkan class kecil yang bukan layout helper.

**Detection mechanism (auto-implementable):**
```bash
# Saat M3 audit (pre-delivery)
# Step 1: Ground truth
AURORA_COMPS=$(ls /Users/working/aurora/projects/ui/ | grep -v '\.md\|\.json\|\.ts\|__tests\|README')

# Step 2: Extract classes dari file
CLASSES=$(grep -oE 'class="[^"]+"' <file> | sort -u)

# Step 3: Cross-check
# Untuk tiap class: kalo bukan layout helper + ga ada anotasi AURORA/OVERRIDE/APPROVED-CUSTOM
# → STOP. Lapor ke user dengan list class custom yang ga di-anotasi.
```

**Trigger detect = path `/Users/working/` (laptop user).** Kalau path berbeda (env lain), tetap apply tapi sumber Aurora source mungkin berbeda → fallback ke `ds-core.md` catalog + lapor terbatas.

**Format report saat detect missing component:**
```
⚠️ Lookup Aurora: komponen `<X>` dibutuhkan untuk `<UI need>`,
   TIDAK ada di /Users/working/aurora/projects/ui/.
   
   Pilihan untuk lo:
   (a) develop di DS dulu (tunda prototype, lapor ke maintainer Aurora)
   (b) skip fitur (alternatif UX: <usulkan>)
   (c) custom dengan alasan → catat di AURORA-OVERRIDES.md
   
   Mau pilih yang mana?
```

**Anti-pattern yang dilarang absolute:**
- Lompat ke coding tanpa cek Aurora dulu
- Diam-diam bikin class custom tanpa lapor
- Anggap "user nanti aja yang notice" → user explicit udah bilang ini training period
- Selesai coding lalu baru audit — audit harus PRE-DELIVERY (sebelum lapor "udah jadi"), bukan post-hoc

**Why training-period rule ini perlu eksplisit:** User secara aktif melatih sistem ini supaya kelak konsisten. Setiap missed reporting = lost opportunity untuk catat ke AURORA-OVERRIDES.md atau push Aurora maintainer untuk develop komponen baru. Konteks "training" = user value report tinggi, bukan beban.
