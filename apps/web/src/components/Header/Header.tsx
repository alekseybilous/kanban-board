import styles from './header.module.css';
import { Button, PlusIcon } from '@kanban-board/desing-system';
import { HeaderActions } from './components/HeaderActions';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.actions}>
      <Button size="sm">
        <PlusIcon />
        Add New Task
      </Button>

      <HeaderActions />
    </div>
  </header>
);
