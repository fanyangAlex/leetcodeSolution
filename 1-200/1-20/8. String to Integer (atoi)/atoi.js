/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {

    const strLength = str.length
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = 0 - Math.pow(2, 31)
    let index = 0
    let isFirst = true
    let nagi = false
    let result = ''
    while (index < strLength) {
        const char = str[index]
        if (isFirst && char === ' ') {
            index++
        } else if (isFirst) {
            if (char === '+' || char === '-') {
                nagi = char === '-'
            } else if (canConvertInt(char)) {
                result += char
            } else {
                return 0
            }
            isFirst = false
            index++
        } else {
            if (canConvertInt(char)) {
                result += char
            } else {
                break
            }
            index++
        }
    }
    if (result === '') {
        return 0
    } else {
        const realResult = nagi ? 0 - Number(result) : Number(result)
        if (realResult > INT_MAX) {
            return INT_MAX
        }
        if (realResult < INT_MIN) {
            return INT_MIN
        }
        return realResult
    }
};

function canConvertInt(str) {
    const charCode = str.charCodeAt(0)
    if (charCode >= 48 && charCode <= 57) {
        return true
    }
    false
}