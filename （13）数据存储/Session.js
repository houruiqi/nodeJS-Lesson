const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    switch(pathName){
        case '/':
            showLogin(res);
            break;
        case '/login':
            loginIn(req,res);
            break;
        case '/home':
            showHome(req,res);
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
}).listen(8081);
console.log("server is listening 8081");
function showLogin(res){
    var filePath = path.join(__dirname,"login.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
var sessions={};
function loginIn(req,res){
    var formData="";
    req.on("data",function(chunk){
        formData+=chunk;
    })
    req.on("end",function(){
        // console.log(formData);
        var formObj=querystring.parse(formData);
        // console.log(formObj);
        if(formObj.username=="admin"&&formObj.pwd=="admin"){
            var session = {
                sessionId:(new Date()).getTime()+Math.random(),
                exipire:(new Date()).getTime()+ 3600000,
                username:"admin"
            }
            sessions[session.sessionId] = session;
            res.setHeader("Set-Cookie",'sessionId='+session.sessionId);
            showList(res);
        }
        else{
            showLogin(res);
        }
    })
}
function showList(res){
    var filePath = path.join(__dirname,"list.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showHome(req,res){
    // console.log(req.headers["cookie"]);
    var cookie = req.headers["cookie"];
    // console.log(cookie);
    if(cookie == undefined){
        showLogin(res);
    }
    var cookieArr = cookie.split(";");
    var cookieObj = {};
    for(var i = 0;i<cookieArr.length;i++){
        var cookiePair = cookieArr[i].split("=");
        cookieObj[cookiePair[0].trim()] = cookiePair[1];
    }
    // console.log(cookieObj);
    var sessionId = cookieObj.sessionId;
    for(var key in sessions){
        if(key == sessionId){
            var session = sessions[key];
            if((new Date()).getTime()<session.exipire){
                showList(res);
            }else{
                showLogin(res);
            }
            console.log(session);
        }
    }
    
}