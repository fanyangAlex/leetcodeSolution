/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let rLength = grid.length
  let cLength = grid[0].length
  if (rLength < 3 || cLength < 3) return 0
  let rEnd = rLength - 2
  let cEnd = cLength - 2
  let res = 0

  for (let i = 0; i < rEnd; i++) {
    for (let j = 0; j < cEnd; j++) {
      if (isValidSquare(grid, i, j)) {
        res++
      }
    }
  }
  return res
}

function isValidSquare(grid, row, col) {
  let sum = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2]
  if (grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col] !== sum) return false
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[row + i][col + j] <= 0 || grid[row + i][col + j] > 9) {
        return false
      }
    }
    let colSum = grid[row][col + i] + grid[row + 1][col + i] + grid[row + 2][col + i]
    let rowSum = grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2]
    if (colSum !== sum || rowSum !== sum) {
      return false
    }
  }

  return true
}
