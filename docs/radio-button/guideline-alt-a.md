# Component Guideline — Radio Button

> Component Guideline 9-section. Fase 4 · siap di-generate ke Figma (Fase 5).
> Alt terpilih: **Alt A · Outline**
> Binding warna: collection `semantic` (keputusan user 2A). Selection block = komposisi radio + surface card (keputusan 1A).

## 1. Preview Design Component
Preview Alt A (Outline) — 2 variant dalam 1 treatment:
- **Radio biasa** — dot + label list vertikal, kontrol kiri.
- **Selection block** — kartu (monogram + judul + deskripsi + harga), kontrol kanan untuk kartu kaya / kiri untuk kartu padat.
- Selected state: ring + dot `color/action/primary` biru, block = border biru + tint tipis `color/state/active/bg`.

(Di Figma: frame preview komponen di paling atas guideline.)

## 2. Overview
Radio Button = kontrol input untuk memilih **tepat satu** opsi dari sekumpulan pilihan yang saling eksklusif. Dipakai di form, wizard, dan setting Paper.id (mis. metode pembayaran, pilih paket, opsi pengiriman). Punya 2 variant: **radio biasa** (opsi teks pendek) dan **selection block** (opsi butuh penjelasan/nilai).

## 3. When to Use
- ✅ **Pakai saat:** user harus pilih **1 dari beberapa** opsi yang saling eksklusif, dan semua opsi perlu kelihatan sekaligus buat dibanding cepat.
- ✅ **Jumlah opsi ≤ 4** → radio (ambang Paper.id/Paperverse). Semua opsi permanen kelihatan = beban kognitif rendah *(NN/g)*.
- ✅ **Selection block** saat opsi butuh deskripsi / ikon / nilai (harga, kuota) untuk dibandingkan.
- ❌ **Jangan pakai saat:**
  - Boleh pilih **>1 atau nol** → pakai **Checkbox**.
  - Cuma **on/off 1 setting** → pakai **Toggle/Switch**.
  - Opsi **≥ 5** teks pendek → pakai **Dropdown** (≥5 + butuh cari → **Autocomplete**).
  - Radio tanpa default kepilih (kecuali sengaja hindari bias) → langgar konvensi.

*Sumber: NN/g "Checkboxes vs. Radio Buttons" · "Radio Buttons: Always Select One?" · ambang Paperverse (`paperverse-design-decisions`).*

## 4. Design Principle
- **Visual weight = importance.** State terpilih harus paling menonjol; opsi lain tenang. Alt A pakai emphasis ringan (border + tint) — cukup buat nandain tanpa "ramai". *(paper-designer-thinking — One Lens)*
- **Action color eksklusif interaktif.** Biru `color/action/primary` cuma buat elemen interaktif (dot aktif, ring). Teks info = neutral (`text/primary`/`secondary`), biar user nggak salah kira teks statis itu bisa diklik. *(thinking — Color rule)*
- **Familiar (Jakob's Law).** Bentuk lingkaran + dot dalam = konvensi radio universal; jangan diutak-atik.
- **Grouping via proximity.** Label nempel ke dot (gap `spacing/sm`), antar-opsi lebih renggang → kelompok kebaca tanpa border berlebih.
- **Accessibility:** area klik = seluruh label/kartu (target ≥44px), state nggak cuma dari warna (ada dot fill + ring), kontras teks ≥4.5:1.

## 5. Anatomy & Properties
**Anatomy — Radio biasa (per opsi):**
1. **Control (dot + ring)** — lingkaran 20px, ring `stroke/md` 1.5px.
2. **Label** — teks utama (Body md).
3. **Description** *(opsional)* — helper 1 baris (Body sm, `text/secondary`).

**Anatomy — Selection block (per opsi):**
1. **Container** — surface card, border `stroke/xs` 1px, radius `radius/lg` 12px.
2. **Icon/monogram** *(opsional)* — 36px, radius `radius/md` 8px.
3. **Body** — judul (Body md semibold) + badge *(opsional)* + deskripsi (Body sm).
4. **Trailing** — nilai/harga *(opsional)* + **control (dot)**.
5. **Control placement** — kanan (kartu kaya) / kiri (kartu padat).

**Properties (model dari Playground Fase 3.5 — 1:1 ke Figma):**

*Selection Block (kartu tunggal):* — teks default **generic** (Title/Description/Value) biar kebaca sbg template.
> Nama property sengaja **pendek tanpa prefix "Show"** biar nggak kepotong di toolbar Figma.

| Property | Tipe Figma | Opsi | Default |
|---|---|---|---|
| `State` | VARIANT | `Default` · `Hover` · `Selected` · `Disabled` | `Default` |
| `Leading` | **SLOT** | konten bebas (monogram/logo/icon) | monogram "A" |
| `Trailing` | **SLOT** | konten bebas (nilai/diskon/kosong) | "Value" |
| `Title` | TEXT | teks bebas | "Title" |
| `Badge` | BOOLEAN | true · false (visibility) | true |
| `Description` | BOOLEAN | true · false (visibility) | true |

> **Badge** = boolean visibility; kontennya masih **swappable native** (nested instance Chip Status) + editable. **Description** teks diedit langsung di instance (double-click). Prefix "Show" dibuang biar toolbar ringkas — pola niru DS `_Chips/Chip` (toggle `Head`/`Trail`, bukan "Show Head").

*Selection Group (kumpulan kartu):*
| Property | Tipe Figma | Opsi | Default |
|---|---|---|---|
| `Number of Cards` | VARIANT | `2` … `8` | `3` |

> `Leading`/`Trailing` = **real SLOT** (konten bebas, empty = ilang) → gantiin toggle Show Icon/Value. `Number of Cards` niru DS **`Chips`** (2–8). Badge = **INSTANCE_SWAP** ke `Chip Status`. Hover = **State variant** di Figma. Selection Group isinya **nested instance** Selection Block.

**Token (nama Paperverse `semantic`):**
| Bagian | Token | Nilai |
|---|---|---|
| Ring default | `color/border/default` | `#dde1e5` |
| Ring hover | `color/action/primary/hover` | `#89bde5` |
| Ring + dot aktif | `color/action/primary/bg` | `#4199d5` |
| Block selected bg | `color/state/active/bg` | `#f2f7fc` |
| Block selected border | `color/action/primary/bg` | `#4199d5` |
| Label | `color/text/primary` + text style Body md | `#133f5d` · 14/22 |
| Description / unit | `color/text/secondary` + Body sm | `#718c9e` · 12/18 |
| Disabled | `color/action/disabled/fg` · `/bg` | `#7f97a7` · `#e7eaec` |
| Error ring/teks | `color/action/destructive/bg` | `#e35273` |
| Padding block · gap | `spacing/md`·`spacing/lg` · `spacing/sm` | 12/16 · 8 |
| Ring stroke · accent | `stroke/md` · `stroke/lg` | 1.5px · 2px |

## 6. Behaviour
| State | Visual |
|---|---|
| **Default** | Ring `border/default` 1.5px, dot kosong (scale 0). |
| **Hover** (WAJIB) | Kartu: border → `action/primary/hover` `#89bde5` + bg → `surface/light/platform` `#f8fbfe`; dot ring → hover. Interaksi, bukan variant statis Figma. |
| **Selected** | Dot muncul (scale 0→1, transisi ~120ms), ring → `action/primary`; block → border biru + bg `state/active`. |
| **Focus** (keyboard) | Ring fokus (`color/focus/ring` `#89bde5`); `Tab` masuk grup, `↑↓`/`←→` pindah opsi, `Space`/`Enter` pilih. |
| **Disabled** | Opacity turun / `action/disabled`; nggak bisa diklik (`pointer-events:none`). |
| **Error** | Ring + pesan `action/destructive`; muncul saat submit tanpa pilih. |

- **Mutually exclusive:** pilih 1 opsi otomatis melepas yang lain (1 grup = 1 nilai).
- **Transisi:** dot scale + border-color, easing token (`--ease-out-regular`), durasi `--speed-extra-fast` (100ms).
- **Area klik:** seluruh label/kartu, bukan cuma dot.

## 7. Variant
| Variant | Kapan dipakai |
|---|---|
| **Radio biasa** | Opsi teks pendek 1 baris, ruang sempit, keputusan cepat (metode pembayaran, status). |
| **Selection block** | Opsi butuh deskripsi/ikon/nilai buat dibanding (pilih paket, tier, metode kirim). |

Sub-treatment (dari Fase 3, Alt A dipilih = **Outline**): selected = border biru + tint tipis. (Alternatif treatment lain — Soft-fill/Left-accent/Strong-outline/Compact — tetap tercatat di `alternatives.html` kalau nanti butuh.)

## 8. Do's & Don'ts
| ✅ Do | ❌ Don't |
|---|---|
| Selalu ada 1 opsi default kepilih | Biarin semua kosong tanpa alasan |
| ≤4 opsi pakai radio; ≥5 pindah dropdown | Jejalin 8 radio dalam 1 grup |
| Warna biru cuma buat control aktif | Warnain label info pakai biru (dikira link) |
| Kartu kaya → control kanan, padat → kiri | Campur posisi control acak dalam 1 form |
| Highlight angka/harga (typography emphasis) | Harga polos kayak teks biasa di selection block |
| Area klik = seluruh label/kartu | Cuma dot yang bisa diklik |
| Ikon (kalau ada) pakai Aurora SVG | Pakai emoji sebagai ikon |

## 9. Edge Cases
- **Label kepanjangan / multi-line:** dot tetap align atas (`align-self:flex-start`), teks wrap; jangan potong.
- **Deskripsi panjang di block:** wrap; kartu tumbuh vertikal, control tetap di posisinya.
- **Harga/nilai besar** (mis. `Rp1.499.000/bln`): `.btrail` nggak boleh nabrak judul — kasih gap; di layar sempit boleh turun ke bawah body.
- **Banyak opsi (>4):** kalau kepaksa banyak, pertimbangkan Compact (Alt E) atau ganti ke dropdown.
- **Konten kosong / loading:** tampilkan skeleton baris; jangan grup radio kosong tanpa opsi.
- **i18n / label lebih panjang:** teks Indonesia sering lebih panjang dari EN — pastikan wrap aman, jangan fixed-width.
- **Layar sempit (mobile):** selection block full-width; control kanan tetap kebaca; target sentuh ≥44px.
- **Disabled satu opsi tapi grup aktif:** opsi disabled tetap tampil (jangan hilang) biar user paham pilihan itu ada tapi belum tersedia.
