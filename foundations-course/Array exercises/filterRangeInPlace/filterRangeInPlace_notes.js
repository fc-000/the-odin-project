// ===============================
// FINAL SOLUTION
// ===============================

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) { // llooking into the array
    let val = arr[i]; // stores current value

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--; // compensates for array shifting after removal
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

alter(arr);

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

alter(arr);
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/*
function filterRangeInPlace(arr, a, b) {
  return arr.filter(item => a <= item && item <= b)
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr); 
*/
