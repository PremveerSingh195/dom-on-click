let myHeros =["thor" , "spiderman"]
let dcHeros =["batman","flash","superman"]

let heropower ={
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.prem = "skills"


console.log(myHeros.prem);
console.log(heropower.prem);