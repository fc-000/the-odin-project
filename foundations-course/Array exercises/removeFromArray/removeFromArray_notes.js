// ===============================
// FINAL SOLUTION
// ===============================

const removeFromArray = function (array, ...args) {
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Alt version

/* uses the 'filter' method
const removeFromArray = function(array, ...args) {
  return array.filter(val => !args.includes(val))
}
*/

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
function removeFromArray (arr, ...values) {
  return arr.filter(item => !values.includes(item));
}
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/*
function removeFromArray (arr) {
  for (let i = 0; i < arr.length; i++) {
    let newArr = 0;
    
    newArr = arr.split([2]);
    newArr = arr.join 
    //.join?? but where lmao

    return newArr;
  }
}
*/
