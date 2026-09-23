const API_KEY = 'MMDRXDRLWJEBETRGJSRHLSL49';

class WeatherService {
  constructor(api) {
    this.api = api;
  }

  async getWeather(city) {
    if (!city) return;

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${this.api}`
      );

      if (!response.ok) {
        throw new Error('Fetching Failed', response.status);
      }

      const weatherData = await response.json();

      return this.processedWeatherData(weatherData);
    } catch (error) {
      console.error(error);
    }
  }

  processWeatherData(weatherData) {
    const { timezone, description } = weatherData;
    const {
      temp,
      humidity,
      preciptype,
      windspeed,
      icon,
      sunrise,
      sunset,
      conditions,
    } = weatherData.currentConditions;

    return {
      timezone,
      description,
      temp,
      humidity,
      preciptype,
      windspeed,
      icon,
      sunrise,
      sunset,
      conditions,
    };
  }
}

export const weatherService = new WeatherService(API_KEY);