const state = {
  temp: 'fahrenheit',
  toggleTemp() {
    state.temp = state.temp === 'fahrenheit' ? 'celcius' : 'fahrenheit';
  },
};

export default state;