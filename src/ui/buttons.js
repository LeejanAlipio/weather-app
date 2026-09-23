import { elements } from './elements.js';
import {
  getCurrentTempUnit,
  getCurrentTemp,
  toggleTempUnit,
} from '../state/state.js';
import { renderTemp } from './renderWeather.js';

export const setUpButtons = () => {
  elements.buttons.celsius.addEventListener('click', () => {
    if (getCurrentTempUnit() !== 'celsius' && getCurrentTemp() !== null) {
      toggleTempUnit();
      elements.buttons.celsius.classList.add('active');
      elements.buttons.fahrenheit.classList.remove('active');
      renderTemp();
    }

    return;
  });

  elements.buttons.fahrenheit.addEventListener('click', () => {
    if (getCurrentTempUnit() !== 'fahrenheit' && getCurrentTemp() !== null) {
      toggleTempUnit();
      elements.buttons.fahrenheit.classList.add('active');
      elements.buttons.celsius.classList.remove('active');
      renderTemp();
    }
  });
};
