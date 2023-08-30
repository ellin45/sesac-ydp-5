const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
    // [before]
    //   res.render('visitor', { data: Visitor.getVisitors() });
    // [after]
    // console.log(Visitor.getVisitors())

    Visitor.getVisitors((result)=>{
        console.log('controller >> ', result)
        res.render('visitor', {data: result});
    })

    
};



exports.postVisitor = (req, res) => {
    console.log(req.body);

    Visitor.postVisitor(req.body, (insertId) => {
        console.log('controller >> ', insertId);
        res.send({id: insertId, name : req.body.name, comment: req.body.comment})
    })
}

exports.deleteVisitor = (req, res) => {
    console.log(req.body);
    const { id } = req.body;

    Visitor.deleteVisitor(id, (result) => {
        console.log('controller >>', result);
        res.send(result);
    })
}

exports.getVisitor = (req, res)=>{
    console.log(req.params);
    // GET/visitor/:id param 썼을때
    const { id } = req.params;

    Visitor.getVisitor(id,(result) =>{
        console.log(result);
        res.send(result);
    })

    // res.send('임시 응답!');
}

exports.updateVisitor = (req, res) => {
    console.log(req.body); // {id: x, name: x, comment: x}
  
    Visitor.updateVisitor(req.body, () => {
      res.send({ isUpdated: true });
    });
  };