import { Item } from '../Item/Item.tsx';
import { UrlData } from '../../utils/parseUrl.ts';

interface UrlDataProps {
  urlData: UrlData | null;
}

export const UrlDetails = ({ urlData }: UrlDataProps) => {
  if (!urlData) return null;

  return (
    <div style={{ maxWidth: '800px', marginTop: '50px' }}>
      {Object.entries(urlData).map(([key, value]) => (
        <div>
          {typeof value === 'string' ? (
            <Item label={key} value={value} key={key} />
          ) : (
            <div>{UrlDetails({ urlData: value })}</div>
          )}
        </div>
      ))}
    </div>
  );
};
