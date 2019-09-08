var i = 0;
var arr = ["Name:","Email:","qq:","mobile："];
var brr = [];
var list = {};
console.log(arr[i]);
process.stdin.on("data",function(data){
    i++;
    if(i == 4){
        brr[i-1]=data.toString();
        for(var key in arr){
            list[arr[key]] = brr[key];
        }
        console.log(list);
        process.exit();
    }
    else{
        console.log(arr[i]);
        brr[i-1]=data.toString();
    }
})