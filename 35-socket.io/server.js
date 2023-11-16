// server.js

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8080;

const nickObjs = {};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs);
}

io.on('connection', (socket) => {
  console.log('서버 연결 완료 :: ', socket.id);

  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);

    if (Object.values(nickObjs).indexOf(nick) > -1) {
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 :: ', nickObjs);
      io.emit('notice', `${nick} 님이 입장하셨습니다.`);
      socket.emit('entrySuccess', nick);
      updateList();
    }
  });

  socket.on('disconnect', () => {
    console.log('접속 끊김 :: ', `${nickObjs[socket.id]} 님 퇴장 :: `, socket.id);

    io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });

  socket.on('send', (data) => {
    if (data.to === 'all') {
      io.emit('newMsg', data, 'all');
    } else {
      io.to(data.to).emit('newMsg', data, 'personal');
    }
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
