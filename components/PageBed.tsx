// import Container from 'react-bootstrap/Container';
import styles from './PageBed.module.css';

function PageBed(props: any) {
  const { children } = props;

  return (
    <div id="page-bed" className={`px-0 wtf ${styles.page}`}>
      {children}
    </div>
  );
}

export default PageBed;
