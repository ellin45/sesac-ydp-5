// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   console.log('controller getVisitors >> ', result);
  //   res.render('visitor', { data: result });
  // });

  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

//create
exports.postVisitor = async (req, res) => {
  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller postVisitor >> ', insertId);
  //   res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  // });

  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  // console.log(result); // create 메서드가 실행된 결과
  res.send(result);

};

//delete
exports.deleteVisitor = async(req, res) => {
  // [before]
  // const { id } = req.body;
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log(result);
  //   res.send(result);
  // });
  const { id } = req.body;
  const result = await Visitor.destroy({
    where : {id : id},
  });
  res.send(true);
};

// read one
exports.getVisitor = async(req, res) => {
  // [before]
  // console.log(req.query); //
  // console.log(req.params); // { id: 5 }
  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   res.send(result);
  // });

  // [after]
  const {id} = req.params;
  const result = await Visitor.findOne({
    where : {id : id},
  })
  console.log(result);
  res.send(result);
};

exports.editVisitor = (req, res) => {
  // 여기서 req.body에는 id, name, comment가 있다.
  // 이 req.body와 콜백으로 라우터 처리 -> model의 Visitor 모듈을 이용
  Visitor.editVisitor(req.body, (result) => {
    // DB에서 정상적으로 처리되면 true값이 result에 담김. 이걸 send
    res.send(result);
  });
};

exports.updateVisitor = async(req, res) => {
  await Visitor.update({

    name:req.body.name,
    comment: req.body.comment,

  },{
    where : {id: req.body.id},
  });
  res.send({isUpdated : true});
};