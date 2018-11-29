/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let max = 1
  let temp = 0
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      max = temp === i ? Math.max(max, temp) : Math.max(max, Math.round(temp / 2))
      temp = 0
    } else {
      temp++
    }
  }
  max = Math.max(max, temp)
  return max
}
