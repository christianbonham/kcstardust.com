/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavList from '@/header/NavList';

import theme from '@/Colors.module.css';
import styles from './SiteFooter.module.css';

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

export const getBGClassName = (color: string, transparency: boolean) => {
  const key = transparency ? color + 'Trans' : color;
  // using bind so jest doesn't complain about typeerrors
  const classname =
    theme.hasOwnProperty && Object.hasOwnProperty.bind(theme)(key)
      ? theme[key]
      : null;
  return classname;
};

export default function SiteFooter() {
  return (
    <Container fluid className={`${theme.primaryMed}`}>
      <Row className={`${styles.row} `}>
        <Col md />
        <Col sm={4} className={`${styles.col}`}>
          <NavList id="footer-nav" className={styles.nav} />
        </Col>
        <Col sm={4} className={`${styles.col}`}>
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
        </Col>
        <Col md />
      </Row>
    </Container>
  );
}
