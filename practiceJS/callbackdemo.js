// function normal (a) {
//     console.log("i am normal function");
//     a()   // a() = externals()
// }
// normal(externals)



// function externals () {console.log("i am external function");}

function normal (a) {
    console.log("i am normal function");
    a()   // a() = externals()
}
normal(function externals () {console.log("i am external function");})



