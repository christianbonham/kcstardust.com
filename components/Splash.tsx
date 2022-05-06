/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { useIntersectionObserver } from '@/utils/hooks';

import SplashLink from '@/components/SplashLink';

const styles = {
  splash: {
    position: 'relative',
    display: 'block',
    zIndex: '5',
    margin: '0 auto 0 auto',
    padding: '20px',
    height: 'calc(100vh - 64px)',
    color: '#efefef',
  } as React.CSSProperties,
  arrow: {
    position: 'fixed',
    top: '420px',
    left: '50%',
    transform: 'translateX(-50%)',
  } as React.CSSProperties,
};

export default function Splash() {
  const ref = useRef(null);
  const obs = useIntersectionObserver(ref, {});
  const hidden = !obs?.isIntersecting;

  const className = hidden ? 'hidden' : undefined;

  return (
    <div id="splash" className={className} style={styles.splash}>
      <div ref={ref} id="splash-trigger">
        <img id="splash-logo" src="/images/logo-white.svg" alt="KC Stardust" />
        <ul id="splash-contact">
          <li>
            <SplashLink
              link="tel:206-588-5802"
              icon="/images/icons/phone-lined-24px.svg"
              alt="Phone"
            />
          </li>
          <li>
            <SplashLink
              link="sms:206-588-5802"
              icon="/images/icons/sms-lined-24px.svg"
              alt="Text"
            />
          </li>
          <li>
            <SplashLink
              link="#contact"
              icon="/images/icons/email-lined-24px.svg"
              alt="Email"
            />
          </li>
        </ul>
      </div>
      <SplashLink
        link="#services"
        icon="/images/arrow.svg"
        alt="Navigate to services"
        style={styles.arrow}
      />
    </div>
  );
}
