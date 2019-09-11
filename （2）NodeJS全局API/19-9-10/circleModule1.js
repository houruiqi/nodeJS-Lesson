// var r = process.argv[2];

function Circumference(r){
    var cum = r*2*Math.PI;
    return cum;
}
function area(r){
    var area = Math.PI*r*r;
    return area;
}
var obj = {circumference:Circumference,area:area};
module.exports= obj