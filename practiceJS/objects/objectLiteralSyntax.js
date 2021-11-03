var person = {
    fname : "ram",
    lname : "kumar",
    address : "INDIA",
    yoe : 10,
    skillset : ["javascript", "java", "selenium", "webdriverIO"],
    introduction : function () {
        console.log("hello my name is "+this.fname);
    },
    biodata : {
        fname : "ram",
        lname : "kumar",
        address : "INDIA",
        yoe : 10,
        skillset : ["javascript", "java", "selenium", "webdriverIO"],
        introduction : function () {
            console.log("hello my name is "+this.fname);
        }
    }

}

// by using dot (.) or brackect [] notations we can access properties of an object
console.log(person.fname); //by using dot notation

console.log(person["fname"]); //by using bracket notation

person.introduction()