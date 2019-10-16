const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
var data = require("./data.js");
var user = require("./userdata.js");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    switch(pathName){
        case '/list':
            showIndex(res);
            break;
        case '/getfilelist':
            showList(res);
            break;
        case '/detail':
            showChapter(res);
            break;
        case '/login':
            showLogin(res);
            break;
        case '/check':
            startCheck(res);
            break;
        case '/showlist':
            showBList(res);
            break;
        case '/backstageadd':
            showBackAdd(res);
            break;
        case '/add':
            backAdd(req,res);
            break;
        case '/del':
            backDel(urlObj,res);
            break;
        case '/favicon.ico':break;
        default:
            var file = path.extname(__dirname+pathName);
            var fileContent = fs.readFileSync(__dirname+pathName);
            switch(file){
                case '.jpeg':
                case '.jpg':
                    res.writeHead(200,{"Content-Type":"image/jpg"});
                    res.write(fileContent);
                    res.end();
                    break;
                case '.png':
                    res.writeHead(200,{"Content-Type":"image/png"});
                    res.write(fileContent);
                    res.end();
                    break;
                case '.js':
                    res.writeHead(200,{"Content-Type":"text/javascript"});
                    res.write(fileContent);
                    res.end();
                    break;
                case '.css':
                    res.writeHead(200,{"Content-Type":"text/css"});
                    res.write(fileContent);
                    res.end();
                    break;
                default: ;
            }
    }
}).listen(8083);
console.log("server is listening 8083");

function showIndex(res){
    var indexPath = path.join(__dirname,"chapterList.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showList(res){
    var listStr = JSON.stringify(data);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}
function showChapter(res){
    var indexPath = path.join(__dirname,"chapter.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showLogin(res){
    var indexPath = path.join(__dirname,"login.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function startCheck(res){
    var userStr = JSON.stringify(user);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(userStr);
    res.end();
}
function showBList(res){
    var indexPath = path.join(__dirname,"list.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showBackAdd(res){
    var indexPath = path.join(__dirname,"addChapter.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function backAdd(req,res){
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    })
    req.on("end",function(){
        var dataObj = querystring.parse(strData);
        var newObj = {
            "chapterId": data.length+1,
            "chapterName": dataObj.chapterName,
            "imgPath": "images/1442457564979540.jpeg",
            "chapterDes": "注定，有些路，只能一个人走；有些事，",
            "chapterContent": dataObj.chapterContent,
            "publishTimer": "2019-08-19",
            "author": "admin",
            "views": 1022
        };
        data.push(newObj);
        var dataStr = JSON.stringify(data);
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write("dataStr");
        res.end();
    })
}
function backDel(urlObj,res){
    var num = urlObj.query.chapterId;
    for(var i = 0;i<data.length;i++){
        if(num == data[i].chapterId){
            data.splice(i,1);
        }
    }
    for(var j = 0;j<data.length;j++){
        data[j].chapterId = j+1;
    }
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("success");
    res.end();
}
