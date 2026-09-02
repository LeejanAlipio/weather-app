# TODO — Finish TOP Weather App project

This file lists remaining tasks and improvements to bring the project fully in line with The Odin Project requirements and polish it for a portfolio.

High priority

- [ ] Move unit toggle event listeners out of renderWeather and attach them once during app initialization (file: `src/index.js`).
  - Rationale: Each call to renderWeather currently re-attaches listeners which leads to duplicated handlers.
  - Suggestion: Add `setupButtons()` and call it from `initForm()` or top-level init.

- [ ] Add a loading indicator while fetching weather data (files: `src/index.js`, `src/styles/styles.css`).
  - Show a spinner or apply a `.loading` class to the main container; hide when fetch completes or fails.

- [ ] Prevent exposing API key in source (file: `src/utils/api.js`).
  - Rationale: `API_KEY` is currently hard-coded.
  - Suggestion: Use environment variables at build time or a minimal server-side proxy for the key. Document the approach in README.

Medium priority

- [ ] Implement dynamic styling based on weather (files: `src/index.js`, `src/styles/styles.css`).
  - Map `weatherData.icon` or `description` to body classes (e.g., `.clear`, `.rain`, `.snow`) and style backgrounds/images accordingly.

- [ ] Render the 7-day forecast using the parsed `dayOne..daySeven` data returned by `parseWeatherData` (files: `src/utils/api.js`, `src/index.js`).
  - Add a forecast component/section in `index.html` and populate it from the returned day objects.

- [ ] Add a fallback for icon loading (file: `src/index.js`).
  - If dynamic icon import fails, use a default icon or hide the image gracefully.

Low priority / polish

- [ ] Improve accessibility: add labels, keyboard focus styles, and an `aria-live` region for the weather results (file: `src/index.html`, `src/index.js`).
- [ ] Add tests for parsing and conversion utilities (files: `src/utils/*.js`).
- [ ] Document known limitations and local dev instructions in `README.md` (e.g., how to supply API key for local dev).
- [ ] Optional: add an animated loader, fetch related GIFs (Giphy) as an extra feature.

Notes

- Files referenced above exist in the repository and are a good starting point for each task.
- If you want, I can create PR branches and implement each item step-by-step. Tell me which item you'd like me to implement first and I'll make the changes.
