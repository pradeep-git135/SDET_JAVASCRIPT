//standard function 
// function demo1 () {
//     console.log("this is a demo1 fxn");
// }
// demo1()

// function display (fname, lname) {
//     console.log(fname + ":" +lname );
//     console.log(arguments);
    
// }
// display("pradeep", 10, 20, true, null, undefined)

//function expression
// var demo1 = function  () {
//     console.log("this is a demo1 fxn");
//     console.log("this belongs to demo1 fxn args"+arguments);
//     console.log(arguments);
    
// }
// demo1()

// var display = function  (fname, lname) {
//     console.log(fname + ":" +lname );
//     console.log("this belongs to display fxn args"+arguments);    // arguments
//     console.log(arguments);
// }
// display("pradeep", 10, 20, true, null, undefined)

//anonymous function

// (anonymous function)()

// (function  (name, skill, boolResult) {
//     console.log(name);
//     console.log(skill);
//     console.log(boolResult);
//     console.log("this is a demo1 anonymous function fxn") 
// })("pradeep", "javascript", true)

// arrow functions:
 var arrowfunction = () => console.log("arrow function");
 arrowfunction()

 var arrowfunction2 = (parameter1, parameter2) => {
     console.log(parameter1);
     console.log("arrow function");
     console.log("more number of statements");
     console.log(parameter2);

}
arrowfunction2("value1", "value2")