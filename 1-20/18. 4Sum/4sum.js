/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  let result = []
  let cache = {}
  for (let i = 0; i < nums.length - 3; i++) {
    if (i - 1 > 0 && nums[i] === nums[i - 1]) {
      i++
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j - 1 > i && nums[j] === nums[j - 1]) {
        j++
      }
      for (let k = j + 1; k < nums.length - 1; k++) {
        if (k - 1 > j && nums[k] === nums[k - 1]) {
          k++
        }
        for (let u = k + 1; u < nums.length; u++) {
          if (u - 1 > k && nums[u] === nums[u - 1]) {
            u++
          }
          if (nums[i] + nums[j] + nums[k] + nums[u] === target) {
            let key = [nums[i], nums[j], nums[k], nums[u]].sort().toString()
            if (!cache[key]) {
              cache[key] = true
              result.push([nums[i], nums[j], nums[k], nums[u]])
            }
          }
        }
      }
    }
  }
  return result
}
fourSum([0, 0, 0, 0], 0)
