import { expect, test, beforeEach } from 'bun:test';
import { parseUrl, UrlData } from '../utils/parseUrl.ts';

beforeEach(() => {});

test('parseUrl', () => {
  const urlData: UrlData = {
    protocol: 'https:',
    host: 'example.com',
    path: '/',
    searchParams: [],
  };

  expect(parseUrl('https://example.com')).toEqual(urlData);
});

test('parseUrl with query string', () => {
  const urlData: UrlData = {
    protocol: 'https:',
    host: 'example.com',
    path: '/',
    searchParams: [
      { key: 'test1', value: 'true' },
      { key: 'test2', value: '' },
    ],
  };

  expect(parseUrl('https://example.com?test1=true&test2')).toEqual(urlData);
});

test('parseUrl with query string and redirectURL', () => {
  const urlData: UrlData = {
    protocol: 'https:',
    host: 'example.com',
    path: '/',
    searchParams: [
      { key: 'test1', value: 'true' },
      { key: 'test2', value: '' },
      {
        key: 'redirectUrl',
        value: {
          protocol: 'https:',
          host: 'www.google.pl',
          path: '/',
          searchParams: [{ key: 'test3', value: 'true' }],
        },
      },
    ],
  };

  expect(parseUrl('https://example.com?test1=true&test2&redirectUrl=https://www.google.pl?test3=true')).toEqual(
    urlData,
  );
});

test('parseUrl with query string and invalid redirectURL', () => {
  expect(() => parseUrl('example.com?test1=true&test2&redirectUrl=https://www.google.pl?test3=true')).toThrowError(
    'Invalid URL',
  );
});
