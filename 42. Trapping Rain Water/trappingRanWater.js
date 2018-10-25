/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let h = 0
    let t = height.length - 1
    let lastMin = 0 // 缓存之前能存住雨水的最低的柱子
    let totalTrap = 0
    while (h < t) {
        const head = height[h]
        const tail = height[t]

        if (head < tail) {
            if (head < lastMin) { // 如果当前柱子比之前缓存的柱子低就认为可以接住雨水
                totalTrap += (lastMin - head)
            } else {
                lastMin = head
            }
            h++
        } else {
            if (tail < lastMin) {
                totalTrap += (lastMin - tail)
            } else {
                lastMin = tail
            }
            t--
        }
    }

    return totalTrap
};