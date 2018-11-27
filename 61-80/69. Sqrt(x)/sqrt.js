/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 4) return 1
  let step = 2
  let lastStep = 2
  while (x > step) {
    lastStep = step
    step = step * step
  }

  let i = lastStep
  let time = lastStep / 2
  while (time >= 1) {
    if (x > i * i) {
      i += time
    } else if (x < i * i) {
      i -= time
    } else {
      return i
    }
    time = time / 2
  }
  return i--
}

function mySqrt(x) {
  if (x < 1) return x
  let r = x
  while (r > x / r) {
    r = parseInt((r + x / r) / 2)
  }

  return r
}
