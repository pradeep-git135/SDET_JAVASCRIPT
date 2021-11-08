var person1 = {
    fname : "abc",
    lname : "pqr"
}
var person2 = {
    address : "INDIA"
}

person2.__proto__ = person1

console.log(person2);
// console.log("##################################################");
// console.log(person2.fname);
// person2["fname"]
// console.log(person2.address);

// iterate over an object
for (var property in person2) {
    console.log("all the properties : "+person2[property]);
}

for (const key in person2) {
    if (person2.hasOwnProperty.call(person2, key)) {
        const element = person2[key];
        console.log("hasownProperties :  "+element);
        
    }
}