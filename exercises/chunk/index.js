// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create empty array to hold chunks called chunked array
  const chunked = [];
  // for each element in the unchunked array retrive the last element
  for (const element of array) {
    const last = chunked[chunked.length - 1];
    //if last element doesn't exist or it's length is equal to chunk size
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      // add current element into the chunk
      last.push(element);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));

module.exports = chunk;
