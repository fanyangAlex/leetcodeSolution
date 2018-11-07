/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let count = '1'
    let index = 1
    while (index < n) {
        count = getSayFromNum(count)
        index++
    }

    return count
};


var getSayFromNum = function (num) {
    let result = ''
    let last = ''
    let count = 0
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (last !== element) {
            if (last !== '') {
                result += `${count}${last}`
            }
            last = element
            count = 1
        } else {
            count += 1
        }
        if (i === num.length - 1) {
            result += `${count}${last}`
        }
    }
    return result
}