/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase().trim()
  let string2 = str2.toLowerCase().trim()
  if (string1.length !== string2.length) return false;
  const loopCount = string1.length - 1
  let isAnagram = true;
  for (let idx = 0; idx <= loopCount; idx++) {
    console.log(string1.charAt(idx))
    if (string2.includes(string1.charAt(idx))) {
      isAnagram = isAnagram && true
    } else {
      isAnagram = isAnagram && false
    }
  }
  return isAnagram
}

module.exports = isAnagram;
