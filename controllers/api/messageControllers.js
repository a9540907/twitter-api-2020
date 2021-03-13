const express = require('express');
const app = express();
const db = require('../../models');
const port = process.env.PORT || 3000;

const helpers = require('../../_helpers');
const Message = db.Message;

let messageControllers = {
  message: (req, res) => {
    const http = require('http').createServer(app);
    const io = require('socket.io')(http);

    require('../../socket/socketio')(io);

    http.listen(port, () => console.log(`Server Started. at http://localhost:${port}`));

    res.sendFile(__dirname + '/index.html');
  },
};

module.exports = messageControllers;
