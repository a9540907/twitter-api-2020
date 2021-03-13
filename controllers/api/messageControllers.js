const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

let messageControllers = {
  message: (req, res) => {
    const http = require('http').createServer(app);
    const io = require('socket.io')(http);

    require('../../socket/socketio')(io);

    http.listen(port, () => console.log(`Server Started. at http://localhost:${port}`));
    app.get('/', (req, res) => {
      res.sendFile(process.cwd() + '/routes/index.html');
    });

    return res.json({ status: 'success', message: 'chat start !!' });
  },
};

module.exports = messageControllers;
