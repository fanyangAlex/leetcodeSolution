    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    var threeSum = function (nums) {
        if (nums.length < 3) return []
        if (nums.length === 3) return nums[0] + nums[1] + nums[2] === 0 ? [nums] : []
        let set = new Map()
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                for (let k = 0; k < nums.length; k++) {
                    if (i !== j && j !== k && i !== k) {
                        if (nums[i] + nums[j] + nums[k] === 0) {
                            let arr = [nums[i], nums[j], nums[k]].sort((a, b) => a > b)
                            set.set(`${arr[0]}|${arr[1]}|${arr[2]}`, [nums[i], nums[j], nums[k]])
                        }
                    }
                }
            }
        }
        const result = Array.from(set.values())
        return result

    };