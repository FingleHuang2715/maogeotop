$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host '未检测到 Node.js，请先安装 Node.js 20 或更高版本。' -ForegroundColor Red
  Read-Host '按 Enter 退出'
  exit 1
}

if (-not (Test-Path 'node_modules')) {
  Write-Host '首次运行，正在安装依赖...' -ForegroundColor Yellow
  & npm.cmd install
  if ($LASTEXITCODE -ne 0) { throw '依赖安装失败' }
}

Write-Host '正在启动 Next.js：http://localhost:3000' -ForegroundColor Cyan
Start-Process powershell.exe -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', "Set-Location '$PWD'; npm.cmd run dev -- --hostname 0.0.0.0"
Start-Sleep -Seconds 8
Start-Process 'http://localhost:3000'
Write-Host '浏览器已打开：http://localhost:3000' -ForegroundColor Green
