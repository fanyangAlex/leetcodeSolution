/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length < 3 || board[0].length < 3) return
  let rowLen = board.length
  let colLen = board[0].length
  const dd = [[0, colLen - 1, 0], [0, rowLen - 1, colLen - 1], [1, colLen, rowLen - 1], [1, rowLen, 0]]
  for (let i = 0; i < 4; i++) {
    for (let j = dd[i][0]; j < dd[i][1]; j++) {
      if (i % 2 === 0) {
        const element = board[dd[i][2]][j]
        if (element === 'O') {
          dfs(board, dd[i][2], j, rowLen, colLen)
        }
      } else {
        const element = board[j][dd[i][2]]
        if (element === 'O') {
          dfs(board, j, dd[i][2], rowLen, colLen)
        }
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      board[i][j] === 'E' ? (board[i][j] = 'O') : (board[i][j] = 'X')
    }
  }
}

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
function dfs(grid, row, col, rowLen, colLen) {
  grid[row][col] = 'E'
  for (let i = 0; i < 4; i++) {
    let x = row + dir[i][0]
    let y = col + dir[i][1]
    if (x >= 0 && x < rowLen && y >= 0 && y < colLen && grid[x][y] === 'O') {
      dfs(grid, x, y, rowLen, colLen)
    }
  }
}
