const express = require('express');
const router = require('../../controller/comment');
const router = express();
const PORT = 8090;

router.set('view engine', 'ejs');
router.set('/views', 'views');
router.use(express.urlencoded({ extended: true })); 
router.use(express.json());

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