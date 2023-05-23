//import Link from 'next/link';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import colors from '@/Colors.module.css';
import styles from './LegalFooter.module.css';

export default function LegalFooter() {
  return (
    <Container fluid className={`${colors.primaryDark}`}>
      <Row id="legal-footer" className={`${styles.footer} `}>
        <Col md />
        <Col
          xs={6}
          md={4}
          lg={3}
          className={`${styles.col} ${styles.alignLeft}`}
        >
          Copyright ©2022, KC Stardust, LLC
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className={`${styles.col} ${styles.alignRight}`}
        >
          <Link href="/privacy">
            <a className={styles.link}>Privacy&nbsp;Policy</a>
          </Link>
          <Link href="/terms">
            <a className={styles.link}>Terms&nbsp;&amp;&nbsp;Conditions</a>
          </Link>
        </Col>
        <Col md />
      </Row>
    </Container>
  );
}
