/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = nums[0]
  let current = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (current < 0) {
      current = nums[i]
    } else {
      current = nums[i] + current
    }
    if (current > sum) {
      sum = current
    }
  }
  return sum
}

//分治法
var maxSubArray = function(nums) {
  return divide(nums, 0, nums.length - 1)
}

function divide(nums, left, right) {
  if (left === right) {
    return nums[left]
  }
  const center = parseInt((left + right) / 2)
  const leftMaxSum = divide(nums, left, center)
  const rightMaxSum = divide(nums, center + 1, right)
  let leftBorderSum = nums[center]
  let leftSum = nums[center]
  for (let i = center - 1; i > left - 1; i--) {
    leftSum += nums[i]
    if (leftSum > leftBorderSum) {
      leftBorderSum = leftSum
    }
  }

  let rightBorderSum = nums[center + 1]
  let rightSum = nums[center + 1]
  for (let i = center + 2; i < right + 1; i++) {
    rightSum += nums[i]
    if (rightSum > rightBorderSum) {
      rightBorderSum = rightSum
    }
  }

  let BorderSum = leftBorderSum + rightBorderSum

  return Math.max(leftMaxSum, rightMaxSum, BorderSum)
}
