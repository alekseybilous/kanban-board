import { Spinner } from '@kanban-board/desing-system';
import styles from './PageLoader.module.css';

export function PageLoader() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}
