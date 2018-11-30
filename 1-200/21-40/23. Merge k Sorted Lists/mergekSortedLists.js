/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//循环遍历 复杂度 O(n^3)
var mergeKLists = function(lists) {
  const listLength = lists.length
  const head = new ListNode(1)
  let current = head
  let hasVal = true
  while (hasVal) {
    let noVal = true
    let smallIndex = -1
    let smallVal = Number.MAX_VALUE
    for (let i = 0; i < listLength; i++) {
      const element = lists[i]
      if (element.val) {
        noVal = false
        if (element.val <= smallVal) {
          smallVal = element.val
          smallIndex = i
        }
      }
    }
    if (smallIndex !== -1) {
      current.next = new ListNode(lists[smallIndex].val)
      current = current.next
      lists[smallIndex] = lists[smallIndex].next
    }
    hasVal = !noVal
  }
  return head.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

//递归方式 复杂度 O(log2N*N)
/**
 * Merge k Sorted Lists
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function(lists) {
  let len = lists.length
  if (!len) {
    return null
  }
  if (len === 1) {
    return lists[0]
  }
  let left = 0
  let right = len - 1
  let curList = []
  while (left <= right) {
    if (left === right) {
      curList.push(lists[left])
    } else {
      curList.push(merge2Lists(lists[left], lists[right]))
    }
    left++
    right--
  }
  return mergeKLists(curList)
}

/**
 *将两个有序链表合成一个有序链表并返回
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
let merge2Lists = function(list1, list2) {
  let originListNode = new ListNode('')
  let curListNode = originListNode
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curListNode.next = list1
      list1 = list1.next
    } else {
      curListNode.next = list2
      list2 = list2.next
    }
    curListNode = curListNode.next
  }
  curListNode.next = list1 ? list1 : list2
  return originListNode.next
}

//循环赋值 复杂度O(2n^2)
var mergeKLists = function(lists) {
  var res = []
  for (var i = 0; i < lists.length; i++) {
    var cur = lists[i]
    while (cur) {
      res.push(cur.val)
      cur = cur.next
    }
  }
  res.sort(function(a, b) {
    return a - b
  })
  var dummy = new ListNode(0)
  var p = dummy
  for (var i = 0; i < res.length; i++) {
    p.next = new ListNode(res[i])
    p = p.next
  }
  return dummy.next
}
