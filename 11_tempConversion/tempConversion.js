const convertToCelsius = function(degreesInFahrenheit) {
  degreesInCelsius = (degreesInFahrenheit - 32) * (5/9);
  return degreesInCelsius % 1 === 0 ? degreesInCelsius : Number(degreesInCelsius.toFixed(1))
};

const convertToFahrenheit = function(degreesInCelsius) {
  degreesInFahrenheit = (degreesInCelsius * (9/5)) + 32;
  return degreesInFahrenheit % 1 === 0 ? degreesInFahrenheit : Number(degreesInFahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
