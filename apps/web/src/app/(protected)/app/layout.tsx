import { Header } from '@/components/Header';
import { QueryProvider } from '@/providers/QueryProvider';
import { AppSidebar } from '@/components/AppSidebar';
import { ModalProvider } from '@/components/Modals';
import styles from './layout.module.css';
import { ReactNode } from 'react';

type AppLayoutProps = {
  children?: ReactNode;
};

const AppLayout = async ({ children }: AppLayoutProps) => {
  return (
    <QueryProvider>
      <ModalProvider>
        <div className={styles.authenticatedLayout}>
          <AppSidebar />
          <Header />
          <main className={styles.content}>{children}</main>
        </div>
      </ModalProvider>
    </QueryProvider>
  );
};

export default AppLayout;
