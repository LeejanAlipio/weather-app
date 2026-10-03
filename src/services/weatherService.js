const API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

class WeatherService {
  #apiKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  async getWeather(city) {
    const normalizedCity = city?.trim();
    if (!normalizedCity) {
      throw new Error('A city is required to fetch weather data.');
    }

    if (!this.#apiKey) {
      throw new Error('Weather API key is not configured.');
    }

    // Encoding prevents spaces and reserved characters in city names from changing the URL.
    const response = await fetch(
      `${API_URL}/${encodeURIComponent(normalizedCity)}?key=${this.#apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Weather request failed with status ${response.status}.`);
    }

    return this.#processWeatherData(await response.json());
  }

  #processWeatherData(weatherData) {
    // Fail early so API changes produce a useful error instead of a nested-property TypeError.
    if (!weatherData?.currentConditions) {
      throw new Error('Weather response is missing current conditions.');
    }

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

export const weatherService = new WeatherService(process.env.WEATHER_API_KEY);
