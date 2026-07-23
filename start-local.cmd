@echo off
setlocal EnableExtensions
pushd "%~dp0"

echo ========================================
echo   猫哥建站 - 启动本地开发环境
echo ========================================
echo.

where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo [错误] 找不到 npm.cmd。
  echo 请确认 Node.js 已安装，然后重新打开此脚本。
  pause
  popd
  exit /b 1
)

if not exist "node_modules\next\package.json" (
  echo [提示] 正在安装项目依赖，请稍候...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo [错误] npm install 执行失败。
    pause
    popd
    exit /b 1
  )
)

>"%~dp0run-dev.cmd" echo @echo off
>>"%~dp0run-dev.cmd" echo pushd "%%~dp0"
>>"%~dp0run-dev.cmd" echo echo Next.js 开发服务器正在运行：http://localhost:3000
>>"%~dp0run-dev.cmd" echo echo 关闭此窗口即可停止服务。
>>"%~dp0run-dev.cmd" echo call npm.cmd run dev -- --hostname 127.0.0.1
>>"%~dp0run-dev.cmd" echo echo.
>>"%~dp0run-dev.cmd" echo echo 开发服务器已停止。
>>"%~dp0run-dev.cmd" echo pause

start "猫哥建站 Next.js 开发服务器" /D "%~dp0" cmd.exe /d /k call "%~dp0run-dev.cmd"

echo [启动] 已打开开发服务器窗口。
echo [等待] 8 秒后打开浏览器...
timeout /t 8 /nobreak >nul
start "" "http://localhost:3000"
echo.
echo [完成] 地址：http://localhost:3000
echo 不要关闭开发服务器窗口，否则网站会停止运行。
pause
popd
endlocal
