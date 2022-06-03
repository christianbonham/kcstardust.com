/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/hooks';

import Logo from '@/components/Logo';
import NavList from '@/components/NavList';
import styles from '@/components/Header.module.css';

// these are ordered in <picture> srcSet order
const bgSources = [
  { srcSet: 'images/milkyway/1650x112-100.jpg', media: '(min-width: 1024px)' },
  { srcSet: 'images/milkyway/1024x112-100.jpg', media: '(min-width: 768px)' },
  { srcSet: 'images/milkyway/768x112-100.jpg', media: '(min-width: 360px)' },
];
const bgDefault = '/images/milkyway/360x112-100.jpg';

export default function Header() {
  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const observer = useIntersectionObserver(ref, options);
  const isSticky = !observer?.isIntersecting;

  const headerClassName = isSticky ? 'sticky' : 'nav-mode';

  return (
    <>
      <div ref={ref} id="sticky-trigger" style={{ marginTop: '-1px' }}></div>
      <header id="header" className={headerClassName}>
        <picture id="header-bg" className={styles.picture}>
          {bgSources.map((src) => (
            <source key={src.srcSet} srcSet={src.srcSet} media={src.media} />
          ))}
          <img src={bgDefault} alt="" className={styles.pictureImg} />
        </picture>

        <div id="primary-header">
          <div className={styles.marginRow} />
          <div id="logo-row" className={styles.row}>
            <div className={styles.margin} />
            <Logo hidden={!isSticky} />
            <NavList id="intro-nav" />
            <div className={styles.margin} />
          </div>
          <div className={styles.marginRow} />
        </div>

        <div id="nav-row" className={styles.navRow}>
          <div className={styles.margin} />
          <NavList id="nav" />
          <div className={styles.margin} />
        </div>
      </header>
    </>
  );
}
