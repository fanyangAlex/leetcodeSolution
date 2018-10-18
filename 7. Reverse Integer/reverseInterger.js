/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = Math.pow(2, 31)
  if (x > flag || x <= 0 - flag || x === 0) {
    return 0
  }
  const isNagi = x < 0
  let abs = Math.abs(x)
  let result = ''
  while (abs > 0) {
    const temp = abs % 10
    console.log(temp)
    abs = (abs - temp) / 10
    result += temp
  }
  if (Number(result) >= flag) {
    return 0
  }

  return isNagi ? 0 - Number(result) : Number(result)
}
