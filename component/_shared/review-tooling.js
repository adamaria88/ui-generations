/* ══════════════════════════════════════════════════════════════════
   REVIEW TOOLING (komen) — standar Component Explorer, dipakai semua
   playground mobile Paperverse. Klik = pin titik · drag = pilih area.
   Submit → salin [REVIEW] ke chat. Toggle mode: tombol Komen atau tekan C.
   ══════════════════════════════════════════════════════════════════ */
(function(){
  var COMPONENT = document.body.getAttribute('data-component') || 'Component';
  var KEY='expl:'+location.pathname, notes=[];
  try{ notes=JSON.parse(localStorage.getItem(KEY)||'[]'); if(!Array.isArray(notes)) notes=[]; }catch(e){ notes=[]; }
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify(notes)); }catch(e){} }
  var commentMode=false, body=document.body, commentBtn=document.getElementById('expl-comment-btn');
  if(!commentBtn) return;
  function toast(m){ var t=document.querySelector('.expl-toast'); if(!t){t=document.createElement('div');t.className='expl-toast';document.body.appendChild(t);} t.textContent=m; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(function(){t.classList.remove('show');},2200); }
  function copy(txt,ok){ if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(function(){toast(ok);},fb);}else fb(); function fb(){var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');toast(ok);}catch(e){}ta.remove();} }
  function setComment(v){ commentMode=v; body.classList.toggle('expl-comment',v); commentBtn.classList.toggle('on',v); toast(v?'Mode komen ON — klik area komponen':'Mode komen OFF'); }
  commentBtn.onclick=function(){ setComment(!commentMode); };
  document.addEventListener('keydown',function(e){ if((e.key==='c'||e.key==='C')&&document.activeElement.tagName!=='TEXTAREA'&&document.activeElement.tagName!=='INPUT') setComment(!commentMode); });
  document.querySelectorAll('.expl-canvas').forEach(function(canvas){
    canvas.addEventListener('mousedown',function(e){
      if(!commentMode||e.button) return; if(e.target.closest('.expl-pin,.expl-area')) return; e.preventDefault();
      var r=canvas.getBoundingClientRect(), sx=e.clientX-r.left, sy=e.clientY-r.top;
      var sel=document.createElement('div'); sel.className='expl-sel'; canvas.appendChild(sel); var moved=false;
      function mm(ev){var x=ev.clientX-r.left,y=ev.clientY-r.top,l=Math.min(x,sx),t=Math.min(y,sy),w=Math.abs(x-sx),h=Math.abs(y-sy);if(w>3||h>3)moved=true;sel.style.left=l+'px';sel.style.top=t+'px';sel.style.width=w+'px';sel.style.height=h+'px';}
      function mu(ev){document.removeEventListener('mousemove',mm);document.removeEventListener('mouseup',mu);sel.remove();var x=ev.clientX-r.left,y=ev.clientY-r.top,l=Math.min(x,sx),t=Math.min(y,sy),w=Math.abs(x-sx),h=Math.abs(y-sy);openPop(ev.clientX,ev.clientY,{x:(moved&&w>6?l:sx),y:(moved&&h>6?t:sy),w:(moved&&w>6?w:0),h:(moved&&h>6?h:0)});}
      document.addEventListener('mousemove',mm); document.addEventListener('mouseup',mu);
    });
  });
  function openPop(cx,cy,ctx){
    document.querySelectorAll('.expl-pop').forEach(function(p){p.remove();});
    var pop=document.createElement('div'); pop.className='expl-pop';
    pop.style.left=Math.min(cx,window.innerWidth-296)+'px'; pop.style.top=Math.min(cy,window.innerHeight-160)+'px';
    pop.innerHTML='<div class="expl-pop-ref">Komen</div><textarea placeholder="Tulis catatan..."></textarea><div class="expl-pop-acts"><button class="expl-btn expl-btn--ghost" style="background:var(--item-on);color:var(--tx-mut);border-color:transparent" data-x>Batal</button><button class="expl-btn expl-btn--primary" data-ok>Simpan</button></div>';
    document.body.appendChild(pop); var ta=pop.querySelector('textarea'); ta.focus();
    pop.querySelector('[data-x]').onclick=function(){pop.remove();};
    pop.querySelector('[data-ok]').onclick=function(){var t=ta.value.trim(); if(!t){pop.remove();return;} notes.push({x:ctx.x,y:ctx.y,w:ctx.w,h:ctx.h,text:t}); save(); paint(); pop.remove(); toast('Komen tersimpan');};
  }
  function paint(){
    document.querySelectorAll('.expl-pin,.expl-area').forEach(function(p){p.remove();});
    var canvas=document.querySelector('.expl-canvas'); if(!canvas) return;
    notes.forEach(function(n,i){ if(n.w&&n.h){var a=document.createElement('div');a.className='expl-area';a.style.left=n.x+'px';a.style.top=n.y+'px';a.style.width=n.w+'px';a.style.height=n.h+'px';canvas.appendChild(a);} var pin=document.createElement('div');pin.className='expl-pin';pin.style.left=n.x+'px';pin.style.top=n.y+'px';pin.textContent=i+1;canvas.appendChild(pin); });
  }
  var submit=document.getElementById('expl-submit-btn');
  if(submit) submit.onclick=function(){
    if(!notes.length){ toast('Belum ada komen'); return; }
    var lines=['[REVIEW] '+COMPONENT+' (playground)','']; notes.forEach(function(n,i){lines.push((i+1)+'. '+(n.w?'[area] ':'')+n.text);}); lines.push('','(paste ke chat)');
    copy(lines.join('\n'),'📋 '+notes.length+' komen di-copy');
  };
  paint();
})();
