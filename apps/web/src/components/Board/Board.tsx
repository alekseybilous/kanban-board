import styles from './Board.module.css';
import { BoardTask } from './components/BoardTask';
import { BoardHeader } from '@/components/Board/components/BoardHeader';
import { BoardColumn } from '@/components/Board/components/BoardColumn';
import { BoardCreation } from '@/components/Board/components/BoardCreation';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

interface BoardProps {
  columns: Column[];
}

export const Board = ({ columns }: BoardProps) => (
  <div className={styles.board}>
    <BoardHeader
      columnsCount={columns.length}
      tasksCount={columns.reduce((total, col) => total + col.tasks.length, 0)}
    />

    <div className={styles.boardContent}>
      <div className={styles.columnsContainer}>
        {columns.map((column) => (
          <BoardColumn
            color={column.color}
            tasksCount={column.tasks.length}
            title={column.title}
            key={column.id}
          >
            {column.tasks.map((task) => (
              <BoardTask key={task.id} task={task} />
            ))}
          </BoardColumn>
        ))}

        <BoardCreation />
      </div>
    </div>
  </div>
);
