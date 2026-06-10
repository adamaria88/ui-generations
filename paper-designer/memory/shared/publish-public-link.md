# Publish Link Publik — hosting di ROG Ally

Cara nge-share hasil generate UI (`_output/...`) sebagai **link publik** yang bisa diakses siapa pun.

## TL;DR

```bash
./scripts/publish-public.sh <path di _output>
```

Balikin URL `https://adam-1.tailc9cc10.ts.net/ui/<path>` → kasih ke user. Selesai.

## Kapan dipakai

User bilang salah satu: "buat link public", "open public", "jadiin link", "publish",
"share link", "biar temen/klien bisa lihat". Jangan nanya pakai tunnel apa — udah ada
jalurnya, tinggal jalanin script.

## Cara kerja (biar paham, bukan buat diubah)

1. File di `_output/` di-`tar` lalu di-stream lewat SSH ke ROG Ally (WSL2).
   - SSH port 22 landing di **Windows OpenSSH**, jadi eksekusi di WSL pakai `wsl bash -lc "..."`.
   - File ditaruh di `/home/adamm/claude-telegram-bot/public/ui-output/<path>`.
2. Dashboard server ROG (`src/dashboard/server.ts`, port 3457) punya route **`/ui/`**
   yang nyajiin folder itu sebagai static — support folder bertingkat + auto `index.html`
   + listing folder kalau gak ada index.
3. Port 3457 udah ke-expose publik via **Tailscale Funnel** → `https://adam-1.tailc9cc10.ts.net`.
4. Hasil akhir: `https://adam-1.tailc9cc10.ts.net/ui/<path relatif terhadap _output>`.

## Aturan

- Path **wajib** di dalam `_output/`. Script nolak path di luar itu.
- File/folder: file → 1 link; folder → link folder + link tiap `.html` di dalamnya.
- Re-run = overwrite. Link tetap sama, isinya ke-update.
- Akses **bebas** (siapa pun yang pegang link bisa buka, gak ada password). Jangan publish
  yang sensitif.
- Backend permanen — **JANGAN** bikin tunnel/ngrok/server baru. Kalau link 404/502,
  kemungkinan dashboard ROG mati: minta user restart `pinang-dashboard` di ROG
  (Sepuh/Mac: `ssh ... pm2 restart pinang-dashboard`).

## Config (kalau IP/host ROG berubah)

Edit konstanta di `scripts/publish-public.sh`:
- `REMOTE_ROOT` — folder static di ROG
- `ROG_HOST` / `ROG_KEY` — koneksi SSH (Tailscale IP + key)
- `BASE_URL` — base Funnel URL

Setup awal & verifikasi: 2026-06-10 (Sepuh, dari Mac). End-to-end tested, MD5 match, HTTP 200.
