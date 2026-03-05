celsiusTemp = 0;
fahrenheitTemp = 0;

const convertToFahrenheit = function (temp) {
  celsiusTemp = temp * 1.8 + 32 + "F";
  return celsiusTemp;
};

const convertToCelsius = function (temp) {
  fahrenheitTemp = (temp -32) * 0.56 + "C" ;
  return fahrenheitTemp;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

