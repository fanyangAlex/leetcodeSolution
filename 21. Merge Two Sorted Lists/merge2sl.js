/**
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
var mergeTwoLists = function (l1, l2) {
    const newList = new ListNode(0)
    let curr = newList
    while (l1 || l2) {
        if (l1 === null) {
            curr.next = new ListNode(l2.val)
            l2 = l2.next
        } else if (l2 === null) {
            curr.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            let l
            if (l1.val > l2.val) {
                l = l2.val
                l2 = l2.next
            } else {
                l = l1.val
                l1 = l1.next
            }
            curr.next = new ListNode(l)
        }
        curr = curr.next
    }

    return newList.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}