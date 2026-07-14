#!/usr/bin/env node
/**
 * make-share-page.mjs — Bikin halaman SHARE per komponen (self-contained).
 *
 * Kenapa file terpisah, bukan mode di hub?
 *   Hub (`index.html`) isinya array COMPONENTS = SEMUA komponen. Kalau share-nya
 *   cuma "mode" di hub, penerima tinggal hapus `/raw` di URL (atau View Source)
 *   dan kelihatan semua komponen. Nyembunyiin UI != nutup akses.
 *   Halaman share ini cuma nyimpen data 1 komponen → komponen lain MUSTAHIL
 *   diakses, karena datanya emang nggak ada di file-nya.
 *
 * Yang ADA di halaman share : nama komponen, tab versi, changelog, draft.
 * Yang NGGAK ada            : sidebar, daftar komponen, search, jalan ke hub.
 *
 * Pakai:
 *   node paper-designer/tools/make-share-page.mjs <slug>     # 1 komponen
 *   node paper-designer/tools/make-share-page.mjs --all      # semua
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const HUB = resolve(__dir, '../../_output/explorer/index.html');
const OUT_DIR = resolve(__dir, '../../_output/explorer/share');

// Token stabil per slug — link nggak berubah tiap regenerate, tapi nggak bisa ditebak.
const SALT = 'paper-explorer-share-v1';
const tokenOf = (slug) => createHash('sha256').update(SALT + ':' + slug).digest('hex').slice(0, 6);

// ── Ambil registry COMPONENTS dari hub (satu-satunya sumber) ──
function readRegistry() {
  const src = readFileSync(HUB, 'utf8');
  const start = src.indexOf('var COMPONENTS = [');
  if (start < 0) throw new Error('COMPONENTS nggak ketemu di hub');
  let i = src.indexOf('[', start), depth = 0, end = -1;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '[') depth++;
    else if (src[j] === ']') { depth--; if (depth === 0) { end = j + 1; break; } }
  }
  if (end < 0) throw new Error('array COMPONENTS nggak nutup');
  return new Function('return ' + src.slice(i, end))();
}

const esc = (s) => String(s).replace(/</g, '&lt;').replace(/>/g, '&gt;');

function page(c) {
  // path draft: file share ada di share/, draft ada di ../<slug>/ → prefix '../'
  const data = JSON.parse(JSON.stringify(c));
  data.platforms.forEach((p) => p.versions.forEach((v) => { v.file = '../' + v.file; }));

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<!-- ══════════════════════════════════════════════════════════════════
     HALAMAN SHARE — ${esc(c.name)}
     DIBUAT OTOMATIS oleh paper-designer/tools/make-share-page.mjs
     JANGAN diedit tangan — nanti ketimpa. Edit registry di hub, lalu regenerate.

     Isinya CUMA komponen ini. Nggak ada sidebar, nggak ada daftar komponen,
     nggak ada jalan ke hub. Penerima bisa lihat SEMUA VERSI komponen ini,
     tapi komponen lain nggak ada datanya di file ini.
     ══════════════════════════════════════════════════════════════════ -->
<title>${esc(c.name)} · Paper.id</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{font-family:'Inter',-apple-system,'Segoe UI',sans-serif;display:flex;flex-direction:column;background:#0f172a;color:#e5e7eb;overflow:hidden}
  .bar{display:flex;align-items:center;gap:12px;padding:9px 16px;background:#0f172a;border-bottom:1px solid rgba(255,255,255,.08);flex:none;flex-wrap:wrap}
  .bar h1{font-size:14px;font-weight:700;color:#fff}
  .bar .status{font-size:11px;color:#64748b}
  .plat,.tabs{display:flex;gap:4px;background:rgba(255,255,255,.06);border-radius:10px;padding:4px}
  .plat button,.tabs button{border:0;background:transparent;color:#94a3b8;font:600 12px 'Inter';padding:6px 13px;border-radius:7px;cursor:pointer;display:flex;align-items:center;gap:5px}
  .plat button:hover,.tabs button:hover{color:#e2e8f0}
  .tabs button.on{background:#2563eb;color:#fff}
  .plat button.on{background:#0b1220;color:#fff}
  .tabs .star{font-size:9px;color:#fbbf24}
  .bar .sp{flex:1}
  .bar-btn{border:1px solid rgba(255,255,255,.16);background:transparent;color:#cbd5e1;font:600 12px 'Inter';padding:7px 11px;border-radius:8px;cursor:pointer}
  .bar-btn:hover{background:rgba(255,255,255,.10);color:#fff}
  .bar-btn.on{background:#7c3aed;border-color:#7c3aed;color:#fff}
  .stage{flex:1;position:relative;background:#f1f5f9;min-height:0}
  iframe{width:100%;height:100%;border:0;display:block}
  .log{position:absolute;top:0;right:0;height:100%;width:320px;max-width:88vw;background:#111827;border-left:1px solid rgba(255,255,255,.08);box-shadow:-8px 0 28px rgba(0,0,0,.4);transform:translateX(340px);transition:transform .2s;overflow:auto;z-index:20}
  .log.open{transform:none}
  .log h2{font-size:13px;font-weight:700;padding:16px 18px 4px;color:#fff}
  .log .sub{font-size:11px;color:#6b7280;padding:0 18px 12px}
  .log-item{padding:12px 18px;border-top:1px solid rgba(255,255,255,.06)}
  .log-item.cur{background:rgba(37,99,235,.10)}
  .log-v{font:700 12px 'Inter';color:#93c5fd;margin-bottom:2px;display:flex;align-items:center;gap:6px}
  .log-v .d{font-weight:500;color:#6b7280;font-size:11px}
  .log-t{font-size:12px;color:#cbd5e1;margin-bottom:7px}
  .log ul{margin:0;padding-left:16px}
  .log li{font-size:12px;line-height:1.5;color:#9ca3af;margin-bottom:3px}
  .log-open-btn{border:0;background:#2563eb;color:#fff;font:600 11px 'Inter';padding:5px 10px;border-radius:6px;cursor:pointer;margin-top:6px}
  @media (max-width:520px){ .bar h1{font-size:13px} .bar .status{display:none} }
</style>
</head>
<body>
  <div class="bar">
    <h1 id="cmp-title"></h1>
    <span class="status" id="cmp-status"></span>
    <div class="plat" id="plat"></div>
    <div class="tabs" id="tabs"></div>
    <span class="sp"></span>
    <button class="bar-btn" id="log-btn">📜 Changelog</button>
  </div>
  <div class="stage">
    <iframe id="frame" title="draft"></iframe>
    <div class="log" id="log"></div>
  </div>

<script>
  /* Data CUMA komponen ini. Komponen lain nggak ada di file ini — bukan disembunyiin,
     tapi emang nggak dikirim. Hapus karakter di URL nggak akan nemu apa-apa. */
  var C = ${JSON.stringify(data)};

  var frame=document.getElementById('frame'), tabs=document.getElementById('tabs'),
      plat=document.getElementById('plat'), log=document.getElementById('log');
  var curPlatKey=null, curV=null;
  function curPlat(){ return C.platforms.find(function(p){return p.key===curPlatKey;}); }

  document.getElementById('cmp-title').textContent=C.name;

  function selectPlatform(key,v){
    curPlatKey=key; var p=curPlat();
    document.getElementById('cmp-status').textContent=p.phase||'';
    plat.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.dataset.k===key);});
    tabs.innerHTML='';
    p.versions.slice().sort(function(a,b){return a.v-b.v;}).forEach(function(ver){
      var b=document.createElement('button'); b.dataset.v=ver.v;
      b.innerHTML='v'+ver.v+(ver.v===p.versions[0].v?' <span class="star">✦</span>':'');
      b.onclick=function(){ showVersion(ver.v); };
      tabs.appendChild(b);
    });
    var exists=(v!=null)&&p.versions.some(function(x){return x.v===v;});
    showVersion(exists?v:p.versions[0].v);
  }
  function showVersion(v){
    curV=v; var p=curPlat(), ver=p.versions.find(function(x){return x.v===v;});
    frame.src=ver.file;
    tabs.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',+b.dataset.v===v);});
    renderLog(); syncHash();
  }
  function renderLog(){
    var p=curPlat();
    log.innerHTML='<h2>Changelog · '+C.name+' '+p.label+'</h2><div class="sub">History iterasi platform ini</div>'+
      p.versions.map(function(ver){
        return '<div class="log-item'+(ver.v===curV?' cur':'')+'">'+
          '<div class="log-v">v'+ver.v+(ver.v===p.versions[0].v?' ✦':'')+' <span class="d">· '+ver.date+'</span></div>'+
          '<div class="log-t">'+ver.title+'</div>'+
          '<ul>'+ver.changes.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>'+
          (ver.v===curV?'':'<button class="log-open-btn" data-v="'+ver.v+'">Lihat v'+ver.v+'</button>')+
        '</div>';
      }).join('');
    log.querySelectorAll('.log-open-btn').forEach(function(b){b.onclick=function(){showVersion(+b.dataset.v);};});
  }
  document.getElementById('log-btn').onclick=function(){log.classList.toggle('open');this.classList.toggle('on');};

  /* Deep-link versi: #v3 (+ platform kalau ada: #mobile/v2) */
  var muteHash=false;
  function syncHash(){
    var h='#'+(C.platforms.length>1?curPlatKey+'/':'')+'v'+curV;
    if(location.hash===h) return;
    muteHash=true; location.hash=h; setTimeout(function(){muteHash=false;},0);
  }
  function applyHash(){
    var parts=location.hash.replace(/^#\\/?/,'').split('/').filter(Boolean);
    var key=null,v=null;
    parts.forEach(function(x){
      if(/^v\\d+$/.test(x)) v=parseInt(x.slice(1),10);
      else if(C.platforms.some(function(p){return p.key===x;})) key=x;
    });
    selectPlatform(key||C.platforms[0].key, v);
  }
  window.addEventListener('hashchange',function(){ if(!muteHash) applyHash(); });

  if(C.platforms.length>1){
    C.platforms.forEach(function(p){
      var b=document.createElement('button'); b.innerHTML=p.label; b.dataset.k=p.key;
      b.onclick=function(){ selectPlatform(p.key); };
      plat.appendChild(b);
    });
  } else { plat.style.display='none'; }

  applyHash();
</script>
</body>
</html>
`;
}

// ── main ──
const arg = process.argv[2];
if (!arg) {
  console.error('Usage: node make-share-page.mjs <slug> | --all');
  process.exit(2);
}

const registry = readRegistry();
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const targets = arg === '--all' ? registry : registry.filter((c) => c.slug === arg);
if (!targets.length) {
  console.error(`Slug "${arg}" nggak ada. Yang tersedia: ${registry.map((c) => c.slug).join(', ')}`);
  process.exit(1);
}

console.log('\n=== HALAMAN SHARE ===');
for (const c of targets) {
  const token = tokenOf(c.slug);
  const name = `${c.slug}-${token}.html`;
  writeFileSync(resolve(OUT_DIR, name), page(c), 'utf8');
  const versions = c.platforms.reduce((a, p) => a + p.versions.length, 0);
  console.log(`  ✅ ${c.name.padEnd(22)} → share/${name}  (${versions} versi)`);
}

// ── Suntik token ke hub, biar tombol "Salin Link" tau URL share-nya ──
// Token semua komponen yang halaman share-nya UDAH ada (bukan cuma yang barusan dibuat).
const known = {};
for (const c of registry) {
  const f = resolve(OUT_DIR, `${c.slug}-${tokenOf(c.slug)}.html`);
  if (existsSync(f)) known[c.slug] = tokenOf(c.slug);
}
const hubSrc = readFileSync(HUB, 'utf8');
const line = /var SHARE_TOKEN=\{[^}]*\};/;
if (!line.test(hubSrc)) {
  console.warn('⚠️  Baris SHARE_TOKEN nggak ketemu di hub — tombol Salin Link nggak akan tau URL-nya.');
} else {
  writeFileSync(HUB, hubSrc.replace(line, 'var SHARE_TOKEN=' + JSON.stringify(known) + ';'), 'utf8');
  console.log(`\n  🔗 Token disuntik ke hub: ${Object.keys(known).join(', ') || '(kosong)'}`);
}

console.log(`\nLink share = <base>/explorer/share/<file>  ·  versi tertentu: tambahin #v2\n` +
            `Isinya cuma komponen itu — komponen lain nggak ada datanya di file.\n`);
