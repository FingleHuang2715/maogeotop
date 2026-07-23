@echo off
setlocal
cd /d "%~dp0"

echo ========================================
echo Maogeo Frontend - Vercel deploy fix
echo ========================================
echo.

echo [1/3] Running production build...
call npm run build
if errorlevel 1 (
  echo.
  echo Build failed. The changes were NOT pushed.
  echo Please copy the error above and send it to Claude.
  pause
  exit /b 1
)

echo.
echo [2/3] Committing the fix...
git add src\app\waimaojianzhan\page.tsx

git diff --cached --quiet
if errorlevel 1 (
  git commit -m "fix missing stylesheet import for Vercel build"
  if errorlevel 1 (
    echo.
    echo Git commit failed. The build passed, but nothing was pushed.
    pause
    exit /b 1
  )
) else (
  echo No uncommitted change detected; continuing with push.
)

echo.
echo [3/3] Pushing to GitHub...
git push origin main
if errorlevel 1 (
  echo.
  echo Push failed. This usually means GitHub login or permission is required.
  echo Run this file again after signing in to GitHub, or send the error above to Claude.
  pause
  exit /b 1
)

echo.
echo ========================================
echo Done. Vercel should start a new deployment automatically.
echo Open Vercel and wait for the new deployment to finish.
echo ========================================
pause
