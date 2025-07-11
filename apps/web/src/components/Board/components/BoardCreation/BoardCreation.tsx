import { Button, PlusIcon } from '@kanban-board/desing-system';
import styles from './boardCreation.module.css';

export const BoardCreation = () => (
  <div className={styles.column}>
    <Button variant="ghost">
      <PlusIcon />
      <span>Add Column</span>
    </Button>
  </div>
);
