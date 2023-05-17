import GridRow from '@/GridRow';
import styles from '@/Marquee.module.css';

interface IMarqueeProps {
  title: string;
  subheader?: string;
  description: string;
}

export default function Marquee(props: IMarqueeProps) {
  const { title, subheader, description } = props;
  return (
    <GridRow rowColor="transparent">
      <div className={styles.mrq}>
        <h1 className={styles.title}>{title}</h1>
        {subheader && <h2 className={styles.cursive}>{subheader}</h2>}
        <p className={styles.description}>{description}</p>
      </div>
    </GridRow>
  );
}
