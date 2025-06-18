import styles from './header.module.css';

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => (
  <header className={styles.header}>
    <h1>{title}</h1>
  </header>
);
