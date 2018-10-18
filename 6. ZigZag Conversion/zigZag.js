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
  let indexArray = []
  let result = ''
  for (let index = 0; index < numRows; index++) {
    indexArray.push(index)
  }
  for (let index = numRows - 2; index > 0; index--) {
    indexArray.push(index)
  }

  for (let index = 0; index < s.length; index++) {
    const element = s[index]
    const iIndex = index % indexArray.length
    if (conversionArray[indexArray[iIndex]] === undefined) {
      conversionArray[indexArray[iIndex]] = []
    }
    conversionArray[indexArray[iIndex]].push(element)
  }

  for (let index = 0; index < numRows; index++) {
    const element = conversionArray[index]
    if (element) {
      for (const item of element) {
        result += item
      }
    }
  }
  return result
}
