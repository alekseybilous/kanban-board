import styles from './appSidebar.module.css';
import Link from 'next/link';
import { Logo, ThemeSwitcher } from '@/components';

export const AppSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <Link href="/">
          <Logo width={120} />
        </Link>
      </header>
      <nav className={styles.nav}>navigation</nav>
      <footer className={styles.footer}>
        <ThemeSwitcher />
      </footer>
    </aside>
  );
};
