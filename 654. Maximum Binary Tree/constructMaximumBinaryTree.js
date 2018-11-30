/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null
  if (nums.length === 1) {
    return new TreeNode(nums[0])
  }
  let max = 0
  let maxVal = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxVal) {
      max = i
      maxVal = nums[i]
    }
  }

  const result = new TreeNode(maxVal)
  result.left = constructMaximumBinaryTree(nums.slice(0, max))
  result.right = constructMaximumBinaryTree(nums.slice(max + 1, nums.length))

  return result
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
