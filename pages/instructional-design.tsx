import styles from '@/pages/index.module.css';
import HtmlHead from 'components/HtmlHead';
import PageFooter from '@/components/PageFooter';

export default function UXDevelopment() {
  return (
    <>
      <HtmlHead title="Instructional Design" />

      <main>
        <h1 className={styles.title}>ID</h1>
      </main>

      <PageFooter />
    </>
  );
}
