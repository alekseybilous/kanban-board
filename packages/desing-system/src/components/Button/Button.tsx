import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import styles from './Button.module.css';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'success'
  | 'warning';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      asChild = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const buttonClassName = clsx(
      styles.btn,
      styles[variant],
      styles[size],
      {
        [styles.full]: fullWidth,
      },
      className
    );

    return (
      <Comp ref={ref} type={type} className={buttonClassName} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
