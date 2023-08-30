// TODO: DB(mysql) 연결
const mysql = require('mysql');
// TODO: 모델 코드

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'codingon',
})

exports.postSignUp = (user,cb) => {
    conn.query(

        `INSERT INTO user VALUES(NULL, "${user.userData.id}", "${user.pw}","${user.name}")`,
        (err, rows) => {
            if(err) {
                throw err;
            
            }
            cb(rows);
        }
    )
}

exports.signin = (user,cb) => {
    conn.query(
        `SELECT * FROM user WHERE userid = "${user.userid}" AND pw = "${user.pw}"`,
        (err, rows) => {
            if(err) {
                throw err;
            }
            cb(rows);
        }
    )
}


exports.profile = (user, cb) => {
    conn.query (
        `SELECT * FROM user WHERE userid = "${user}" `,
        (err, rows) => {
            if(err){
                throw err;
            }
            cb(rows);
        }
    )
}


exports.editProfile = (user, cb) => {
    conn.query (
        `SELECT * FROM user WHERE userid = "${user.userid}", name = "${user.name}",pw = "${user.pw}" WHERE userid = "${user.userid}
         `,
        (err, rows) => {
            if(err){
                throw err;
            }
            cb(rows);
        }
    )
}

exports.deleteUser = (user, cb) => {
    conn.query (
        `DELETE FROM user WHERE userid = "${user.userid}" `,
        (err, rows) => {
            if(err){
                throw err;
            }
            cb(rows);
        }
    )
}