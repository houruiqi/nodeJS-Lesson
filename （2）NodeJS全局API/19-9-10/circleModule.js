function circleFun(r){
    function Circumference(){
        var cum = r*2*Math.PI;
        return cum;
    }
    function area(){
        var area = Math.PI*r*r;
        return area;
    }
    return{circumference:Circumference,area:area}    
}
module.exports={
    circleFun:circleFun
}