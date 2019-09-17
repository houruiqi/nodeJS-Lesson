const events = require("events");
const EventEmitter = events.EventEmitter;
function Dog(dogName,energy){
    EventEmitter.call(this);
    this.dogName = dogName;
    this.energy = energy;
    var that = this;
    var t = setInterval(function(){
        that.emit("bark");
    },1000)
}
Dog.prototype.__proto__ = EventEmitter.prototype;
module.exports={
    Dog:Dog
}