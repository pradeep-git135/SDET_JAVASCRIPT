var person1 = {
    fname : "Bhagath",
    lname : "Singh",
    fullName: function () {
        console.log(this.fname +" : "+this.lname);    
    }
}
var person2 = {
    fname : "dvcdiyev",
    lname : "fveqbvt",
}

// person1.fullName.call(person2)  //function barrowing

function introduce(msg, a, b, c ) {
    console.log(msg+this.fname+":"+this.lname);
    console.log(a,b,c);
}

var result = introduce.bind(person1,"hello my name is ", 1, 3, 5, 7)
result()

// introduce.call(person1,"hello my name is ", 1, 3, 5, 7 )
