/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/hooks';
import SplashLink from '@/SplashLink';
import styles from '@/Splash.module.css';

const logoPath = '/images/logo_121_white.svg';

const links = [
  {
    link: 'tel:206-588-5802',
    icon: '/images/icons/phone-lined-24px.svg',
    alt: 'Phone',
  },
  {
    link: 'sms:206-588-5802',
    icon: '/images/icons/sms-lined-24px.svg',
    alt: 'Text',
  },
  {
    link: '#contact',
    icon: '/images/icons/email-lined-24px.svg',
    alt: 'Email',
  },
];

export default function Splash() {
  const ref = useRef(null);
  const obs = useIntersectionObserver(ref, {});
  const hidden = !obs?.isIntersecting;

  const visClass = !hidden ? styles.visible : styles.hidden;

  return (
    <div className={`${styles.splash} ${visClass}`}>
      <div ref={ref} className={styles.visTrigger}>
        <img className={styles.logo} src={logoPath} alt="KC Stardust" />
        <ul className={styles.ul}>
          {links.map((link) => (
            <li key={link.alt} className={styles.li}>
              <SplashLink link={link.link} icon={link.icon} alt={link.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.arrow}>
        <SplashLink
          link="#services"
          icon="/images/arrow.svg"
          alt="Navigate to services"
        />
      </div>
    </div>
  );
}
