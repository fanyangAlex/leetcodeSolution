/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let rLength = grid.length
  let cLength = grid[0].length
  let total = 0
  for (let i = 0; i < rLength; i++) {
    for (let j = 0; j < cLength; j++) {
      if (grid[i][j] === 1) {
        total += calcPer(grid, i, j, rLength, cLength)
      }
    }
  }

  return total
}

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
function calcPer(grid, row, col, rLength, cLength) {
  let per = 0
  for (let i = 0; i < 4; i++) {
    let x = row + dir[i][0]
    let y = col + dir[i][1]
    if (x < 0 || y < 0 || x >= rLength || y >= cLength || grid[x][y] === 0) {
      per++
    }
  }
  return per
}
