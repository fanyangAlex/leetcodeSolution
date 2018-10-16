/**
Given a string, find the length of the longest substring without repeating characters.
Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, 
"pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length
  let big = 0
  let timer = 0
  let cache = []
  for (let index = 0; index < s.length; index++) {
    const element = s[index]
    let matchedIndex = cache.findIndex((v) => v === element)
    if (matchedIndex > -1) {
      timer = cache.length - matchedIndex
      cache = cache.slice(matchedIndex + 1)
    } else {
      timer += 1
      big = big > timer ? big : timer
    }

    cache.push(element)
  }

  return big
}
