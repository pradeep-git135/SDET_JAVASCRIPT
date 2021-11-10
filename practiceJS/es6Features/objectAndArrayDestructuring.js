// // var person = {
// //     fname : "ram",
// //     lname : "kumar",
// //     address : "INDIA",
// //     yoe : 10,
// //     skillset : ["javascript", "java", "selenium", "webdriverIO"]
// // }

// // // console.log(fname);
// // // console.log(address);


// // // var {fname,address} = person
// // // console.log(fname);
// // // console.log(address);

// var {fname:firstName,address:location,yoe:no_of_experience} = person
// console.log(firstName);
// console.log(location);
// console.log(no_of_experience);
// // console.log(fname);     ReferenceError: fname is not defined





// // // var firstNmae = person.fname
// // // console.log(firstNmae);


// ARRAY DESTRUCTURING

var a = [1, "hello", true, null, undefined, "world", "javascript"]

var [x,y,...z] = a
console.log(x,y);
// console.log(j);
console.log(z);
var [s,b] = z
console.log(s);
console.log(b);


// var [x,y] = a

//skipping the values in between
// var [x,,,y] = a
// console.log(x,y);



