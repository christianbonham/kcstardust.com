import styles from './BreakpointViewer.module.css';

export default function BreakpointViewer() {
  console.log('BreakpointViewer');
  return (
    <div id="bp-viewer" className={styles.root}>
      <span className={styles.content} />
    </div>
  );
}
