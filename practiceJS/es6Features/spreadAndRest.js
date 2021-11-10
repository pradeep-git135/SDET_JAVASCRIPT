

function rest(a,b,...c) {
    console.log(a,b,c);
}
rest(1,2,3,4,5,6)


var z = ["apple", "bee", "car","deer"]
function spread(a,b,c) {
    console.log(a,b,c);
}
spread(...z)