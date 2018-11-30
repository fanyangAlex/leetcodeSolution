/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let j
    let z = 0
    let i = 0
    let newAr = []
    while (i < chars.length) {
        newAr[z] = chars[i]
        j = i + 1
        while (chars[i] === chars[j]) {
            j++
        }
        if (j > i + 1) {
            const times = (j - i).toString()

            for (let k = 0; k < times.length; k++) {
                newAr[z + k + 1] = times[k]
                console.log(newAr)
            }
            z += times.length + 1
        } else {
            z++
        }
        i += (j - i)
    }
    for (let m = 0; m < newAr.length; m++) {
        chars[m] = newAr[m]
    }

    return newAr.length
};