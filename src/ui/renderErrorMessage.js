import { elements } from './elements.js';

export const renderErrorMessage = (message) => {
  elements.display.description.textContent = message;
  elements.display.humidity.textContent = message;
  elements.display.icon.textContent = '';
  elements.display.location.textContent = message;
  elements.display.sunrise.textContent = message;
  elements.display.sunset.textContent = message;
  elements.display.temp.textContent = message;
  elements.display.windSpeed.textContent = message;
};
