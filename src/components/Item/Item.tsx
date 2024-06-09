import { itemLabel, itemValue, itemWrapper } from './Item.module.css';

interface ItemProps {
  label: string;
  value: string;
}

export const Item = ({ label, value }: ItemProps) => {
  return (
    <div className={itemWrapper}>
      <span className={itemLabel}>{label}</span>
      <span className={itemValue}>{value}</span>
    </div>
  );
};
