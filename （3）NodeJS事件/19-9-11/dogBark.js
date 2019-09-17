var dog = require("./dog.js");
var dog1 = new dog.Dog("taidi","5");
var dog2 = new dog.Dog("zangao","7");
dog1.on("bark",function(){
    this.energy = this.energy-1;
    console.log(this.dogName+" barked! "+"energy:"+this.energy);
    if(this.energy == 0){
        process.exit();
    }
})
dog2.on("bark",function(){
    this.energy = this.energy-1;
    console.log(this.dogName+" barked! "+"energy:"+this.energy);
    if(this.energy == 0){
        process.exit();
    }
})
/**
 * function barkFun(){
 *  console.log(this.name+"barked!!!");
 *  console.log(this.energy);
 * }
 * dog1.on("bark",barkFun);
 * var intervalId = serTnterval(function(){
 *  if(dog1.energy>=0){
 *      dog1.emit("bark");
 *  }
 *  else{
 *      clearTnterval(intervalId);  //intervalId.unref();
 *  }
 * dog1.energy = dog1.energy - 1;
 * })
 */