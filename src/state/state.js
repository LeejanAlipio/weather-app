const state = {
  temp: null,
  tempUnit: 'fahrenheit',
};

export const setTemp = (temp) => {
  return state.temp = temp;
};

export const getCurrentTemp = () => {
  return state.temp;
};

export const getCurrentTempUnit = () => {
  return state.tempUnit;
};

export const toggleTempUnit = () => {
  return (state.tempUnit =
    state.tempUnit === 'fahrenheit' ? 'celcius' : 'fahrenheit');
};
