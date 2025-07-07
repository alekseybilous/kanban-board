import './global.css';
import { ReactNode } from 'react';
import { AppSidebar, Header, AuthConditional } from '@/components';
import { RootProvider } from '@/providers';
import styles from './layout.module.css';
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
        <RootProvider>
          <AuthConditional
            authenticated={
              <div className={styles.authenticatedLayout}>
                <AppSidebar />
                <Header />
                <main className={styles.content}>{children}</main>
              </div>
            }
            unauthenticated={
              <div className={styles.unauthenticatedLayout}>
                <Header />
                <main className={styles.contentFullWidth}>{children}</main>
              </div>
            }
          />
        </RootProvider>
      </body>
    </html>
  );
}
