import { Task } from '../../Board';
import styles from './boardTask.module.css';
import { Avatar } from '@kanban-board/desing-system';

interface BoardTaskProps {
  task: Task;
}

export const BoardTask = ({ task }: BoardTaskProps) => {
  return (
    <div key={task.id} className={styles.taskCard}>
      <div className={styles.taskHeader}>
        <h4 className={styles.taskTitle}>{task.title}</h4>
        <div className={`${styles.taskPriority} ${styles[task.priority]}`}>
          {task.priority}
        </div>
      </div>
      {task.description && (
        <p className={styles.taskDescription}>{task.description}</p>
      )}
      <div className={styles.taskFooter}>
        {task.assignee && (
          <div className={styles.taskAssignee}>
            <Avatar
              // src={user?.picture}
              alt="AB"
              fallback="AB"
              size="small"
            />

            <span>{task.assignee}</span>
          </div>
        )}
        {task.dueDate && (
          <div className={styles.taskDueDate}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{task.dueDate}</span>
          </div>
        )}
      </div>
    </div>
  );
};
