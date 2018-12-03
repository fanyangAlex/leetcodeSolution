/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const nLen = nums.length
  let steps = 0
  let [idx, curStep, nextStep] = [0, 0, 0]
  while (idx >= curStep) {
    while (idx <= curStep && idx < nLen) {
      nextStep = Math.max(nextStep, nums[idx] + idx) //便利查找跳的最远的下一步
      if (idx >= nLen - 1) return steps
      idx++
    }
    curStep = nextStep //跳到下一步
    steps++
  }
  return steps
}
