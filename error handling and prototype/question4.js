class Employee {
    constructor (name ,position ,salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        console.log(`${this.salary}`);
    }
}

const Employee1 = new Employee("Prem" , "CTO" , "1 trillion")

console.log(Employee1);

Employee1.getSalary()