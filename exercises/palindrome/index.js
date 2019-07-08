// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // check if the same char is in the opposite index
    return str.split('').every(function (char, i) {
      return char === str[(str.length - 1) - i];
    });
}

module.exports = palindrome;

// array.every()
/*
The every method executes the provided callback function once for each element
present in the array until it finds the one where callback returns a falsy value.
If such an element is found, the every method immediately returns false.
Otherwise, if callback returns a truthy value for all elements, every returns true.
 */

// ALTERNATE SOLUTIONS
/*

function palindrome(str) {
    return str.split('').reduce((rev, char) => char + rev, '') === str ? true : false;
}

function palindrome(str) {
    var reversed = str.split('').reduce((rev, char) => char + rev, '');
    return reversed === str;
}

 */
