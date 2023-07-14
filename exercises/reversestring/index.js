// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My first solution with for loop

// function reverse(str) {
//   let reverseString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseString += str[i];
//   }
//   return reverseString;
// }

// console.log(reverse("apple"));

//my second solution
// const reverse = (str) => str.split("").reverse().join("");
// console.log(reverse("apple"));

// const reverse = (str) => {
//   let reverseString = "";
//   for (let char of str) {
//     reverseString = char + reverseString;
//   }
//   return reverseString;
// };
// console.log(reverse("apple"));
//my fourth solution
const reverse = (str) => str.split("").reduce((rev, char) => (char += rev), "");
console.log(reverse("apple"));
module.exports = reverse;
