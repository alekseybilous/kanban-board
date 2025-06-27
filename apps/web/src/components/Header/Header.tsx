import styles from './header.module.css';
import { Button, PlusIcon } from '@kanban-board/desing-system';
import { UserMenu } from '../UserMenu';

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => (
  <header className={styles.header}>
    <h1>{title}</h1>
    <div className={styles.actions}>
      <Button size="sm">
        <PlusIcon />
        Add New Task
      </Button>
      <UserMenu />
    </div>
  </header>
);
