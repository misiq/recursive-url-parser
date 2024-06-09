import { wrapper, header, urlInput, button } from './app.module.css';
import { parseUrl } from './utils/parseUrl.ts';
import { UrlDetails } from './components/UrlData/UrlDetails.tsx';

export const App = () => {
  const data = parseUrl(
    'https://mci.pl.canalplus.com/cas/login?service=https%3A%2F%2Fmci.pl.canalplus.com%2Fcas%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Dtvod.redlabs.pl%26redirect_uri%3Dhttps%253A%252F%252Fcp-premiery-uat-fo.redgelabs.com%252Fsubscriber%252Flogin%252Fcanalplus%26response_type%3Dcode%26client_name%3DCasOAuthClient',
  );

  console.log(parseUrl('https://example.com?test1=https://www.google.com&test2'));

  return (
    <div className={wrapper}>
      <h1 className={header}>URL PARSER</h1>
      <input className={urlInput} placeholder="paste your url" />
      <button className={button}>PARSE</button>

      <UrlDetails urlData={data} />
    </div>
  );
};
export default App;
