import { PropsWithChildren } from 'react';
import classes from './Billboard.module.css';

interface IBillboardItemProps {
  children: JSX.Element | JSX.Element[];
  imgAlt?: string;
  imgSrc?: string;
  textColor?: 'light' | 'dark';
  visible?: boolean;
}

export default function BillboardItem(
  props: PropsWithChildren<IBillboardItemProps>,
): JSX.Element {
  const { visible, children } = props;

  const textColorClass =
    props.textColor === 'dark' ? classes.dark : classes.light;
  const visibleClass = visible ? classes.active : '';
  return (
    <div className={`${classes.item} ${textColorClass} ${visibleClass}`}>
      {children}
    </div>
  );
}
