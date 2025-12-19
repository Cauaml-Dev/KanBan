@echo off
echo Resetando o Visual Studio Code...

:: Fechar qualquer instância do VSCode que esteja em execução
taskkill /f /im Code.exe >nul 2>&1

:: Caminho das configurações do VSCode
set CONFIG_PATH=%APPDATA%\Code
set CACHE_PATH=%LOCALAPPDATA%\Code

:: Excluir a pasta de configurações do usuário
if exist "%CONFIG_PATH%" (
    echo Excluindo configurações do VSCode...
    rmdir /s /q "%CONFIG_PATH%"
)

:: Excluir a pasta de cache
if exist "%CACHE_PATH%" (
    echo Excluindo cache do VSCode...
    rmdir /s /q "%CACHE_PATH%"
)

echo Reset concluído. Você pode reabrir o Visual Studio Code.
Pause