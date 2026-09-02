import './styles/styles.css';
import { getWeather } from './utils/api.js';
import capitalize from './utils/capitalize.js';
import elements from './utils/elements.js';
import state from './utils/state.js';
import getTempType from './utils/type-conversion.js';

async function renderWeather(city) {
  const weatherData = await getWeather(city);
  const icon = await import(`./assets/icons/${weatherData.icon}.svg`);

  elements.display.location.textContent = capitalize(city);
  elements.display.description.textContent = weatherData.description;
  elements.display.icon.src = icon.default;
  elements.display.temp.textContent = `${getTempType(weatherData.temp)}°`;
  elements.display.humidity.textContent = `${weatherData.humidity}%`;
  elements.display.windSpeed.textContent = `${weatherData.windspeed} km/h`;
  elements.display.sunrise.textContent = weatherData.sunrise;
  elements.display.sunset.textContent = weatherData.sunset;
}

function initListeners() {
  elements.input.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
      renderWeather(elements.input.searchInput.value.trim());
  });

  elements.buttons.celcius.addEventListener('click', () => {
    if (state.temp === 'fahrenheit') {
      state.toggleTemp();
      elements.buttons.celcius.classList.add('active');
      elements.buttons.fahrenheit.classList.remove('active');
      renderWeather(elements.input.searchInput.value.trim());
    }

    return;
  });

  elements.buttons.fahrenheit.addEventListener('click', () => {
    if (state.temp === 'celcius') {
      state.toggleTemp();
      elements.buttons.fahrenheit.classList.add('active');
      elements.buttons.celcius.classList.remove('active');
      renderWeather(elements.input.searchInput.value.trim());
    }

    return;
  });
}

initListeners();
