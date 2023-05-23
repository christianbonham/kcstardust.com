/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/hooks';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from './Logo';
import NavList from './NavList';
import styles from './Header.module.css';
import colors from '@/Colors.module.css';

import { headerSources, defHeaderSource } from '@/PageBackground';

export default function Header() {
  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const observer = useIntersectionObserver(ref, options);
  const isSticky = !observer?.isIntersecting;

  const headerClass = isSticky
    ? `${styles.primaryHeader} ${styles.sticky} px-0`
    : `${styles.primaryHeader} ${styles.sticky} px-0`;

  const primaryMarginClass = `${styles.primaryCol} ${colors.white}`;
  const primaryContentClass = `${styles.primaryContent} ${colors.white} ${
    isSticky ? styles.bgTransparent : styles.bgWhite
  }`;
  return (
    <>
      <div ref={ref} id="sticky-trigger" style={{ marginTop: '-1px' }}></div>
      <Container as="header" className={headerClass}>
        <picture className={`${styles.picture} ${isSticky && styles.visible}`}>
          {headerSources.map((src) => (
            <source key={src.source} srcSet={src.source} media={src.media} />
          ))}
          <img src={defHeaderSource} alt="" className={styles.pictureImg} />
        </picture>
        <Row className={`${styles.primaryRow} gx-0`}>
          <Col className={primaryMarginClass} />
          <Col className={primaryContentClass}>
            <Logo hidden={!isSticky} />
            <NavList
              className={`${styles.navListIntro} ${
                !isSticky && styles.navMode
              }`}
            />
          </Col>
          <Col className={primaryMarginClass} />
        </Row>
        <Row
          className={`${styles.navRow} ${!isSticky && styles.zeroHeight} gx-0`}
        >
          <Col className={styles.margin} />
          <Col>
            <NavList className={styles.navList} />
          </Col>
          <Col className={styles.margin} />
        </Row>
      </Container>
    </>
  );
}
