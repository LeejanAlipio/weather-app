import './styles/styles.css';
import { getWeather } from './utils/api.js';
import capitalize from './utils/capitalize.js';

const elements = {
  input: {
    searchInput: document.querySelector('.search'),
  },
  display: {
    location: document.querySelector('.location'),
    description: document.querySelector('.description'),
    icon: document.querySelector('.weather-icon'),
    temp: document.querySelector('.temp'),
    humidity: document.querySelector('.humidity-data'),
    windSpeed: document.querySelector('.wind-speed-data'),
    sunrise: document.querySelector('.sunrise-data'),
    sunset: document.querySelector('.sunset-data'),
  },
  buttons: {
    celcius: document.querySelector('.celcius-btn'),
    fahrenheit: document.querySelector('.fahrenheit-btn'),
  },
};

async function renderWeather(city) {
  const weatherData = await getWeather(city);
  const icon = await import(`./assets/icons/${weatherData.icon}.svg`);

  elements.display.location.textContent = capitalize(city);
  elements.display.description.textContent = weatherData.description;
  elements.display.icon.src = icon.default;
  elements.display.temp.textContent = `${weatherData.temp}°`;
  elements.display.humidity.textContent = `${weatherData.humidity}%`;
  elements.display.windSpeed.textContent = `${weatherData.windspeed} km/h`;
  elements.display.sunrise.textContent = weatherData.sunrise;
  elements.display.sunset.textContent = weatherData.sunset;
}

elements.input.searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') renderWeather(elements.input.searchInput.value.trim());
});
