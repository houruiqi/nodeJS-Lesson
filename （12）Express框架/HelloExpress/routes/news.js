var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
//   自己写的
  router.get('/list',function(req,res,next){
    res.end('news');
  })
  module.exports = router;