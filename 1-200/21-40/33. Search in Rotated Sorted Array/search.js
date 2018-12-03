/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return realSearch(nums, target, 0, nums.length - 1)
}

function realSearch(nums, target, head, tail) {
  console.log(head, tail, nums[head], nums[tail])
  if (tail < head) {
    return -1
  } else {
    if (nums[head] === target) {
      return head
    } else if (nums[tail] === target) {
      return tail
    }
    if (nums[tail] > nums[head]) {
      return binarySearch(nums, target, head + 1, tail - 1)
    }
    let half = parseInt((tail + head) / 2)
    if (target < nums[tail]) {
      if (nums[half] > nums[head]) {
        return realSearch(nums, target, half, tail - 1)
      } else {
        if (target > nums[half]) {
          return binarySearch(nums, target, half, tail - 1)
        } else {
          return realSearch(nums, target, head + 1, half)
        }
      }
    }

    if (target > nums[head]) {
      if (nums[half] < nums[head]) {
        return realSearch(nums, target, head + 1, half)
      } else {
        if (target > nums[half]) {
          return realSearch(nums, target, half, tail - 1)
        } else {
          return binarySearch(nums, target, head + 1, half)
        }
      }
    }
  }
  return -1
}

function binarySearch(nums, target, head, tail) {
  console.log(head, tail)
  if (tail < head || target < nums[head] || target > nums[tail]) {
    return -1
  } else {
    if (nums[head] === target) {
      return head
    } else if (nums[tail] === target) {
      return tail
    }
    let half = parseInt((tail + head) / 2)
    if (nums[half] > target) {
      return binarySearch(nums, target, head + 1, half - 1)
    } else {
      return binarySearch(nums, target, half, tail - 1)
    }
  }
}
