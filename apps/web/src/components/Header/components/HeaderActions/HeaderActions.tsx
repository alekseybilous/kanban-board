import {
  DropdownTrigger,
  DropdownRoot,
  DropdownContent,
  DropdownItem,
} from '@kanban-board/desing-system';
import { LanguageSubmenu } from '../LanguageSubmenu';
import { ThemeSubmenu } from '../ThemeSubmenu';
import { UserAvatar } from '../UserAvatar';
import { useTranslations } from 'next-intl';
import { SignOutButton } from '@clerk/nextjs';
import styles from './HeaderActions.module.css';

export const HeaderActions = () => {
  const t = useTranslations('actions');

  return (
    <DropdownRoot>
      <DropdownTrigger asChild>
        <div>
          <UserAvatar />
        </div>
      </DropdownTrigger>
      <DropdownContent>
        <ThemeSubmenu />
        <LanguageSubmenu />

        <DropdownItem className={styles.logout}>
          <SignOutButton>{t('logout')}</SignOutButton>
        </DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  );
};
