import { getTemp } from '../src/utils/tempConversion.js';

test('converts Fahrenheit to Celsius', () => {
  expect(getTemp(90, 'celsius')).toBe(32.22);
});

test('keeps Fahrenheit values unchanged', () => {
  expect(getTemp(90, 'fahrenheit')).toBe(90);
});