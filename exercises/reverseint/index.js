// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// Solution
const reverseInteger=(num)=>parseInt(num.toString().split("").reverse().join('')) * Math.sign(num)
console.log( reverseInteger(-15));













// function reverseInt(n) {
//   return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
// }
// console.log(reverseInt(-23));


