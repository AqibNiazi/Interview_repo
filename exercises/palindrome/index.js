// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//Solution 1
// function palindrome(str) {
//   let reversedString = str.split("").reverse().join("");
//   return str === reversedString;
// }
// console.log(palindrome("aqib"));

//Solution 2
const palindrome = (str) => {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return str == reverseString;
};
console.log(palindrome("aqib"));
module.exports = palindrome;
