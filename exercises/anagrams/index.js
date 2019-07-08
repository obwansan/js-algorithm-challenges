// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // Can't be an anagram if different number characters
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // char is the object key
  // Only need to loop through one object (char map). Could be either. Just allows you to
  // check the value of each key in one map against the value of the same key in the other map.
  // E.g. 'is the value of key a: in aCharMap not the same as the value of key a: in bCharMap'.
  // No danger of duplicate keys (i.e. same char) due to how buildCharMap builds the map.
  for (let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  // Strip out non-alphanumeric characters and make lowercase
  const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

  // Build char map (object)
  for (let char of cleanedStr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;


/*
{ r:1, a:2, i:1, l:1, s:1, f:1, e:1, t:1, y:1 }
{ f:1, a:2, i:1, r:1, y:1, t:1, l:1, e:1, s:1 }
 */