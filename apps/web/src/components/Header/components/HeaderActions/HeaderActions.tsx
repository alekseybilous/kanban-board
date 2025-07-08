import { AuthConditional } from '@/components';
import {
  DropdownTrigger,
  DropdownRoot,
  EllipsisVerticalIcon,
  DropdownContent,
  DropdownItem,
} from '@kanban-board/desing-system';
import styles from './HeaderActions.module.css';
import {
  LanguageSubmenu,
  ThemeSubmenu,
  UserAvatar,
} from '@/components/Header/components';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const HeaderActions = () => {
  const t = useTranslations('actions');

  return (
    <DropdownRoot>
      <DropdownTrigger asChild>
        <div>
          <AuthConditional
            authenticated={<UserAvatar />}
            unauthenticated={
              <EllipsisVerticalIcon className={styles.threeDotIcon} />
            }
          />
        </div>
      </DropdownTrigger>
      <DropdownContent>
        <ThemeSubmenu />
        <LanguageSubmenu />
        <AuthConditional
          authenticated={
            <DropdownItem asChild>
              <Link href="/auth/logout">{t('logout')}</Link>
            </DropdownItem>
          }
          unauthenticated={null}
        />
      </DropdownContent>
    </DropdownRoot>
  );
};
