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
    celsius: document.querySelector('.celsius-btn'),
    fahrenheit: document.querySelector('.fahrenheit-btn'),
  },
};

export default elements;