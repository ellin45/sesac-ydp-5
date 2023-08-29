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



// [추가 실습] 풀이
exports.practice1 = (req, res) => {
    // 사용자가 폼에 입력한 값
    // { userId: 'banana', userPw: '4321' }
    console.log('req.body: ', req.body);
  
    // (임시) DB로부터 가져온 회원정보
    // { realId: 'banana', realPw: '4321' };
    console.log('userModel.users: ', userModel.users);
    const userDatas = userModel.users.split('\n');
    console.log(userDatas);
  
    const users = []; // 유저 배열
    const userIds = []; // 유저 아이디 배열
    for (let user of userDatas) {
      users.push({
        realId: user.split('//')[0],
        realPw: user.split('//')[1],
        name: user.split('//')[2],
      });
      userIds.push(user.split('//')[0]);
    }
    console.log(users);
    console.log(userIds);
  
    const idx = userIds.indexOf(req.body.userId);
    if (idx >= 0) {
      console.log('아이디 있음');
      console.log(users[idx]);
      console.log(users[idx].realId);
      console.log(users[idx].realPw);
      if (users[idx].realPw === req.body.userPw) {
        console.log('비밀번호 일치');
        res.send({ userInfo: users[idx], isSuccess: true });
      } else {
        console.log('비밀번호 불일치');
        res.send({ isSuccess: false });
      }
    } else {
      console.log('아이디 없음');
      res.send({ isSuccess: false });
    }
  };