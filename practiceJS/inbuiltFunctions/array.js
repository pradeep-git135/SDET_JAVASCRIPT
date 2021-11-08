var arr1 = [11, 21, , 31, 41, , 51]
var index = 0;

for (let index = 0; index < arr1.length; index++) {
   console.log(arr1[index]); 
    
}
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
while (index<arr1.length) {
    console.log(arr1[index]);
    index++
}
console.log("*****************************************************");
var i = 0;
do {
    console.log(arr1[i]);
    i++
} while (i<arr1.length);

// for in
console.log("forin__forin__forin__forin__forin__forin__forin__forin__forin__");
for (const key in arr1) {
    console.log(arr1[key]);
}
console.log("forof__forof__forof__forof__forof__forof__forof__forof__forof__");

for (const element of arr1) {
    console.log(element);
}


