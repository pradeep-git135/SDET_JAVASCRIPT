function Person (fname, lname, address) {
    this.fname = fname
    this.lname = lname
    this.address = address
}
Person.prototype.yoe = 3
var personX  = new Person("akshatha", "Samrit", "India")
console.log(personX.yoe);

// var personX  = new Person(fname, lname, address)
// console.log(personX);
// console.log(personX.address);
// console.log(personX["lname"]);

// by using obkject.create() method
//  var inheritedObj = Object.create(personX)
//  console.log(inheritedObj);
 