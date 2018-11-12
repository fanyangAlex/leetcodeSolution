/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  let max = 0
  let bestBuy = prices[0]
  let bestSell = prices[1]
  max = Math.max(max, bestSell - bestBuy)
  for (let i = 1; i < prices.length; i++) {
    const element = prices[i]
    if (element < bestBuy) {
      //遇到小于bestBuy的值就从头计算
      bestBuy = element
      bestSell = prices[i + 1]
    } else if (element > bestSell) {
      //遇到大于bestSell的就替换
      bestSell = element
    }
    if (bestSell > bestBuy) {
      max = Math.max(max, bestSell - bestBuy)
    }
  }

  return max
}
