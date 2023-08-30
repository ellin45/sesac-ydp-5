// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req,res) =>{
    res.render('index');
};

exports.signup = (req,res) => {
    res.render('signup');
};

exports.postSignup = (req,res) => {

    User.postSignUp(req.body, (result)=>{
        res.render(result);
    })
};

exports.signin = (req,res) => {
    res.render('signin');
};

exports.postSignin = (req,res) => {

    User.signin(req.body, (result)=>{
        res.render(result);
    })
};


exports.profile = (req,res) => {

    User.profile(req.body, (result)=>{
        res.render(result);
    })
};

exports.editProfile = (req,res) => {

    User.editProfile(req.body, (result)=>{
        res.render(result);
    })
};

exports.deleteUser = (req,res) => {

    User.deleteUser(req.body, (result)=>{
        res.render(result);
    })
};
