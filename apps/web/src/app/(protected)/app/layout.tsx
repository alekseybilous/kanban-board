import { Header } from '@/components/Header';
import { QueryProvider } from '@/providers/QueryProvider';
import { AuthConditional } from '@/components/AuthConditional';
import { AppSidebar } from '@/components/AppSidebar';
import { ModalProvider } from '@/components/Modals';
import styles from './layout.module.css';
import { ReactNode } from 'react';

type AppLayoutProps = {
  children?: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <QueryProvider>
      <ModalProvider>
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
      </ModalProvider>
    </QueryProvider>
  );
}
