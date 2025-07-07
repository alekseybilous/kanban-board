import { useSession } from 'next-auth/react';
import { Avatar } from '@kanban-board/desing-system';
import styles from './UserAvatar.module.css';

export const UserAvatar = () => {
  const { data } = useSession();

  return (
    <div className={styles.container}>
      <Avatar
        src={data?.user?.image || undefined}
        alt="AB"
        fallback="AB"
        size="medium"
        focusable
      />
    </div>
  );
};
