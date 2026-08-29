const API_KEY = 'MMDRXDRLWJEBETRGJSRHLSL49';

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`
    );
    
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}