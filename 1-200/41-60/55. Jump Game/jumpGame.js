/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
  let dic = []
  for (let index = 0; index < nums.length; index++) {
    dic.push(-1)
  }
  let i = nums.length - 2
  dic[i + 1] = 1
  while (i >= 0) {
    if (nums[i] > 0) {
      if (nums[i] === 1) {
        dic[i] = dic[i + 1]
      } else {
        for (let j = nums[i]; j >= 1; j--) {
          const ij = i + j
          if (ij < nums.length && dic[ij] === 1) {
            dic[i] = 1
            break
          }
        }
      }
    }
    i--
  }

  return dic[0] === 1
}

var canJump = function(nums) {
  const nLen = nums.length
  let [idx, curStep, nextStep] = [0, 0, 0]
  while (curStep - idx + 1 > 0) {
    while (idx <= curStep && idx < nLen) {
      nextStep = Math.max(nextStep, nums[idx] + idx) //便利查找跳的最远的下一步
      if (idx >= nLen - 1) return true
      idx++
    }
    curStep = nextStep //跳到下一步
  }
  return false
}
