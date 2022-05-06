import Link from 'next/link';
import styles from '@/components/Logo.module.css';

interface ILogoProps {
  hidden?: boolean;
}

export default function Logo(props: ILogoProps) {
  const { hidden = false } = props;

  const className = hidden ? `${styles.logo} ${styles.hidden}` : styles.logo;
  return (
    <div className={className}>
      <div>
        <Link href="/index.html">
          <a>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="/images/logo-48px.svg"
              alt="KC Stardust"
              className={styles.img}
              width="auto"
              height="72"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
