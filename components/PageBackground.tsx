/* eslint-disable @next/next/no-img-element */
import styles from './PageBackground.module.css';

const themePath = '/images/theme_02/';

// these are ordered by media query to properly support art direction.
const sources = [
  { source: `${themePath}1920x1200-80.jpg`, media: '(min-width: 1650px)' },
  { source: `${themePath}1650x1080-80.jpg`, media: '(min-width: 1024px)' },
  { source: `${themePath}1024x1024-80.jpg`, media: '(min-width: 768px)' },
  { source: `${themePath}768x1024-80.jpg`, media: '(min-width: 360px)' },
];
const defSource = `${themePath}360x720.png`;

export const headerSources = [
  { source: `${themePath}1920x128-80.jpg`, media: '(min-width: 1650px)' },
  { source: `${themePath}1650x128-80.jpg`, media: '(min-width: 1024px)' },
  { source: `${themePath}1024x128-80.jpg`, media: '(min-width: 768px)' },
  { source: `${themePath}768x128-80.jpg`, media: '(min-width: 360px)' },
];
export const defHeaderSource = `${themePath}360x128.jpg`;

export default function PageBackground() {
  return (
    <picture className={styles.stars}>
      {sources.map((s) => {
        return <source key={s.source} srcSet={s.source} media={s.media} />;
      })}

      <img src={`${themePath}${defSource}`} alt="" />
    </picture>
  );
}
