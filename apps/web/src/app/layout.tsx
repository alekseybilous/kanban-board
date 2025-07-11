import './global.css';
import { ReactNode } from 'react';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from '@/providers/ThemeProvider';

export const metadata = {
  title: 'Kanban Board - Task Management',
  description:
    'A modern Kanban board for agile project management and task tracking',
};

type LayoutProps = {
  children?: ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
