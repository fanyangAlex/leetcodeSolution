/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let indexM = m - 1
  let indexN = n - 1
  let total = n + m - 1
  while (total >= 0) {
    if (indexM < 0) {
      nums1[total] = nums2[indexN]
      indexN--
    } else if (indexN < 0) {
      nums1[total] = nums1[indexM]
      indexM--
    } else {
      if (nums1[indexM] > nums2[indexN]) {
        nums1[total] = nums1[indexM]
        indexM--
      } else {
        nums1[total] = nums2[indexN]
        indexN--
      }
    }
    total--
  }
}
