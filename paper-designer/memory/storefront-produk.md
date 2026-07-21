# Storefront — Produk (explore layout bagian atas)

**Sesi:** 2026-07-15 · **Brief:** revamp bagian atas halaman storefront (card "Your storefront" + QR + Create New Product) dari desain awal Nadhira yang "kurang cantik". Jalur: Mateng (benchmark Mobbin: Linktree/Stripe/Etsy/Wise/Shopify).

**Output:** `_output/storefront-produk/02-ui.html` (lokal, ber-overlay) · Publik: https://adamaria88.github.io/ui-generations/storefront-produk/ (gh-pages, stripped overlay, toggle varian A/B ditinggal buat stakeholder).

## Keputusan user (urut sesi)

1. **2 varian final: A Slim Bar (ala Linktree) & B Card (ala Stripe).** Varian C Hero (ala Etsy) dibikin lalu DIHAPUS. **B sudah di-approve ("udah cakep")**, A masih kandidat.
2. **Copy UI = English, ikutin screenshot produk asli** word-for-word ("Your storefront", "This is the link your customers use…", "Copy Link", dst). Pagination tetap campur kayak ss: "Jumlah baris / X dari X Produk".
3. **QR code dihapus TOTAL** (thumbnail, link, modal) dari semua varian.
4. **Ilustrasi wajib dari design-ops**: `/Users/working/Ai - Projects/prod/design-ops/training-output/17-storefront-qrdoor.svg`, di-INLINE ke HTML (self-contained), ukuran digedein 200×174, gap ke teks 16px. Ilustrasi bikinan sendiri (illshop) cuma buat empty state.
5. **Title + subtitle page dihapus**; tombol **Create New Product = pill primary, posisi DI BAWAH box storefront rata kanan** (bukan di page header).
6. **Link display = "link pill" gradient**: pill putih dibungkus border gradient 1.5px biru→hijau (`#4199d5`→`#97cc56`, primitive Aurora, arah 90deg), icon link dalam lingkaran tint `light-brand-15` 32px, URL dipecah (`paper.id/store/` muted + slug bold klik-able), Copy Link tertiary-plain di kanan. User: "bungkus lebih keren" → approved.
7. **Bar A hierarki: label + URL hero.** Kalimat "Your storefront is live:" dibuang (filler), diganti struktur label-value: label "Your storefront" (14px semibold text-secondary) + divider tipis + URL bold dark + chip hijau "Live". Koreksi user 2x: (a) 2 bold rebutan dalam 1 kalimat = anti-pattern; (b) URL polos tanpa label = ga jelas link apa — label wajib ada.
8. **Semua text-link action WAJIB leading icon 16px** (WhatsApp bubble outline, mata, pensil) — konsisten stroke 1.5 round caps.

## Catatan teknis

- Tabel ikut Bentukan Tabel Standar TAPI **tanpa kolom expand** (ikut desain asli) + `table{min-width:960px}` (override min-width 1680 warisan expense 15-kolom).
- Sidemenu active = "Produk & Stok" (**asumsi**, posisi menu Storefront belum dikonfirmasi user).
- Versi publik: strip overlay + tambah CSS `[data-states]>[data-state]:not([data-state="default"]){display:none}` — tanpa overlay, state switcher mati; tanpa CSS ini empty/loading numpuk kelihatan semua.
- Assembly file dari pieces di scratchpad (cat + python inline SVG + inject) — kalau revisi, regenerate dari `_output/storefront-produk/02-ui.html` langsung aja (pieces scratchpad = session-specific, hilang).
- Aksi mock (toast): WA share, preview, edit store, create product, view detail.

## Open

- Pilihan final A vs B belum diputus (B approved duluan).
- Icon WhatsApp = outline custom, bukan logo brand resmi — tanya tim kalau mau logo asli.
- Kalau arah ini jadi production: minta ilustrasi resmi + posisi menu Storefront ke tim DS.
