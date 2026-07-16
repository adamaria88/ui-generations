# ═══════════════════════════════════════════════════════════════════
#  deploy-explorer.ps1
#  Deploy _output/explorer/ ke GitHub Pages, folder `component/`.
#
#  Cara pakai:  buka PowerShell di root repo  ->  .\deploy-explorer.ps1
#  URL hasil:   https://adamaria88.github.io/ui-generations/component/
#
#  SOP lengkap: paper-designer/memory/shared/publish-gh-pages-workflow.md
#
#  ── YANG PERLU LO TAU ──────────────────────────────────────────────
#  * Pages UDAH nyala (source: branch `gh-pages`, path `/`).
#    JANGAN setup ulang. JANGAN buka Settings > Pages (itu admin-only
#    dan emang GAK PERLU). Akses `write` udah cukup buat update.
#  * `_output/` sengaja gitignored (output disposable). Publish lewat
#    branch `gh-pages` yang isinya snapshot per-prototype.
#  * Branch `gh-pages` isinya BANYAK prototype (component/,
#    storefront-produk/, dst). Script ini CUMA nyentuh `component/` —
#    prototype lain aman.
#
#  ── RIWAYAT (kenapa ditulis ulang 2026-07-16) ──────────────────────
#  Versi lama script ini `git init` + orphan + `git push -f`, isinya
#  cuma component/. Efeknya: tiap dijalanin, SEMUA prototype lain di
#  gh-pages (mis. storefront-produk) KEHAPUS dari live. Sekarang pakai
#  git worktree: nambah commit normal di atas gh-pages, no force-push,
#  working tree lo gak kesentuh.
# ═══════════════════════════════════════════════════════════════════

$ErrorActionPreference = "Stop"

$RepoRoot  = $PSScriptRoot
$Src       = Join-Path $RepoRoot "_output\explorer"
$SubDir    = "component"
$PagesUrl  = "https://adamaria88.github.io/ui-generations/component/"
$WT        = Join-Path $env:TEMP "ui-explorer-ghp-wt"

if (-not (Test-Path (Join-Path $Src "index.html"))) {
    Write-Host "[X] Ga nemu _output/explorer/index.html. Jalanin dari root repo." -ForegroundColor Red
    exit 1
}

Set-Location $RepoRoot

# ── [1/5] Refresh halaman share (snapshot registry — wajib, biar link share gak basi)
Write-Host "[1/5] Regenerate halaman share..." -ForegroundColor Cyan
node (Join-Path $RepoRoot "paper-designer\tools\make-share-page.mjs") --all
if (-not $?) { Write-Host "[X] make-share-page gagal." -ForegroundColor Red; exit 1 }

# ── [2/5] Worktree bersih dari origin/gh-pages (working tree lo GAK kesentuh)
Write-Host "[2/5] Siapin worktree gh-pages..." -ForegroundColor Cyan
git fetch -q origin gh-pages
if (Test-Path $WT) { git worktree remove --force $WT 2>$null; Remove-Item -Recurse -Force $WT -ErrorAction SilentlyContinue }
git worktree prune
git worktree add --quiet $WT origin/gh-pages --detach
if (-not $?) { Write-Host "[X] Gagal bikin worktree." -ForegroundColor Red; exit 1 }

try {
    # ── [3/5] Mirror _output/explorer -> component/ (cuma folder ini)
    Write-Host "[3/5] Copy snapshot explorer ke /$SubDir ..." -ForegroundColor Cyan
    $Dest = Join-Path $WT $SubDir
    if (-not (Test-Path $Dest)) { New-Item -ItemType Directory -Force $Dest | Out-Null }
    # dikosongin dulu biar file yg udah dihapus/di-rename di lokal ikut ilang di live
    Remove-Item -Recurse -Force (Join-Path $Dest "*") -ErrorAction SilentlyContinue
    Copy-Item (Join-Path $Src "*") $Dest -Recurse -Force
    # file preview internal, jangan ikut ke publik
    Remove-Item (Join-Path $Dest "_style-preview.html") -Force -ErrorAction SilentlyContinue

    # ── [4/5] Commit + push (normal, BUKAN force)
    Write-Host "[4/5] Commit + push ke gh-pages..." -ForegroundColor Cyan
    Push-Location $WT
    try {
        git add -A
        $changed = git status --porcelain
        if ([string]::IsNullOrWhiteSpace($changed)) {
            Write-Host "    (gak ada perubahan - live udah paling baru)" -ForegroundColor DarkGray
        } else {
            $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
            git commit -q -m "update: component explorer ($stamp)"
            git push origin HEAD:gh-pages
            if (-not $?) { throw "push gagal - pastiin akun git lo collaborator di repo ini" }
        }
    } finally { Pop-Location }
}
finally {
    # ── [5/5] Bersihin worktree
    Write-Host "[5/5] Bersihin worktree..." -ForegroundColor Cyan
    git worktree remove --force $WT 2>$null
    git worktree prune
}

Write-Host ""
Write-Host "  Selesai. Build Pages ~30-90 detik." -ForegroundColor Green
Write-Host "  URL public : $PagesUrl" -ForegroundColor Yellow
Write-Host ""
