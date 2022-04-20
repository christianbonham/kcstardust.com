import styles from '@/pages/index.module.css';
import HtmlHead from 'components/HtmlHead';
import PageFooter from '@/components/PageFooter';

export default function UXDevelopment() {
  return (
    <>
      <HtmlHead title="UX Development" />

      <main>
        <h1 className={styles.title}>UX</h1>
      </main>

      <PageFooter />
    </>
  );
}
