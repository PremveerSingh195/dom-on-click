class products {
    #rating;
 constructor (n , p , r){
      this.name = n;
      this.price = p;
      this.#rating = r;
    }

   ratingsetter (r){
      if (r < 0) return;
      this.#rating = r
  }

  ratinggetter (){
    console.log(this.#rating);
  }


}
const p = new products("iphone" , 10000 , 5);

p.ratingsetter(10)

p.ratinggetter()


console.log(p);

