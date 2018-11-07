/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let result = 0
    for (let i = 0; i < S.length; i++) {
        const element = S[i];
        J.indexOf(element) !== -1 && result++
    }
    return result
};