function convertToNumber(inpustring) {
    try {
        let number = parseFloat(inpustring)
        if (isNaN(number)) {
            throw new Error("invalid number");
        }
        return number ;
    } catch (error) {
        return "invalid number"
    }
}


console.log(convertToNumber("abc"));
console.log(convertToNumber("123"));