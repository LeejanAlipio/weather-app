import { weatherService } from '../services/weatherService.js';
import { setTemp, getCurrentTemp, getCurrentTempUnit } from '../state/state.js';
import { elements } from './elements.js';
import { capitalize } from '../utils/capitalize.js';
import { getTemp } from '../utils/tempConversion.js';

export const renderWeather = async (city) => {
  if (!city) {
    renderErrorMessage('Please enter a valid city');
    return;
  }

  try {
    const weatherData = await weatherService.getWeather(city);

    setTemp(weatherData.temp);

    document.body.classList.remove('sunny', 'rain');
    if (getCurrentTemp() >= 90) {
      document.body.classList.add('sunny');
    } else {
      document.body.classList.add('rain');
    }

    try {
      const icon = await import(`../assets/icons/${weatherData.icon}.svg`);
      elements.display.icon.src = icon.default;
    } catch (error) {
      console.error('Icon failed to load: ', error);
    }

    renderWeatherData(weatherData, city);
  } catch (error) {
    console.error(error);
    const message =
      error instanceof Error ? error.message : 'Unable to load weather data.';
    renderErrorMessage(message);
    setTemp(null);
  }
};

export const renderTemp = () => {
  elements.display.temp.textContent = `${getTemp(
    getCurrentTemp(),
    getCurrentTempUnit()
  )}°`;
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

const renderErrorMessage = (message) => {
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
