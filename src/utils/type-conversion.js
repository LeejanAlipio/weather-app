import state from './state.js';

export default function getTempType(temp) {
  if (state.temp === 'celcius') {
    return (((temp - 32) * 5) / 9).toFixed(2);
  } else {
    return temp;
  }
}