# Webpack Template

A lightweight Webpack starter template for building frontend projects quickly. It includes a simple development workflow, production build setup, and basic linting and formatting support.

## Features

- Development and production Webpack configurations
- HTML generation with HtmlWebpackPlugin
- CSS loading with style-loader and css-loader
- HTML loading with html-loader
- ES module-based Webpack config files
- ESLint and Prettier support for consistent code quality

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/LeejanAlipio/webpack-template.git
```

2. Navigate into the project folder:

```bash
cd webpack-template
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Available Scripts

- `npm run dev` — start the development server with live reloading
- `npm run build` — create a production build using `webpack.prod.js`
- `npm run lint` — run ESLint across the project
- `npm run lint:fix` — automatically fix ESLint issues where possible

## Code Quality

You can also check formatting with Prettier:

```bash
npx prettier --check .
```

To format files automatically:

```bash
npx prettier --write .
```

## Project Structure

```text
webpack-template/
├── src/
│   ├── index.html
│   ├── index.js
│   └── styles/
│       └── styles.css
├── .prettierrc
├── eslint.config.js
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
└── README.md
```

## Notes

This template is a good starting point for small projects and can be expanded as needed for more advanced frontend builds.
