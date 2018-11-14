/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const dot = '.'
    const star = '*'
    const aCode = 97
    const zCode = 122
    if (s === p) {
        return true
    }
    let pArray = []
    for (let index = 0; index < p.length; index++) {
        const char = p[index];
        if (char === star) continue
        if (p[index + 1] === star) {
            pArray.push(char + star)
        } else {
            pArray.push(char)
        }
    }
    let head = 0
    let tail = s.length - 1
    let tempHead = []
    while (head < tail) {
        const hChar = s[head]
        const tChar = s[tail]
        if (pArray[0].length === 1) {
            if (hChar === pArray[0] || pArray[0] === dot || tempHead[tempHead.length - 1][tempHead[tempHead.length - 1].length - 1] === hChar) {
                pArray.pop()
                head++
            } else {
                return false
            }
        } else {
            if (pArray[0][0] !== dot && pArray[0][0] !== hChar) {
                pArray.pop()
            } else {
                if (pArray[0][0] === hChar) {
                    if (tempHead.length && tempHead[tempHead.length - 1][0] === hChar) {
                        tempHead[tempHead.length - 1].push(hChar)
                    } else {
                        tempHead.push([hChar])
                    }
                } else if (pArray[0][0] === dot) {

                }
            }
        }


        if (tChar === pArray[pArray.length - 1] || pArray[pArray.length - 1] === dot) {
            pArray.shift()
            tail--
        }
    }

    let cutHead = ''

    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        if (char === pArray[0] || pArray[0] === dot) {
            pArray.pop()
        } else {
            cutHead = s.slice(index)
            break
        }
    }
    let cutTail = ''
    for (let index = cutHead.length - 1; index >= 0; index--) {
        const char = cutHead[index];
        if (char === pArray[pArray.length - 1] || pArray[pArray.length - 1] === dot) {
            pArray.shift()
        } else {
            cutTail = cutHead.slice(index + 1, cutHead.length)
            break
        }
    }

};