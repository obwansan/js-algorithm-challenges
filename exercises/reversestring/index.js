// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('hello');

module.exports = reverse;

/*
.reduce() takes two parameters, a callback (with params) and the initial value of the
'reduced' value that will be returned. This initial value is assigned to the
first parameter of the callback (so here the value of the parameter 'rev' is
an empty string).

The second parameter of the callback holds the array element on each loop
(i.e. 'char').

On each loop of the reduce method, the value of 'char + rev' is returned to
the 'rev' parameter in the callback. So this builds up the reversed string as
the value of the parameter 'rev'.

When the reduce method has looped through all elements in the array, the
'reduced' value (rev) is returned.
*/
