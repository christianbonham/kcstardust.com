import { Row, Column } from '@/components/Row';
import styles from '@/components/Marquee.module.css';

interface IMarqueeProps {
  title: string;
  description: string;
}

export default function Marquee(props: IMarqueeProps) {
  const { title, description } = props;
  return (
    <Row bgColor="transparent">
      <Column>
        <div className={styles.mrq}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </Column>
    </Row>
  );
}
