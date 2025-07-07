'use client';

import {
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownCheckboxItem,
} from '@kanban-board/desing-system';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

export const ThemeSubmenu = () => {
  const { theme, setTheme, themes } = useTheme();
  const t = useTranslations('UserMenu');

  return (
    <DropdownSub>
      <DropdownSubTrigger>{t('theme')}</DropdownSubTrigger>
      <DropdownSubContent>
        {themes?.map((themeOption) => (
          <DropdownCheckboxItem
            key={themeOption}
            checked={theme === themeOption}
            onCheckedChange={() => setTheme(themeOption)}
          >
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </DropdownCheckboxItem>
        ))}
      </DropdownSubContent>
    </DropdownSub>
  );
};
