// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // for...of loop is used to iterate over the values in an iterable, like an array or string.
  // Create a map of char frequencies
  for(let char of str) {
      if(charMap[char]) {
          charMap[char] ++;
      } else {
          charMap[char] = 1;
      }
  }

  // for...in loop is used for to iterate over the properties of an object (the object keys):
  // Get highest char frequency
  for(let char in charMap) {
      if(charMap[char] > max) {
          max = charMap[char];
          maxChar = char;
      }
  }
  
  return maxChar;

}

// Alternate
function maxChar(str) {
  // Put the chars/frequencies in an object as keys/values
  let charObj = {};

  for(let char of str) {
  // if the charObj[char] key hasn't been created, assigning it charObj[char] + 1
  // will evaluate to null/undefined, i.e. it will be falsy.
  // The short circuit evaluation will therefore (create it and) assign it 1.
  // If the charObj[char] key has been created, it will have a value of at least 1 so
  // you can assign it it's current value plus 1.
  charObj[char] = charObj[char] + 1 || 1;
}
  // Find the highest number value in the object
  // Reduce compares the first two values and returns the higher one (within the function as the 'accumulator').
  // It then compares the next value against the accumulator and returns the higher, until the end of the array.
  // The value returned by reduce() is that of the last callback invocation.
  return Object.keys(charObj).reduce((a,b) => charObj[a] > charObj[b] ? a : b);
}

console.log(
// maxChar("abcccccccd") 
maxChar("apple 1231111")
);

module.exports = maxChar;
