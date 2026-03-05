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

console.log(leapYears(2000));
console.log(leapYears(1985));
