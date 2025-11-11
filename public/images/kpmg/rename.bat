@echo off
setlocal enabledelayedexpansion
set i=1

echo Renaming all PNG files in %cd%
echo.

REM First pass: rename to temporary names
for %%f in (*.png) do (
  echo Renaming "%%f" to "tmp_kpmg_!i!.tmp"
  ren "%%f" "tmp_kpmg_!i!.tmp"
  set /a i+=1
)

echo.
echo First pass complete.
echo ---------------------

REM Second pass: rename temporary names to final sequence
set i=1
for %%f in (tmp_kpmg_*.tmp) do (
  echo Renaming "%%f" to "kpmg!i!.png"
  ren "%%f" "kpmg!i!.png"
  set /a i+=1
)

echo.
echo All files renamed successfully!
pause
