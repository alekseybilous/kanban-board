import styles from './boardColumn.module.css';
import { ReactNode } from 'react';

interface BoardColumnProps {
  title: string;
  color: string;
  tasksCount: number;
  children?: ReactNode;
}

export const BoardColumn = ({
  children,
  color,
  tasksCount,
  title,
}: BoardColumnProps) => (
  <div className={styles.column}>
    <div className={styles.columnHeader}>
      <div className={styles.columnTitle}>
        <div
          className={styles.columnIndicator}
          style={{ backgroundColor: color }}
        />
        <h3 className={styles.columnName}>{title}</h3>
        <span className={styles.taskCount}>{tasksCount}</span>
      </div>
    </div>

    <div className={styles.columnTasks}>{children}</div>
  </div>
);
