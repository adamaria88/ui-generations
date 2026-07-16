#!/usr/bin/env python3
"""
component-coverage-audit.py — GERBANG REUSE komponen Aurora (S18).

Scan HTML → FAIL kalau ada elemen "composite" yang HAND-BUILD padahal Aurora
PUNYA komponennya. Maksa "component-first" jadi gerbang MEKANIS, bukan ingatan
model (Opus/Sonnet sama2 refleks nulis CSS dari nol pas momentum).

Lahir 2026-06-18. Sodara: behavior-audit.py · icon-size-audit.py.
Exit: 0 = LULUS · 1 = ada hand-build → BLOK.  Usage: component-coverage-audit.py <file.html>

CATATAN JUJUR — ini BUKAN jaminan 100%. Deteksi by tag + keyword-token. Komponen
hand-build yg dinamain TOTAL beda (no keyword) bisa lolos. Lapis utama = "peta
elemen→komponen DULU" (intent). Tool = jaring pengaman + tumbuh tiap nemu kasus baru.
"""
import sys, re
from html.parser import HTMLParser

VOID = {'img','input','br','hr','meta','link','source','area','base','col'}

# Komponen Aurora yg ADA — `ls /Users/working/aurora/projects/ui/`
AURORA = {'accordion','autocomplete','banner','breadcrumb','button','carousel','checkbox','chip',
  'chip-status','context-menu','country-code-select','currency-select','datepicker','dialog',
  'dropdown-menu','form-field','otp-input','pagination','progress-bar','radio','scroll-container',
  'skeleton','stepper','tab','table','toast','toggle','tooltip'}

# Shell ASLI (sidemenu/nav) → anak2nya internal shell, skip. (BUKAN container layout app-layout/dst.)
SHELL_ANC = ('sidemenu','sm__','nav-header','nh__')

# Keyword PANJANG/aman → cek substring (mis. 'stepper' ga mungkin nyangkut kata lain)
SUBSTR_KW = {'stepper':'stepper','wizard':'stepper','breadcrumb':'breadcrumb','accordion':'accordion',
  'collapse':'accordion','dialog':'dialog','modal':'dialog','tooltip':'tooltip','banner':'banner',
  'snackbar':'toast','toast':'toast','progress':'progress-bar','toggle':'toggle','switch':'toggle',
  'carousel':'carousel','datepicker':'datepicker','calendar':'datepicker','skeleton':'skeleton',
  'shimmer':'skeleton','autocomplete':'autocomplete','typeahead':'autocomplete','dropdown':'dropdown-menu',
  'popover':'dropdown-menu','submenu':'dropdown-menu','context':'context-menu','segmented':'tab'}
# Keyword PENDEK/ambigu → WAJIB token utuh (dipisah - atau _) biar 'tab' ga match 'table'
TOKEN_KW = {'tab':'tab','tabs':'tab','pills':'tab','otp':'otp-input','chip':'chip-status',
  'menu':'dropdown-menu'}  # NB: 'badge' SENGAJA ga dimasukin — sering bukan chip (notif/verified badge)

FORMTYPES = {'text','search','email','tel','number','password','url','date',''}

class N:
    def __init__(s,tag,attrs): s.tag=tag; s.attrs=dict(attrs); s.children=[]; s.parent=None
class Tree(HTMLParser):
    def __init__(s): super().__init__(); s.root=N('root',[]); s.stack=[s.root]
    def handle_starttag(s,t,a):
        n=N(t,a); n.parent=s.stack[-1]; s.stack[-1].children.append(n)
        if t not in VOID: s.stack.append(n)
    def handle_startendtag(s,t,a):
        n=N(t,a); n.parent=s.stack[-1]; s.stack[-1].children.append(n)
    def handle_endtag(s,t):
        if len(s.stack)>1 and s.stack[-1].tag==t: s.stack.pop()
        else:
            for i in range(len(s.stack)-1,0,-1):
                if s.stack[i].tag==t: del s.stack[i:]; break

def walk(n):
    for c in n.children: yield c; yield from walk(c)
def cls(n): return n.attrs.get('class','').split()
def ancestors(n,depth=4):
    x=n.parent; d=0
    while x is not None and d<depth: yield x; x=x.parent; d+=1
def has_needle(n,needles): return any(nd in c for c in cls(n) for nd in needles)
def self_or_anc(n,needles,depth=4):
    return has_needle(n,needles) or any(has_needle(a,needles) for a in ancestors(n,depth))
def in_shell(n):
    for x in [n]+list(ancestors(n,8)):
        for c in cls(x):
            if any(c==s or c.startswith(s) for s in SHELL_ANC): return True
    return False
def in_overlay(n):
    # KOMEN OVERLAY (suxc-*) = layer review/tooling, di-strip sebelum publish → BUKAN UI produksi, jangan di-audit.
    for x in [n]+list(ancestors(n,20)):
        if any(c.startswith('suxc') for c in cls(x)): return True
        if x.attrs.get('id','').startswith('suxc'): return True
    return False
def kw_hit(classlist):
    for cn in classlist:
        low=cn.lower()
        if 'au-' in low: continue
        for k,v in SUBSTR_KW.items():
            if k in low: return v
        for t in re.split(r'[-_]+',low):
            if t in TOKEN_KW: return TOKEN_KW[t]
    return None
def label(n):
    c=cls(n); sel='.'+'.'.join(c[:2]) if c else ''
    t=n.attrs.get('type','')
    return f'{n.tag}'+(f'[type={t}]' if t else '')+(f' {sel}' if sel else '')

def main():
    if len(sys.argv)<2: print("usage: component-coverage-audit.py <file.html>"); sys.exit(2)
    html=open(sys.argv[1],encoding='utf-8').read()
    tree=Tree(); tree.feed(html)
    out=[]
    for n in walk(tree.root):
        if in_overlay(n): continue
        c=cls(n)
        # ── tag-based (high confidence) ──
        if n.tag=='table' and not has_needle(n,['au-table']):
            out.append((label(n),'table','tabel hand-build → pakai .au-table*'))
        elif n.tag=='input' and n.attrs.get('type')=='checkbox' and not self_or_anc(n,['au-checkbox'],3):
            out.append((label(n),'checkbox','checkbox hand-build → pakai .au-checkbox(-container)'))
        elif n.tag=='input' and n.attrs.get('type')=='radio' and not self_or_anc(n,['au-radio'],3):
            out.append((label(n),'radio','radio hand-build → pakai .au-radio'))
        elif ((n.tag=='input' and n.attrs.get('type','') in FORMTYPES) or n.tag in ('select','textarea')) \
             and not self_or_anc(n,['au-form-field','au-autocomplete','au-datepicker','au-otp','-select'],3):
            out.append((label(n),'form-field','input/select hand-build → pakai .au-form-field (atau au-datepicker/au-autocomplete/au-*-select)'))
        elif n.tag=='button' and any(t in ('btn','button') for x in c for t in re.split(r'[-_]+',x.lower())) \
             and not any('au-' in x for x in c):
            out.append((label(n),'button','button hand-build → pakai .au-btn'))
        # ── keyword-token (chip/menu/tab/stepper/toggle/datepicker/dst) ──
        elif not any('au-' in x for x in c) and not in_shell(n):
            comp=kw_hit(c)
            if comp: out.append((label(n),comp,f'hand-build → pakai .au-{comp.split(" ")[0]}'))

    # RAW SCAN — komponen yg di-inject lewat JS. CUMA di dalam <script> (HTML statis udah di-handle
    # DOM-walk dgn konteks shell; scan class="" statis di sini = false-positive ke elemen shell).
    scripts='\n'.join(re.findall(r'<script[^>]*>(.*?)</script>',html,re.S))
    raw=re.findall(r"""class(?:Name)?\s*[=:]\s*['"]([^'"]+)['"]""",scripts) \
        + re.findall(r"""classList\.add\(\s*['"]([^'"]+)['"]""",scripts)
    for cstr in raw:
        toks=cstr.split()
        if any('au-' in t for t in toks): continue
        if any(t==s or t.startswith(s) for t in toks for s in SHELL_ANC): continue
        if any(t.startswith('suxc') for t in toks): continue   # skip overlay komen (tooling)
        comp=kw_hit(toks)
        if comp:
            rep=next((t for t in toks if kw_hit([t])),toks[0])
            out.append((f'(JS) .{rep}',comp,f'hand-build di JS → pakai .au-{comp.split(" ")[0]}'))

    # dedup by (kelas-inti, component)
    def core(lab):
        m=re.search(r'\.[\w-]+$',lab); return m.group(0) if m else lab
    seen=set(); uniq=[]
    for f in out:
        k=(core(f[0]),f[1])
        if k not in seen: seen.add(k); uniq.append(f)

    print(f"\nCOMPONENT-COVERAGE AUDIT — {sys.argv[1]}")
    print("="*70)
    print("Cek: elemen composite hand-build padahal Aurora punya komponennya.\n")
    if not uniq:
        print("  ✅ Semua composite (yg ke-deteksi) pakai komponen Aurora.  → LULUS"); sys.exit(0)
    for lab,comp,why in uniq:
        print(f"  ❌ {lab:30} → Aurora `{comp}`\n       {why}")
    print("-"*70)
    print(f"  {len(uniq)} elemen hand-build padahal Aurora PUNYA  → BLOK")
    print("  Fix: ls aurora/projects/ui/<comp> → baca .scss → pakai kelas au-* (override token ke Figma).")
    print("  Sengaja custom (Aurora ga cocok)? → tambah class ke SHELL_ANC/whitelist + alasan.")
    sys.exit(1)

if __name__=='__main__': main()
