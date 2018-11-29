/**
 * @param {number[]} cost
 * @return {number}
 * 递归 未通过
 */
let dic = {}
var minCostClimbingStairs = function(cost) {
  return minPos(cost, -1)
}

function minPos(nums, pos) {
  if (dic[pos]) {
    return dic[pos]
  } else {
    if (nums.length - pos < 3) {
      return 0
    } else {
      return Math.min(nums[pos + 1] + minPos(nums, pos + 1), nums[pos + 2] + minPos(nums, pos + 2))
    }
  }
}

/**
 * @param {number[]} cost
 * @return {number}
 * 动态规划
 */
var minCostClimbingStairs = function(cost) {
  let arr = []
  cost.unshift(0)
  for (let i = cost.length - 1; i > 0; i--) {
    let index = cost.length - 1 - i
    let temp = index < 2 ? 0 : Math.min(arr[index - 1], arr[index - 2])
    arr[index] = cost[i] + temp
  }

  return arr[cost.length - 1]
}
