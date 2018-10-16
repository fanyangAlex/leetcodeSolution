/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) {
    return s
  }

  let conversionArray = []
  let totalIndex = 0
  let indexArray = []
  let result = ''
  for (let index = 0; index < numRows; index++) {
    indexArray.push(index)
  }
  for (let index = numRows - 1; index > 0; index--) {
    indexArray.push(index)
  }
  for (const iterator of indexArray) {
    if (totalIndex < s.length) {
      if (conversionArray[iterator] === undefined) {
        conversionArray[iterator] = []
      }
      conversionArray[iterator].push(s[totalIndex])
      totalIndex++
    }
  }
  for (let index = 0; index < numRows; index++) {
    const element = conversionArray[index]
    for (const item of element) {
      result += item
    }
  }
  return result
}
