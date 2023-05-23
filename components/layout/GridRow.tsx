import React, { ReactNode } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import colors from '@/Colors.module.css';
import styles from './GridRow.module.css';

interface IGridRowProps {
  contentColor?: string;
  contentDisplay?: 'flex' | 'grid';
  contentPadding?: boolean;
  contentWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl ' | 'full' | 'auto';
  marginColor?: string;
  classes?: string | [string];
  children: ReactNode | [ReactNode];
  dropShadow?: 'top' | 'bottom' | 'both';
  id?: string;
  rowColor?: string;
  transparency?: 'row' | 'margin' | 'content' | 'none';
}

export const getBGClassName = (color: string, transparency: boolean) => {
  const key = transparency ? color + 'Trans' : color;
  // using bind so jest doesn't complain about typeerrors
  const classname =
    colors.hasOwnProperty && Object.hasOwnProperty.bind(colors)(key)
      ? colors[key]
      : '';
  return classname;
};

const renderColumn = (
  width: string,
  className: string,
  children: ReactNode | [ReactNode],
) => {
  switch (width) {
    case 'xs':
    case 'sm':
      return (
        <Col sm={12} md={6} className={`${styles.widthContentSm} ${className}`}>
          {children}
        </Col>
      );
    case 'md':
      return (
        <Col md={6} className={`${styles.widthContentMd} ${className}`}>
          {children}
        </Col>
      );
    default:
      return (
        <Col md={4} lg={6} className={className}>
          {children}
        </Col>
      );
  }
};

export function GridRow(props: IGridRowProps) {
  const {
    classes,
    children,
    contentColor = 'transparent',
    contentPadding = true,
    contentWidth = 'md',
    rowColor = 'transparent',
    id,
    dropShadow,
    transparency = 'none',
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getRowClasses = () => {
    const rowClasses = [styles.row];

    if (dropShadow === 'top') {
      rowClasses.push(styles.shadowTop);
    } else if (dropShadow === 'bottom') {
      rowClasses.push(styles.shadowBottom);
    } else if (dropShadow === 'both') {
      rowClasses.push(styles.shadow);
    }

    rowClasses.push('justify-content-md-center');

    const returnArray =
      typeof classes !== 'string' && Array.isArray(classes)
        ? [...rowClasses, ...classes]
        : [...rowClasses, classes];

    return returnArray.join(' ');
  };

  const marginClass = getBGClassName(rowColor, false);
  const contentClass = getBGClassName(contentColor, false);
  const paddingClass = contentPadding
    ? styles.paddingNormal
    : styles.paddingNone;

  console.log('marginClass', marginClass, transparency);
  console.log('contentClass', contentClass);

  return (
    <>
      <Container id={id} fluid="xs" className={`${styles.container} px-0`}>
        <Row className={`${styles.row} gx-0`}>
          <Col md className={`${marginClass}`} />
          {renderColumn(
            contentWidth,
            `${contentClass} ${paddingClass}`,
            children,
          )}
          <Col md className={`${marginClass}`} />
        </Row>
      </Container>
    </>
  );
}

export default GridRow;
