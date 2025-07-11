'use client';

import {
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownCheckboxItem,
} from '@kanban-board/desing-system';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { setUserLocale } from '@/services/locale.service';
import { Locale } from '@/i18n/config';
import { LOCALES } from '@/constants';

export const LanguageSubmenu = () => {
  const locale = useLocale();
  const t = useTranslations();
  const [, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    const localeValue = newLocale as Locale;
    startTransition(() => {
      setUserLocale(localeValue);
    });
  };

  return (
    <DropdownSub>
      <DropdownSubTrigger>{t('UserMenu.language')}</DropdownSubTrigger>
      <DropdownSubContent>
        {LOCALES.map((localeOption) => (
          <DropdownCheckboxItem
            key={localeOption.value}
            checked={locale === localeOption.value}
            onCheckedChange={() => handleLocaleChange(localeOption.value)}
          >
            {t(`locales.${localeOption.key}`)}
          </DropdownCheckboxItem>
        ))}
      </DropdownSubContent>
    </DropdownSub>
  );
};
