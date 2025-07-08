import styles from './header.module.css';
import { Button, PlusIcon } from '@kanban-board/desing-system';
import { HeaderActions } from './components';
import { AuthConditional, Logo } from '@/components';
import { useMemo } from 'react';
import Link from 'next/link';

export type HeaderProps = unknown;

export const Header = (props: HeaderProps) => {
  const renderAuth = useMemo(
    () => (
      <div className={styles.actions}>
        <Button size="sm">
          <PlusIcon />
          Add New Task
        </Button>
        <HeaderActions />
      </div>
    ),
    []
  );

  const renderNoAuth = useMemo(
    () => (
      <div className={styles.headerNoAuth}>
        <Link href="/">
          <Logo width={120} />
        </Link>
        <div className={styles.actions}>
          <Button asChild>
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <HeaderActions />
        </div>
      </div>
    ),
    []
  );

  return (
    <header className={styles.header}>
      <AuthConditional
        authenticated={renderAuth}
        unauthenticated={renderNoAuth}
      />
    </header>
  );
};
