# ClickUp Connect — Baca Task Langsung dari Link

Tervalidasi 2026-07-20 di laptop `adamaria88`.

## Buat apa

Share link ClickUp di chat → Claude langsung baca isinya (deskripsi, komen, attachment) tanpa lo copas-copas manual. Dipakai buat kasih konteks brief sebelum bikin prototype.

## Setup di laptop baru (2 langkah, sekali seumur hidup)

Config server-nya udah ke-commit di `.mcp.json` (root repo), jadi ikut kebawa pas `git pull`. Yang perlu dilakuin tiap designer:

1. Buka Claude Code **dari folder repo ini** (`cd` dulu, jangan dari home) → muncul prompt _"project ini punya MCP server `clickup`, mau dipakai?"_ → pilih **Use this and all future MCP servers in this project**
2. Ketik `/mcp` → pilih **clickup** → **Authenticate** → browser kebuka sendiri → login ClickUp → **Allow**

Udah. Habis itu tinggal paste link.

**Syarat:** akun ClickUp lo harus punya akses ke workspace Paper.id. Kalau nggak, tool-nya nyala tapi task-nya nggak keliatan.

## Yang bisa kebaca (udah dites)

| Data | Status |
|---|---|
| Judul, status, assignee, requester, due date | ✅ |
| Deskripsi lengkap + custom field | ✅ |
| Komen + siapa nulis + kapan | ✅ |
| Daftar attachment | ✅ |
| **Isi gambar attachment** (Claude bisa lihat visualnya) | ✅ |
| Link eksternal (Figma, Google Slides) | ✅ kebaca URL-nya |

Attachment gambar/PDF di-download dulu ke scratchpad, baru dibaca. URL download-nya sekali pakai & expired ~5 menit — kalau gagal, minta ulang aja.

## Cara pakai

Paste link task-nya, bilang mau diapain. Contoh:

```
https://app.clickup.com/t/3708016/86d1p7hbn
bikinin prototype dari task ini
```

Link apa pun boleh — Claude yang cari sendiri task-nya di workspace.

## Kalau ngadat

| Gejala | Sebabnya | Fixnya |
|---|---|---|
| `/mcp` nggak ada clickup sama sekali | Claude dijalanin dari folder lain | `cd` ke repo ini dulu, baru `claude` |
| Buka `mcp.clickup.com/mcp` di browser → `Bearer token required` | Itu alamat buat aplikasi, bukan halaman manusia | Jangan diketik manual. Tunggu browser kebuka sendiri dari `/mcp` → Authenticate |
| Udah ✔ Connected tapi task nggak kebaca | Sesi Claude kebuka duluan sebelum login | `/exit` terus `claude` lagi |

## Catatan

- **Nggak pakai token/API key.** ClickUp cuma nerima OAuth. Jangan pernah paste token ke chat.
- Login nempel per-orang. Yang ke-share lewat git cuma alamat servernya, bukan sesi login lo — jadi tiap designer lihat workspace sesuai akses dia sendiri.
- Kalau mau clickup kepake di project lain juga (di luar repo ini): `claude mcp add --transport http -s user clickup https://mcp.clickup.com/mcp`

Lihat juga [[figma-mirror-method]] buat alur reproduksi screen dari Figma.
