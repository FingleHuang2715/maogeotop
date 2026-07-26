@echo off
setlocal
cd /d "%~dp0"

echo ========================================
echo Maogeo Frontend - Single Git Commit Push
echo ========================================
echo.

echo [1/3] Adding files to git staging...
git add .

echo.
echo [2/3] Creating a single commit...
git commit -m "update site workflow and standalone configuration"

echo.
echo [3/3] Pushing to GitHub (triggers ONLY 1 workflow run)...
git push origin main

echo.
echo ========================================
echo Sync completed! Check GitHub Actions now.
echo ========================================
