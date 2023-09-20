class Car {
    constructor(y ,c ,m){
        this.year = y;
        this.company =c;
        this.model = m;
    }

    getDescrition() {
        console.log(`This is a ${this.year} ${this.company} ${this.model}`);
    }
}

const derscription = new Car(2000 ,"hyundai" , "i10")

console.log(derscription);

derscription.getDescrition()