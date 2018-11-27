/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let up = false
  let result = ''
  let length = Math.max(a.length, b.length)
  for (let i = 0; i < length; i++) {
    let valueA = a[a.length - 1 - i] || '0'
    let valueB = b[b.length - 1 - i] || '0'
    let sum = '0'
    if (valueA === '0' && valueB === '0') {
      sum = up ? '1' : '0'
      up = false
    } else if (valueA === '1' && valueB === '1') {
      sum = up ? '1' : '0'
      up = true
    } else {
      sum = up ? '0' : '1'
    }
    result = sum + result
  }
  if (up) result = '1' + result
  return result
}
