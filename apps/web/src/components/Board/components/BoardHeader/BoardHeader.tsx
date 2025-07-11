import styles from './boardHeader.module.css';

type BoardHeaderProps = {
  tasksCount: number;
  columnsCount: number;
};

// columns.reduce((total, col) => total + col.tasks.length, 0)

export const BoardHeader = ({ columnsCount, tasksCount }: BoardHeaderProps) => {
  return (
    <div className={styles.boardHeader}>
      <div className={styles.boardMeta}>
        <span className={styles.taskCount}>{tasksCount} tasks</span>
        <span className={styles.columnCount}>{columnsCount} columns</span>
      </div>
    </div>
  );
};
