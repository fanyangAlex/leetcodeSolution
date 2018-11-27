/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head === null) return []
  const orgin = new ListNode(1)
  orgin.next = head
  let current = orgin
  let headCurrent = current
  let time = 0
  let tempArr = []
  while (current && time < k) {
    time++
    current = current.next
    tempArr.unshift(current)
    if (time === k) {
      let next = current.next
      while (tempArr.length) {
        headCurrent.next = tempArr.shift()
        headCurrent = headCurrent.next
      }
      headCurrent.next = next
      current = headCurrent
      time = 0
    }
  }
  return orgin.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}
