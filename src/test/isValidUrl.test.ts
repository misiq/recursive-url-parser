import { expect, test } from 'bun:test';
import { isValidUrl } from '../utils/isValidUrl.ts';

test('isValidUrl', () => {
  expect(isValidUrl('https://example.com')).not.toBe(true);
});
