/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  function getPinX(x, str) {
    let index = 1
    let result = str[x]
    while (x + index < str.length && x - index >= 0) {
      if (str[x + index] === str[x - index]) {
        result = str[x + index] + result + str[x + index]
      } else {
        break
      }
      index++
    }

    return result
  }

  function getPinY(y, str) {
    let index = 1
    let result = ''
    while (y + index - 1 < str.length && y - index >= 0) {
      if (str[y + index - 1] === str[y - index]) {
        result = str[y - index] + result + str[y - index]
      } else {
        break
      }
      index++
    }

    return result
  }
  if (s.length < 2) return s

  let temp = s[0]

  for (let index = 1; index < s.length; index++) {
    const result1 = getPinX(index, s)
    const result2 = getPinY(index, s)
    if (result1.length > temp.length) {
      temp = result1
    }
    if (result2.length > temp.length) {
      temp = result2
    }
  }
  return temp
}
