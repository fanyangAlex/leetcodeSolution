/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return []
  let orgin = new ListNode(null)
  orgin.next = head
  let cur = head
  let last = orgin
  while (cur && cur.next) {
    if (cur.next.val === cur.val) {
      last.next = cur.next
    }
    last = cur
    cur = cur.next
  }

  return orgin.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}
