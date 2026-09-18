const state = {
  temp: 'fahrenheit',
  currentTemp: null,
};

export const setTemp = (temp) => {
  state.currentTemp = temp;
};

export const getTemp = () => {
  return state.currentTemp;
};

export const getTempUnit = () => {
  return state.temp;
};

export const toggleTempUnit = () => {
  state.temp = state.temp === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};