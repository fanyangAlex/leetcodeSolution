/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const origin = new ListNode('')
  origin.next = head
  let current = origin
  while (current.next && current.next.next) {
    let node1 = current.next
    let node2 = node1.next
    let next = node2.next
    node2.next = node1
    node1.next = next
    current.next = node2
    current = node1
  }
  return origin.next
}
