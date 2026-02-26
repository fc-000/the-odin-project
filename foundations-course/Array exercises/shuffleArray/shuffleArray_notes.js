// ===============================
// FINAL SOLUTION
// ===============================

function shuffle(array) {
  
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
  
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1,2,3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
function shuffle(array) {
  
  Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
  
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1,2,3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/*
function shuffle(array) {
  return array.shuffle(); 
  // this does not exist lil bro
}

let arr = [1,2,3];

shuffle(arr);
shuffle(arr);
shuffle(arr);
*/

