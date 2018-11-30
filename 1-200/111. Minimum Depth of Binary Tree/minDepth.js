/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) return 0
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  if (left === 0 && right === 0) {
    return 1
  } else if (left === 0) {
    return 1 + right
  } else if (right === 0) {
    return 1 + left
  } else {
    return 1 + Math.min(left, right)
  }
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
