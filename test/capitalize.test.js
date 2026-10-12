import { capitalize } from '../src/utils/capitalize';

describe('Capitalize input string', () => {
  test('string to String', () => {
    expect(capitalize('string')).toBe('String');
  });
});
