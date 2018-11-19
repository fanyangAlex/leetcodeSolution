/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0
  let max = Math.pow(2, 31)
  let posi = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
  const newDied = dividend > 0 ? dividend : 0 - dividend
  const newDivo = divisor > 0 ? divisor : 0 - divisor

  if (newDied === max && newDivo === 1 && posi) return max - 1
  let time = divPos(newDied, newDivo)
  return posi ? time : 0 - time
}

let divPos = function(dividend, divisor) {
  if (divisor === 1) return dividend
  let current = divisor
  let lastCurrent = 0
  let result = 0
  while (current <= dividend) {
    lastCurrent = current
    current += current
    result = result === 0 ? 1 : result << 1
  }

  if (dividend - lastCurrent > divisor) {
    console.log(dividend, lastCurrent)
    result += divPos(dividend - lastCurrent, divisor)
  }

  return result
}
