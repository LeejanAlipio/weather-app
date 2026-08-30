const API_KEY = 'MMDRXDRLWJEBETRGJSRHLSL49';

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return parseWeatherData(data);
  } catch (error) {
    console.log(error);
  }
}

function parseWeatherData(weatherData) {
  const {
    humidity,
    icon: weather,
    sunrise,
    sunset,
    temp,
    windspeed,
  } = weatherData.currentConditions;
  const [dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven] =
    weatherData.days;
  const { description, timezone } = weatherData;

  return {
    humidity,
    icon: weather,
    sunrise,
    sunset,
    temp,
    windspeed,
    dayOne,
    dayTwo,
    dayThree,
    dayFour,
    dayFive,
    daySix,
    daySeven,
    description,
    timezone
  };
}
