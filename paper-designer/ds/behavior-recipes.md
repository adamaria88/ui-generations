# Aurora Behavior Recipes

> **Kenapa file ini ada:** Figma = FOTO statis, ga simpan behavior (hover/active/disabled/focus, expand/collapse, transition timing). Behavior didefinisikan di **Aurora source** (`*.component.scss` = state styles, `*.component.ts` = logic, `*.stories.ts`/`*.mdx` = dokumentasi). File ini = ekstrak sekali → reusable, biar ga baca SCSS berulang tiap bikin prototype.
>
> **Hierarki sumber:** Figma (look) → Aurora SCSS/TS/stories (behavior+state) → konvensi web/Jakob's law (sisanya) → kalau ketiganya buntu, lapor user, JANGAN ngarang behavior.
>
> Pelengkap [[aurora-lookup-ritual]] (yang itu buat nilai statis; ini buat behavior). Sumber: `/Users/working/aurora/projects/ui/<komponen>/`.

---

## Motion tokens (design-tokens)

| Token | Value |
|---|---|
| `--speed-normal` | 300ms |
| `--speed-slow` | 400ms |
| `--speed-extra-slow` | 500ms |
| `--ease-out-relax` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--ease-out-strong` | `cubic-bezier(0.16, 0.84, 0.44, 1)` |

---

## Button — `button/button.component.scss`

**Transition:** `background 400ms cubic-bezier(0.25,0.46,0.45,0.94), color 500ms cubic-bezier(0.25,0.46,0.45,0.94)`

| Variant | base bg | hover bg | active/pressed bg | fg |
|---|---|---|---|---|
| **primary** | `#4199d5` (light-brand-50) | `#89bde5` (light-brand-40) | `#3385b5` (light-brand-60) | `#fff` |
| **secondary** | `#fff` | `#fbfbfc` (light-grey-15) | `#f8f9fa` (light-grey-20) | `#3c5467` (dark-grey-50)* |
| **tertiary** | transparent | `#f2f7fc` (light-brand-15) | `#d1e6f5` (light-brand-25) | `#4199d5` (light-brand-50) |
| **destructive** | `#e35273` (light-red-50) | `#df3b62`-ish (light-red-40) | light-red-60 | `#fff` |

- **disabled:** bg `--color-action-disabled-bg`, fg `--color-dark-grey-30`, `cursor:default`, shadow tetap.
- **focus:** (bukan di SCSS button — pakai focus-ring umum) outline 2px `--color-focus-ring`.
- \*fg secondary: Aurora SCSS = `#3c5467`, tapi sebagian Figma override ke `#133f5d` (text-primary) — ikut node kalau beda.

```css
.btn{transition:background 400ms cubic-bezier(0.25,0.46,0.45,0.94),color 500ms cubic-bezier(0.25,0.46,0.45,0.94);}
.btn.primary:hover{background:#89bde5;} .btn.primary:active{background:#3385b5;}
.btn.secondary:hover{background:#fbfbfc;} .btn.secondary:active{background:#f8f9fa;}
.btn.tertiary:hover{background:#f2f7fc;} .btn.tertiary:active{background:#d1e6f5;}
```

---

## Accordion — `accordion/accordion.component.scss` + `.ts`

- **Toggle:** `[(expanded)]` model — klik header → toggle expanded. Header `cursor:pointer`.
- **Chevron:** `transition: transform 300ms ease-out-relax`; aktif → `transform: rotate(180deg)`.
- **Content height:** `transition: height 500ms ease-out-strong` (cubic-bezier(0.16,0.84,0.44,1)).
- **Content opacity:** `0 → 1`, `transition: opacity 300ms ease-out-relax` (opacityDelay default 200ms).
- **Content padding:** `0 16px 16px 16px` (0 lg lg lg).
- **Header focus-visible:** outline 2px `--color-focus-ring`, offset -2px.
- **disabled header:** bg `--color-action-disabled-bg`, fg disabled, `cursor:not-allowed`.

```css
.acc-chev{transition:transform 300ms cubic-bezier(0.25,0.46,0.45,0.94);}
.acc-item.open .acc-chev{transform:rotate(180deg);}
.acc-content{max-height:0;overflow:hidden;opacity:0;transition:max-height 500ms cubic-bezier(0.16,0.84,0.44,1),opacity 300ms cubic-bezier(0.25,0.46,0.45,0.94);}
.acc-item.open .acc-content{opacity:1;}
```
```js
function toggleAcc(btn){var i=btn.closest('.acc-item'),c=i.querySelector('.acc-content');
  if(i.classList.contains('open')){c.style.maxHeight='0';i.classList.remove('open');}
  else{i.classList.add('open');c.style.maxHeight=c.scrollHeight+'px';}}
```

> ⚠️ Konten jawaban accordion (FAQ) sering **ga ada di node Figma** (cuma collapsed state) — JANGAN ngarang jawaban; pakai placeholder + lapor (S5).

---

## Cara nambah recipe baru

Tiap ketemu komponen interaktif baru (tab, dropdown, toggle, dialog):
1. Baca `<komponen>/<komponen>.component.scss` → state styles (`:hover`, `:active`, `:disabled`, `:focus-visible`) + transition.
2. Baca `.ts` → logic interaksi (kalau ada).
3. Cek `.stories.ts`/`.mdx` → dokumentasi cara pakai.
4. Tulis 1 section di file ini (tabel state + snippet CSS/JS).
5. Tervalidasi tervalidasi di prototype → tandai.

**Tervalidasi:** Button + Accordion → `_output/invoice-list/index.html` (2026-06-12).
