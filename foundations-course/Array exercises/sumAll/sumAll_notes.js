// ===============================
// FINAL SOLUTION
// ===============================

const sumAll = function (min, max) {
  if (!Number.isInterger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;
  for (let i = min; i<= max; i++) {
    sum += i;
  }
  return sum;
}

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
function sumAll (num1, num2) {
  let result = 0;

  for (let i = num1; i <= num2; i++) {
    result += i;
  }

  return result;
}


console.log(sumAll(1, 4));
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/* pretty bad ngl
function sumAll (num1, num2) {

  for (let i = 0; i < num2; i++) {
    result (num1 + 1);
  }

  return result;
}

alert(sumAll(1, 4));
*/