const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // { socket.id: nick1, socket.id: nick2, ...  }

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공

  console.log('서버 연결 완료 :: ', socket.id);
  // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)

  // [실습1]
  //   socket.on('hello', (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!!!' });
  //   });

  // [실습3] 채팅창 입장 안내 문구
  //   io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);

  // [실습3-2] 채팅창 입장 문구 socket.id -> nickname
  // emit() from server
  // - socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
  // - io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송'
  // - io.to(소켓아이디).emit(event_name, dat): 소켓아이디에 해당하는 클라이언트에게만 전송
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);

    // 프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사
    // 이미 존재; error 이벤트 + '이미 존재하는 닉네임 입니다' => 클라이언트; error 이벤트 받으면 alert 띄우기
    // 새 닉네임; notice 이벤트 + ${nick} 님이 입장하셨습니다.
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      // 이미 존재하는 닉네임이 있음
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      // 새로운 닉네임
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 :: ', nickObjs);
      io.emit('notice', `${nick} 님이 입장하셨습니다.`); // 전체 공지
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [실습3-3] 클라이언트 퇴장시
  // "notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김 :: ', `${nickObjs[socket.id]} 님 퇴장 :: `, socket.id);

    io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });

  // [실습4] 채팅창 메세지 전송 Step1
  // send 이벤트를 받아서
  // 모두에게 newMessage 이벤트로 {닉네임, 입력창내용} 데이터를 전송
  socket.on('send', (data) => {
    // { myNick: 'a', msg: 'dd', dm: ? }
    // console.log('send 이벤트로 받은 data :: ', data);

    // [실습5]
    // 디엠인지 아닌지 구분해서
    // io.to(소켓아이디).emit(event_name, data): 소켓아이디에 해당하는 클라이언트에게만 전송

    if (data.dm === 'all') {
      // "전체" 발송
      io.emit('newMessage', { nick: data.myNick, msg: data.msg });
    } else {
      // "DM" 발송
      let dmSocketId = data.dm;
      const sendData = {
        nick: data.myNick,
        msg: data.msg,
        dm: '(속닥속닥) ',
      };
      io.to(dmSocketId).emit('newMessage', sendData); // 디엠을 보내야하는 타켓 소켓아이디한테 메세지 전송
      socket.emit('newMessage', sendData); // 자기자신한테 보여주는 메세지
    }
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
