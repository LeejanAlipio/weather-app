import { getTemp } from '../src/utils/tempConversion';
import { toggleTempUnit } from '../src/state/state';

test('Convert temp unit', () => {
  toggleTempUnit();
  expect(getTemp(90)).toBe(32.22);
});