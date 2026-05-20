---
name: overlay-screenfigma-bugs
description: "Bug aktif di overlay engine — screenReveal & Figma export multi-screen masih broken, perlu dilanjutkan"
metadata: 
  node_type: memory
  type: project
  originSessionId: f456c60c-5cf2-4ebc-88b6-5121fd69c661
---

Bug di `paper-designer/components/overlay.html` yang belum selesai difix (2026-05-20).

**Konteks penting:** overlay adalah ENGINE generik, bukan untuk satu prototype saja — akan ditempel ke prototype orang lain. Fix harus generic, tidak boleh assume class/CSS dari prototype.

## Bug 1 — `screenReveal` display value salah

`doFigma()` force-show hidden `[data-screen]` sebelum Figma export. Sekarang sudah difix ke `display:flex` (default untuk `[data-screen]`), dengan support `data-screen-display="grid|block"` sebagai override. Tapi masih broken — belum dikonfirmasi fix-nya berhasil.

**File terdampak:** `_output/expense-management/02-ui.html` (test case)

**Root cause awal:** `display:block` → screen flex container render salah → layout hancur di Figma.
**Fix yang dicoba:** ganti ke `display:flex` + `data-screen-display` attribute. Tapi user bilang "masih broken".

**Yang belum dicek:**
- Apakah `.app-layout{height:100vh;overflow:hidden}` + `.main-area{overflow-y:auto}` menyebabkan Screen 2 render off-viewport saat keduanya visible sekaligus
- Apakah `extractTree()` gagal capture Screen 2 karena posisinya di luar viewport (y sangat besar)
- Apakah `buildFigmaPayload()` fall back ke single-screen karena `trees.length < 2`

## Bug 2 — Figma flow tidak ke-generate (terkait Bug 1)

`buildFigmaPayload()` hanya bikin FLOW payload (2 frame + edge) kalau `screens.length >= 2`. Kalau Screen 2 gagal di-extract (karena off-viewport atau render salah), fall back ke 1 frame dari `.app-layout`.

**Pendekatan yang mungkin:**
- Scroll `.main-area` ke Screen 2 sebelum extract, capture, scroll balik
- Clone each screen ke invisible off-DOM container untuk capture
- Capture tiap screen secara isolated (bukan semua sekaligus di DOM yang sama)

**Why:** engine convention adalah `[data-screen]` = full-page screen container, seharusnya jadi Figma frame terpisah.
**How to apply:** waktu lanjut debug, mulai dari cek apakah `extractTree(screen2)` return null atau trees.length, baru cari solusi reveal yang truly generic.

## Bug 3 — Comment system TIDAK track layer context + coordinate mismatch untuk fixed-positioned layer

Bug ini punya dua sisi yang saling terkait:

### 3a — Context tracking (screen/state)

Storage pin sekarang flat: `suxc:<pathname>` → array of pins dengan `{x, y, text}`. **Tidak ada info tentang `[data-screen]` aktif atau `[data-state]` aktif saat pin dibuat.**

**Akibatnya:**
- User komen di "Daftar Pengeluaran" → pin di (500, 300) anchor "Operasional"
- User switch ke "Catat Pengeluaran" via JS — `.screen.active` pindah
- Pin lama tetap render di (500, 300) tapi sekarang di atas form Catat → visual ambiguous, anchor text nggak sinkron
- Submit output: "Operasional [komen]" tanpa info screen mana → designer DS bingung

**Sama untuk `[data-states]`:** komen di state "empty" vs "loading" vs "default" tidak ter-track. Switch state pakai widget → pin lama keliatan di state baru, salah konteks.

### 3b — Coordinate system mismatch (modal/popup/dropdown)

Pin disimpan dengan **document-relative coordinates** (line 567 overlay.html: `c.x = L0.x` di mana `L0 = clientX + scrollX, clientY + scrollY`).

**Tapi modal/popup/tooltip biasanya `position:fixed`** — viewport-relative, bukan document.

**Contoh test case nyata** (`_output/expense-management/02-ui-aurora.html`):
```css
.scrim { position:fixed; inset:0; z-index:50; }
```
Modal "Buang perubahan?" pakai class `.scrim` ini.

**Akibatnya:**
- User buka modal (visible di viewport center, misal X=1000, Y=400)
- User klik modal content saat overlay ON
- Pin tersimpan dengan `c.x = 1000 + scrollX, c.y = 400 + scrollY` (document coords)
- Anchor text dari `elementsFromPoint(1000, 400)` → dapet modal content text ✓
- Pin di-render dengan `position:absolute` relative to body → mengikuti document
- **Modal `position:fixed` → tetap di viewport regardless of scroll**
- User scroll → modal stays at viewport (1000, 400), pin moves to viewport (1000, 400 - scroll)
- Pin "ngambang" terpisah dari modal-nya

**Skenario worst case yang user reported:**
1. User buka modal saat di scrollY=500
2. Klik pin di modal area → pin disimpan di document (X, 400+500)=(X, 900)
3. Scroll ke 0 → pin terlihat di viewport Y=900 (jauh di bawah)
4. Modal close → re-open → modal di viewport center (Y=400)
5. Pin tetap di document Y=900, **terpisah jauh dari modal**

### Yang perlu dibangun (fix gabungan 3a + 3b)

1. **Capture full context saat pin create:**
   ```js
   pin.screen = currentScreen();  // [data-screen] aktif
   pin.state = currentState();    // [data-state] container saat klik
   pin.layer = closestFixedLayer(targetEl);  // id/data-layer dari fixed ancestor (modal/popup), null kalau bukan
   pin.positioning = pin.layer ? 'fixed' : 'absolute';
   // Kalau fixed: simpan coords VIEWPORT-relative (clientX/Y), bukan document
   pin.x = pin.positioning === 'fixed' ? ev.clientX : ev.clientX + scrollX;
   pin.y = pin.positioning === 'fixed' ? ev.clientY : ev.clientY + scrollY;
   ```

2. **Render pin sesuai positioning:**
   - `pin.positioning === 'absolute'` → pin absolute di body, document-relative (existing behavior)
   - `pin.positioning === 'fixed'` → pin fixed, viewport-relative, **append ke fixed container atau body dengan position:fixed**
   - Pin fixed harus follow modal saat modal open, dan **hide saat modal closed**

3. **Visibility filter saat render:**
   - Pin dengan `pin.screen` ≠ active screen → hide
   - Pin dengan `pin.state` ≠ active state → hide
   - Pin dengan `pin.layer` set → cek apakah layer-nya visible (mis. modal open). Kalau closed → hide pin
   - Pin tanpa layer (regular content) → show kalau di active screen/state

4. **Hook semua layer-switching mechanism:**
   - State switcher widget → trigger re-render pin
   - `[data-screen]` change (via JS show/hide) → trigger re-render
   - Modal/popup open/close → trigger re-render (butuh convention atau MutationObserver)

5. **Convention `[data-layer]` untuk ephemeral UI:**
   ```html
   <div class="scrim" data-layer="modal-confirm-delete" position:fixed>...</div>
   ```
   Engine bisa detect via attribute + computed style. Atau auto-detect via `getComputedStyle().position === 'fixed'` di ancestor chain.

6. **Migration pin existing:** Pin lama tanpa schema baru → treat sebagai `screen=null, state=null, layer=null, positioning='absolute'` (existing behavior). Backward compat.

7. **Submit output enrichment:**
   ```
   [Screen: Daftar Pengeluaran | State: empty]
   - "tombol 'Catat Pengeluaran' kurang prominent"
   
   [Screen: Catat Pengeluaran | State: default]
   - "field tanggal harusnya default hari ini"
   
   [Layer: modal-confirm-delete (inside Catat Pengeluaran)]
   - "warning copy terlalu panjang"
   ```

**Why:** Paper Designer mostly generate prototype dengan modal/popup/state switching. Tanpa fix ini, **semua komen di layer ephemeral (modal, dropdown, tooltip) broken** — pin ngambang di posisi salah, submit ambiguous.
**How to apply:** prioritaskan 3b (coordinate mismatch) dulu — itu yang langsung visible broken. 3a (context tracking) bisa nyusul. Schema pin baru harus backward compat dengan pin lama (semua field opsional, default ke existing behavior kalau missing).
