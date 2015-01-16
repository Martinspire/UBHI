module.exports = function (io) {
  'use strict';
  var messages = [];
  io.sockets.on('connection', function(socket){
    socket.broadcast.emit('user connected');
    console.log("new user");

      socket.on('message', function (data) {
        var from = data.from;
        var msg = data.msg;
      console.log('recieved message from', from, 'msg', msg);
      messages.push({msg: msg, from: from});
      io.sockets.emit('broadcastMessage', {
        msg: msg,
        from: from
      });
      console.log('broadcast complete');
    });
  });
};
