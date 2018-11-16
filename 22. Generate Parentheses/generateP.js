/**
 * @param {number} n
 * @return {string[]}
 */
const dic = { 1: ['()'] }
const headDic = { 1: ['()'] }

var generateParenthesis = function(n) {
  if (n < 1) return []
  if (n === 1) return dic[1]
  const result = []
  for (let i = 1; i < n; i++) {
    let rest = []
    if (dic[n - i]) {
      rest = dic[n - i]
    } else {
      rest = generateParenthesis(n - i)
      dic[n - i] = rest
    }
    if (rest.length) {
      for (const item of rest) {
        if (i === 1) {
          let noHead = '(' + item + ')'
          if (headDic[n - i + 1]) {
            !headDic[n - i + 1].includes(noHead) && headDic[n - i + 1].push(noHead)
          } else {
            headDic[n - i + 1] = [noHead]
          }
          result.push(noHead)
        }
        for (const head of headDic[i]) {
          result.push(head + item)
        }
      }
    }
  }

  return result
}
let a = [].includes
let b = ['(()())()']
