/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let head = 0
  let tail = s.length - 1
  while (head < tail) {
    if (s[head] === s[tail]) {
      head++
      tail--
    } else {
      if (arguments[1] === true) {
        return false
      } else
        return validPalindrome(s.substring(head + 1, tail + 1), true) || validPalindrome(s.substring(head, tail), true)
    }
  }
  return true
}
