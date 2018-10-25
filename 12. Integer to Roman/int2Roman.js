/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let time = 1
    let roman = ''
    const oneEnum = {
        1: 'I',
        10: 'X',
        100: 'C',
        1000: 'M',
        10000: 'Z'
    }
    const fiveEnum = {
        1: 'V',
        10: 'L',
        100: 'D',
        1000: 'O'
    }

    const numArray = num.toString().split('')
    for (let i = numArray.length - 1; i >= 0; i--) {
        const count = Number(numArray[i]);
        if (count > 0) {
            roman = makeRoman(count, oneEnum[time], fiveEnum[time], oneEnum[time * 10]) + roman
        }
        time *= 10
    }
    return roman
};

const makeRoman = (number, one, five, ten) => {
    switch (number) {
        case 1:
            return one
        case 2:
            return `${one}${one}`
        case 3:
            return `${one}${one}${one}`
        case 4:
            return `${one}${five}`
        case 5:
            return `${five}`
        case 6:
            return `${five}${one}`
        case 7:
            return `${five}${one}${one}`
        case 8:
            return `${five}${one}${one}${one}`
        case 9:
            return `${one}${ten}`
        default:
            break;
    }
    // if (number === 9) {
    //     result += `${one}${ten}`
    // } else {
    //     result += number >= 5 ? five : ''
    //     if (number % 5 === 4) {
    //         result += `${one}${five}`
    //     } else {
    //         for (let i = 0; i < number % 5; i++) {
    //             result += `${one}`
    //         }
    //     }
    // }
    // return result
}