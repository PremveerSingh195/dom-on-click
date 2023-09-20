class Person {
    constructor(name ="unknown",age = 0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
       
            return `Name: ${this.name}, age: ${this.age} `
        }
    
}

const p = new Person("prem", 23)
const q = new Person()
console.log(p.getDetails());
console.log(q.getDetails());