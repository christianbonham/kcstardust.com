import Link from 'next/link';
import styles from './ContactIcons.module.css';

export default function ContactIcons() {
  return (
    <div className={styles.root}>
      <div className={styles.margin} />

      <Link href="tel:206-588-5802">
        <a>
          <div className={styles.icon}>
            <img src="/images/icons/phone-lined-24px.svg" alt="phone icon" />
            <div className={styles.caption}>phone</div>
          </div>
        </a>
      </Link>

      <div className={styles.margin} />

      <Link href="sms:206-588-5802">
        <a>
          <div className={styles.icon}>
            <img src="/images/icons/sms-lined-24px.svg" alt="sms icon" />
            <div className={styles.caption}>text</div>
          </div>
        </a>
      </Link>

      <div className={styles.margin} />

      <Link href="mailto:info@kcstardust.com">
        <a>
          <div className={styles.icon}>
            <img src="/images/icons/email-lined-24px.svg" alt="email icon" />
            <div className={styles.caption}>email</div>
          </div>
        </a>
      </Link>

      <div className={styles.margin} />
    </div>
  );
}
