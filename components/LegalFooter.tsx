import Link from 'next/link';
import Row from '@/components/Row';
import styles from '@/components/LegalFooter.module.css';

export default function LegalFooter() {
  return (
    <Row id="legal-footer" classes={styles.footer}>
      <div className={styles.left}>
        Copyright &copy;2022, KC&nbsp;Stardust,&nbsp;LLC
      </div>
      <div className={styles.right}>
        <ul className={styles.ul}>
          <li>
            <Link href="">
              <a>Privacy&nbsp;Policy</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a href="">Terms&nbsp;&amp;&nbsp;Conditions</a>
            </Link>
          </li>
        </ul>
      </div>
    </Row>
  );
}
