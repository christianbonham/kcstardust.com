import Row from '@/components/Row';
import styles from '@/components/Marquee.module.css';

interface IMarqueeProps {
  title: string;
  description: string;
}

export default function Marquee(props: IMarqueeProps) {
  const { title, description } = props;
  return (
    <Row background="transparent">
      <div className={styles.mrq}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </Row>
  );
}
