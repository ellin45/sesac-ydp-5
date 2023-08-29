const express = require('express');
const userController = require('../controllers/userController'); // userController가 실제로 컨트롤러라면.
const router = express.Router();

// 라우터를 위한 미들웨어
router.use(express.urlencoded({ extended: true })); 
router.use(express.json());

// 라우트 설정
router.get('/', userController.showForm);
// router.post('/axios', userController.register);
router.post('/practice1',userController.practice1);
// router.post('/ajax', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });

// router.post('/axios', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });

// router.post('/fetch', (req, res) => {
//     console.log(req.query);
//     res.send(req.query);
// });

module.exports = router;
