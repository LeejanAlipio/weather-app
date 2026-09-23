import { getCurrentTempUnit } from '../state/state.js';

export const getTemp = (temp) => {
  if (getCurrentTempUnit() === 'fahrenheit') {
    return temp;
  }
  
  return Number(((temp - 32) * (5 / 9)).toFixed(2)); 
};
