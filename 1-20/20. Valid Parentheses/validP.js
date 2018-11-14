/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = []; // arr是一个栈,将左半边括号压入栈,如果遍历到右括号时栈顶不是对应的左括号则返回false
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (var char of s) {
        if (map[char]) {
            arr.unshift(char)
        } else {
            let popStr = arr.shift();
            if (!popStr || char !== map[popStr]) {
                return false;
            }
        }
    }
    return !arr.length;
};