import path from 'node:path';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

dotenv.config({ path: '.env.local' });

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  plugins: [
    // DefinePlugin injects the key at build time without committing it to source control.
    new webpack.DefinePlugin({
      'process.env.WEATHER_API_KEY': JSON.stringify(
        process.env.WEATHER_API_KEY ?? ''
      ),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
