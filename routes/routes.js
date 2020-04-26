const router = require('express').Router();
const Todo = require('../models/todos');

router.get('/',function(req,res){
    res.render('index',{});
});

router.post("/todos",function(req,res){
    //res.json(req.body);
    let newTodo = new Todo({description: req.body.description});
   
    newTodo.save().then(function(result){
        console.log(result);
        res.redirect('/');
    });
});

module.exports = router;