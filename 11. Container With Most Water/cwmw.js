/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxarea = 0
    let head = 0
    let tail = height.length - 1
    let lastMin = 0 // 缓存之前最低的一根
    while (head < tail) {
        const min = Math.min(height[head], height[tail])
        if (min > lastMin) { //如果下一根柱子比前面低就不需要计算
            maxarea = Math.max(maxarea, min * (tail - head));
            lastMin = min
        }
        if (height[head] < height[tail])
            head++
        else
            tail--
    }
    return maxarea
};