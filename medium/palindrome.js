/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").trim().split(' ').join('')
  const len = string.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('A man, a plan, a canal. Panama'))
module.exports = isPalindrome;
