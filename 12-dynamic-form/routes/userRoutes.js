const express = require('express');
const router = require('../controllers/userController');
const userController = express.Router();
const PORT = 8090;

router.set('view engine', 'ejs');
router.set('/views', 'views');
router.use(express.urlencoded({ extended: true })); 
router.use(express.json());
router.get('/', userController.showForm);
router.post('/axios', userController.register);

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