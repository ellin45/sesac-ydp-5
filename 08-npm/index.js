// http 모듈로 웹 서버 생성

// 클라이언트가 localhost:PORT 요청을 날렸으나, 서버가 응답하고 있는 내용이 없음.
const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const { resolvePtr } = require('dns');
const server = http.createServer(function(request, response) {
    // response.writeHead(200); // Corrected this line
    // response.write('<h1>Hello, Node.js!<h1>');
    // response.end('<p>My first node server!</p>');


    try{
    //html 파일 불러오기
    const data = fs.readFileSync('./index.html');
    response.writeHead(200, {'content-type': 'text/html; charset=utf8'});
    response.write(data);
    response.end();
    }catch(error){
        console.error(error)
        response.writeHead(404);
        response.write('존재하지 않는 파일입니다. 다시 요청해주세요!');
        response.end();
    }
});
const PORT = 8000;

server.on('request', function(request, response) {
    console.log('request 이벤트 발생!!');
});

// 서버 실행
server.listen(PORT, function () {
    console.log(`server listening on ${PORT} port`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log('10초가 지나 서버가 종료되었습니다.');
//   server.close(); // 서버 종료 메서드
// }, 10000);