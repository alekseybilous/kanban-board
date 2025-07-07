'use client';

import styles from './header.module.css';
import { Button, PlusIcon } from '@kanban-board/desing-system';
import { HeaderActions } from './components';
import { AuthConditional, Logo } from '@/components';
import { useCallback, useMemo } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { SIGN_IN_CALLBACK_URL } from '@/constants';

export type HeaderProps = unknown;

export const Header = (props: HeaderProps) => {
  const handleSignIn = useCallback(
    () =>
      signIn(
        'auth0',
        { callbackUrl: SIGN_IN_CALLBACK_URL },
        { prompt: 'login' }
      ),
    []
  );

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
          <Button onClick={handleSignIn}>Sign in</Button>
          <HeaderActions />
        </div>
      </div>
    ),
    [handleSignIn]
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
