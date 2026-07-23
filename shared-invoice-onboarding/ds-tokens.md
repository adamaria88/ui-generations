# DS Tokens — Shared Invoice Onboarding (extract dari Paperverse Mobile, step 4)

Semua nilai di bawah = **verbatim dari Figma** (get_design_context), bukan ingatan.
File Paperverse Mobile: `2Fga9lAogbeZ0q2uGlhFTc`.

## Color tokens (semantic)
| Token | Hex |
|---|---|
| `color/text/primary` | `#133f5d` |
| `color/text/secondary` | `#718c9e` |
| `color/text/inverse` | `#ffffff` |
| `color/action/primary/bg` | `#4199d5` |
| `component/button/primary/border` | `#4199d5` |
| `color/border/default` | `#dde1e5` |
| `color/surface/light/default` | `#ffffff` |
| `color/state/active/bg` | `#f2f7fc` |
| `color/state/caution/bg` | `#fdf9ef` |
| `color/state/caution/icon` | `#eab11c` |
| `color/state/caution/text-dark` | `#6e4e00` |
| `color/state/success/bg` | `#f7fbf3` · icon `#97cc56` · text-dark `#356021` |
| `color/state/danger/bg` | `#fdf3f5` · icon `#e35273` · text-dark `#5c122d` |

## Text styles (Lato)
| Style | Font | Size | LH | Weight |
|---|---|---|---|---|
| Heading/S | Lato Bold | 16px | 20px | 700 |
| Body-SemiBold/M | Lato SemiBold | 14px | 22px | 600 |
| Body/M | Lato Regular | 14px | 22px | 400 |
| Body/S | Lato Regular | 12px | 18px | 400 |

## Spacing / radius
`spacing/xs`=4 · `sm`=8 · `md`=12 · `lg`=16 · `xl`=20
`radius/md`=8 · `lg`=12 · `full`=9999

## Shadow
- `Shadow Neutral-01` (kartu): `0 3px 10px #00000014` (8%)
- `shade/button/color` (tombol): drop `0 1px 2px #0A0D120D` + inner shadows

## Komponen — spec terverifikasi

### Coachmark `7830:27839`
320w · card bg `#fff` radius `lg`(12) pad `xl×lg`(20×16) shadow Neutral-01 · gap `lg`(16) Text↔Nav · gap `sm`(8) title↔desc
- Title: Heading/S Bold 16px `#133f5d`
- Desc: Body/M Regular 14px `#718c9e`
- Close: 24px, opacity 65%
- Dots: 8px, aktif `#4199d5`, mati `#dde1e5`, gap 8px
- Button: pill `full`, bg `#4199d5`, teks inverse SemiBold 14px, label **Next**(First/Middle) / **Done**(Last), shadow button
- Arrow: 12×6, via paddingLeft "Arrow Row" (Start 24 / Center 154 / End 284), Up=card di bawah target
- **IMAGE**: toggle di nested `_Coachmark/Content`, default OFF. Match web → ON step 1&3, OFF step 2.
- Varian: Placement(Bottom/Top) × Arrow(Start/Center/End) × Step(First/Middle/Last)

### Scrim `c98545…` (Paperverse 1.0)
- Scrim bg = `color/text/primary` `#133f5d` @ **70%**
- Cutout = boolean subtract (lubang beneran)
- Ring = **2px putih, offset 4px**
- Klik scrim = **no-op** (bukan dismiss)

### Banner `6445:35237` (Mobile)
320w · pad `md×sm`(12×8) · radius `md`(8) · border 1px · gap `sm`(8)
- Title: Body-SemiBold/M 14px · Subtitle: Body/S 12px
- Icon: 20px (per state)
- **Action = ".Icon Only Tertiary - Compact"** (ikon 18px) — udah icon-only, pas buat CTA hemat space
- Varian warna (type=Attention): Warning bg`#fdf9ef` bd`#eab11c` teks`#6e4e00` · Info bg`#f2f7fc` bd`#4199d5` · Success · Danger · Help
- **Hook banner** = base Warning/Attention (amber), warna di-OVERRIDE ke web (sanksi user), action icon = chevron-right (→ Shared)
- **Entry "Keuntungan Penggunaan"** = Banner **Subtle/Informative** `6445:42143`: bg `surface` putih + border `component/button/primary/border` **#4199d5**, title Body-SemiBold/M 14px, subtitle Body/S 12px, action chevron. Tap → replay tur.

### Chips (status) `6404:33129`
radius **4** · pad `xs×2xs`(4×2) · teks Body-SemiBold/S 12/18. Varian: type(Solid/Outline/Subtle) × color(Blue/Light Green/Grey/Red/Orange/Dark Orange).
Mapping status invoice:
| Status | Varian | bg | border/teks |
|---|---|---|---|
| Paid | Solid Light Green | `#97cc56` | teks putih |
| Unpaid | Solid Orange | `#eab11c` | teks putih |
| Terkirim (Sent) | Outline Blue | `#f2f7fc` | `#4199d5` |
| Disetujui (Accepted) | Outline Light Green | `#f7fbf3` | `#97cc56` |
| Ditolak (Rejected) | Outline Red | `#fdf3f5` | `#e35273` |

Token baru kebuka dari context Chips: `semantic/background/grey`=`#f8f9fa` · `light/grey/20`=`#f8f9fa` · `light/blue/20`=`#e8f3fa` · `dark/grey/45`=`#6d7f8d` · `state/warning/icon`=`#f37d51` · `state/warning/bg`=`#fef6f3` · `new/brand/color/orange`=`#f3a632`.

### Empty state `9001:86112` (EEQL6qQCBkANN6OqNiDvSP)
Shared Invoice kosong: ilustrasi folder + judul "Anda belum memiliki Shared Invoice" (SemiBold #133f5d) + subjudul "Belum ada invoice yang dikirimkan oleh Mitra Anda" (secondary). Count "0 Invoice" · Bayar Sekaligus disabled. Ilustrasi = placeholder (asset DS asli belum di-download).

### Node lain (belum di-extract detail, dari screenshot + token)
- Button Tertiary `6078:20854` = text-link: transparan, no border, radius full, pad `lg×sm`(16×8), teks `color/state/active/text-light` **#4199d5** SemiBold 14px, ikon 18px opsional, drop-shadow `0 1px 1px rgba(10,13,18,.05)`. Tipe Button: Primary/Secondary/Destructive/**Tertiary** × IconOnly × State(Default/Hover/Pressed) × Size(Default/Compact) × Disabled.
- Tab bar `6363:11327` · Tab `106:3159`
- Chips `6404:33129`
- Input text `16:672`
- Navbar header `6235:21953`
