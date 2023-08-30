// TODO: DB(mysql) 연결
const mysql = require('mysql');
// TODO: 모델 코드

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'codingon',
})

exports.postSignUp = (user,cd) => {
    conn.query(

        `INSERT INTO user VALUES(NULL, "${userData.id}", "${userData.pw}","${userData.name}",)`,
        (err, rows) => {
            if(err) {
                console.log(err);
            }
            cd(rows);
        }
    )
}

exports.signin = (user,cb) => {
    conn.query(
        `SELECT * FROM user WHERE userid = "${userData.id}" AND pw = "${userData.pw}"`,
        (err, rows) => {
            if(err) {
                console.log(err);
            }
            cb(rows);
        }
    )
}


exports.profile = (user, cb) => {
    conn.query (
        `SELECT * FROM user WHERE userid = "${userData}" `,
        (err, rows) => {
            if(err){
                console.log(err);
            }
            cb(rows);
        }
    )
}


exports.editProfile = (user, cb) => {
    conn.query (
        `SELECT * FROM user WHERE userid = "${userData.id}", name = "${userData.name}",pw = "${user.pw}" WHERE userid = "${user.user.id}
         `,
        (err, rows) => {
            if(err){
                console.log(err);
            }
            cb(rows);
        }
    )
}

exports.deleteUser = (user, cd) => {
    conn.query (
        `DELETE FROM user WHERE userid = "${user.userid}" `,
        (err, rows) => {
            if(err){
                console.log(err);
            }
            cd(rows);
        }
    )
}