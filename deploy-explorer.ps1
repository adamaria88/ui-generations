# ═══════════════════════════════════════════════════════════════════
#  deploy-explorer.ps1
#  Deploy folder _output/explorer/ ke GitHub Pages (branch gh-pages).
#
#  Kenapa perlu script ini:
#    _output/ sengaja di-gitignore (output disposable, bukan sumber
#    kebenaran). Jadi explorer di-publish lewat branch terpisah
#    'gh-pages' yg isinya CUMA snapshot explorer di root — repo utama
#    tetap bersih.
#
#  Cara pakai:  buka PowerShell di root repo, jalanin:  .\deploy-explorer.ps1
#  Update:      tiap habis nambah/ubah draft, jalanin lagi. Beres.
#
#  Sekali doang (first time): enable Pages di
#    https://github.com/adamaria88/ui-generations/settings/pages
#    Source = Deploy from a branch · Branch = gh-pages · folder = / (root) · Save
#
#  URL hasil:  https://adamaria88.github.io/ui-generations/component/
# ═══════════════════════════════════════════════════════════════════

$ErrorActionPreference = "Stop"

$RepoRoot = $PSScriptRoot
$Src      = Join-Path $RepoRoot "_output\explorer"
$RemoteUrl = "https://github.com/adamaria88/ui-generations.git"
$PagesUrl  = "https://adamaria88.github.io/ui-generations/component/"
$SubDir    = "component"   # explorer ditaruh di subfolder ini

if (-not (Test-Path (Join-Path $Src "index.html"))) {
    Write-Host "[X] Ga nemu _output/explorer/index.html. Jalanin dari root repo." -ForegroundColor Red
    exit 1
}

# staging area disposable
$Stage = Join-Path $env:TEMP "ui-explorer-gh-pages"
if (Test-Path $Stage) { Remove-Item -Recurse -Force $Stage }
New-Item -ItemType Directory -Force $Stage | Out-Null

Write-Host "[1/4] Copy snapshot explorer ke /$SubDir ..." -ForegroundColor Cyan
$Dest = Join-Path $Stage $SubDir
New-Item -ItemType Directory -Force $Dest | Out-Null
Copy-Item (Join-Path $Src "*") $Dest -Recurse -Force
# .nojekyll di ROOT branch = matiin Jekyll biar folder/file apa adanya di-serve
New-Item -ItemType File (Join-Path $Stage ".nojekyll") -Force | Out-Null
# redirect kecil di root -> /component (biar buka root ga 404)
@"
<!doctype html><meta charset=utf-8>
<meta http-equiv="refresh" content="0; url=./$SubDir/">
<title>Redirect</title><a href="./$SubDir/">component explorer &rarr;</a>
"@ | Set-Content -Encoding utf8 (Join-Path $Stage "index.html")

Push-Location $Stage
try {
    Write-Host "[2/4] Init repo snapshot..." -ForegroundColor Cyan
    git init -q
    git checkout -q -b gh-pages
    git add -A
    git -c user.name="Paper Designer" -c user.email="design.paper.id@gmail.com" `
        commit -q -m "deploy: component explorer hub ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"

    Write-Host "[3/4] Push ke origin/gh-pages (force)..." -ForegroundColor Cyan
    git remote add origin $RemoteUrl
    git push -f origin gh-pages

    Write-Host "[4/4] Selesai!" -ForegroundColor Green
    Write-Host ""
    Write-Host "  URL public : $PagesUrl" -ForegroundColor Yellow
    Write-Host "  (first time: enable Pages dulu di Settings > Pages > branch gh-pages)" -ForegroundColor DarkGray
}
finally {
    Pop-Location
}
