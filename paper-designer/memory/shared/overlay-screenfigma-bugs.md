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

## Bug 3 — Comment system TIDAK track screen/state context

Storage pin sekarang flat: `suxc:<pathname>` → array of pins dengan `{x, y, text}`. **Tidak ada info tentang `[data-screen]` aktif atau `[data-state]` aktif saat pin dibuat.**

**Akibatnya:**
- User komen di "Daftar Pengeluaran" → pin di (500, 300) anchor "Operasional"
- User switch ke "Catat Pengeluaran" via JS — `.screen.active` pindah
- Pin lama tetap render di (500, 300) tapi sekarang di atas form Catat → visual ambiguous, anchor text nggak sinkron
- Submit output: "Operasional [komen]" tanpa info screen mana → designer DS bingung

**Sama untuk `[data-states]`:** komen di state "empty" vs "loading" vs "default" tidak ter-track. Switch state pakai widget → pin lama keliatan di state baru, salah konteks.

**Yang perlu dibangun:**

1. **Capture context saat pin create:**
   ```js
   pin.screen = currentScreen();  // baca [data-screen].active atau closest [data-screen]
   pin.state = currentState();    // baca [data-state] container saat klik
   ```

2. **Visibility filter saat render pin:** pin yang `pin.screen` ≠ active screen → hide (tapi tetap di storage). Sama untuk state.

3. **Hook state switcher:** widget state switcher harus trigger re-render pins saat state ganti (event dispatch atau callback).

4. **Migration storage existing:** pin lama tanpa `screen/state` field → treat sebagai "global" (tampil di semua screen) sampai user manually re-anchor, atau force re-do.

5. **Submit output enrichment:**
   ```
   [Screen: Daftar Pengeluaran | State: empty]
   - "tombol 'Catat Pengeluaran' kurang prominent"
   
   [Screen: Catat Pengeluaran | State: default]
   - "field tanggal harusnya default hari ini"
   ```

**Why:** Paper Designer mostly generate multi-screen prototypes (full user flow). Tanpa fix ini, semua komen di prototype multi-screen ambiguous — workflow designer ↔ designer DS jadi broken.
**How to apply:** mulai dari design schema pin baru (backward compat dengan pin tanpa screen/state), implement currentScreen/currentState helper, modify create+render+submit flow.
