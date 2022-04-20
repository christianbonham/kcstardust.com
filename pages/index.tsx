// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
import styles from '@/pages/index.module.css';

import HtmlHead from '@/components/HtmlHead';
import PageFooter from '@/components/PageFooter';

export default function Home() {
  return (
    <div className={styles.container}>
      <HtmlHead title="Welcome" />

      <main>
        <h1 className={styles.title}>Home</h1>
      </main>

      <PageFooter />
    </div>
  );
}
