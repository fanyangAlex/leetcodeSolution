/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = []
  let newCandi = candidates
  while (newCandi.length) {
    let [first, ...candinext] = newCandi
    if (first === target) {
      result.push([first])
    } else if (first < target) {
      let time = 1
      let head = [first]
      while (first * time < target) {
        let tempResult = combinationSum(candinext, target - first * time)
        if (tempResult.length) {
          for (let i = 0; i < tempResult.length; i++) {
            result.push([...head, ...tempResult[i]])
          }
        }
        time++
        head.push(first)
      }
      if (first * time === target) {
        result.push(head)
      }
    }

    newCandi.shift()
  }

  return result
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function(candidates, target) {
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
    helper(arr, target - arr[pos], res, next, pos)
    helper(arr, target, res, cur, pos + 1)
  }
}
