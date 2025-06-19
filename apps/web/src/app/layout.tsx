import './global.css';
import { ReactNode } from 'react';
import { AppSidebar, Header } from '@/components';
import { ThemeProvider } from '@/providers';
import styles from './layout.module.css';

export const metadata = {
  title: 'Kanban Board - Task Management',
  description:
    'A modern Kanban board for agile project management and task tracking',
};

type RootLayoutProps = {
  children?: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className={styles.appLayout}>
            <AppSidebar />

            <Header title="Dummy project" />

            <main className={styles.content}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
