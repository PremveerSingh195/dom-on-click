class  complexNumber{
    #real;
    #imag;

    constructor (r ,i){
        this.#real = r ;
        this.#imag = i ;
    }

    display(){
        console.log(this.#real , "+ i" , this.#imag);
    }

    get real (){
        return this.#real ;
    }

    get imag (){
        return this.#imag ;
    }


    addcomplexNumber(c){
        this.#real += c.real;
        this.#imag += c.imag;
    }
}

const c1 = new complexNumber(2 , 4);
// c1.display()
const c2 = new complexNumber( 3 , 4);

c1.addcomplexNumber(c2);

c1.display()