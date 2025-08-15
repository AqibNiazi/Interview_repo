// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
// Solution 1
// function capitalize(str) {
//   // first create an array to store capitized words.
//   const words = [];

//   // Loop through the array to make capitalized words from the array.

//   for (let word of str.split(" ")) {
//     //first capitalize first letter of each word in the array and then combine it with other part of the word using slice method.
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   //change all the words into string using join method and return it.
//   return words.join(" ");
// }

// console.log(capitalize("hello hi there"));


// Solution 2:

function capitalize(str) {
  //create a result string with the first letter capitalized
  let result=str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    
      if(str[i-1]===' '){
        result+=str[i].toUpperCase()
      }else{
        result+=str[i]
      }
  }
  return result
}

console.log(capitalize("hello wordls"));
