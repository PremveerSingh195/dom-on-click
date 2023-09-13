class products {
    // name;
    // price;
    // discription;

constructor(n,p,d){
    console.log("hello world");
    this.name = n;
    this.price = p;
    this.discription = d;
}   

    display (){
        console.log(this);
    }
}

const p = new products("iphone", 10000 , "apple");

const d = new products("galaxy" , 1000 , "samsung")


console.log(p);

console.log(d);
p.display()
d.display()