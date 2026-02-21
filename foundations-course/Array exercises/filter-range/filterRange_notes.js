// solution

function filteredRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1]; // sample array

let filtered = filteredRange(arr, 1, 4);

alert(filtered);
alert(arr);

// fixed/guided vers.

/* function filteredRange(arr, a, b) {
  let result = [];

  // placing for loop was correct
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) { // got this logic
      result.push(arr[i]); 
    }
  }

  return result;
} */


/* attempt 
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
  //for loop that looks into array?
  let i = 0;
  
  // perhaps if statement to segregate, tried to do shorten version
  if (i >= a && i <= b) {
    return i;
  } else {
    //not sure what statement to place here
  }
};

alert (filtered);

alter (arr); */