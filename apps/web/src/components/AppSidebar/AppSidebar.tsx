import styles from './appSidebar.module.css';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Navigation } from '@/components/AppSidebar/components/Navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/providers/QueryProvider';
import { boardService } from '@/services/boards.service';

export const AppSidebar = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['boards'],
      queryFn: boardService.getAll,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <aside className={styles.sidebar}>
        <header className={styles.header}>
          <Link href="/app">
            <Logo width={120} />
          </Link>
        </header>
        <nav className={styles.nav}>
          <Navigation />
        </nav>
        <footer className={styles.footer} />
      </aside>
    </HydrationBoundary>
  );
};
