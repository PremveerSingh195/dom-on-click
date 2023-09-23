function numberChecker(Arr) { 
    return function (x) {
        if (x in Arr) {
            return true;
        }else{
            return false
        }
    }
}

let  arr = [1,2,3,4,5,6,7]

const checknum = numberChecker(arr);

console.log(checknum(2));

