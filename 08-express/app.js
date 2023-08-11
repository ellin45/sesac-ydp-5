const express = require('express');
const app = express();
const PORT = 8080;

//express 템플릿 엔진 종류 등록
app.set('view engine', 'ejs');
app.set('views', './views');

const idFromDB = 'banana';
const pwFromDB = '1234qwer';

//app.get(경로, 해당 경로로 들어왔을때 실행할 함수)
// '/' : 서버주소: 포트번호
app.get('/', function (request, response) {
    // response.send('<h1>Hello! Express!!</h1>');


response.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['사과', '오렌지','수박'],
    me: {
        name: '채림',
        msg: '저는 채림입니다 !!'
    },
    isLogin: false,
})
});
// './sesac'  경로로 들어왔을때 "새삭 영등포 캠퍼스 5기 수업중" 메세지 보내기
app.get('/sesac', function(request, response){
    response.send('<h1>새싹 영등포 캠퍼스 5기 수업중</h1>');

})

app.get('/login', function(request, response){
    response.render('login');
})

app.get('/register', function(request, response){
    response.send('등록이 되었습니다.')
})

app.listen(PORT, function() {
    console.log(`server listening on ${PORT} port`);
})