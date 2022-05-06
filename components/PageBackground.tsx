/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';

// import styles from './PageBackground.module.css';

export default function PageBackground() {
  return (
    <picture id="stars">
      <source
        srcSet="/images/milkyway/1650x1080-100.jpg"
        media="(min-width: 1024px)"
      />
      <source
        srcSet="/images/milkyway/1024x1024-100.jpg"
        media="(min-width: 768px)"
      />
      <source
        srcSet="/images/milkyway/768x1024-100.jpg"
        media="(min-width: 360px)"
      />
      <img
        src="/images/milkyway/360x720-100.jpg"
        alt=""
        width="100%"
        height="100%"
      />
    </picture>
  );
}
