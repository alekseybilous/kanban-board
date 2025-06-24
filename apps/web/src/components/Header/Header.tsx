import styles from './header.module.css';
import { Button, PlusIcon } from '@kanban-board/desing-system';

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => (
  <header className={styles.header}>
    <h1>{title}</h1>
    <Button size="sm">
      <PlusIcon />
      Add New Task
    </Button>
  </header>
);
