var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 自己写的
// render 页面渲染
// 读取ejs文件内容，将文件中占位符（ <%=userName%>）
// 替换成后端的数据（render的第二个参数）
// 在将文件中的代码内容响应到网页中去
// router.get('/list',function(req,res,next){
//   res.render('list',{userName:"zhangsan",newList:[{'newId':1,'newTitle':'hshsh'},{'newId':2,'newTitle':'zsfvbsdfbsd'}]});
// })
// router.get('/index/list',function(req,res,next){
//   res.end('list');
// })

router.get('/', function(req, res, next) {
  res.render('chapterList', { title: 'Express' });
});
router.get('/detail', function(req, res, next) {
  res.render('chapter', { title: 'Express' });
});

module.exports = router;
