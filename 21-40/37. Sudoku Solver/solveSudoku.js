/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let end = false
  let first = true
  const rowSets = []
  const columSets = []
  const blockSets = []
  const numsArr = ['head', false, false, false, false, false, false, false, false, false]
  for (let i = 0; i < 9; i++) {
    rowSets.push([...numsArr])
    columSets.push([...numsArr])
    blockSets.push([...numsArr])
  }
  while (!end) {
    end = true
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let el = board[i][j]
        let k = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (el === '.') {
          let candi = []
          for (let s = 1; s < 10; s++) {
            if (rowSets[i][s] || columSets[j][s] || blockSets[k][s]) {
            } else {
              candi.push(s)
            }
          }
          if (candi.length === 1) {
            let re = candi[0]
            board[i][j] = `${re}`
            rowSets[i][re] = true
            columSets[j][re] = true
            blockSets[k][re] = true
          } else {
            end = false
          }
        } else {
          if (first) {
            rowSets[i][el] = true
            columSets[j][el] = true
            blockSets[k][el] = true
            first = false
          }
        }
      }
    }
  }
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const rowSets = []
  const columSets = []
  const blockSets = []
  let candiList = new Map()
  const numsArr = ['head', false, false, false, false, false, false, false, false, false]
  for (let i = 0; i < 9; i++) {
    rowSets.push([...numsArr])
    columSets.push([...numsArr])
    blockSets.push([...numsArr])
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let el = board[i][j]
      let k = parseInt(i / 3) * 3 + parseInt(j / 3)
      if (el === '.') {
        let candi = []
        for (let s = 1; s < 10; s++) {
          if (rowSets[i][s] || columSets[j][s] || blockSets[k][s]) {
          } else {
            candi.push(s)
          }
        }
        candiList.set(`${i}|${j}`, candi)
      } else {
        rowSets[i][el] = true
        columSets[j][el] = true
        blockSets[k][el] = true
      }
    }
  }

  while (candiList.size) {
    for (const iterator of candiList) {
      const [i, j] = iterator[0].split('|')
      let k = parseInt(i / 3) * 3 + parseInt(j / 3)
      if (iterator[1].length === 1) {
        let el = iterator[1][0]
        board[i][j] = el.toString()
        rowSets[i][el] = true
        columSets[j][el] = true
        blockSets[k][el] = true
        candiList.delete(iterator[0])
      } else {
        let newArr = []
        for (const s of iterator[1]) {
          if (rowSets[i][s] || columSets[j][s] || blockSets[k][s]) {
          } else {
            newArr.push(s)
          }
        }

        if (newArr.length === 1) {
          let el = newArr[0]
          board[i][j] = el.toString()
          rowSets[i][el] = true
          columSets[j][el] = true
          blockSets[k][el] = true
          candiList.delete(iterator[0])
        } else {
          candiList.set(iterator[0], newArr)
        }
      }
    }
  }
}

//检查在位置处的值是否合法
function check(board, pos, a) {
  let row = parseInt(pos / 9)
  let col = pos % 9

  for (let k = 0; k < 9; k++) {
    let x = parseInt(row / 3) * 3 + k / 3
    let y = parseInt(col / 3) * 3 + parseInt(k % 3)
    if (board[k][col] == a || board[row][k] == a || board[x][y] == a) return false
  }

  return true
}

function solveSudokuDFS(board, pos) {
  if (pos === 81) return true
  let row = parseInt(pos / 9)
  let col = pos % 9
  if (board[row][col] === '.') {
    for (let k = 1; k <= 9; k++) {
      if (check(board, pos, k)) {
        board[row][col] = `${k}`
        if (solveSudokuDFS(board, pos + 1)) return true
      }
      board[row][col] = '.'
    }
  } else {
    return solveSudokuDFS(board, pos + 1)
  }
}

function solveSudoku(board) {
  solveSudokuDFS(board, 0)
}
