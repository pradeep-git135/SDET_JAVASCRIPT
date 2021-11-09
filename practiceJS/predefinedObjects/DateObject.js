var d = new Date()

// console.log("date : "+d.getDate());

// console.log("day: "+d.getDay());

// console.log("year : "+d.getFullYear());

// console.log("month : "+ d.getMonth());

// console.log("fullDate : "+d.toDateString().split(" ")[2]);

var date = d.toDateString().split(" ")[2]
var day = d.toDateString().split(" ")[0]

console.log(date+" : "+ day);

// // console.log(d.setDate(31 ));
// // console.log(d);

d.setFullYear(2022,1,32)
// console.log(d);
// console.log(d.);