/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let tempArr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < tempArr.length; j++) {
      if (Math.abs(tempArr[j] - nums[i]) <= t) {
        return true
      }
    }
    tempArr.push(nums[i])
    if (tempArr.length > k) {
      tempArr.shift()
    }
  }
  return false
}
