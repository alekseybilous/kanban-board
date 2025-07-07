import { AuthConditional } from '@/components';
import {
  DropdownTrigger,
  DropdownRoot,
  DotsVerticalIcon,
  DropdownContent,
  DropdownItem,
} from '@kanban-board/desing-system';
import styles from './HeaderActions.module.css';
import {
  LanguageSubmenu,
  ThemeSubmenu,
  UserAvatar,
} from '@/components/Header/components';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export const HeaderActions = () => {
  const handleLogout = () => signOut({ redirect: true });
  const t = useTranslations('actions');

  return (
    <DropdownRoot>
      <DropdownTrigger asChild>
        <div>
          <AuthConditional
            authenticated={<UserAvatar />}
            unauthenticated={
              <DotsVerticalIcon className={styles.threeDotIcon} />
            }
          />
        </div>
      </DropdownTrigger>
      <DropdownContent>
        <ThemeSubmenu />
        <LanguageSubmenu />
        <AuthConditional
          authenticated={
            <DropdownItem onSelect={handleLogout}>
              <span>{t('logout')}</span>
            </DropdownItem>
          }
          unauthenticated={null}
        />
      </DropdownContent>
    </DropdownRoot>
  );
};
