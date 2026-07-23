/* ══════════════════════════════════════════════════════════════════════
   DURASI PANEL — CTA + panel "berapa lama bikinnya"
   Dipakai bareng 2 hub: _output/index.html (generate UI) & _output/explorer/index.html (komponen).

   Cara pasang di hub:
     <script src="_data/durasi.js"></script>          ← database (generated)
     <script src="_data/durasi-panel.js"></script>    ← file ini
     <script>
       DurasiPanel.init({
         jenis  : 'ui',                      // 'ui' | 'komponen'
         mount  : document.getElementById('bar'),   // tempat tombol CTA nempel
         btnClass:'btn',                     // class tombol biar nyatu sama hub-nya
         getSlug: () => GENERATIONS[curG].slug      // item yang lagi kebuka
       });
     </script>

   Angka DB = read-only dari file. Panel bisa dipakai buat ISI durasi (draft
   lokal, disimpan di localStorage) → tombol "Salin JSON DB" → paste ke
   paper-designer/data/durasi.json → `node paper-designer/tools/durasi.mjs build`.
   ══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var KEY = 'paper-durasi-draft-v1';
  var cfg = null, root = null, tab = 'item', edit = false;

  /* ── gerbang sandi ───────────────────────────────────────────────────
     Panel cuma kebuka kalau sandinya bener. Sekali bener, kebuka terus
     selama tab ini masih idup (sessionStorage) — tutup tab = kunci lagi.

     ⚠️ Ini GERBANG, bukan pengaman beneran: sandinya ada di file JS ini,
     siapa pun yang buka View Source bisa lihat. Fungsinya nyegah orang
     iseng yang lewat, bukan nyimpen rahasia. */
  var SANDI = '11530';
  var KEY_BUKA = 'paper-durasi-buka-v1';
  var kebuka = false;
  function cekBuka() {
    if (kebuka) return true;
    try { kebuka = sessionStorage.getItem(KEY_BUKA) === '1'; } catch (e) {}
    return kebuka;
  }
  function setBuka(v) {
    kebuka = v;
    try { v ? sessionStorage.setItem(KEY_BUKA, '1') : sessionStorage.removeItem(KEY_BUKA); } catch (e) {}
  }

  /* ── data ────────────────────────────────────────────────────────── */
  function db() { return window.DURASI || null; }

  /* Draft isian manual. Normalnya di localStorage; kalau browser nolak
     (mis. dibuka dari file:// dengan origin opaque) jatuh ke memori —
     tetap kepakai selama tab kebuka, tinggal "Salin JSON DB" sebelum nutup. */
  var mem = {}, adaLS = null;
  function ls() {
    if (adaLS === null) {
      try { localStorage.setItem(KEY + '-cek', '1'); localStorage.removeItem(KEY + '-cek'); adaLS = true; }
      catch (e) { adaLS = false; }
    }
    return adaLS;
  }
  function draft() {
    if (!ls()) return mem;
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return mem; }
  }
  function simpanDraft(d) {
    mem = d;
    if (ls()) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  }
  function buangDraft() {
    mem = {};
    if (ls()) { try { localStorage.removeItem(KEY); } catch (e) {} }
  }
  function dk(jenis, slug, fase) { return jenis + '/' + slug + '/' + fase; }

  function item(jenis, slug) {
    var d = db(); if (!d) return null;
    for (var i = 0; i < d.item.length; i++)
      if (d.item[i].jenis === jenis && d.item[i].slug === slug) return d.item[i];
    return null;
  }
  /* menit fase = draft lokal kalau ada, kalau nggak dari DB */
  function menitFase(it, fase) {
    var dr = draft()[dk(it.jenis, it.slug, fase)];
    if (dr !== undefined) return dr === null ? null : dr;
    var f = (it.fase || {})[fase];
    return f && typeof f.menit === 'number' ? f.menit : null;
  }
  function adaDraft(it, fase) { return draft()[dk(it.jenis, it.slug, fase)] !== undefined; }
  function totalItem(it) {
    var d = db(), tot = null;
    (d.fase[it.jenis] || []).forEach(function (f) {
      var m = menitFase(it, f.no);
      if (m != null) tot = (tot || 0) + m;
    });
    return tot;
  }

  /* ── format ──────────────────────────────────────────────────────── */
  function fmt(m) {
    if (m == null) return '—';
    m = Math.round(m);
    if (m < 60) return m + 'm';
    var j = Math.floor(m / 60), s = m % 60;
    return s ? j + 'j ' + s + 'm' : j + 'j';
  }
  /* "1j30" · "1j 30m" · "45m" · "1.5j" · "90" → menit */
  function parseMenit(raw) {
    var t = String(raw).trim().toLowerCase().replace(/\s+/g, '');
    if (t === '' || t === '-' || t === '—') return null;
    if (/^\d+(\.\d+)?$/.test(t)) return Math.round(parseFloat(t));
    var m = t.match(/^(?:(\d+(?:\.\d+)?)j)?(?:(\d+)m?)?$/);
    if (!m || (!m[1] && !m[2])) return undefined;   // undefined = nggak kebaca
    return Math.round((parseFloat(m[1] || 0) * 60) + parseInt(m[2] || 0, 10));
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ── style (sekali) ──────────────────────────────────────────────── */
  var CSS = ''
    + '.dz-scrim{position:fixed;inset:0;background:rgba(20,22,25,.42);z-index:9998;display:none;'
    + 'align-items:center;justify-content:center;padding:24px;font-family:"Lato",-apple-system,"Segoe UI",sans-serif}'
    + '.dz-scrim.on{display:flex}'
    + '.dz-card{background:#FCFCFB;color:#1F2328;border:1px solid rgba(0,0,0,.16);border-radius:14px;'
    + 'width:min(720px,100%);max-height:88vh;display:flex;flex-direction:column;'
    + 'box-shadow:0 1px 2px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.12)}'
    + '.dz-h{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid rgba(0,0,0,.08)}'
    + '.dz-h h3{font:900 14px/1.2 "Lato";margin:0}'
    + '.dz-h .dz-sub{font:400 11px "Lato";color:#A3A39B;margin-top:2px}'
    + '.dz-sp{flex:1}'
    + '.dz-tabs{display:flex;gap:4px;padding:10px 16px 0}'
    + '.dz-tab{border:0;background:transparent;font:700 12px "Lato";color:#6E6E68;padding:6px 10px;'
    + 'border-radius:8px 8px 0 0;cursor:pointer;border-bottom:2px solid transparent}'
    + '.dz-tab:hover{color:#1F2328}'
    + '.dz-tab.on{color:#1F2328;border-bottom-color:#1F2328}'
    + '.dz-body{overflow:auto;padding:12px 16px 16px}'
    + '.dz-tbl{width:100%;border-collapse:collapse;font:400 12.5px "Lato"}'
    + '.dz-tbl th{font:700 10px "Lato";letter-spacing:.08em;text-transform:uppercase;color:#A3A39B;'
    + 'text-align:left;padding:6px 8px;border-bottom:1px solid rgba(0,0,0,.08)}'
    + '.dz-tbl td{padding:8px;border-bottom:1px solid rgba(0,0,0,.06);vertical-align:middle}'
    + '.dz-tbl tr:last-child td{border-bottom:0}'
    + '.dz-no{font:700 10.5px "Lato";color:#A3A39B;width:38px}'
    + '.dz-nm{font-weight:700;color:#1F2328}'
    + '.dz-nm small{display:block;font:400 11px "Lato";color:#A3A39B;margin-top:1px}'
    + '.dz-dur{text-align:right;white-space:nowrap;font-weight:700;width:96px}'
    + '.dz-dur.kosong{color:#C4C4BC;font-weight:400}'
    + '.dz-cat{color:#6E6E68;font-size:11.5px}'
    + '.dz-opt{font:700 9px "Lato";letter-spacing:.04em;text-transform:uppercase;padding:1.5px 5px;'
    + 'border-radius:4px;background:#EDECE6;color:#8A8A82;margin-left:6px}'
    + '.dz-drf{font:700 9px "Lato";letter-spacing:.04em;text-transform:uppercase;padding:1.5px 5px;'
    + 'border-radius:4px;background:#FBF3E4;color:#8A6D1F;margin-left:6px}'
    + '.dz-tot{display:flex;align-items:baseline;gap:10px;margin-top:14px;padding:12px 14px;'
    + 'background:#F4F4F2;border:1px solid rgba(0,0,0,.08);border-radius:10px}'
    + '.dz-tot span{font:700 11px "Lato";letter-spacing:.06em;text-transform:uppercase;color:#6E6E68}'
    + '.dz-tot b{font:900 22px "Lato";margin-left:auto}'
    + '.dz-tot b.kosong{font-size:14px;font-weight:400;color:#A3A39B}'
    + '.dz-inp{width:88px;border:1px solid rgba(0,0,0,.16);border-radius:6px;background:#fff;'
    + 'padding:5px 7px;font:700 12.5px "Lato";text-align:right;color:#1F2328;outline:none}'
    + '.dz-inp:focus{border-color:#1F2328}'
    + '.dz-inp.bad{border-color:#A33A2E;background:#F8E7E4}'
    + '.dz-f{display:flex;align-items:center;gap:8px;padding:11px 16px;border-top:1px solid rgba(0,0,0,.08);flex-wrap:wrap}'
    + '.dz-b{border:1px solid rgba(0,0,0,.16);background:transparent;color:#6E6E68;font:600 12px "Lato";'
    + 'padding:6px 10px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:6px}'
    + '.dz-b:hover{background:#EDEDE9;color:#1F2328}'
    + '.dz-b.pri{background:#1F2328;border-color:#1F2328;color:#fff}'
    + '.dz-b.pri:hover{background:#33383E;color:#fff}'
    + '.dz-b svg{width:14px;height:14px;flex:none}'
    + '.dz-hint{font:400 11px/1.5 "Lato";color:#A3A39B;padding:0 16px 14px}'
    + '.dz-hint code{background:#EDECE6;border-radius:4px;padding:1px 5px;font-size:10.5px}'
    + '.dz-grup{font:700 10px "Lato";letter-spacing:.08em;text-transform:uppercase;color:#A3A39B;'
    + 'padding:14px 8px 4px}'
    + '.dz-grup:first-child{padding-top:2px}'
    + '.dz-kosong{padding:26px 8px;text-align:center;font:400 12.5px/1.6 "Lato";color:#A3A39B}'
    /* gerbang sandi */
    + '.dz-gate{padding:30px 8px 26px;text-align:center}'
    + '.dz-gate svg{width:26px;height:26px;color:#A3A39B}'
    + '.dz-gate h4{font:900 14px "Lato";margin:10px 0 3px;color:#1F2328}'
    + '.dz-gate p{font:400 12px/1.55 "Lato";color:#A3A39B;margin:0 auto 16px;max-width:300px}'
    + '.dz-gate form{display:flex;gap:8px;justify-content:center;align-items:center}'
    + '.dz-sandi{width:150px;border:1px solid rgba(0,0,0,.16);border-radius:8px;background:#fff;'
    + 'padding:9px 11px;font:700 15px "Lato";letter-spacing:.22em;text-align:center;color:#1F2328;outline:none}'
    + '.dz-sandi:focus{border-color:#1F2328}'
    + '.dz-sandi.bad{border-color:#A33A2E;background:#F8E7E4;animation:dz-goyang .3s}'
    + '@keyframes dz-goyang{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}'
    + '.dz-err{font:700 11.5px "Lato";color:#A33A2E;margin-top:11px;min-height:15px}';

  var ICO_JAM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '
    + 'stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>';
  var ICO_GEMBOK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '
    + 'stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/>'
    + '<path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';

  /* ── render ──────────────────────────────────────────────────────── */
  function daftarFase(jenis) { return (db().fase[jenis] || []); }

  function barisItem(it) {
    var html = '<table class="dz-tbl"><thead><tr>'
      + '<th>Fase</th><th></th><th style="text-align:right">Durasi</th></tr></thead><tbody>';
    daftarFase(it.jenis).forEach(function (f) {
      var m = menitFase(it, f.no);
      var d = (it.fase || {})[f.no] || {};
      html += '<tr>'
        + '<td class="dz-no">' + esc(f.no) + '</td>'
        + '<td class="dz-nm">' + esc(f.nama)
        + (f.opsional ? '<span class="dz-opt">opsional</span>' : '')
        + (adaDraft(it, f.no) ? '<span class="dz-drf">draft</span>' : '')
        + (d.catatan ? '<small>' + esc(d.catatan) + '</small>' : '')
        + '</td>'
        + '<td class="dz-dur' + (m == null ? ' kosong' : '') + '">'
        + (edit
            ? '<input class="dz-inp" data-fase="' + esc(f.no) + '" value="' + (m == null ? '' : fmt(m)) + '" placeholder="—">'
            : fmt(m))
        + '</td></tr>';
    });
    var tot = totalItem(it);
    html += '</tbody></table>'
      + '<div class="dz-tot"><span>Total ' + esc(it.nama) + '</span>'
      + '<b class="' + (tot == null ? 'kosong' : '') + '">' + (tot == null ? 'belum dicatat' : fmt(tot)) + '</b></div>';
    return html;
  }

  function barisSemua() {
    var d = db(), html = '', grand = null;
    [['komponen', 'Komponen'], ['ui', 'Generate UI']].forEach(function (g) {
      var grup = d.item.filter(function (i) { return i.jenis === g[0]; });
      if (!grup.length) return;
      html += '<div class="dz-grup">' + g[1] + '</div><table class="dz-tbl"><tbody>';
      grup.forEach(function (it) {
        var t = totalItem(it);
        if (t != null) grand = (grand || 0) + t;
        var isi = daftarFase(it.jenis).filter(function (f) { return menitFase(it, f.no) != null; }).length;
        html += '<tr><td class="dz-nm">' + esc(it.nama)
          + '<small>' + (isi ? isi + ' dari ' + daftarFase(it.jenis).length + ' fase dicatat' : 'belum ada fase yang dicatat') + '</small></td>'
          + '<td class="dz-dur' + (t == null ? ' kosong' : '') + '">' + fmt(t) + '</td></tr>';
      });
      html += '</tbody></table>';
    });
    html += '<div class="dz-tot"><span>Total semua</span><b class="' + (grand == null ? 'kosong' : '') + '">'
      + (grand == null ? 'belum dicatat' : fmt(grand)) + '</b></div>';
    return html;
  }

  /* layar sandi — nutup semua isi panel selama belum kebuka */
  function gerbang() {
    root.querySelector('.dz-tabs').style.display = 'none';
    root.querySelector('.dz-f').style.display = 'none';
    root.querySelector('.dz-hint').style.display = 'none';
    root.querySelector('.dz-sub').textContent = 'Terkunci';
    root.querySelector('.dz-body').innerHTML =
      '<div class="dz-gate">' + ICO_GEMBOK
      + '<h4>Masukin sandi</h4>'
      + '<p>Catatan durasi cuma buat tim desain.</p>'
      + '<form><input class="dz-sandi" type="password" inputmode="numeric" autocomplete="off" '
      + 'placeholder="•••••" aria-label="Sandi"><button type="submit" class="dz-b pri"><span>Buka</span></button></form>'
      + '<div class="dz-err"></div></div>';

    var inp = root.querySelector('.dz-sandi');
    var err = root.querySelector('.dz-err');
    root.querySelector('.dz-gate form').onsubmit = function (e) {
      e.preventDefault();
      if (inp.value.trim() === SANDI) { setBuka(true); err.textContent = ''; render(); return; }
      inp.classList.remove('bad'); void inp.offsetWidth; inp.classList.add('bad');
      err.textContent = 'Sandi salah, coba lagi.';
      inp.select();
    };
    inp.oninput = function () { inp.classList.remove('bad'); err.textContent = ''; };
    setTimeout(function () { inp.focus(); }, 30);
  }

  function render() {
    if (!root) return;
    if (!cekBuka()) return gerbang();

    root.querySelector('.dz-tabs').style.display = '';
    root.querySelector('.dz-f').style.display = '';
    root.querySelector('.dz-hint').style.display = '';

    var d = db();
    var body = root.querySelector('.dz-body');
    var sub  = root.querySelector('.dz-sub');
    var it   = null;

    if (!d) {
      body.innerHTML = '<div class="dz-kosong">Database durasi belum ke-load.<br>'
        + 'Jalanin <code>node paper-designer/tools/durasi.mjs build</code> dulu.</div>';
      return;
    }
    var slug = cfg.getSlug ? cfg.getSlug() : null;
    if (slug) it = item(cfg.jenis, slug);

    if (!it && tab === 'item') tab = 'semua';   // item nggak kedaftar di DB → langsung tab Semua
    root.querySelectorAll('.dz-tab').forEach(function (b) { b.classList.toggle('on', b.dataset.tab === tab); });
    root.querySelector('[data-tab="item"]').style.display = it ? '' : 'none';

    if (tab === 'item' && it) {
      sub.textContent = 'Per fase · ' + (cfg.jenis === 'ui' ? 'alur 6 step' : 'pipeline component-explorer');
      body.innerHTML = barisItem(it);
    } else {
      sub.textContent = 'Semua komponen & generate UI';
      body.innerHTML = barisSemua();
    }

    var bEdit = root.querySelector('.dz-edit');
    bEdit.style.display = (tab === 'item' && it) ? '' : 'none';
    bEdit.classList.toggle('pri', edit);
    bEdit.lastChild.textContent = edit ? ' Selesai isi' : ' Isi durasi';
    root.querySelector('.dz-salin').style.display = Object.keys(draft()).length ? '' : 'none';
    root.querySelector('.dz-buang').style.display = Object.keys(draft()).length ? '' : 'none';

    if (edit && it) pasangInput(it);
  }

  function pasangInput(it) {
    root.querySelectorAll('.dz-inp').forEach(function (inp) {
      inp.addEventListener('change', function () {
        var m = parseMenit(inp.value);
        if (m === undefined) { inp.classList.add('bad'); return; }
        inp.classList.remove('bad');
        var dr = draft();
        var k = dk(it.jenis, it.slug, inp.dataset.fase);
        var asli = ((it.fase || {})[inp.dataset.fase] || {}).menit;
        if (m === (typeof asli === 'number' ? asli : null)) delete dr[k]; else dr[k] = m;
        simpanDraft(dr);
        render();
      });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') inp.blur(); });
    });
  }

  /* draft + DB → JSON siap paste ke paper-designer/data/durasi.json */
  function jsonGabung() {
    var d = JSON.parse(JSON.stringify(db()));
    var dr = draft();
    Object.keys(dr).forEach(function (k) {
      var p = k.split('/'), jenis = p[0], slug = p[1], fase = p[2];
      var it = null;
      for (var i = 0; i < d.item.length; i++)
        if (d.item[i].jenis === jenis && d.item[i].slug === slug) it = d.item[i];
      if (!it) return;
      it.fase = it.fase || {};
      if (dr[k] == null) { delete it.fase[fase]; return; }
      var lama = it.fase[fase] || {};
      it.fase[fase] = {
        menit: dr[k],
        catatan: lama.catatan || '',
        sesi: lama.sesi || [],
        terakhir: new Date().toISOString().slice(0, 10)
      };
    });
    d.diperbarui = new Date().toISOString().slice(0, 10);
    return JSON.stringify(d, null, 2) + '\n';
  }

  function salin(teks, tombol) {
    var ok = function () {
      var t = tombol.lastChild.textContent; tombol.lastChild.textContent = ' Tersalin ✓';
      setTimeout(function () { tombol.lastChild.textContent = t; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(teks).then(ok, function () { fallback(teks); ok(); });
    } else { fallback(teks); ok(); }
  }
  function fallback(teks) {
    var ta = document.createElement('textarea');
    ta.value = teks; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ── bikin DOM ───────────────────────────────────────────────────── */
  function bikinPanel() {
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    root = document.createElement('div');
    root.className = 'dz-scrim';
    root.innerHTML =
      '<div class="dz-card" role="dialog" aria-label="Durasi pembuatan">'
      + '<div class="dz-h"><div><h3>Durasi pembuatan</h3><div class="dz-sub"></div></div>'
      + '<span class="dz-sp"></span>'
      + '<button class="dz-b dz-tutup">Tutup</button></div>'
      + '<div class="dz-tabs">'
      + '<button class="dz-tab on" data-tab="item">Item ini</button>'
      + '<button class="dz-tab" data-tab="semua">Semua</button></div>'
      + '<div class="dz-body"></div>'
      + '<div class="dz-f">'
      + '<button class="dz-b dz-edit">' + ICO_JAM + '<span> Isi durasi</span></button>'
      + '<button class="dz-b dz-salin" style="display:none"><span> Salin JSON DB</span></button>'
      + '<button class="dz-b dz-buang" style="display:none"><span> Buang draft</span></button>'
      + '<span class="dz-sp"></span>'
      + '<button class="dz-b dz-kunci" title="Kunci lagi, minta sandi pas dibuka">' + ICO_GEMBOK + '<span> Kunci</span></button>'
      + '</div>'
      + '<div class="dz-hint">Timer: <code>durasi.mjs mulai ' + esc(cfg.jenis) + ' &lt;slug&gt; &lt;fase&gt;</code> → '
      + '<code>durasi.mjs stop</code>. Isi manual dari panel ini kesimpen lokal dulu — '
      + 'klik <b>Salin JSON DB</b>, paste ke <code>paper-designer/data/durasi.json</code>, '
      + 'lalu <code>durasi.mjs build</code> biar kebagi ke semua designer.</div>'
      + '</div>';
    document.body.appendChild(root);

    root.addEventListener('click', function (e) { if (e.target === root) tutup(); });
    root.querySelector('.dz-tutup').onclick = tutup;
    root.querySelectorAll('.dz-tab').forEach(function (b) {
      b.onclick = function () { tab = b.dataset.tab; if (tab !== 'item') edit = false; render(); };
    });
    root.querySelector('.dz-edit').onclick = function () { edit = !edit; render(); };
    root.querySelector('.dz-kunci').onclick = function () { setBuka(false); edit = false; render(); };
    root.querySelector('.dz-salin').onclick = function () { salin(jsonGabung(), this); };
    root.querySelector('.dz-buang').onclick = function () {
      if (!confirm('Buang semua isian draft yang belum disalin ke DB?')) return;
      buangDraft(); render();
    };
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('on')) tutup();
    });
  }

  function buka() { tab = 'item'; edit = false; root.classList.add('on'); render(); }
  function tutup() { root.classList.remove('on'); }

  /* ── API ─────────────────────────────────────────────────────────── */
  window.DurasiPanel = {
    init: function (opsi) {
      cfg = opsi || {};
      bikinPanel();
      if (cfg.mount) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = cfg.btnClass || 'dz-b';
        b.title = 'Durasi pembuatan — per fase + total (perlu sandi)';
        b.innerHTML = ICO_JAM + '<span class="' + (cfg.lblClass || '') + '">' + (cfg.label || 'Durasi') + '</span>';
        b.onclick = buka;
        if (cfg.before && cfg.before.parentNode) cfg.mount.insertBefore(b, cfg.before);
        else cfg.mount.appendChild(b);
      }
      return { buka: buka, tutup: tutup };
    },
    buka: function () { buka(); }
  };
})();
