'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from 'lucide-react';
import React from 'react';

import styles from './select.module.css';
import {
  SelectProvider,
  useSelectContext,
  type SelectSize,
  type SelectVariant,
} from './SelectContext';

export const SelectRoot: React.FC<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
    size?: SelectSize;
    variant?: SelectVariant;
  }
> = ({ size = 'medium', variant = 'default', children, ...props }) => (
  <SelectProvider size={size} variant={variant}>
    <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
  </SelectProvider>
);
SelectRoot.displayName = 'SelectRoot';

export const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    size?: SelectSize;
    variant?: SelectVariant;
    error?: boolean;
  }
>(
  (
    {
      className,
      size: sizeProp,
      variant: variantProp,
      error = false,
      children,
      ...props
    },
    ref
  ) => {
    const context = useSelectContext();
    const size = sizeProp ?? context.size;
    const variant = variantProp ?? context.variant;
    return (
      <SelectPrimitive.Trigger
        ref={ref}
        className={clsx(
          styles.trigger,
          styles[`trigger--${size}`],
          styles[`trigger--${variant}`],
          {
            [styles['trigger--error']]: error,
          },
          className
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className={styles.icon} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );
  }
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectValue = SelectPrimitive.Value;

export const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    size?: SelectSize;
  }
>(
  (
    { className, children, position = 'popper', size: sizeProp, ...props },
    ref
  ) => {
    const context = useSelectContext();
    const size = sizeProp ?? context.size;

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={clsx(
            styles.content,
            styles[`content--${size}`],
            className
          )}
          position={position}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport className={styles.viewport}>
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  }
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    size?: SelectSize;
  }
>(({ className, children, size: sizeProp, ...props }, ref) => {
  const context = useSelectContext();
  const size = sizeProp ?? context.size;

  return (
    <SelectPrimitive.Item
      ref={ref}
      className={clsx(styles.item, styles[`item--${size}`], className)}
      {...props}
    >
      <span className={styles.itemText}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </span>
      <SelectPrimitive.ItemIndicator className={styles.itemIndicator}>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

export const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={clsx(styles.separator, className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={clsx(styles.label, className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectGroup = SelectPrimitive.Group;

export const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={clsx(styles.scrollButton, className)}
    {...props}
  >
    <ChevronUpIcon />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={clsx(styles.scrollButton, className)}
    {...props}
  >
    <ChevronDownIcon />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;
