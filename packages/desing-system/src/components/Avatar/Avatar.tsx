'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import React from 'react';

import styles from './avatar.module.css';
import type { AvatarSize, AvatarVariant } from './AvatarContext';
import { useAvatarContext, AvatarProvider } from './AvatarContext';

export const AvatarRoot: React.FC<
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: AvatarSize;
    variant?: AvatarVariant;
  }
> = ({ size = 'medium', variant = 'default', children, ...props }) => (
  <AvatarProvider size={size} variant={variant}>
    <AvatarPrimitive.Root {...props}>{children}</AvatarPrimitive.Root>
  </AvatarProvider>
);

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  const { size, variant } = useAvatarContext();

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={`
        ${styles.image}
        ${styles[`image--${size}`]}
        ${styles[`image--${variant}`]}
        ${className || ''}
      `.trim()}
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
      className={`
        ${styles.fallback}
        ${styles[`fallback--${size}`]}
        ${styles[`fallback--${variant}`]}
        ${className || ''}
      `.trim()}
      {...props}
    />
  );
});

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export const Avatar: React.FC<{
  src?: string;
  alt?: string;
  fallback: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
}> = ({
  src,
  alt,
  fallback,
  size = 'medium',
  variant = 'default',
  className,
}) => (
  <AvatarRoot size={size} variant={variant} className={className}>
    {src && <AvatarImage src={src} alt={alt} />}
    <AvatarFallback>{fallback}</AvatarFallback>
  </AvatarRoot>
);
