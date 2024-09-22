@echo off
# Unity -quit -batchmode -projectpath game -buildTarget webgl -logFile build.log
ROBOCOPY %~dp0build\Build\ %~dp0packages\website\public\game\