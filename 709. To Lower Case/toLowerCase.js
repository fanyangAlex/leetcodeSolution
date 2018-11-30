/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.toLowerCase()
}

function toLowerCase(str) {
  let letterDictionary = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
  }
  let result = ''

  for (let index = 0; index < str.length; index++) {
    result += str[i] in letterDictionary ? letterDictionary[str[i]] : str[i]
  }

  return result
}
