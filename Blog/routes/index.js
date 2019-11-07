var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
  
});
router.post('/list',function(req,res,next) {
  console.log(req.body);
  console.log(data.chapterList);
  // console.log(data.users[0].username);
  if(req.body.name == data.users[0].username && req.body.pwd == data.users[0].password){
    res.render('list',{chapterList:data.chapterList});

  }
  else{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("用户名密码不正确");
  }
})


module.exports = router;
