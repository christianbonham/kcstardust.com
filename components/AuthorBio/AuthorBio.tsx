import { ReactNode } from 'react';
import styles from './AuthorBio.module.css';

interface IAuthorBioProps {
  children: ReactNode | [ReactNode];
  name: string;
  title: string;
}

export default function AuthorBio(props: IAuthorBioProps) {
  const { name, title, children } = props;
  return (
    <div className="author">
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.flair}>{title}</h3>
      {children}
    </div>
  );
}
