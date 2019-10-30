const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == '/'){
        showIndex(res);
    }
    else if(pathName == '/list'){
        showList(res);
    }
    else if(pathName.indexOf("/image.png")>=0){
        showImg(res);
    }
    else if(pathName == "/upload" && req.method == "POST"){
        uploadFile(req,res);
    }
    else if(pathName.indexOf("upload")>=0 && req.method == "GET"){
        var imgSrc = path.join(__dirname,pathName);
        var imgContent = fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(imgContent);
        res.end();
    }
    else if(pathName == '/getlist'){
        var files = fs.readdirSync(__dirname+'/upload');
        var fileStr = JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8081);

function showIndex(res){
    var indexPath = path.join(__dirname,'./index.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showImg(res){
    var imgPath = path.join(__dirname,'./image.png');
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(imgContent);
    res.end();
}
function showList(res){
    var indexPath = path.join(__dirname,'./list.html');
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function uploadFile(req,res){
    var dataStr = "";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr += chunk;
    })
    req.on("end",function(){
        var totalArr = dataStr.split('\r\n');
        var bufArr = totalArr.slice(4,totalArr.length-2);
        var imgData = "";
        for(var i = 0;i<bufArr.length;i++){
            imgData += bufArr[i];
        }
        var buf = Buffer.from(imgData,"binary");
        var timer = (new Date()).getTime();
        fs.writeFileSync(__dirname+"\\upload\\file.png",imgData,{'encoding':'binary'});
        res.end('success');

        // console.log(dataStr);
    })
}
/**
 * 地址栏中发起http请求
 * 超链接发起http
 * 提交表单发起请求 get请求 post请求均可
 * ajax发起请求，get请求 post请求均可
 * <link href=""> get请求
 * <scrpit src="">get请求
 * <img src="">get请求
 * 
 * get请求，向服务器传递的参数都在url里面呈现
 * http://localhost:8081/detail?newId=1&newType=1
 * var urlObj = url.parse(req.url,true)
 * urlObj.query.newId
 * 
 * post请求，数据存储在请求体里面，提交表单
 * req.on("data",function(chunk){})
 * req.on("end",function(){})
 */