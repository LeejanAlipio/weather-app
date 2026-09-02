const state = {
  temp: 'fahrenheit',
  currentTemp: null,
  toggleTemp() {
    state.temp = state.temp === 'fahrenheit' ? 'celcius' : 'fahrenheit';
  },
};

export default state;