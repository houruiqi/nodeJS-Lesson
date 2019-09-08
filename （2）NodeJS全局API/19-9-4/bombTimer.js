function Bomb(message){
    this.message = "bomb!!!";
}
Bomb.prototype.explode = function(){
    console.log(this.message);
}
var boo = new Bomb();
setTimeout(function(){
    boo.explode();
},2000);
