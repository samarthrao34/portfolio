# Copy VIP Assets Script
# Run this script whenever you add new images/videos to the VIP folder

Write-Host "Copying VIP folder to public directory..." -ForegroundColor Cyan

$sourcePath = "..\VIP"
$destPath = ".\public\VIP"

# Remove existing VIP folder in public
if (Test-Path $destPath) {
    Write-Host "Removing old VIP folder..." -ForegroundColor Yellow
    Remove-Item $destPath -Recurse -Force
}

# Copy VIP folder
Write-Host "Copying files..." -ForegroundColor Green
Copy-Item -Path $sourcePath -Destination $destPath -Recurse -Force

Write-Host "Done! VIP assets copied successfully." -ForegroundColor Green
Write-Host ""
Write-Host "Total files copied:" -ForegroundColor Cyan
Get-ChildItem $destPath -Recurse -File | Measure-Object | Select-Object -ExpandProperty Count

Write-Host ""
Write-Host "✓ Illustrations:" (Get-ChildItem "$destPath\Design","$destPath\Background","$destPath\Bubbuls","$destPath\Traditional Art","$destPath\Illustration" -File -ErrorAction SilentlyContinue | Measure-Object).Count
Write-Host "✓ Animations:" (Get-ChildItem "$destPath\Animations" -Filter *.mp4 -ErrorAction SilentlyContinue | Measure-Object).Count
Write-Host "✓ Process Items:" (Get-ChildItem "$destPath\Roughs","$destPath\WIP","$destPath\Sheets","$destPath\MWS" -File -ErrorAction SilentlyContinue | Measure-Object).Count

Write-Host ""
Write-Host "Remember to refresh your browser to see the changes!" -ForegroundColor Yellow
