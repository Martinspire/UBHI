// define globals
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    path = require('path');

// set up our socket server
require('./sockets')(io);

// start the server
server.listen(8000, function(){ console.log("Server listening on port 8000");});

if(process.env.NODE_ENV === 'dist'){
  app.use(express.static(path.join(__dirname, '../dist/.tmp')));
  app.use(express.static(path.join(__dirname, '../dist')));
}
else{
  app.use(express.static(path.join(__dirname, '../frontend/.tmp')));
  app.use(express.static(path.join(__dirname, '../frontend')));
}

// view engine setup (for later)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
