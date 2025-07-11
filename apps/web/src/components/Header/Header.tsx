import styles from './header.module.css';
import { Button, PlusIcon } from '@kanban-board/desing-system';
import { Logo } from '@/components/icons/Logo';
import Link from 'next/link';
import { AuthConditional } from '@/components/AuthConditional';
import { HeaderActions } from './components/HeaderActions';

export const Header = () => {
  const renderAuth = (
    <div className={styles.actions}>
      <Button size="sm">
        <PlusIcon />
        Add New Task
      </Button>

      <HeaderActions />
    </div>
  );

  const renderNoAuth = (
    <div className={styles.headerNoAuth}>
      <Link href="/">
        <Logo width={120} />
      </Link>
      <div className={styles.actions}>
        <Button asChild>
          <Link href="/auth/login">Sign in</Link>
        </Button>
      </div>
    </div>
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
