const state = {
  temp: null,
  tempUnit: 'fahrenheit',
};

export const setTemp = (temp) => {
  state.temp = temp;
};

export const getCurrentTemp = () => {
  return state.temp;
};

export const getCurrentTempUnit = () => {
  return state.tempUnit;
};

export const toggleTempUnit = () => {
  state.tempUnit =
    state.tempUnit === 'fahrenheit' ? 'celsius' : 'fahrenheit';
};
