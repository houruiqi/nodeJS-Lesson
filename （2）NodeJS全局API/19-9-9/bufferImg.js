const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"/1.jpg");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    var imgStr = "data:image/jpg;base64,"+base64Data;
    var htmlStr = "<!DOCTYPE html><head></head>"+"<body><img src='"+imgStr+"'/></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
    //console.log(base64data);
}).listen(8081);

console.log("server is listening 8081");