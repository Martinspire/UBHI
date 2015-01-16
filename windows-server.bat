@echo off
@echo This will help you start the server for mocking the project
@echo:
@echo Starting with finding your IP (if this doesn't work, look it up manually via ipconfig or adapter status)
@echo:
for /f "tokens=3" %%i in ('ping %computername% -4 -n 1 ^| findstr Reply') do (echo Connect to http://%%i:8000)
@echo:
@echo Going to correct directory to start server
@echo:
set here=%cd%
@echo cd-ing to %here%
cd %here%
@echo:
@echo Going to start server and mock-server, press CTRL+C to stop...
@echo:
call grunt
@echo:
pause
