#!/usr/bin/env python3
"""icon-size-audit.py — pengecek MEKANIS ukuran ikon buat HTML hasil mirror.

Verifier KE-3 di pipeline mirror:
  1. pixel-diff / heatmap  → layout & warna (full-page)
  2. behavior-audit.py     → interaksi (hover/klik/focus)
  3. icon-size-audit.py    → UKURAN ikon  ← ini

Kenapa perlu: aset ikon dari Figma itu TIGHT-CROP (viewBox = ukuran art, bukan
full-bleed). Rule generik `img{width:100%;height:100%;object-fit:contain}` maksa
ikon penuhin container → tight-crop icon ke-scale-up ngelewatin ukuran natural-nya
("gede bgt"). Beda ~6px di ikon kecil = di bawah noise-floor diff full-page +
behavior-audit buta ukuran → KELEWAT. Ini blind-spot UKURAN (S14).

Cara: render via Chrome headless (--dump-dom), ukur getBoundingClientRect tiap
<img *.svg>, bandingin lawan viewBox aset. object-fit:contain → skala render =
min(rw, rh). Skala > ambang (default 1.15) = ke-scale-up → FLAG.

Pakai:  python3 icon-size-audit.py <file.html> [--max 1.15]
Exit:   0 = semua proporsional · 1 = ada ikon ke-scale-up · 2 = gagal ukur
"""
import sys, os, re, json, subprocess, tempfile

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
THRESH = 1.15

INJECT = (
    "<script>window.addEventListener('load',function(){setTimeout(function(){"
    "var o=[];document.querySelectorAll('img').forEach(function(im){"
    "var r=im.getBoundingClientRect();"
    "o.push({src:im.getAttribute('src'),w:Math.round(r.width*1000)/1000,h:Math.round(r.height*1000)/1000});});"
    "var d=document.createElement('div');d.id='__ICON_AUDIT__';d.textContent=JSON.stringify(o);"
    "document.body.appendChild(d);},80);});</script>"
)

def viewbox(svg_path):
    try:
        t = open(svg_path, encoding='utf-8', errors='ignore').read(4000)
    except OSError:
        return None
    m = re.search(r'viewBox\s*=\s*"[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)"', t)
    if m:
        return float(m.group(1)), float(m.group(2))
    # fallback: explicit px width/height (bukan 100%)
    w = re.search(r'\bwidth\s*=\s*"([\d.]+)(?:px)?"', t)
    h = re.search(r'\bheight\s*=\s*"([\d.]+)(?:px)?"', t)
    if w and h:
        return float(w.group(1)), float(h.group(1))
    return None

def measure(html_path):
    html = open(html_path, encoding='utf-8').read()
    inj = html.replace('</body>', INJECT + '</body>', 1) if '</body>' in html else html + INJECT
    d = os.path.dirname(os.path.abspath(html_path))
    fd, tmp = tempfile.mkstemp(suffix='.html', dir=d)   # same dir → path aset relatif resolve
    os.write(fd, inj.encode('utf-8')); os.close(fd)
    try:
        out = subprocess.run(
            [CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars',
             '--virtual-time-budget=4000', '--dump-dom', 'file://' + tmp],
            capture_output=True, text=True, timeout=90).stdout
    finally:
        os.unlink(tmp)
    m = re.search(r'id="__ICON_AUDIT__">(.*?)</div>', out, re.S)
    if not m:
        print('GAGAL ukur — Chrome --dump-dom ga balikin marker. Cek path CHROME / render.', file=sys.stderr)
        sys.exit(2)
    txt = m.group(1).replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
    return json.loads(txt), d

def main():
    if len(sys.argv) < 2:
        print('pakai: python3 icon-size-audit.py <file.html> [--max 1.15]'); sys.exit(2)
    path = sys.argv[1]
    thr = float(sys.argv[sys.argv.index('--max') + 1]) if '--max' in sys.argv else THRESH

    meas, base = measure(path)
    seen, rows = set(), []
    for it in meas:
        src = it.get('src') or ''
        if not src.lower().endswith('.svg'):
            continue
        w, h = it['w'], it['h']
        key = (src, round(w, 1), round(h, 1))
        if key in seen:
            continue
        seen.add(key)
        vb = viewbox(os.path.join(base, src))
        if not vb or w <= 0 or h <= 0:
            rows.append((src, w, h, vb, None, vb is None and 'viewBox? ' or 'ukuran 0'))
            continue
        vbw, vbh = vb
        scale = min(w / vbw, h / vbh)          # object-fit:contain → skala = min ratio
        bad = scale > thr
        rows.append((src, w, h, (vbw, vbh), scale, bad))

    flagged = [r for r in rows if r[5] is True]
    name = os.path.basename(path)
    print(f'\nICON-SIZE AUDIT — {name}  (ambang scale > {thr})')
    print('=' * 70)
    print(f'  {"":3}{"aset":26}{"render":>13}{"viewBox":>13}{"scale":>8}')
    for src, w, h, vb, scale, bad in rows:
        tag = 'XX ' if bad is True else ('?? ' if bad not in (True, False) else 'OK ')
        vbs = f'{vb[0]:g}x{vb[1]:g}' if vb else '—'
        sc = f'{scale:.2f}x' if isinstance(scale, float) else '—'
        note = f'  ← ke-scale-up {sc}, harusnya ~1.0 (tight-crop dipaksa fill?)' if bad is True else ''
        print(f'  {tag}{os.path.basename(src):26}{w:6.1f}x{h:<5.1f}{vbs:>13}{sc:>8}{note}')
    print('-' * 70)
    print(f'  {len(rows)} ikon svg · {len(rows)-len(flagged)} proporsional · {len(flagged)} KE-SCALE-UP'
          + ('  → BLOK (inset ke ukuran natural, S14)' if flagged else '  → LULUS'))
    sys.exit(1 if flagged else 0)

if __name__ == '__main__':
    main()
