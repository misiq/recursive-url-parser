import { wrapper, header, urlInput, button } from './app.module.css';
import { UrlDetails } from './components/UrlData/UrlDetails.tsx';
import { useEffect, useState } from 'react';
import { parseUrl } from './utils/parseUrl.ts';
import { isValidUrl } from './utils/isValidUrl.ts';

const handleParse = (url?: string) => {
  const currentUrl = new URL(window.location.href);
  if (!url) {
    currentUrl.searchParams.delete('uri');
  } else {
    currentUrl.searchParams.set('uri', url);
  }
  history.pushState({}, '', currentUrl);
};

const urlParams = new URLSearchParams(window.location.search);

export const App = () => {
  const defaultUrl = urlParams.get('uri') || '';

  const [value, setValue] = useState(defaultUrl);

  useEffect(() => {
    handleParse(value);
  }, [value]);

  return (
    <div className={wrapper}>
      <h1 className={header}>URL PARSER</h1>
      <input
        value={value}
        onChange={(elem) => setValue(elem.target.value)}
        className={urlInput}
        placeholder="paste your url"
      />
      {/*<button onClick={() => handleParse(value)} className={button}>*/}
      {/*  PARSE*/}
      {/*</button>*/}

      {!!value && (isValidUrl(value) ? <UrlDetails urlData={parseUrl(value)} /> : 'Invalid URL')}
    </div>
  );
};
export default App;
