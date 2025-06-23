'use client';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import * as React from 'react';

import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If true, the button will render as a child component.
   * This is useful for wrapping links or other components.
   */
  asChild?: boolean;
  /**
   * The visual style of the button
   */
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link';
  /**
   * The size of the button
   */
  size?: 'sm' | 'lg';
  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'lg',
      fullWidth = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          fullWidth && styles.fullWidth,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
