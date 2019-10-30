const http = require("http");
const path = require("path");
const querystring = require("querystring");

http.createServer(function(req,res){
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    })
    req.on("end",function(){
        console.log(strData);
        // var dataObj = querystring.parse(strData);
        // console.log(dataObj);
        // var pathName = path.join(__dirname,"/data.json");
        // var fileContent = fs.readFileSync(pathName);
        // console.log(fileContent);



    })

}).listen(8082);

 