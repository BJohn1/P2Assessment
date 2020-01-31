var express = require('express');
var router = express.Router();
const items = require("../data/items")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Project 2 Assessment: To Do List',
    items,
   });
});

router.post('/', (req,res)=>{
  items.push({item: req.body.todoItem, done: false})
  console.log(items)
  res.redirect('/')
})

router.delete('/:id', (req,res)=>{
  items.splice(req.params.id,1)
  console.log(items)
  res.redirect('/')
});

module.exports = router;
