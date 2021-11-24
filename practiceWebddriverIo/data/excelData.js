var xlsx = require("xlsx")
var wb = xlsx.readFile("./data/testSpecificData.xlsx")
// console.log(wb);
// console.log(wb.SheetNames); //[ 'Sheet1' ]
var ws = wb.Sheets[ 'Sheet1' ]
// console.log(ws);
var data = xlsx.utils.sheet_to_json(ws)

// // module.exports.data = xlsx.utils.sheet_to_json(ws)
module.exports = data

// console.log(data);
// console.log(data[0].url);
// console.log(data[1].Password);

