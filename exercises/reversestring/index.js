// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



////Solution 1 with Classic for loop

// function reverseString(str) {
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }
// console.log(reverseString("apple"));
 



//////////Solution 2 With Array methods

// const reverseString = (str) => str.split('').reverse().join('')
// console.log(reverseString("apple"));

// Solution 3 with for of loop

const reverse = (str) => {
  let reverseString = "";
  for (let char of str) {
    reverseString = char+reverseString;

  }
  return reverseString;
};
console.log(reverse("apple"));
/*
Explanation of SOlution 3

Initial reverseString: ""
Iteration 1: char = "a", reverseString = "a" + "" → reverseString = "a"
Iteration 2: char = "p", reverseString = "p" + "a" → reverseString = "pa"
Iteration 3: char = "p", reverseString = "p" + "pa" → reverseString = "ppa"
Iteration 4: char = "l", reverseString = "l" + "ppa" → reverseString = "lppa"
Iteration 5: char = "e", reverseString = "e" + "lppa" → reverseString = "elppa"
*/

//4th solution with reduce method
// const reverse = (str) => str.split('').reduce((reversed,character)=>character+reversed,'')
// console.log(reverse("apple"));

