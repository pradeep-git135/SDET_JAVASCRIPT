
const demo = require("./class")
class class2 extends demo{
    constructor(param1, param2, param3, param4, param5){
        super(param1,param2,param3)
        this.param4 = param4
        this.param5 = param5
    }
    displayParentMethod(){
        super.function1()
    }
    display(){
        console.log("i am from  display");
    }
    displaysuperMethod(){
        super.display()
    }
    static cl2(objRef){
        console.log("i am from cl2");
        objRef.cl3()     //TypeError: this.cl3 is not a function

    }
    cl3(){
        console.log("this is from cl3");
    }

}
const c2 = new class2("value1","value2","value3","value4","value5")
// c2.displayParentMethod()
// c2.displaysuperMethod()
// c2.cl3()

class2.cl2(c2)