var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const url = require("url");
var dbconfig = require('../config/dbconfig.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 自己写的
// render 页面渲染
// 读取ejs文件内容，将文件中占位符（ <%=userName%>）
// 替换成后端的数据（render的第二个参数）
// 在将文件中的代码内容响应到网页中去


// router.get('/', function(req, res, next) {
//   res.render('chapterList', { title: 'Express' });
// });
// router.get('/detail', function(req, res, next) {
//   res.render('chapter', { title: 'Express' });
// });
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res, next) {
  console.log(req.body);
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from users",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      // console.log(result);
      // console.log(result[0].usename);
      // console.log(req.body.name);
      if(req.body.name == result[0].usename && req.body.pwd == result[0].pwd){
        con.query("select * from chapters",function(err,result){
          if(err){
            console.log(err);
          }
          else{
            console.log(result);
            res.render('list',{result:result});
          }
        })
        
      }
    }
  });

})
router.get('/addChapter',function(req,res,next){
  res.render('addChapter');
  var con = mysql.createConnection(dbconfig);
  con.connect();
  router.post('/list',function(req, res, next) {
    console.log(req.body);
    con.query("insert into chapters(title,content) value(?, ?)",[req.body.title,req.body.content],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      con.query("select * from chapters",function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result);
          res.render('list',{result:result});
        }
      })
    }
  })
  });
})

router.get('/list', function(req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('list',{result:result});
    }
  })
});
router.get('/',function(req,res,next){
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapterList',{result:result});
    }
  })
})
router.get('/chapter',function(req,res,next){
  var urlObj = url.parse(req.url,true);
  var id= urlObj.query.id;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('chapter',{result:result,id:id});
    }
  })
})
module.exports = router;
