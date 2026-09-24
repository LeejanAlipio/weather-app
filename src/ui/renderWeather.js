import { weatherService } from '../services/weatherService.js';
import { setTemp, getCurrentTemp } from '../state/state.js';
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

    if (!weatherData) {
      renderErrorMessage('City not Found');
      return;
    }

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
  }
};

export const renderTemp = () => {
  elements.display.temp.textContent = `${getTemp(getCurrentTemp())}°`;
};

const renderWeatherData = (weatherData, city) => {
  elements.display.description.textContent = weatherData.description;
  elements.display.humidity.textContent = weatherData.humidity;
  elements.display.location.textContent = capitalize(city);
  elements.display.sunrise.textContent = weatherData.sunrise;
  elements.display.sunset.textContent = weatherData.sunset;
  renderTemp();
  elements.display.windSpeed.textContent = `${weatherData.windspeed} km/h`;
};

const renderErrorMessage = (message) => {
  elements.display.description.textContent = message;
  elements.display.humidity.textContent = message;
  elements.display.icon.src = '';
  elements.display.location.textContent = message;
  elements.display.sunrise.textContent = message;
  elements.display.sunset.textContent = message;
  elements.display.temp.textContent = message;
  elements.display.windSpeed.textContent = message;
};
