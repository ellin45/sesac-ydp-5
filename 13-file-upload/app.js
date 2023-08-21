const express = require('express');
const app = express();
const PORT = 8110;

// multer 관련 설정
const multer = require('multer');
const path = require('path') // 경로에 대한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
//multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // done(null, xx) 여기서 null은 error를 의미하는 매개변수
  // 에러가 없음을  "null" 이라고 전달하여 콜백 함수를 호출!
  storage: multer.diskStorage({
    destination(req, file, done){ //done: callback
      done(null, 'uploads/'); // 파일을 업로드 할 경로 설정
    },
    filename(req, file, done){
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
  }),
  // limits: 파일 제한 정보
  limits: {fileSize: 5 * 1024 * 1024} // 5MB
})
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.get('/', (req,res)=>{
    res.render('index');
  })

  // 1. single() : 하나의 파일을 업로드
  // upload.single('userfile') : 클라이언트의 요청이 들어오면
  // multer 설정(upload 변수)에 따라 파일을 업로드 한후 , req.file 객체 생성
  // single() 인자는 input 태그의 name 속성과 일치 시켜야함
app.post('/upload',uploadDetail.single('userfile'), (req, res)=>{
  // req.file :파일 업로드 정보
  // req.body : 파일 외의 정보들
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료!');

  // req.file 객체 자세히 보기
  // {
  //   fieldname: 'userfile', // 폼에 정의한 name 값
  //   originalname: 'apple1.png', // 원본 파일명
  //   encoding: '7bit', // 파일 인코딩 타입
  //   mimetype: 'image/png', // 파일 타입
  //   destination: 'uploads/', // 파일 저장 경로
  //   filename: '88b790f556b9873a7bce570061d8ceb8',  // destination 저장된 파일명
  //   path: 'uploads\\88b790f556b9873a7bce570061d8ceb8', // 업로드된 파일 전체 경로
  //   size: 2515 // 파일 크기
  // }
});

app.listen(PORT, function() {
console.log(`${PORT} is opening!`);
});
  