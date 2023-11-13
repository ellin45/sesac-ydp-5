const ws = require('ws'); // ws 모듈 불러오기
const express = require('express'); // express 모듈 불러오기
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wsServer = new ws.Server({ server }); // 웹 소켓 서버 접속

const sockets = []; // 클라이언트들을 저장할 배열

wsServer.on('connection', (socket) => {
  console.log('[클라이언트 연결 완료]');

  socket.on('message', (message) => {
    
    console.log(`클라이언트로 부터 받은 메세지 ::,${message} `);
    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });
  socket.on('close', () => {
    console.log('[클라이언트 연결 종료]');
  });
});
