/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.split(' ')
  arr = arr.filter((v) => v !== '')
  if (arr.length) {
    return arr[arr.length - 1].length
  }
  return 0
}
