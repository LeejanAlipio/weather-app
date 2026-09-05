import './styles/styles.css';
import { getWeather } from './utils/api.js';
import capitalize from './utils/capitalize.js';
import elements from './utils/elements.js';
import state from './utils/state.js';
import getTempType from './utils/type-conversion.js';

async function renderWeather(city) {
  const normalizedCity = city.trim();

  if (!normalizedCity) {
    renderErrorState('City not found');
    return;
  }

  try {
    const weatherData = await getWeather(normalizedCity);

    if (!weatherData) {
      renderErrorState('City not found');
      state.currentTemp = null;
      return;
    }

    state.currentTemp = weatherData.temp;

    try {
      const icon = await import(`./assets/icons/${weatherData.icon}.svg`);
      elements.display.icon.src = icon.default || '';
    } catch (error) {
      console.error('Icon load failed:', error);
    }

    elements.display.location.textContent = capitalize(normalizedCity) || 'City not found';
    elements.display.description.textContent = weatherData.description || '';
    elements.display.humidity.textContent = weatherData.humidity ?? '';
    elements.display.windSpeed.textContent = weatherData.windspeed
      ? `${weatherData.windspeed} km/h`
      : '';
    elements.display.sunrise.textContent = weatherData.sunrise || '';
    elements.display.sunset.textContent = weatherData.sunset || '';

    updateTempDisplay();
  } catch (error) {
    console.error('Render failed:', error);
    renderErrorState('City not found');
  }
}

function renderErrorState(message) {
  elements.display.location.textContent = message;
  elements.display.description.textContent = message;
  elements.display.icon.src = '';
  elements.display.temp.textContent = message;
  elements.display.humidity.textContent = message;
  elements.display.windSpeed.textContent = message;
  elements.display.sunrise.textContent = message;
  elements.display.sunset.textContent = message;
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
