/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let length = nums.length
  if (k > length) return false
  let map = new Map()
  for (let i = 0; i < length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }

  return false
}
