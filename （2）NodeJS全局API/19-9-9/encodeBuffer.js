var userName = process.argv[2];
var password = process.argv[3];

console.log("用户名：%s 密码：%s",userName,password);
if(userName != undefined && password != undefined){
    var loginStr = userName+":"+password;
    var buf1 = Buffer.from(loginStr,"utf8");
    var base64Str = buf1.toString("base64");
    console.log("base64加密：%s",base64Str);
}
else{
    console.log("用户名密码不能为空");
}