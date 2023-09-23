class User {
    constructor(username , password){
        this.username = username;
        this.password= password.replace(/./g, '*');
    }
    // let regex1 = /\d/;
    set passset(p){
         if ( /\d/.test(p) && p.length >= 8 && /(\d.*[A-Z])|([A-Z].*\d)/.test(p)) {
            this.password = p.replace(/./g, '*') ;
         }else{
            this.password = " Error: new password is at least 8 characters long and contains at least one number and one uppercase letter."
         }
    }

    get passget(){
        console.log(this.password);
    }
}

const user1 = new User("Prem", "Alliswell2836");
console.log(user1);

user1.passset = "Hell1234"
user1.passget;
console.log(user1);