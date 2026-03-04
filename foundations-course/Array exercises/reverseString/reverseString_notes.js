// ===============================
// FINAL SOLUTION
// ===============================

function reverseString (str) {
  let reversed = "";

  for (let i = str.legnth - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reversed;
}

console.log(reverseString('hello there'));

// ALt version

/*
const reverseString = function (string) {
  return string.split("")reverse().join("");
};

*/


// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
function reverseString (str) {
  let reversed = "";

  for (let i = str.legnth - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reversed;
}

console.log(reverseString('hello there'));
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

function reverseString (str) {
  for (let i = 0; i < str.legnth; i--) {
    return reverseString;
  }
}

console.log(reverseString('hello there'));