/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/hooks';

import Logo from '@/components/Logo';
import NavList from '@/components/NavList';
import styles from '@/components/Header.module.css';

import { headerSources, defHeaderSource } from '@/components/PageBackground';

export default function Header() {
  const ref = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const observer = useIntersectionObserver(ref, options);
  const isSticky = !observer?.isIntersecting;

  return (
    <>
      <div ref={ref} id="sticky-trigger" style={{ marginTop: '-1px' }}></div>
      <header className={isSticky ? styles.sticky : undefined}>
        <picture className={`${styles.picture} ${isSticky && styles.visible}`}>
          {headerSources.map((src) => (
            <source key={src.source} srcSet={src.source} media={src.media} />
          ))}
          <img src={defHeaderSource} alt="" className={styles.pictureImg} />
        </picture>

        <div className={styles.primaryHeader}>
          <div className={styles.marginRow} />
          <div className={styles.row}>
            <div className={styles.margin} />
            <div
              className={`${styles.rowContent} ${
                isSticky ? styles.bgTransparent : styles.bgWhite
              }`}
            >
              <Logo hidden={!isSticky} />
              <NavList
                className={`${styles.navListIntro} ${
                  !isSticky && styles.navMode
                }`}
              />
            </div>
            <div className={styles.margin} />
          </div>
          <div className={styles.marginRow} />
        </div>

        <div className={`${styles.navRow} ${!isSticky && styles.zeroHeight}`}>
          <div className={styles.margin} />
          <NavList className={styles.navList} />
          <div className={styles.margin} />
        </div>
      </header>
    </>
  );
}
