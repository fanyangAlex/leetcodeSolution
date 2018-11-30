/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowSets = []
  const columSets = []
  const blockSets = []
  for (let i = 0; i < 9; i++) {
    rowSets.push(new Set())
    columSets.push(new Set())
    blockSets.push(new Set())
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let el = board[i][j]
      if (el !== '.') {
        if (rowSets[i].has(el)) {
          return false
        } else {
          rowSets[i].add(el)
        }
        if (columSets[j].has(el)) {
          return false
        } else {
          columSets[j].add(el)
        }
        let k = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (blockSets[k].has(el)) {
          return false
        } else {
          blockSets[k].add(el)
        }
      }
    }
  }
  return true
}
