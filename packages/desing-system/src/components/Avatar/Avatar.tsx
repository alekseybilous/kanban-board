'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';
import React from 'react';

import styles from './avatar.module.css';
import type { AvatarSize, AvatarVariant } from './AvatarContext';
import { useAvatarContext, AvatarProvider } from './AvatarContext';

export const AvatarRoot = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: AvatarSize;
    variant?: AvatarVariant;
    focusable?: boolean;
  }
>(
  (
    {
      size = 'medium',
      variant = 'default',
      focusable = false,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <AvatarProvider size={size} variant={variant}>
      <AvatarPrimitive.Root
        ref={ref}
        className={clsx(
          styles.root,
          focusable && styles['root--focusable'],
          className
        )}
        tabIndex={focusable ? 0 : undefined}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    </AvatarProvider>
  )
);

AvatarRoot.displayName = 'AvatarRoot';

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  const { size, variant } = useAvatarContext();

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={clsx(
        styles.image,
        styles[`image--${size}`],
        styles[`image--${variant}`],
        className
      )}
      {...props}
    />
  );
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  const { size, variant } = useAvatarContext();

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={clsx(
        styles.fallback,
        styles[`fallback--${size}`],
        styles[`fallback--${variant}`],
        className
      )}
      {...props}
    />
  );
});

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  {
    src?: string;
    alt?: string;
    fallback: string;
    size?: AvatarSize;
    variant?: AvatarVariant;
    className?: string;
    focusable?: boolean;
  } & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(
  (
    {
      src,
      alt,
      fallback,
      size = 'medium',
      variant = 'default',
      className,
      focusable = false,
      ...props
    },
    ref
  ) => (
    <AvatarRoot
      ref={ref}
      size={size}
      variant={variant}
      className={className}
      focusable={focusable}
      {...props}
    >
      {src && <AvatarImage src={src} alt={alt} />}
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarRoot>
  )
);

Avatar.displayName = 'Avatar';
