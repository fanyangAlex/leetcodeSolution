/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (target <= element) {
            return i
        }
    }

    return nums.length
};