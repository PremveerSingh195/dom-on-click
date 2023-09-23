function Student(name) {
    this.name = name;

}

Object.prototype.printDetails = function () {
    console.log(`hello my name is ${this.name}`);
}

const student = new Student("mithun");

student.printDetails()
