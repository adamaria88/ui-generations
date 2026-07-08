#!/usr/bin/env python3
"""behavior-audit.py — pengecek MEKANIS behavior buat HTML hasil mirror.

Setara pixel-diff buat visual, tapi buat interaksi (S15 enforcement).
Scan affordance interaktif by TIPE (button / dropdown / input / row / tab) →
cek tiap satu udah ke-wire (hover/active/onclick/focus) atau masih "telanjang".

Pakai:  python3 behavior-audit.py <file.html>
Exit:   0 = semua wired · 1 = ada yang telanjang (bisa jadi gate di workflow)
"""
import sys, re
from html.parser import HTMLParser

VOID = {'img','input','br','hr','meta','link','source','area','base','col'}

class Node:
    __slots__ = ('tag','attrs','children','parent','text')
    def __init__(self, tag, attrs):
        self.tag=tag; self.attrs=dict(attrs); self.children=[]; self.parent=None; self.text=''

class Tree(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root=Node('root',{}); self.cur=self.root; self.skip=False
    def handle_starttag(self, t, a):
        if t in ('style','script'): self.skip=True; return
        n=Node(t,a); n.parent=self.cur; self.cur.children.append(n)
        if t not in VOID: self.cur=n
    def handle_startendtag(self, t, a):
        if t in ('style','script'): return
        n=Node(t,a); n.parent=self.cur; self.cur.children.append(n)
    def handle_endtag(self, t):
        if t in ('style','script'): self.skip=False; return
        if t in VOID: return
        x=self.cur
        while x is not None and x.tag != t: x=x.parent      # lenient pop
        if x is not None and x.parent is not None: self.cur=x.parent
    def handle_data(self, d):
        if not self.skip and self.cur is not None: self.cur.text += d.strip()

def cls(n): return n.attrs.get('class','').split()
def walk(n):
    for c in n.children:
        yield c; yield from walk(c)
def subtext(n):
    s=n.text
    for c in n.children: s+=subtext(c)
    return s
def is_caret(n):
    if any(re.search(r'caret|chev', c, re.I) for c in cls(n)): return True
    return n.tag=='img' and bool(re.search(r'caret|chev', n.attrs.get('src',''), re.I))
def direct_caret(n): return any(is_caret(c) for c in n.children)
def has_onclick(n): return 'onclick' in n.attrs
def anc_onclick(n, depth=3):
    x=n
    for _ in range(depth+1):
        if x is None: break
        if has_onclick(x): return True
        x=x.parent
    return False

def pseudo_classes(css, pseudo):
    s=set()
    for seg in re.findall(r'([^{}]*):'+pseudo, css):
        s.update(re.findall(r'\.([A-Za-z0-9_\-]+)', seg))
    return s

def label(n):
    t=re.sub(r'\s+',' ', subtext(n)).strip()[:26]
    sel='.'+'.'.join(cls(n)) if cls(n) else n.tag
    return f'{sel} "{t}"' if t else sel

def main():
    path=sys.argv[1]
    html=open(path, encoding='utf-8').read()
    css='\n'.join(re.findall(r'<style[^>]*>(.*?)</style>', html, re.S))
    HOVER=pseudo_classes(css,'hover'); ACTIVE=pseudo_classes(css,'active'); FOCUS=pseudo_classes(css,'focus')

    tree=Tree(); tree.feed(html)
    checks=[]  # (type, node)
    for n in walk(tree.root):
        c=cls(n)
        if any(x.startswith('suxc') for x in c) or n.attrs.get('id','').startswith('suxc') \
           or any(any(x.startswith('suxc') for x in cls(p)) for p in iter_parents(n)): continue  # skip overlay komen (tooling review, bukan UI produksi)
        if n.tag=='button' or any('btn' in x for x in c):          checks.append(('button',n))
        if direct_caret(n) and not is_caret(n) and n.tag!='img':    checks.append(('dropdown',n))
        if n.tag in ('input','select','textarea'):                  checks.append(('input',n))
        if n.tag=='tr' and any(p.tag=='tbody' for p in iter_parents(n)): checks.append(('row',n))
        if any(x=='tab' or x.endswith('-tab') for x in c):          checks.append(('tab',n))

    rows=[]
    for typ,n in checks:
        c=cls(n)
        if typ=='button':
            wired = has_onclick(n) or any(x in HOVER for x in c) or any(x in ACTIVE for x in c)
            why   = 'hover/active/onclick ada' if wired else 'GA ADA hover/active/onclick'
        elif typ=='dropdown':
            wired = anc_onclick(n); why = 'toggle handler ada' if wired else 'caret tapi GA ADA handler'
        elif typ=='input':
            wired = any(x in FOCUS for x in c) or n.tag in FOCUS; why='focus ada' if wired else 'GA ADA :focus'
        elif typ=='row':
            wired = has_onclick(n) or any(x in HOVER for x in c); why='hover/onclick ada' if wired else 'GA ADA hover/klik'
        else:
            wired = has_onclick(n); why='handler ada' if wired else 'GA ADA handler'
        rows.append((typ,label(n),wired,why))

    naked=[r for r in rows if not r[2]]
    print(f'\nBEHAVIOR AUDIT — {path}')
    print('='*62)
    for typ,lab,wired,why in rows:
        print(f'  {"OK " if wired else "XX "} {typ:9} {lab:42} {"" if wired else "← "+why}')
    print('-'*62)
    print(f'  {len(rows)} affordance · {len(rows)-len(naked)} wired · {len(naked)} TELANJANG'
          + ('  → BLOK (wajib 0, atau tandai static-with-reason)' if naked else '  → LULUS'))
    sys.exit(1 if naked else 0)

def iter_parents(n):
    x=n.parent
    while x is not None: yield x; x=x.parent

if __name__=='__main__':
    main()
