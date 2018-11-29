/**
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  const n = nums.length
  nums.unshift(1)
  nums.push(1)
  let dp = []
  for (let i = 0; i < n + 2; i++) {
    dp.push([])
    for (let j = 0; j < n + 2; j++) {
      dp[i][j] = 0
    }
  }

  for (let len = 1; len < n + 1; len++) {
    for (let left = 1; left < n + 2 - len; left++) {
      let right = left + len - 1
      for (let k = left; k <= right; k++) {
        dp[left][right] = Math.max(
          dp[left][right],
          nums[left - 1] * nums[k] * nums[right + 1] + dp[left][k - 1] + dp[k + 1][right]
        )
      }
    }
  }
  return dp[1][n]
}
