// ===============================
// FINAL SOLUTION
// ===============================

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/*
function filterRangeInPlace(arr, a, b) {
  //decreasing for loop ? so it counts from the other end then nested for loop to count it back but i dont think the logic is right lol

  for (let i = 0; i <= arr.length;i--) {
    for(let j = 0;j <= arr.length;j++) {
      return arr;
    }
  }
}

let arr = [5, 2, 1, -10, 8];


alert( arr ); 


*/