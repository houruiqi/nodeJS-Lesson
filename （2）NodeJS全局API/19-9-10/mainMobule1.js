var circleModule = require("./circleModule1.js");
var r = process.argv[2];
console.log("圆的半径："+r);
console.log("圆的周长："+circleModule.circumference(r));
console.log("圆的面积："+circleModule.area(r));