/**
 * @param {number} n
 * @return {number}
 */
let dic = new Map()
dic.set(1, 1)
dic.set(2, 2)
var climbStairs = function(n) {
  if (dic.has(n)) {
    return dic.get(n)
  }

  let res = 0
  if (n > 2) {
    let oneStep = climbStairs(n - 1)
    let twoStep = climbStairs(n - 2)
    res = oneStep + twoStep
  }
  dic.get(n) || dic.set(n, res)
  return res
}
