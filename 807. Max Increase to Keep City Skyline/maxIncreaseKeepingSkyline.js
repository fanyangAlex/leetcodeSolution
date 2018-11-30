/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let length = grid.length
  let topLine = []
  let leftLine = []
  for (let i = 0; i < length; i++) {
    leftLine.push(0)
    for (let j = 0; j < length; j++) {
      if (i === 0) {
        topLine.push(0)
      }
      let element = grid[i][j]
      if (element > leftLine[i]) {
        leftLine[i] = element
      }
      if (element > topLine[j]) {
        topLine[j] = element
      }
    }
  }

  let totalDiff = 0
  for (let i = 0; i < length; i++) {
    newArr.push([])
    for (let j = 0; j < length; j++) {
      const element = Math.min(topLine[i], leftLine[j])
      totalDiff += element - grid[i][j]
    }
  }

  return totalDiff
}
