var base64Str = "emhhbmdzYW46MTIzNDU2";
var buf2 = Buffer.from(base64Str,"base64");
console.log(buf2.toString("utf8"));