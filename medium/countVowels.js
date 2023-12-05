/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const stringToCheck = str.toLowerCase().trim();
  let counter = 0
  for (let i = 0; i < stringToCheck.length; i++) {
    if (vowels.includes(stringToCheck.charAt(i))) counter += 1
  }
  return counter
}
console.log(countVowels('Keep smiling, boo.'))
module.exports = countVowels;