const express = require('express');
const router = require('../../controller/comment');
const router = express();
const PORT = 8090;

router.set('view engine', 'ejs');
router.set('/views', 'views');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
router.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
router.use(express.json()); // json 형식으로 데이터를 주고 받음

router.get('/', (req,res)=>{
    res.render('prac2');
  })
router.post('/', (req, res) => {
    res.render('prac2');
})
router.post('/axios', (req,res)=>{
  console.log(res.body);
  res.send((req.body));
})
// router.get('/ajax', (req,res)=>{
//     console.log(req.query);
//     res.send(req.query);
//   })

  router.post('/ajax', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
  })

  router.get('/axios',(req, res)=>{
    console.log(req.query);
    res.send(req.query);
  })

  router.post('/fetch', (req, res)=> {
    console.log(req.query);
    res.send(req.query);
  })

  module.exports = router;