import { isValidUrl } from './isValidUrl.ts';

export type SearchParams = { [key: string]: string | UrlData };

export type UrlData = {
  protocol: string;
  host: string;
  path: string;
  [key: string]: string | UrlData;
};

export const parseUrl = (url: string): UrlData => {
  try {
    const urlData = new URL(url);
    const searchParams: SearchParams = {};

    for (const key of urlData.searchParams.keys()) {
      const value = urlData.searchParams.getAll(key)[0];

      searchParams[key] = value;

      if (isValidUrl(value)) {
        searchParams[key + '_details'] = parseUrl(value);
      }
    }

    return {
      protocol: urlData.protocol,
      host: urlData.host,
      path: urlData.pathname,
      ...searchParams,
    };
  } catch (error) {
    throw new Error('Invalid URL');
  }
};
