import React, { ReactNode } from 'react';

import colors from '@/components/Colors.module.css';
import styles from '@/components/Row.module.css';

interface IRowProps {
  rowColor?: string;
  contentColor?: string;
  marginColor?: string;
  classes?: string | [string];
  children: ReactNode | [ReactNode];
  dropShadow?: 'top' | 'bottom' | 'both';
  contentDisplay?: 'flex' | 'grid';
  id?: string;
  transparency?: boolean;
  contentWidth?: 'small' | 'medium' | 'larger' | 'full';
}

interface IColumnProps {
  children: React.ReactNode;
  padding?: 'small';
  id?: string;
}

export const getBGClassName = (color: string, transparency: boolean) => {
  const key = transparency ? color + 'Trans' : color;

  // using bind so jest doesn't complain about typeerrors
  const classname =
    colors.hasOwnProperty && Object.hasOwnProperty.bind(colors)(key)
      ? colors[key]
      : null;
  return classname;
};

export function Column(props: IColumnProps) {
  const { children, id } = props;

  return (
    <div id={id} className={`${styles.col}`}>
      {children}
    </div>
  );
}

export function Row(props: IRowProps) {
  const {
    classes,
    children,
    contentColor = 'transparent',
    contentDisplay,
    rowColor = 'transparent',
    id,
    dropShadow,
    transparency = false,
  } = props;

  const getRowClasses = () => {
    const rowClasses = [styles.row];

    if (dropShadow === 'top') {
      rowClasses.push(styles.shadowTop);
    } else if (dropShadow === 'bottom') {
      rowClasses.push(styles.shadowBottom);
    } else if (dropShadow === 'both') {
      rowClasses.push(styles.shadow);
    }

    const returnArray =
      typeof classes !== 'string' && Array.isArray(classes)
        ? [...rowClasses, ...classes]
        : [...rowClasses, classes];

    return returnArray.join(' ');
  };

  const marginClass = getBGClassName(rowColor, transparency);
  const contentClass = getBGClassName(contentColor, false);
  const displayClass =
    contentDisplay && contentDisplay === 'flex'
      ? styles.contentFlex
      : styles.contentGrid;

  return (
    <div id={id} className={getRowClasses()}>
      <div className={`${styles.margin} ${marginClass}`} />
      <div className={`${styles.content} ${displayClass} ${contentClass}`}>
        {children}
      </div>
      <div className={`${styles.margin} ${marginClass}`} />
    </div>
  );
}

export default Row;
