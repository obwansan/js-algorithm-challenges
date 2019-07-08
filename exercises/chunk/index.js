// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Using slice()
// slice returns a shallow copy of part of the array 
const chunk = (array, size) => {
  let chunkContainer = [];
  for(let i = 0; i < array.length; i += size) {
      chunkContainer.push(array.slice(i, i + size));
  }
  return chunkContainer;
}

/*

// Using slice()
// slice returns a shallow copy of part of the array 
const chunk = (array, size) => {
  let chunkContainer = [];
  let index = 0;

  while(index < array.length) {
    chunkContainer.push(array.slice(i, i + size));
    index += size;
  }
  return chunkContainer;
}

// Using splice()
// splice returns part of the array (modifying the original array)
const chunk = (array, size) => {
  let chunkContainer = [];
  while(array.length > 0) { 
      chunkContainer.push(array.splice(0, size));
  }
  return chunkContainer;
}

// Using for...of
function chunk(array, size) {
  var chunked = [];
  var lastSubArray = [];

  for(var el of array) {
    // Get the last sub-array in array (won't be a sub-array on first loop)
    lastSubArray = chunked[chunked.length - 1];
    // If no sub-arrays have been pushed to chunked yet, or the last sub-array
    // is already full (i.e. contains 2 elements if size parameter is 2)
    if(!lastSubArray || lastSubArray.length === size) {
      // Push a new sub-array to chunked array, containing the element
      chunked.push([el]);
      // Otherwise push the current element of array into the last sub-array
      // of chunked (can push directly into the sub-array because we access
      // it as lastSubArray).
    } else {
      lastSubArray.push(el);
    }
  }
  return chunked;
}

*/

module.exports = chunk;
