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
// console.log(palindrome("abba"));

//Solution 2
// const palindrome = (str) => {
//   let reverseString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str[i];
//   }
//   return str == reverseString;
// };
// console.log(palindrome("abba"));

//Solution 3
const Palindrome = (str) =>  str.split('').every((char,index)=>char===str[str.length-index-1])
 console.log(Palindrome("abba"));

// Explanation of Solution 3

// char === str[str.length - index - 1]: This checks if the current character (char) is equal to the corresponding character from the end of the string.
// str.length - index - 1 calculates the index of the character from the end of the string.
// For example, if str is "abba":
// When index is 0, char is 'a' and str[str.length - 0 - 1] is str[3] which is 'a'.
// When index is 1, char is 'b' and str[str.length - 1 - 1] is str[2] which is 'b'.
// When index is 2, char is 'b' and str[str.length - 2 - 1] is str[1] which is 'b'.
// When index is 3, char is 'a' and str[str.length - 3 - 1] is str[0] which is 'a'.