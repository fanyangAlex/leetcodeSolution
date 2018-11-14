/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
var twoSum = function(nums, target) {
  const restValue = {}
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]

    if (restValue[element]) {
      return [restValue[element] - 1, index]
    } else {
      restValue[target - element] = index + 1
    }
  }
}
