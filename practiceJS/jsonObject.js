var person = {
    fname : "ram",
    lname : "kumar",
    address : "INDIA",
    yoe : 10,
    valueNull: null,
    valueUndefined : undefined,
    skillset : ["javascript", "java", "selenium", "webdriverIO"],
    introduction : function () {
        console.log("hello my name is "+this.fname);
    },
}

// console.log(person);
var jsonObject = JSON.stringify(person)   //javascriptobjet into jasonObject
console.log(jsonObject);

console.log("=++++++++++++conversion+++++++++++++++++");
var jsobject = JSON.parse(jsonObject)  ////  jasonObject into javascriptobjet
console.log(jsobject);