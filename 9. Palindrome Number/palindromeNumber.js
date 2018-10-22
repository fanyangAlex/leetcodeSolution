/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === 0) return true
    if (x < 0) return false
    if (x > 0 && x % 10 === 0) return false
    let numArray = 0
    let time = 10
    let temp = x
    while (temp > 0) {
        numArray = numArray * 10 + temp % time
        temp = parseInt(temp / 10)
    }
    return numArray === x
};