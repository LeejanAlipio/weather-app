const state = {
  temp: 'fahrenheit',
  currentTemp: null,
  toggleTemp() {
    state.temp = state.temp === 'fahrenheit' ? 'celsius' : 'fahrenheit';
  },
};

export default state;