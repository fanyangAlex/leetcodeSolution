/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.trim().toLowerCase()
  let head = 0
  let tail = s.length - 1
  while (head < tail) {
    if (!s[head].match(/[0-9|a-z]/)) {
      head++
    } else if (!s[tail].match(/[0-9|a-z]/)) {
      tail--
    } else {
      if (s[head] !== s[tail]) {
        return false
      } else {
        head++
        tail--
      }
    }
  }

  return true
}
