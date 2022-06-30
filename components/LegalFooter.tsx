//import Link from 'next/link';
import Link from 'next/link';
import Row from '@/components/Row';

import styles from '@/components/LegalFooter.module.css';

export default function LegalFooter() {
  return (
    <Row
      id="legal-footer"
      bgColor="primaryDark"
      classes={styles.footer}
      flexContent={true}
    >
      <div className={styles.col}>Copyright ©2022, KC Stardust, LLC</div>
      <div className={styles.col}>
        <Link href="/privacy">
          <a>Privacy&nbsp;Policy</a>
        </Link>
        &nbsp;&#124;&nbsp;
        <Link href="/terms">
          <a>Terms&nbsp;&amp;&nbsp;Conditions</a>
        </Link>
      </div>
    </Row>
  );
}
