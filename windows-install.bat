@echo off
@echo This install script will install all needed dependencies.
@echo You can also use it to update everything.
@echo:
@echo Before installing, make sure you have NodeJS and Git installed.
@echo If not, use installers from http://nodejs.org for node and http://msysgit.github.io for git.
@echo:
@echo When installing Git, make sure you select "Run Git from Windows Command Prompt" when asked for "Adjusting your PATH enviroment"
@echo When installing NodeJS make sure that "add NodeJS to PATH" is selected.
@echo:
@echo You can check if they are installed by running "git" or "node" in your console. Be sure to restart your computer after installing Node and Git.
@echo:
@echo Also note that we are using latest stable versions of Node and NPM. We also install the node_modules from package.json and the frontend/vendor dependencies from bower.json
@echo:
@echo If you get any errors, please let us know. Especially when the script fails.
@echo: This script might require admin capabilities to run properly. Rightclick and use "Run as Administrator" if the script fails.
pause
@echo Cleaning cache
@echo:
call sudo npm cache clean
@echo:
@echo Cleaning done!
@echo:
@echo Going to install latest stable node
@echo:
call npm install -g n
call n stable
@echo:
@echo Node done!
@echo:
@echo Going to install latest stable npm
@echo:
call npm install -g npm
@echo:
@echo NPM done!
@echo:
@echo Installing Grunt
@echo:
call npm install -g grunt-cli
@echo:
@echo Grunt done!
@echo:
@echo Installing Bower
@echo:
call npm install -g bower
@echo:
@echo Bower done!
@echo:
@echo Global installations done - going local
@echo:
set here=%cd%
@echo cd-ing to %here%
cd %here%
@echo:
@echo Cleaning folders
@echo:
call del /S /Q "node_modules/"
call del /S /Q "frontend/vendor/"
@echo:
@echo Cleaning done!
@echo:
@echo Installing Server and dependancies
@echo:
call npm install
@echo:
@echo Done!
@echo:
@echo Cleaning Frontend dependancies
@echo:
call bower clean cache
@echo:
@echo Done!
@echo:
@echo Installing Frontend dependancies
@echo:
call bower install
@echo:
@echo Done!
@echo:
@echo All done!
@echo:
pause
