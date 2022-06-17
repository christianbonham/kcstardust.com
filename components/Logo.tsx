import Link from 'next/link';
import styles from '@/components/Logo.module.css';

interface ILogoProps {
  hidden?: boolean;
}

const pathLogoTransparent = '/images/logo_trans_white.svg';

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
              src={pathLogoTransparent}
              alt="KC Stardust"
              className={styles.img}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
