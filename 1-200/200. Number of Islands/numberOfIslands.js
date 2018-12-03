/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0
  let rowLen = grid.length
  let colLen = grid[0].length
  let num = 0

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j, rowLen, colLen)
        num++
      }
    }
  }

  return num
}

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
function dfs(grid, row, col, rLength, cLength) {
  grid[row][col] = 0
  for (let i = 0; i < 4; i++) {
    let x = row + dir[i][0]
    let y = col + dir[i][1]

    if (x >= 0 && x < rLength && y >= 0 && y < cLength && grid[x][y] == 1) {
      dfs(grid, x, y, rLength, cLength)
    }
  }
}
