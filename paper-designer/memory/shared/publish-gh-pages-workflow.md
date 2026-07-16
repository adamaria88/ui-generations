# Publish Prototype ke Link Publik (GitHub Pages)

**WAJIB baca file ini saat user minta publish/deploy/share prototype jadi link publik** — jangan re-derive dari nol, jangan sarankan setup GitHub Pages via Settings dari awal.

## Status saat ini (cek ulang tiap kali ragu, jangan asumsi basi)

```bash
gh api repos/adamaria88/ui-generations/pages
```

Kalau `status:"built"` dan `source.branch:"gh-pages"` → **Pages udah nyala, jangan disetup ulang**. Yang perlu cuma push konten baru ke branch `gh-pages`.

## Repo & akses

- Repo: `adamaria88/ui-generations` (**PUBLIC**).
- **Push WAJIB pakai akun GitHub `adamaria88`** — akun lain (mis. default `damnn88`) gak punya akses, push gagal 403. Cek akun aktif: `gh api user -q .login`. Ganti kalau salah: `gh auth switch --user adamaria88`.
- Kalau di laptop lain login pakai akun ketiga yang belum collaborator sama sekali → **push apapun bakal gagal duluan sebelum sempat mikirin Pages**. Cek dulu: `gh api repos/adamaria88/ui-generations/collaborators`.
- **Penting:** akses `write` (collaborator biasa) itu **CUKUP buat push & update Pages**. Cuma akses **admin** yang bisa buka Settings (termasuk halaman Settings > Pages) — ini aturan baku GitHub, gak bisa diubah walau adminnya udah kasih akses apapun. Karena Pages **udah pernah di-enable sekali** (step 5 di bawah), designer dengan akses `write` **gak perlu dan gak akan bisa** buka Settings — dan memang gak perlu, karena update Pages berikutnya cukup push konten ke branch `gh-pages`.

## Struktur & alasan

Branch **`gh-pages`** = orphan branch, isinya **CUMA prototype yang mau di-share** (bukan seluruh repo — memory/rules JANGAN ikut kepublish). Struktur: **`<folder>/index.html`** per prototype. URL hasil: `https://adamaria88.github.io/ui-generations/<folder>/`.

## WAJIB sebelum publish — strip overlay komen

Versi publik (buat stakeholder) **JANGAN ada overlay komen Figma** (`paper-designer/components/overlay.html`) — itu cuma buat review internal designer.

- File lokal `_output/...` tetap ada overlay (buat review internal, designer lain tinggal `git pull` + buka langsung).
- Yang di-push ke `gh-pages` = **copy tanpa overlay**.
- Cara strip: buang blok dari komentar `KOMEN OVERLAY ala Figma` s/d sebelum `</body>`, ubah `<body data-suxc="prototype">` jadi `<body>`.
- Base64-in hasil strip-an itu, **bukan file asli**.

## Langkah (semua via `gh api`, JANGAN switch branch lokal — working tree aman)

0. Strip overlay dari konten file (lihat atas) → ini yang di-base64 & di-push.
1. `gh auth switch --user adamaria88` (verifikasi: `gh api user -q .login`).
2. Cek branch `gh-pages` udah ada belum: `gh api repos/adamaria88/ui-generations/branches/gh-pages` (404 = belum ada).
3. **Kalau `gh-pages` BELUM ada** → bikin orphan branch isi 1 file (Git Data API, urut):
   - blob: `POST git/blobs` `{content:<base64 file>, encoding:"base64"}` → sha
   - tree: `POST git/trees` `{tree:[{path:"<folder>/index.html",mode:"100644",type:"blob",sha:<blob>}]}` → sha
   - commit: `POST git/commits` `{message:..., tree:<tree>, parents:[]}` (parents kosong = orphan) → sha
   - ref: `POST git/refs` `{ref:"refs/heads/gh-pages", sha:<commit>}`
4. **Kalau `gh-pages` SUDAH ada** (nambah/update prototype) → jangan orphan ulang, cukup `PUT contents/<folder>/index.html?ref=gh-pages` (sertakan `sha` file lama kalau ada, biar update; folder prototype lain tetap utuh).
5. Enable Pages — **sekali aja, kalau `GET .../pages` belum nunjuk ke `gh-pages`/`/`**: `POST repos/.../pages` `{source:{branch:"gh-pages",path:"/"}}`. Kalau 409 "already enabled" → cek `GET .../pages`, source udah `gh-pages` `/` berarti sudah benar, skip step ini.
6. Verifikasi: poll `https://adamaria88.github.io/ui-generations/<folder>/` sampai **HTTP 200** (build ~30–90 detik).

Payload base64 gede → pakai `gh api ... --input <file.json>` (jangan inline, kena `ARG_MAX`).

## Review vs Published — 2 kanal

- **Review (internal designer)** = buka file lokal `_output/.../02-ui.html` via `git pull`. Overlay tetap ada. Semua designer clone repo → tinggal pull.
- **Stakeholder sharing** = `gh-pages` versi stripped (lihat atas).
- JANGAN publish versi overlay ke URL publik — rawan salah kirim ke stakeholder. Gak perlu branch `gh-pages-review` terpisah, overhead > benefit.

**Why file ini dibuat (2026-07-16):** SOP ini sempat cuma kesimpen di memori lokal Claude Code satu laptop (`/Users/working/.claude/projects/.../memory/`, gak ke-track git) — bukan di sini. Akibatnya laptop designer lain gak kebagian SOP-nya, Claude di laptop itu re-derive cara publish dari nol (nyoba approach beda: docs/ folder di feature branch) lalu kejeblos coba buka Settings > Pages yang emang admin-only, padahal Pages-nya sendiri udah nyala dan yang dia butuh cuma push ke `gh-pages` pakai akses `write` yang udah dia punya.

**How to apply:** Pas user minta publish/share prototype ke link publik, baca file ini dulu (bukan reka ulang dari nol), cek status Pages real-time (jangan asumsi belum nyala), dan ingat push akses `write` udah cukup — jangan sok-sokan minta admin kalau gak perlu.
