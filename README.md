# Weather App

A small client-side weather application built with vanilla JavaScript and Webpack. It fetches weather data from Visual Crossing and displays current conditions and a short forecast.

## Table of contents
- **Overview**: What this project is and what it does
- **Prerequisites**: Tools you need to run the project
- **Quick start**: Install, run in development, and build for production
- **Project structure**: Key files and folders to know
- **Contributing**: How to make changes

## Overview

This is a minimal example app showing how to fetch and render weather data in the browser using a small Webpack setup. It includes dynamic asset imports (SVG icons), simple state handling, and helper utilities.

## Prerequisites

- Node.js (recommended v16+)
- npm (bundled with Node)

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

The development server uses `webpack.dev.js` and serves the app with hot reloading.

## Project structure (high level)

- `src/` — application source
	- `index.html` — HTML entry
	- `index.js` — main JS (renders UI, handles form)
	- `styles/` — CSS files
	- `utils/` — helpers (`api.js`, `elements.js`, `state.js`, etc.)
	- `assets/` — images and icons
- `webpack.*.js` — Webpack configs (dev/prod/common)
- `package.json` — scripts and dependencies

## Scripts

- `npm run dev` — start dev server (uses `webpack.dev.js`)
- `npm run build` — production build (uses `webpack.prod.js`)
- `npm run lint` — run ESLint

## Contributing

Feel free to open issues or PRs. For small changes:

1. Fork the repo
2. Create a branch for your feature/fix
3. Open a PR describing the change