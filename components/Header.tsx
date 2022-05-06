/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';

import { useIntersectionObserver } from '@/utils/hooks';
import Logo from '@/components/Logo';
import NavList from '@/components/NavList';
import Row from '@/components/Row';

import styles from '@/components/Header.module.css';

export default function Header() {
  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const obs = useIntersectionObserver(ref, options);
  const isSticky = !obs?.isIntersecting;

  const headerClassName = isSticky ? 'sticky' : 'nav-mode';

  return (
    <>
      <div ref={ref} id="sticky-trigger"></div>
      <header id="header" className={headerClassName}>
        <picture id="header-bg">
          <source
            srcSet="images/milkyway/1650x112-100.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="images/milkyway/1024x112-100.jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet="images/milkyway/768x112-100.jpg"
            media="(min-width: 360px)"
          />
          <img src="/images/milkyway/360x112-100.jpg" alt="" />
        </picture>
        <div id="primary-header">
          <div className="row-margin"></div>
          <Row id="logo-row" background="transparent">
            <div className={styles.margin} />
            <Logo hidden={!isSticky} />
            <NavList id="intro-nav" />
            <div className={styles.margin} />
          </Row>
          <div className="row-margin"></div>
        </div>

        <Row id="nav-row" background="white">
          <NavList id="nav" />
        </Row>
      </header>
    </>
  );
}
