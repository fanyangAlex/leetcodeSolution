/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and 
each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sum = l1.val + l2.val
  let head = new ListNode(sum % 10)
  let hasTop = sum > 10
  let current = head
  while (l1.next || l2.next) {
    l1 = l1.next !== null ? l1.next : new ListNode(0)
    l2 = l2.next !== null ? l2.next : new ListNode(0)
    sum = l1.val + l2.val + (hasTop ? 1 : 0)
    hasTop = sum >= 10
    current.next = new ListNode(sum % 10)
    current = current.next
  }

  if (hasTop) {
    current.next = new ListNode(1)
  }

  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}
