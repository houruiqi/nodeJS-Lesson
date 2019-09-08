if(process.argv[2] == undefined){
    console.log("命令行参数错误");
}
else if(process.argv[2] == "-h"){
    console.log("命令行参数为算术运算式");
}
else{
    var sum = eval(process.argv[2]);
    //console.log(sum);
    console.log(process.argv[2]+"="+sum);
}