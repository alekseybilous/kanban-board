'use client';

import { Avatar } from '@kanban-board/desing-system';
import styles from './UserAvatar.module.css';
import { useUser } from '@auth0/nextjs-auth0';

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <Avatar
        src={user?.picture}
        alt="AB"
        fallback="AB"
        size="medium"
        focusable
      />
    </div>
  );
};
