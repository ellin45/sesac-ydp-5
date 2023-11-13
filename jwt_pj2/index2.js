const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
 
    if(id === realId && pw === realPw){
      //토큰 생성
      const token = jwt.sign({id: id},SECRET);
      res.json({result: true, token: token});
    }else{
      //로그인 실패 응답
      res.json({result:false, message:'로그인 정보가 올바르지 않음!'});
    }
  } catch (error) {
    console.log(error);
  }
});

app.post('/token', (req, res) => {
  console.log(req.headers);
  if (req.headers.authorization) { // Bearer token_string
   const token = req.headers.authorization.split(''); // ['Bearer', 'token_string']
   try{
    const result = jwt.verify(token[1],SECRET);
    console.log('result >>', result);
    if(result.id === userInfo.id){
      res.json({result:true, name: userInfo.name});
    }
   }catch(error){
    console.error(error);
    res.json({result: false, message: '인증된 회원이 아님'})
   }
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
