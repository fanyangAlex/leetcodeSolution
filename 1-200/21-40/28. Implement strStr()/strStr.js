/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0
    if (needle.length > haystack.length) return -1
    for (let i = 0; i < haystack.length; i++) {
        let first = i
        let flag = 0
        while (flag < needle.length && needle[flag] === haystack[first]) {
            flag++
            first++
            if (needle.length - flag > haystack.length - first) {
                return -1
            }
            if (haystack[i] !== needle[0]) {
                i++
            }
        }
        if (flag === needle.length) {
            return i
        }
    }
    return -1
};