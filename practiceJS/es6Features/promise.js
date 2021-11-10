// // var promise1 = new Promise(function (resolve, reject) {
// //     var a = "promise"
// //     var b = "promise$$$$"
// //     if (a==b) {
// //         resolve("a nd b are equal")
// //     }
// //     else{
// //         reject("a is not equal to b")
// //     }
// // })

// const { async } = require("rxjs");

// // promise1.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

// // setTimeout(()=>{console.log("i am from timout i always delay ");},3000)

// // setInterval(()=>{console.log("i am from timout i always delay ");},1000)




// // promise along with async and await
// async function syncMode() {
//     console.log("download started");

//    var sync = new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve("download in progress");},3000)
//     })
//     await sync.then((msg)=>{console.log(msg);}).catch()
//     console.log("download completed");

// }
// syncMode()
// console.log("hello");


//prmoise chaining

function promise1() {
    console.log("inside promise1 function" );
    var pro1 =  new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve("promise1")},9000)
        })
     return pro1   
}
function promise2() {
    console.log("inside promise2 function" );
    var pro2 =  new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve("promise2")},6000)
        })
     return pro2  
}
function promise3() {
    console.log("inside promise3 function" );
    var pro3 =  new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve("promise3")},3000)
        })
     return pro3   
}
set

// promise1().then(
//     (msg)=>{console.log(msg);
//     return promise2()}
// ).then((msg)=>{console.log(msg);
// return promise3()}).then((msg)=>{console.log(msg);})


//promise chaining
// Promise.all([promise1(),promise2(),promise3()]).then((msg)=>{console.log(msg);console.log("all the promises got resolved");})

//promise race
Promise.race([promise1(),promise2(),promise3()]).then((msg)=>{console.log(msg);})


// promise1().then((msg)=>{console.log(msg);
//     return promise2()
// }).then((msg)=>{console.log(msg);
// return promise3()}).then((msg)=>{console.log(msg);})