// var a = 10;
// var a = "string"

// console.log(a);

// let b = "value"
// b = 20
// // let b = 10
// console.log(b);  //Identifier 'b' has already been declared

// const c = 100;
// console.log(c);  //100
// const c = 200     //SyntaxError: Identifier 'c' has already been declared
// console.log(c);  //TypeError: Assignment to constant variable


for (var index = 0; index < 6; index++) {
    console.log(index);  // 0,1,2,3,4,5
}
console.log(index);  //5    //undefined   //error:not defined


console.log("let---let---let---let---let---let---let---let---let---let---");

let i
for (let i = 0; i < 6; i++) {
    console.log(i);  // 0,1,2,3,4,5
}
console.log(i);   //ReferenceError: i is not defined