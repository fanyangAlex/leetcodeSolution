/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) return []
  const dic = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let result = ['']
  for (let i = 0; i < digits.length; i++) {
    const chars = dic[digits[i]]
    let j = 0
    let length = result.length
    while (j < length) {
      let el = result.shift()
      for (let k = 0; k < chars.length; k++) {
        result.push(el + chars[k])
      }
      j++
    }
  }

  return result
}

var letterCombinations = function(digits) {
  if (digits.length < 1) return []
  const dic = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let result = []
  let totalLength = 1
  for (let i = 0; i < digits.length; i++) {
    totalLength *= dic[digits[i]].length
  }

  for (let i = 0; i < totalLength; i++) {
    let str = ''
    let time = totalLength
    for (let j = 0; j < digits.length; j++) {
      let value = dic[digits[j]]
      time /= value.length
      str += value[parseInt(i / time) % value.length]
    }
    result.push(str)
  }

  return result
}
