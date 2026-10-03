export const getTemp = (temp, unit = 'fahrenheit') => {
  // Keeping the unit as an argument makes conversion deterministic and easy to test.
  if (unit === 'fahrenheit') {
    return temp;
  }

  return Number(((temp - 32) * (5 / 9)).toFixed(2));
};
