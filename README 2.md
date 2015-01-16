#Framework

This is the basis that will be used for many web-projects.
It features a lot of cool stuff you can use to make your frontend/backend and perhaps an API or Websocket server.

Read below for the tools/scripts and the contents of the folders

#Whats this?
So why use this? Well, it makes it easy to start your project and to fix some issues you might have running/developing. It als features some best practises i've gathered over the past few months to see how you can maintain your project, what an ideal structure is, how you can use taskrunners ideally and how to use the newest tools to keep your project running optimal.

I've also included a templates folder which you can use to setup defaults for the files you often create/use. This might be subpar to using a generator like Yeoman, but its not really something you use often and perhaps in the future we can make this work easier.

You are free to use whatever other modules you require and apply everything as you see fit. One thing to keep in mind is that updating your project with the latest framework files might require some copypasting from source-files rather than just updating. Because you might've changed stuff and that might not be easy to adjust automatically (if you know how, let me know).

Another thing i'd like to note is that the current structure and current idea might not suit your project. But like always: its probably the best idea to do it right the first time ;)

#Explain me everything!
The Framework has been separated in development and distribution. There are many sourcefiles which get compiled, minified, cleaned and/or copied to the distribution version. Every webdeveloper knows you want source-files to develop in and minified/combined files to distribute. We got you covered.
To make developing easy there are several handy things to get started, even without device.

## Installing and starting up
First of the project has an installer and server to get up and running. Installation is explained below and has some requirements (Ruby, Node, Git) to function properly. Just follow the list and it should work perfectly.

Second, a server can be started to serve the Angular project, compile the needed files and serve as a starting point to do some coding. By running the server.command or server.bat file, you start "grunt" which loads the default grunt task. "grunt dist" is also available to generate a working distribution-version in the /dist folder. There are a few more tasks explained in the grunt file (Gruntfile.js)

Third, a separate server is started for running mock-data. It is what makes the app an app and what we use to test our platform. It doesn't need the device and mocks pretty much everything. It has a few settings you can use too. Device can be set at 0 to 3 so we can see what those devices should look like. We also have a setup boolean to see if we can run a setup. Be aware: this isn't final data and might differ from API. It also lacks proper error-messages and doesn't have most input-checks either. But this works great for testing the basic functionality.

When running the normal Grunt-task, you'll get a few cool features:
* SASS compilation. Inside the /sass folder are many scss files. They are grouped together in the main.scss file and this is eventually compiled into /css/main.css. So you can use SASS to make your CSS. This means: mixins, variables, separating files and thus cleaner, simpler and logical CSS. A .map file is generated to show the origin of which line the item in main.css is generated
* Second is JSHint. When running the server, the prompt will show you errors and improvements to the Javascript. It also has default values for your favorite IDE (like Sublime-text) to show those errors while developing. Check out the documentation of your editor to see how you get this going.
* Livereload / Watch. There are 2 tasks keeping track of your files. First is Livereload which adds a script-tag to your header to enable live-reloading of files. The Watch-task will track changes and trigger the live-reload. So when you change a certain file, you immediately see it in your browser. Or when you connect multiple devices, you see them refreshing!
* Open. This task will open your browser immediately after starting the server. This way you don't need to do anything to test it out, even though you can also look up http://localhost:8000 manually. Its just handy
* Showing outgoing IP. This not a Grunt-task but shown in your terminal/prompt. It will print out your external (network) ip and give you an idea on where to connect your devices. If your port 8000 is open to the rest of the network, you can connect as many devices as you like.
* ExpressJS. This is our server. It is running on port 8000 and is what makes the app run. It can be extended to use WebSockets or a Database. See the files for some example code

Other tasks:
* Save/tag revision. This generates a version.json file which can show you what version you are running. This is included for logging on server-side.
* uglify/minify. This will compress, minify and combine your JS files. It will also remove console.log commands and comments. This is truely generating code only your browser will understand.
* Clean. This will remove files in the /dist folder so it is a true clean version
* Copy. This will copy files into the dist folder which don't need minification.
* Compress. This will compress the distribution and create a zip file inside the /dist/zip folder with the current date. You can change the name if you want in the /grunt/compress.js file

Most of these tasks or services are easily find by Google and are related to Grunt, NPM or Bower.
Their version numbers are locked inside package.json (Grunt) or bower.json (Bower). Updating them only requires the correct version number and "npm update" (Grunt) or "bower update" (Bower).

### Some notes:
Several items are needed for installation of the project.
Ruby is needed to install the Sass gem to run sass compilation.

Node is needed for getting the node modules and running various NPM commands. Its also the basis for running the server.
Git is needed for retrieving various packages via node and using the command line to chain them.

In the future the Ruby and Git installations might not be needed if replaced by node modules (and make it much easier).
Currently the Node Sass module (v3.2) isn't up to speed with Ruby Sass (v3.3) and lacks lots of important features.

The framework of the server is Grunt which runs several tasks. The Server with livereload/watch on various filetypes, the jshint, jsbeautifier, the uglify, clean, copy, sass, open in various grunt tasks.

# Requirements:
* Download project files
  * Download the project files (from git repository, perhaps with Sourcetree) and place them in a folder you can access. Inside there are many files, of which ?-install.? and ?-server.? are most important (? is platform dependant for you to run).
* Ruby
  * preinstalled on osx
  * easy download and install via http://rubyinstaller.org/
  * When installing Ruby make sure that 'add ruby to PATH' is selected.
* NPM
  * download and install via http://nodejs.org/
  * When installing NodeJS make sure that 'add NodeJS to PATH' is selected.
* Git (windows only)
  * download and install via http://msysgit.github.io for git.
  * When installing Git make sure you select "Run Git from Windows Command Prompt" when asked for "Adjusting your PATH enviroment"
* After installing Ruby, Node and Git, restart your computer to make sure its
  * Check installations by running "ruby -v" or "node -v" or "npm -v" or "git -v" in terminal (Windows) or Command Prompt (Windows). It should post a version number. If not, look what the error says and use Google to fix it. Often errors are related to PATH variable or installation errors. Reinstalling or rebooting computer could also help

Notes:
* To run Command Prompt in Windows use "cmd" or "command prompt" in startmenu, on OSX use CTRL+SPACE to open spotlight and type "terminal".

# Installation
## Automated installation:
* Windows
  * Run windows-install.bat
* Mac
  * (optional) Use terminal to run command: "sudo chmod u+x osx-install.command" from project directory
  * (optional) Use terminal to run command: "sudo chmod u+x osx-server.command" from project directory
  * Run osx-install.command

Note: Most important commands are "npm install" and "bower update". These install the local npm modules and vendor items. The NPM -g commands are needed for Grunt, Supervisor and Bower. The sass gem is needed for sass compilation. Sudo is needed for these commands to install globally.

Note 2: If you run into installation errors you should remove contents of the "node_modules" and "vendor" folders. Sometimes "npm -g update" might help. When asked for which version you want to use, you want to select the newest version (but this shouldn't happen normally).

## Automated server (it should show your network-ip when running to connect externally):
* Windows
  * Run windows-server.bat
  * Accept firewall requests if needed
* Mac
  * Run osx-server.command
  * Accept firewall requests if needed

#Tools, languages and scripts used

* Node.js
* NPM
* Grunt with:
 * Connect (if you need alternative for Express)
 * Express Server (for running via grunt)
 * Concurrent / Parallels (running simultaniously)
 * Clean (cleaning dir)
 * Compress (creating zip-file of dist folder)
 * Compass / Sass (compiling SASS)
 * Copy (for copying files to different directories)
 * Jshint (checking your javascript for errors)
 * Beautify / Uglify (for prettify or minify your javascript)
 * Watch (watching files for changes and trigger live-reload)
 * Supervisor (for running other scripts as node)
 * Time Grunt (showing time it took)
 * Load-grunt-configs (load config from separate files)
 * Load-grunt-tasks (load all task modules)
* Bower
* ExpressJS
* Jade
* Socket.io
* AngularJS with:
 * Animate
 * Resource
 * Route / UI Router (routing)
 * Sanitize
 * Socket IO + client
 * Touch
 * ngStorage (localstorage handler)
 * Underscore (as angular module)
* Bootstrap / Foundation / NormalizeCSS (CSS frameworks, choose what you want, use normalise to start clean)
 * Foundation also gives you modernizr, fastclick, jquery cookie and jquery placeholder
* jQuery (if you really have to)

#A quick overview of the files

/backend - All your serverside content will be here
/backend/views - serverside views (currently using Jade template engine)
/backend/tmp - folder to be used for temporary files from backend
/backend/server.js - your main server file, with ExpressJS
/backend/sockets.js - if you want to start with WebSockets using Socket.IO
/dist - generated folder for your frontend distribution
/dist/zip - zipped version of you distribution
/frontend - all front-end files
/frontend/css - generated minified css file with .map
/frontend/font - for your fonts
/frontend/img - for your images
/frontend/sass - main styling-files for your project
/frontend/sass/main.scss - main SASS file where you include all your sass files
/frontend/vendor - where bower will place its dependencies
/frontend/app.js - main angular configuration and start of your app
/frontend/app-controller.js - main controller for your app
/frontend/index.h?tml - main angular index file and what is used as index for your server
/frontend/* all your other project files. Please create separate folders by feature, not by type.
/grunt - folder for placing all your grunt tasks separately
/node_modules - all the local node-modules
/report - generated reports of the code with stats task
/reports/javascript - generated by the plato sub-task in start task
/reports/performance - generated by the pantomas sub-task in start task
/templates/* - store your template files here. Use them to bootstrap your app quickly. Edit and reuse. For your backend and front-end files.
.bowerrc - bower configuration (will place everything in /frontend/vendor)
.gitattributes - git attributes, will handle line-endings properly when using project as repository
.gitignore - files to ignore
.jshintrc - config for jshint
bower.json - bower package and dependencies
CHANGELOG - Simple changelog for Framework or use it for your own project
Gruntfile.js - main grunt file, uses /grunt folder for tasks
LICENSE - license file
npm-debug.log - might show up if npm has issues
osx-install.command - osx version of the file to run installation automatically and gives you messages on its installation status
osx-server.command - osx version of the file to run the server and start developing. Will also show local IP in network and open browser to server url. Basically starts grunt with its tasks easily
package.json - main project information and source for npm packages
README.md - this file for explaining the project and its files
TODO - current items on the TODO list for Framework or use it yourself for laying out the tasks/bugs
version.json - generated with the version-subtask and can be used to send version back to backend. Auto-generated
windows-install.bat - windows version of the file to run installation automatically and gives you messages on its installation status
windows-server.bat - windows version of the file to run the server and start developing. Will also show local IP in network and open browser to server url.

### Grunt
[Grunt](http://gruntjs.com/) is used to automate building, formatting and serving the debug build.
See Gruntfile.js

### Bower
[Bower](http://bower.io/) is a front end package manager we use. View all the dependencies in bower.json

### Sass
[Sass](http://sass-lang.com/) is used for all the styling. The sass source files can be found in /sass.
Grunt automatically generates CSS files and stores them in /css.

# Problems?
* Make sure you have all the right requirements installed
* Restart your computer or terminal/console if you get errors where stuff cannot be found
* Clean the /vendor or /node_modules folders
* Run "npm -g update" to fix all global node modules. Run with "sudo" in front of the command when working on OSX
* Perhaps you need to chmod the command file?
* Retry the installation or server.

## Manual Running
* type "grunt" in terminal/prompt
* will open window in browser
* will livereload when you save files, also on mobile devices!
* will compile sass into css files with imports but also adds lines
* quit server with CTRL+C keys
* run "grunt dist" to remove sass development items
* optionally: uncomment jshint lines in Gruntfile.js to use JSHinting
* optionally: you can also run it manually from a (locally running) server by pointing to correct directory

## Unmodified changes
The .gitattributes file should make sure you aren't getting file changes because your system has different handling of line-endings. Still, it might need to be forced. If you are running git or sourcetree and keep getting Unmodified changes on files which don't seem modified? Thats because grunt is rewriting line-endings for use in Windows/OSX and git sees that as a change. Some files will be rewritten because we are applying jsbeautify to make the Javascript files more readable. This results in a file with different timestamp and different line* endings. There is no way to ignore this.
* run git config --global core.autocrlf in your command prompt to disable this
* you might need to restart the computer and/or git/sourcetree/server for this to take effect
* now it will ignore whitespace and you can keep pulling new versions into your local repository

#About

This framework is made by Martin Spierings of Sogeti Nederland B.V.
