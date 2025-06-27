'use client';

import {
  Avatar,
  DropdownRoot,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from '@kanban-board/desing-system';
import { useTranslations } from 'next-intl';
import { ThemeSubmenu } from './components/ThemeSubmenu';
import { LanguageSubmenu } from './components/LanguageSubmenu';
import styles from './userMenu.module.css';

export const UserMenu = () => {
  const t = useTranslations('UserMenu');

  return (
    <div className={styles.userMenu}>
      <DropdownRoot>
        <DropdownTrigger asChild>
          <Avatar
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="John Doe"
            fallback="JD"
            size="medium"
            focusable
          />
        </DropdownTrigger>
        <DropdownContent>
          <ThemeSubmenu />
          <LanguageSubmenu />
          <DropdownSeparator />
          <DropdownItem>
            <span>{t('logOut')}</span>
          </DropdownItem>
        </DropdownContent>
      </DropdownRoot>
    </div>
  );
};
