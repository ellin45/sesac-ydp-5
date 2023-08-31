const path = require('path');
const Sequelize = require('sequelize');

// 환경 변수 또는 기본값을 사용
const env = process.env.NODE_ENV || 'development';

// path.join을 사용하여 경로를 안정적으로 합칩니다.
const config = require(path.join(__dirname, '../config/config.json'))[env];
 
// 빈 db 객체 생성
const db = {};

// Sequelize 객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize(
  config.database, // sesac
  config.username, // user
  config.password, // 1234
  config // {}
);

// db = { sequelize: sequelize, Sequelize: Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// !! models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor: 모델(테이블) }
db.User = require('./User')(sequelize, Sequelize);

// db 객체 내보냄 (모듈화 내보냄. 다른 곳에서 db 객체 사용 가능)
module.exports = db;
