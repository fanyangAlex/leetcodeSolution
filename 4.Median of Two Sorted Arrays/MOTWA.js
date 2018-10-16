/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length
  const temp = []
  let i = 0
  let j = 0
  for (let index = 0; index < totalLength; index++) {
    if (i > nums1.length - 1) {
      temp.push(nums2[j])
      j++
    } else if (j > nums2.length - 1) {
      temp.push(nums1[i])
      i++
    } else {
      if (nums1[i] < nums2[j]) {
        temp.push(nums1[i])
        i++
      } else {
        temp.push(nums2[j])
        j++
      }
    }

    if (temp.length > totalLength / 2) {
      if (totalLength % 2 === 0) {
        return (temp.pop() + temp.pop()) / 2
      } else {
        return temp.pop()
      }
    }
  }
}
