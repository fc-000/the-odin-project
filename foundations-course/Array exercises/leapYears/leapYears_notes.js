// ===============================
// FINAL SOLUTION
// ===============================

const leapYears = function(year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    isYearDivisibleByFour && 
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};

// ===============================
// GUIDED/FIXED VERSION (Practice)
// ===============================

/*
const leapYears = function(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
*/

// ===============================
// ORIGINAL ATTEMPT (For Reference)
// ===============================

/* almost had it
const leapYears = function (year) {
  let isLeapYear = true;

  if (year % 4 === 0 && year % 400 === 0) {
    return isLeapYear;
  } else {
    return false;
  }
}

console.log(leapYears(2000));
console.log(leapYears(1985));
console.log(leapYears(2004));
*/