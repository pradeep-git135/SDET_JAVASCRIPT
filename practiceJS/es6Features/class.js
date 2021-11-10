
module.exports =  class demo {
    constructor(param1,param2,param3){
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }
    a = 10;
    function1() {
        console.log("from fxn 1");
    }
    display(){
        console.log("i am from display of demo");
    }
}


// var d1 = new demo("value1","value2", "value3")
// // d1.function1()  //TypeError: d1.function1 is not a function
// demo.function1()
// console.log(d1.param1);