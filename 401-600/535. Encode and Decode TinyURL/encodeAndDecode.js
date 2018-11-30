const urlDic = {}
const keyDic = {}
let index = 0
const chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  let key = urlDic[longUrl]
  if (!key) {
    key = ''
    let charIndex = index
    for (let i = 0; i < 6; i++) {
      let char = chars[charIndex % 62]
      key += char
      if (charIndex < 62) {
        charIndex += 1000
      } else {
        charIndex = Math.round(charIndex / 62)
      }
    }
    urlDic[longUrl] = key
    keyDic[key] = longUrl
    index++
  }

  return 'http://tinyurl.com/' + key
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const arr = shortUrl.split('/')
  return keyDic[arr[arr.length - 1]]
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
