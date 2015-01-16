#!/bin/bash
echo "This will help you start the server for mocking the project"
echo ""
localip=$(LANG=C /sbin/ifconfig  | sed -ne $'/127.0.0.1/ ! { s/^[ \t]*inet[ \t]\\{1,99\\}\\(addr:\\)\\{0,1\\}\\([0-9.]*\\)[ \t\/].*$/\\2/p; }')
echo "Your local ip is: $localip - connect to http://$localip:8000"
echo ""
echo "Going to local folder to start server"
echo ""
here="`dirname \"$0\"`"
echo "cd-ing to $here"
cd "$here" || exit 1
echo ""
echo "Going to start server, press CTRL+C to stop or close window..."
grunt
