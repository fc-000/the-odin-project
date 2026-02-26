// ===============================
// FINAL SOLUTION
// ===============================

function unique(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

function unique(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/*
function unique(arr) {
  //okay not sure how to approach this but i believe i need a for loop to look into the array 
  
  //perhaps a nested loop to judge whether it is unique?


  for (let i = 0; i < arr.length;i++) {
    if (let j = 0; j < i;j++) {
      //should skip over but how HUHUHU
      //but i do think it has to pivot through loop then condition
    }
  }
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O


*/