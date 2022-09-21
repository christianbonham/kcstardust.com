import { Row, Column } from '@/components/Row';
import styles from '@/components/Marquee.module.css';

interface IMarqueeProps {
  title: string;
  subheader?: string;
  description: string;
}

export default function Marquee(props: IMarqueeProps) {
  const { title, subheader, description } = props;
  return (
    <Row rowColor="transparent">
      <Column>
        <div className={styles.mrq}>
          <h1 className={styles.title}>{title}</h1>
          {subheader && <h2 className={styles.cursive}>{subheader}</h2>}
          <p className={styles.description}>{description}</p>
        </div>
      </Column>
    </Row>
  );
}
