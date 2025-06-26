import './global.css';
import { ReactNode } from 'react';
import { AppSidebar, Header } from '@/components';
import { ThemeProvider } from '@/providers';
import styles from './layout.module.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

export const metadata = {
  title: 'Kanban Board - Task Management',
  description:
    'A modern Kanban board for agile project management and task tracking',
};

type RootLayoutProps = {
  children?: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            <div className={styles.appLayout}>
              <AppSidebar />

              <Header title="Dummy project" />

              <main className={styles.content}>{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
