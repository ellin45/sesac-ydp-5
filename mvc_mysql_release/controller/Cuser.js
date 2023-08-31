// TODO: 컨트롤러 코드
const {User} = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = async(req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
}

exports.postSignin = async(req, res) => {
  const { userid, pw } = req.body;
  
  try {
    const result = await User.findOne({
      where: {userid, pw},
    });
    res.send(result);
    console.log(result);
  }catch(err){
    res.send(false);
    console.log(result);

  }
};
exports.postSignup = async(req, res) => {

  const {userid, name, pw} = req.body;
  const result = await User.create({
    userid,
    name,
    pw
  });
    res.send(result);
};



exports.profile = async(req, res) => {
  const { userid } = req.body;
  try {
    const result = await User.findOne({
      where: { id: userid },
    });

    if (result) {
      res.render('profile', {
        user: {
          id: result.id,
          userid: result.userid,
          pw: result.pw,
          name: result.name,
        },
      });
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};


exports.editProfile = async(req, res) => {
  User.editProfile(req.body, (result)=> {
    res.send(result);
  })
};

exports.deleteUser = async(req, res) => {

  const { id } = req.body;
  const result = await User.destroy({
    where : {id : id},
  });
  res.send(true);
};
