const express = require('express');
const app = express();
const PORT = 8090;

app.set('view engine', 'ejs');
app.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

app.get('/', (req,res)=>{
    res.render('index');
  })
app.get('/ajax', (req,res)=>{
    console.log(req.query);
    res.send(req.query);
  })

  app.post('/ajax', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
  })
  
app.listen(PORT, () => {
    console.log(`${PORT} is opening!`);
  });
  