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
