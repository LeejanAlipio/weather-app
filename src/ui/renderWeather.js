import { weatherService } from '../services/weatherService.js';
import { setTemp, getCurrentTemp, getCurrentTempUnit } from '../state/state.js';
import { elements } from './elements.js';
import { capitalize } from '../utils/capitalize.js';
import { getTemp } from '../utils/tempConversion.js';

const SUNNY_TEMPERATURE_THRESHOLD_FAHRENHEIT = 90;

export const renderWeather = async (city) => {
  if (!city) {
    showErrorState('Please enter a valid city');
    return;
  }

  try {
    const weatherData = await weatherService.getWeather(city);

    setTemp(weatherData.temp);

    updateWeatherTheme(weatherData.temp);
    await loadWeatherIcon(weatherData.icon);

    renderWeatherData(weatherData, city);
  } catch (error) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : 'Unable to load weather data.';
    showErrorState(message);
  }
};

export const renderTemp = () => {
  const temp = getCurrentTemp();

  if (temp === null) {
    elements.display.temp.textContent = '';
    return;
  }

  elements.display.temp.textContent = `${getTemp(temp, getCurrentTempUnit())}°`;
};

const renderWeatherData = (weatherData, city) => {
  elements.display.description.textContent = weatherData.description;
  elements.display.humidity.textContent = `${weatherData.humidity}%`;
  elements.display.location.textContent = capitalize(city);
  elements.display.sunrise.textContent = weatherData.sunrise;
  elements.display.sunset.textContent = weatherData.sunset;
  renderTemp();
  elements.display.windSpeed.textContent = `${weatherData.windspeed} km/h`;
};

const updateWeatherTheme = (temperature) => {
  document.body.classList.remove('sunny', 'rain');
  document.body.classList.add(
    temperature >= SUNNY_TEMPERATURE_THRESHOLD_FAHRENHEIT ? 'sunny' : 'rain'
  );
};

const loadWeatherIcon = async (iconName) => {
  try {
    const icon = await import(`../assets/icons/${iconName}.svg`);
    elements.display.icon.src = icon.default;
  } catch (error) {
    console.error('Icon failed to load:', error);
    elements.display.icon.src = '';
  }
};

const showErrorState = (message) => {
  setTemp(null);

  const displayFields = [
    elements.display.description,
    elements.display.humidity,
    elements.display.location,
    elements.display.sunrise,
    elements.display.sunset,
    elements.display.temp,
    elements.display.windSpeed,
  ];

  displayFields.forEach((field) => {
    field.textContent = message;
  });

  elements.display.icon.src = '';
};
