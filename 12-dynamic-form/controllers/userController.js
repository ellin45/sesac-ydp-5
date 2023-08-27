const userModel = require('../model/userModel');


exports.register = async (req, res) => {
    try {
        const userData = User.create(req.body);  // 데이터 저장을 위한 로직 호출
        res.send(userData);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.showForm = (req, res) => {
    res.render('prac2');
};
