const userModel = require('../model/userModel');

exports.register = (req, res) => {
    const userData = req.body; // 클라이언트로부터 전송된 데이터

    if (userData.id === 'chaelim' && userData.pw === '1234') {
        return res.json({ id: userData.id, pw: userData.pw });
    } else {
        res.status(400).send('아이디나 비밀번호가 잘못되었습니다.');
    }
};



exports.showForm = (req, res) => {
  res.render("prac2");
};

exports.login = (req, res) => {
    let users = userData.split('//')
    for(let i=0; i<users.length; i+=3){
        if(req.body.id == users[i] && req.body.pw === users[i+1]){
            res.json({username : users[i+2]})
        }
    }
}