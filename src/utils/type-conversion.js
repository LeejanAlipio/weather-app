import { getTempUnit } from './state.js';

export default function getTempType(temp) {
  if (getTempUnit() === 'celsius') {
    return (((temp - 32) * 5) / 9).toFixed(2);
  } else {
    return temp;
  }
}
