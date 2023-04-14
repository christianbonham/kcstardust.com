import React, { ReactNode } from 'react';

import colors from '@/components/Colors.module.css';
import styles from '@/components/Row.module.css';

interface IRowProps {
  contentColor?: string;
  contentDisplay?: 'flex' | 'grid';
  contentWidth?: 'sm' | 'med' | 'lg' | 'xl' | 'full';
  marginColor?: string;
  classes?: string | [string];
  children: ReactNode | [ReactNode];
  dropShadow?: 'top' | 'bottom' | 'both';
  id?: string;
  rowColor?: string;
  transparency?: boolean;
}

interface IColumnProps {
  children: React.ReactNode;
  padding?: 'small';
  id?: string;
  noPadding?: boolean;
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

const getContentWidthClassName = (width: string) => {
  const keys = ['sm', 'med', 'lg', 'xl', 'full'];
  const key = keys.includes(width) ? width : 'full';
  const classname =
    styles.hasOwnProperty && Object.hasOwnProperty.bind(styles)(key)
      ? styles[key]
      : styles.full;

  return classname;
};

export function Column(props: IColumnProps) {
  const { children, id, noPadding } = props;

  const paddingClass = noPadding ? styles.noPadding : '';
  return (
    <div id={id} className={`${styles.col} ${paddingClass}`}>
      {children}
    </div>
  );
}

export function Row(props: IRowProps) {
  const {
    classes,
    children,
    contentColor = 'transparent',
    contentWidth = 'med',
    contentDisplay = 'grid',
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
  const widthClass = getContentWidthClassName(contentWidth);
  const displayClass =
    contentDisplay && contentDisplay === 'flex' ? styles.flex : styles.grid;

  return (
    <div id={id} className={getRowClasses()}>
      <div className={`${styles.margin} ${marginClass}`} />
      <div
        className={`${styles.content} ${displayClass} ${contentClass} ${widthClass}`}
      >
        {children}
      </div>
      <div className={`${styles.margin} ${marginClass}`} />
    </div>
  );
}

export default Row;
