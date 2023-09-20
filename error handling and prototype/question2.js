function getPerson(personObj) {
    try {
        if (typeof personObj === 'object' && personObj !== null && 'name' in personObj && 'age' in personObj ) {
            const name = personObj.name ;
            const age = personObj.age ;

            return `Name: ${name} , Age: ${age}`;
        }else{
            throw new Error("invalid parameter type")
        }
    } catch (error) {
        return error.message;
    }
}


const person1 = {name:"prem"}
console.log(getPerson(person1));