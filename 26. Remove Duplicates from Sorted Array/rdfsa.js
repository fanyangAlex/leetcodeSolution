/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let set = new Set(nums)
    let index = 0
    set.forEach((v) => {
        nums[index] = v
        index++
    })

    return set.size
};

var removeDuplicates = function (nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            nums[++index] = nums[i];
        }
    }
    return ++index;
};