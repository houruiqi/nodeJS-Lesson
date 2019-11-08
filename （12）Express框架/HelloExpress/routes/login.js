var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
  });
  router.get('/list', function(req, res, next) {
    res.render('list1', { title: 'Express' });
  });
  router.get('/addlist', function(req, res, next) {
    res.render('addChapter', { title: 'Express' });
  });
  
  module.exports = router;