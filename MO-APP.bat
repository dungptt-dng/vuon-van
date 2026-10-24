@echo off
chcp 65001 >nul
title Vuon Van
start "" http://localhost:8686/
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0app\server.ps1"
