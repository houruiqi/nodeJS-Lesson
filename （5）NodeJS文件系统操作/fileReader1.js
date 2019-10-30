// const fs = require("fs");
// const http = require("http");
// const path = require("path");
// var file = process.argv[2];
// http.createServer(function(req,res){
//     if(file == undefined){
//         var filePath1 = path.join(__dirname,"/fileReader1.js");
//         fs.readFile(filePath1,function(err,data){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.write(data);
//                 res.end();
//             }
//         });
//     }
//     else{
//         var filePath = path.join(__dirname,file);
//         var flag = fs.existsSync(filePath);
//         if(flag == true){
//             fs.readFile(filePath,function(err,data){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     res.write(data);
//                     res.end();
//                 }
//             });
//         }
//         else if(flag == false){
//             res.write("<p>404</p>");
//             res.end();
//         }
//     }
    
// }).listen(8080);
// console.log("server is listening 8080");




//老师上课的代码
const fs = require("fs");
const http = require("http");
const path = require("path");
var fileName = process.argv[2];
http.createServer(function(req,res){
    if(fileName == undefined){
        var str = "";
        /**
         * fs.readFile() 是一个异步方法，执行到该句的时候不会等待
         * 文件读取完成，就直接执行后面的语句
         * 回调函数是等到文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                str = data.toString();
                res.end(str);
            }
        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8080);
console.log("server is listening 8080");


