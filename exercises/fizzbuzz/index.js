// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const fizzBuzz = (num) => {
  for (let i = 1; i <=num; i++) {
      if(i % 3 ===0 && i % 5===0){
          console.log("Fizzbuzz");
      }else if(i % 3===0){
        console.log("Fizz");
      } else if(i % 5===0){
        console.log("Buzz");
     }else{
  console.log(i);
     }
  }
}
fizzBuzz(50)













// function fizzBuzz(n) {
//   const fizzbuzz = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       //check to see if i is multiple of 3 and 5
//       fizzbuzz.push("fizzbuzz");
//     } else if (i % 3 == 0) {
//       //check to see if i is multiple of 3
//       fizzbuzz.push("fizz");
//     } else if (i % 5 == 0) {
//       //check to see if i is multiple of 5
//       fizzbuzz.push("buzz");
//     } else {
//       //
//       fizzbuzz.push(i);
//     }
//   }
//   return fizzbuzz;
// }
// console.log(fizzBuzz(50));
// module.exports = fizzBuzz;
