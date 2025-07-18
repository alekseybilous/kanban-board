'use client';

import { Avatar } from '@kanban-board/desing-system';
import styles from './UserAvatar.module.css';
import { useSession } from '@clerk/nextjs';

export const UserAvatar = () => {
  const { session, isSignedIn } = useSession();

  const image = session?.publicUserData.imageUrl;
  const name =
    session?.publicUserData.firstName ||
    '' + session?.publicUserData.lastName ||
    '';

  return (
    <div className={styles.container}>
      {isSignedIn && (
        <Avatar
          src={image}
          alt={name}
          fallback={name}
          size="medium"
          focusable
        />
      )}
    </div>
  );
};
