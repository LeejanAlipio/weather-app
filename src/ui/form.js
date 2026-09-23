import { elements } from './elements.js';
import { renderWeather } from './renderWeather.js';

export const initializeApp = () => {
  elements.input.searchInput.addEventListener('search', () => {
    renderWeather(elements.input.searchInput.value.trim());
  });
};
