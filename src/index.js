import './styles/styles.css';
import { getWeather } from './utils/api.js';
import capitalize from './utils/capitalize.js';
import elements from './utils/elements.js';
import state from './utils/state.js';
import getTempType from './utils/type-conversion.js';

async function renderWeather(city) {
  try {
    const weatherData = await getWeather(city);

    if (!weatherData) {
      const notFound = 'City not found';
      elements.display.location.textContent = capitalize(city) || notFound;
      elements.display.description.textContent = notFound;
      elements.display.icon.src = '';
      elements.display.temp.textContent = notFound;
      elements.display.humidity.textContent = notFound;
      elements.display.windSpeed.textContent = notFound;
      elements.display.sunrise.textContent = notFound;
      elements.display.sunset.textContent = notFound;

      state.currentTemp = null;

      return;
    }

    state.currentTemp = weatherData.temp;

    try {
      const icon = await import(`./assets/icons/${weatherData.icon}.svg`);
      elements.display.icon.src = icon.default || '';
    } catch (error) {
      console.error(error);
    }

    elements.display.location.textContent =
      capitalize(city) || 'City not found';
    elements.display.description.textContent = weatherData.description || '';

    updateTempDisplay();
    elements.display.humidity.textContent = `${weatherData.humidity ?? ''}`;
    elements.display.windSpeed.textContent = weatherData.windspeed
      ? `${weatherData.windspeed} km/h`
      : '';
    elements.display.sunrise.textContent = weatherData.sunrise || '';
    elements.display.sunset.textContent = weatherData.sunset || '';
  } catch (error) {
    console.error(error);
  }
}

function updateTempDisplay() {
  elements.display.temp.textContent = `${getTempType(state.currentTemp)}°`;
}

function setUpButtons() {
  elements.buttons.celsius.addEventListener('click', () => {
    if (state.temp === 'fahrenheit' && state.currentTemp !== null) {
      state.toggleTemp();
      elements.buttons.celsius.classList.add('active');
      elements.buttons.fahrenheit.classList.remove('active');
      updateTempDisplay();
    }

    return;
  });

  elements.buttons.fahrenheit.addEventListener('click', () => {
    if (state.temp === 'celsius' && state.currentTemp !== null) {
      state.toggleTemp();
      elements.buttons.fahrenheit.classList.add('active');
      elements.buttons.celsius.classList.remove('active');
      updateTempDisplay();
    }

    return;
  });
}

function initForm() {
  elements.input.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
      renderWeather(elements.input.searchInput.value.trim());
  });

  setUpButtons();
}

initForm();
