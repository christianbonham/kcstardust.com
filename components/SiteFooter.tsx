/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import NavList from '@/components/NavList';
import { Row } from '@/components/Row';

import styles from '@/components/SiteFooter.module.css';

interface ISocialLinkObject {
  imgSrc: string;
  altText: string;
  href: string;
}

const socialLinks: Array<ISocialLinkObject> = [
  {
    imgSrc: '/images/icons/twitter.svg',
    altText: 'Twitter',
    href: 'https://twitter.com/WeAreKCStardust',
  },
  {
    imgSrc: '/images/icons/facebook.svg',
    altText: 'Facebook',
    href: 'https://www.facebook.com/KCStardust',
  },
  {
    imgSrc: '/images/icons/linkedin.svg',
    altText: 'LinkedIn',
    href: 'https://www.linkedin.com/company/kcstardust/?viewAsMember=true',
  },
  {
    imgSrc: '/images/icons/youtube.svg',
    altText: 'YouTube',
    href: '',
  },
];

export default function SiteFooter() {
  return (
    <Row id="site-footer-row" bgColor="primaryMed" classes={styles.footer}>
      <div className={styles.col}>
        <NavList id="footer-nav" className={styles.nav} />
      </div>
      <div className={styles.col}>
        <ul className={styles.social}>
          {socialLinks &&
            socialLinks.map((linkObj: ISocialLinkObject) => {
              if (!linkObj.href) return;
              return (
                <li key={linkObj.altText} className={styles.li}>
                  <Link href={linkObj.href}>
                    <a>
                      <img
                        className={styles.icon}
                        src={linkObj.imgSrc}
                        alt={linkObj.altText}
                      />
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </Row>
  );
}
