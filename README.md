# Weather App

A client-side weather application built with vanilla JavaScript and Webpack. It fetches current weather data from the Visual Crossing Weather API and displays it in a simple dashboard.

## Live Demo

Visit the deployed app at [weather-app-zeta-seven.vercel.app](https://weather-app-zeta-seven.vercel.app/).

## Features

- Search for current weather by city
- Display temperature, conditions, humidity, wind speed, sunrise, and sunset
- Toggle the displayed temperature between Fahrenheit and Celsius
- Change the page theme based on the current temperature
- Load weather icons dynamically from `src/assets/icons`

## Tech Stack

- JavaScript, HTML, and CSS
- Webpack 5
- Babel
- ESLint and Jest
- Visual Crossing Weather API

## Project Structure

```text
src/
  index.html                 HTML template
  index.js                   Application entry point
  assets/
    fonts/                   Local font files
    icons/                   Weather icons
  services/
    weatherService.js        Weather API requests and data processing
  state/
    state.js                 Temperature and unit state
  styles/
    styles.css               Application styles and weather themes
  ui/
    buttons.js               Temperature unit button handlers
    elements.js              DOM element references
    form.js                  Search input handler
    renderWeather.js         Weather data and error rendering
  utils/
    capitalize.js            City name formatting
    tempConversion.js        Fahrenheit/Celsius conversion
webpack.common.js            Shared Webpack configuration
webpack.dev.js               Development configuration
webpack.prod.js              Production configuration
```

## Getting Started

Prerequisites: Node.js and npm.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown by Webpack.

The Visual Crossing API key is injected at build time from the `WEATHER_API_KEY`
environment variable. Client-side keys are visible to users, so production should
use a restricted key or a server-side proxy.

For a local build, set the variable before starting Webpack:

```bash
WEATHER_API_KEY=your-key npm run dev
```

## Production Build

```bash
npm run build
```

The optimized output is written to `dist/`.

## Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Create a production build
- `npm run lint` - Run ESLint
- `npm test` - Run the Jest test suite

## Current Limitations

- Only the weather icon currently included in the project can be rendered. Additional Visual Crossing icon names need matching files in `src/assets/icons`.
- The current interface displays current conditions only; forecast data is not rendered yet.
- API errors are shown in the weather panel; a production app could add richer
  error states and retry actions.
