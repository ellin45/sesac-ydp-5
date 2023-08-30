// TODO: 컨트롤러 코드
const { User } = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = async(req, res) => {
  res.render('signup');
};

exports.postSignup = async(req, res) => {

  const {userid, pw, name} = req.body;
  const result = await User.create({
    userid,
    pw,
    name
  });
    res.send(result);
};


exports.postSignin = async(req, res) => {
  const { userid, pw } = req.body;
  
  try {
    const result = await User.findOne({
      where: {userid, pw},
    });
    res.send(result);
  }catch(err){
    res.send(false);
  }
};

exports.profile = async(req, res) => {
  const {userid} = req.body;
  const result = await User.findOne({
    where: {id: userid},
  });
  
  res.send('profile', { user: {
    user: {
      id:result.id,
      userid: result.userid,
      pw: result.pw,
      name: result.name,
    }
  } });
 
};

exports.editProfile = async(req, res) => {
  const { id, userid, pw, name } = req.body;
  const result = await User.update(
    {
      userid,
      pw,
      name,
    },
    {
      where: {
        id,
      },
    }
  );
  res.send(true);
};

exports.deleteUser = async(req, res) => {

  const { id } = req.body;
  const result = await User.destroy({
    where : {id : id},
  });
  res.send(true);
};
