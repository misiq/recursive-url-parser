import { expect, test } from 'bun:test';
import { parseUrl, UrlData } from '../utils/parseUrl.ts';

test('parseUrl with URL containing search parameters and nested URL', () => {
  const urlData: UrlData = {
    protocol: 'https:',
    host: 'example.com',
    path: '/',
    test1: 'https://www.google.com',
    test1_details: {
      protocol: 'https:',
      host: 'www.google.com',
      path: '/',
    },
    test2: '',
  };

  expect(parseUrl('https://example.com?test1=https://www.google.com&test2')).toEqual(urlData);
});

test('parseUrl with URL containing no search parameters', () => {
  const urlData: UrlData = {
    protocol: 'https:',
    host: 'example.com',
    path: '/',
  };

  expect(parseUrl('https://example.com')).toEqual(urlData);
});

test('parseUrl with invalid URL', () => {
  expect(() => parseUrl('invalidUrl')).toThrowError('Invalid URL');
});

test('parseUrl with URL containing search parameter as valid URL', () => {
  const urlData: UrlData = {
    protocol: 'https:',
    host: 'example.com',
    path: '/',
    redirectUrl: 'https://www.google.com',
    redirectUrl_details: {
      protocol: 'https:',
      host: 'www.google.com',
      path: '/',
    },
  };

  expect(parseUrl('https://example.com?redirectUrl=https://www.google.com')).toEqual(urlData);
});
