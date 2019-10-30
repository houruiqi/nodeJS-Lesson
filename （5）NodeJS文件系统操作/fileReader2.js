const fs = require("fs");
const http = require("http");
const path = require("path");
var fileName = process.argv[2];
http.createServer(function(req,res){
    if(fileName == undefined){
        //fd文件描述符
        fs.open(process.argv[1],"r+",function(err,fd){
            //statSync文件的相关信息
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buffer){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.open(pathName,"r+",function(err,fd){
                //statSync文件的相关信息
                var statObj1 = fs.statSync(process.argv[1]);
                var buf1 = Buffer.alloc(statObj1.size);
                fs.read(fd,buf1,0,statObj1.size,0,function(err,by,buffer){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf1.toString());
                        fs.closeSync(fd);
                    }
                })
            })
            
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }
}).listen(8080);
console.log("server is listening 8080");