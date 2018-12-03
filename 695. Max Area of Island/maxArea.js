/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let rowLen = grid.length
  let colLen = grid[0].length
  let max = 0
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(dfs(grid, i, j, rowLen, colLen), max)
      }
    }
  }
  return max
}

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
function dfs(grid, row, col, rLength, cLength) {
  let sum = 1
  grid[row][col] = 0
  for (let i = 0; i < 4; i++) {
    let x = row + dir[i][0]
    let y = col + dir[i][1]

    if (x >= 0 && x < rLength && y >= 0 && y < cLength && grid[x][y] == 1) {
      sum += dfs(grid, x, y, rLength, cLength)
    }
  }
  return sum
}
