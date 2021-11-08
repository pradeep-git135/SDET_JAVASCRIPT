class Bike {
    constructor (make, model, cc) {
        this.make = make
        this.model = model
        this.cc = cc
    }
}
var bike1 = new Bike("hero", "xpulse", 200)
var bike2 = new Bike("royal enfiled", "himalayan", 410)

console.log(bike1.make);
console.log(bike2.make);