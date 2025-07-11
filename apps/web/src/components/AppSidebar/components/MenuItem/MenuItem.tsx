import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import type { ReactNode, AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import styles from './menuItem.module.css';

export interface MenuItemProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
  asChild?: boolean;
  href?: string;
  className?: string;
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      children,
      icon,
      isActive = false,
      asChild = false,
      href,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'a';

    const linkClassName = clsx(
      styles.link,
      {
        [styles.active]: isActive,
      },
      className
    );

    return (
      <li ref={ref} className={styles.menuItem}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <Comp
          className={linkClassName}
          href={!asChild ? href : undefined}
          aria-current={isActive ? 'page' : undefined}
          {...props}
        >
          <span className={styles.label}>{children}</span>
        </Comp>
      </li>
    );
  }
);

MenuItem.displayName = 'MenuItem';
