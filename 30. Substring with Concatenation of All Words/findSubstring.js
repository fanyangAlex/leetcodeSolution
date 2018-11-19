/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let result = []
  let wordsLength = words.reduce((pre, cur) => pre + cur.length, 0)
  if (words.length === 0) return result
  if (s.length < wordsLength) return result
  let wordLength = words[0].length
  let first = words.map((v) => v[0])
  let index = 0
  let errorList = []
  while (index < s.length && s.length - index >= wordLength) {
    if (first.includes(s[index])) {
      let news = s.slice(index, index + wordsLength)
      if (!errorList.includes(news)) {
        if (isMatch(news, words, wordLength)) {
          result.push(index)
        } else {
          errorList.push(news)
        }
      }
    }
    index++
  }
  return result
}

var isMatch = function(s, words, length) {
  let word = s.slice(0, length)
  let newWords = [...words]
  for (let i = 0; i < newWords.length; i++) {
    if (word === newWords[i]) {
      if (newWords.length === 1) return true
      newWords.splice(i, 1)
      return isMatch(s.slice(length), newWords, length)
    }
  }

  return false
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
//使用map
var findSubstring = function(s, words) {
  let res = []
  if (s.length === 0 || s === null || words.length === 0) return res
  let wl = words[0].length,
    n = s.length,
    m = words.length
  let map = new Map()
  words.forEach((w) => {
    map.set(w, (map.get(w) || 0) + 1)
  })
  for (let i = 0; i < wl; i++) {
    let temp = new Map()
    let count = 0
    let lo = i
    for (let hi = i; hi + wl <= n; hi += wl) {
      let sHi = s.substring(hi, hi + wl)
      if (map.has(sHi)) {
        temp.set(sHi, (temp.get(sHi) || 0) + 1)
        count++
        while (temp.get(sHi) > map.get(sHi)) {
          let sLo = s.substring(lo, lo + wl)
          temp.set(sLo, temp.get(sLo) - 1)
          count--
          lo += wl
        }
        if (count === m) {
          res.push(lo)
          let sLo = s.substring(lo, lo + wl)
          temp.set(sLo, temp.get(sLo) - 1)
          count--
          lo += wl
        }
      } else {
        temp.clear()
        count = 0
        lo = hi + wl
      }
    }
  }
  return res
}
