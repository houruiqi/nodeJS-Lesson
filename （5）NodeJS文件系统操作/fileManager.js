const fs = require("fs");
const path = require("path");
var list = ["请输入要创建的文件夹：","请输入要创建的文件：","请输入要删除的文件："];
console.log(list[0]);
// process.stdin.on("data",function(data){
//     var cmd = data.toString();
//     var cmdArr = cmd.split(" ");
//     switch(cmdArr[0]){
//         case "mkdir":
//             fs.mkdirSync(cmdArr[1].slice(0,-2));
//             break;
//         case "touch":
//             console.log(list[1]);
//             var str = "/filedir/"+cmdArr[1];
//             var filePath = path.join(__dirname,"/filedir/file.txt");
//             fs.writeFileSync(filePath,"hello node");
//             break;
//         case "delete":
//             var filePath = path.join(__dirname,"/filedir/file.txt");
//             fs.unlinkSync(filePath);
//             break;
//         default:
//             console.log("something error");
//             break;

//     }
// });
var i = 0;
process.stdin.on("data",function(data){
    if(i == 3){
        process.exit();
    }
    else{
        var cmd = data.toString();
        var cmdArr = cmd.split(" ");
        if(i == 0){
            fs.mkdirSync(cmdArr[1].slice(0,-2));
        }
        else if(i == 1){
            console.log(list[1]);
            var str = "/filedir/"+cmdArr[1];
            var filePath = path.join(__dirname,str);
            fs.writeFileSync(filePath,"hello node");
        }
    }
})
