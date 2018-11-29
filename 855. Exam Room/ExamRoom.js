/**
 * @param {number} N
 */
var ExamRoom = function(N) {
  this.length = N
  this.seats = []
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  if (this.seats.length === this.length) {
    return null
  } else {
    if (this.seats.length === 0) {
      this.seats.push(0)
      return 0
    } else {
      let max = 0
      let pos = 0
      if (this.length - 1 - this.seats[this.seats.length - 1] > this.seats[0]) {
        max = this.length - 1 - this.seats[this.seats.length - 1]
        pos = this.length - 1
      } else {
        max = this.seats[0]
        pos = 0
      }

      for (let i = 1; i < this.seats.length; i++) {
        let diff = this.seats[i] - this.seats[i - 1]
        if (parseInt(diff / 2) > max) {
          max = parseInt(diff / 2)
          pos = this.seats[i - 1] + parseInt(diff / 2)
        } else if (parseInt(diff / 2) === max) {
          if (pos > this.seats[i - 1] + parseInt(diff / 2)) {
            pos = this.seats[i - 1] + parseInt(diff / 2)
          }
        }
      }
      this.seats.push(pos)
      this.seats.sort((a, b) => a - b)
      return pos
    }
  }
}

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  this.seats = this.seats.filter((v) => v !== p)
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
