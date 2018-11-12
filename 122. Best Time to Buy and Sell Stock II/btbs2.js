/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  let sum = 0
  let temp = 0
  let current = prices[0]
  let sell = prices[1]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < current || prices[i] < sell) {
      current = prices[i]
      sell = prices[i + 1]
      sum += temp
      temp = sell ? (sell - current > 0 ? sell - current : 0) : 0
    } else if (prices[i] >= sell && prices[i] >= current) {
      sell = prices[i]
      temp = sell - current
    }
  }
  sum += temp

  return sum
}
