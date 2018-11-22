/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = []
  candidates.sort((a, b) => a - b)
  helper(candidates, target, res, [], 0)
  return res
}

let helper = function(arr, target, res, cur, pos) {
  if (target === 0) {
    res.push(cur)
  } else if (pos < arr.length && arr[pos] <= target) {
    let next = cur.slice()
    next.push(arr[pos])
    helper(arr, target - arr[pos], res, next, pos + 1)
    let nextPos = pos + 1
    while (nextPos < arr.length && arr[nextPos] === arr[pos]) {
      nextPos++
    }
    arr[nextPos] && helper(arr, target, res, cur, nextPos)
  }
}
