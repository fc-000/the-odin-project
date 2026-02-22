// ===============================
// FINAL SOLUTION
// ===============================

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); 
alert( arr ); 


// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); 
alert( arr ); 

*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/*
function copySorted(arr) {
  return arr.reverse();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); 
alert( arr ); 

*/