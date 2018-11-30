/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let up = true
  let result = []
  for (let i = digits.length - 1; i >= 0; i--) {
    const value = up ? digits[i] + 1 : digits[i]
    result.unshift(value % 10)
    up = value >= 10
  }

  up && result.unshift(1)

  return result
}
