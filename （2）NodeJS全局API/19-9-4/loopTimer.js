function loop(){
    console.log('I will loop forever!');
}
var t =setInterval(loop,500);
setTimeout(function(){
    console.log("Game over");
    clearInterval(t);
    process.exit();
},5000);

