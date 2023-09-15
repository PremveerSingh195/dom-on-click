let one = "I am one";

function outerfun() {
    
    let onee = "i am two"
      function innerfun() {
        console.log(one);
      }

      innerfun()
    
}

outerfun()
