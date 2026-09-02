# Weather App

A client-side weather application built with vanilla JavaScript and Webpack. It fetches real-time weather data from Visual Crossing and displays current conditions along with a short forecast.

## Live Preview

Visit the app here: [weather-app.vercel.app](https://weather-app-zeta-seven.vercel.app/)

## Features

- Search weather by city or coordinates
- Display current weather conditions with temperature, humidity, and wind speed
- Show a multi-day weather forecast
- Dynamic weather icons based on conditions
- Responsive design for desktop and mobile

## Tech Stack

- Languages: JavaScript, HTML, CSS
- Bundler: Webpack 5
- Notable tooling: HTML Webpack Plugin, Babel, CSS Loader
- API: Visual Crossing Weather API

## Project Structure

```
src/
  index.html          App entry point
  index.js            Main application logic
  styles/             CSS files
  utils/
    api.js            Weather API calls
    elements.js       DOM element helpers
    state.js          App state management
  assets/             Images and SVG icons
webpack.*.js          Webpack configs (common, dev, prod)
package.json          Scripts and dependencies
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

3. Open the local development URL shown by Webpack.

## Build for Production

```bash
npm run build
```

## Scripts

- `npm run dev` — start dev server with hot reloading
- `npm run build` — production build with optimizations
- `npm run lint` — run ESLint

## Notes

- The app uses the Visual Crossing Weather API; you'll need a free API key to run locally.
- Weather data is fetched client-side; no backend server is required.
- Icons are dynamically imported based on current weather conditions.
- The app is designed as a practice project and can be expanded with features like historical data, weather alerts, or multi-language support.

## License

MIT
