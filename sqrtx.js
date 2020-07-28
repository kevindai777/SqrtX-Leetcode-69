//Objective is to square root a number. We truncate the decimals.

let x = 5


//O(1) solution using the formula sqrt(x) = e^(0.5 * logx)

if (x < 2) {
    return x
}

let left = Math.floor(Math.pow(Math.exp(1), 0.5 * Math.log(x)))
let right = left + 1
return right * right > x ? left : right


//O(logn) solution using bit manipulation and recursion

function mySqrt(x) {
    if (x < 2) {
        return x
    }
    
    let left = mySqrt(x >> 2) << 1
    let right = left + 1
    return right * right > x ? left : right
}
return mySqrt(x)