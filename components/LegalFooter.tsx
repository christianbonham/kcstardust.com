//import Link from 'next/link';
import Link from 'next/link';
import Row from '@/components/Row';

import styles from '@/components/LegalFooter.module.css';

export default function LegalFooter() {
  return (
    <Row
      id="legal-footer"
      rowColor="primaryDark"
      contentColor="primaryDark"
      classes={styles.footer}
      contentDisplay="flex"
      contentWidth="full"
    >
      <div className={styles.col}>Copyright ©2022, KC Stardust, LLC</div>
      <div className={styles.col}>
        <Link href="/privacy">
          <a className={styles.link}>Privacy&nbsp;Policy</a>
        </Link>
        <Link href="/terms">
          <a className={styles.link}>Terms&nbsp;&amp;&nbsp;Conditions</a>
        </Link>
      </div>
    </Row>
  );
}
