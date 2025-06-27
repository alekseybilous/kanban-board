'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';
import React from 'react';

import styles from './dropdown.module.css';
import type { DropdownSize, DropdownVariant } from './DropdownContext';
import { useDropdownContext, DropdownProvider } from './DropdownContext';

export const DropdownRoot: React.FC<
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> & {
    size?: DropdownSize;
    variant?: DropdownVariant;
  }
> = ({ size = 'medium', variant = 'default', children, ...props }) => (
  <DropdownProvider size={size} variant={variant}>
    <DropdownMenuPrimitive.Root {...props}>
      {children}
    </DropdownMenuPrimitive.Root>
  </DropdownProvider>
);

export const DropdownTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { size, variant } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.Trigger
      ref={ref}
      className={`
        ${styles.trigger}
        ${styles[`trigger--${size}`]}
        ${styles[`trigger--${variant}`]}
        ${className || ''}
      `.trim()}
      {...props}
    >
      {children}
      <ChevronDownIcon className={styles.icon} />
    </DropdownMenuPrimitive.Trigger>
  );
});

DropdownTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

export const DropdownPortal = DropdownMenuPrimitive.Portal;

export const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const { size } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`
        ${styles.content}
        ${styles[`content--${size}`]}
        ${className || ''}
      `.trim()}
      {...props}
    />
  );
});

DropdownContent.displayName = DropdownMenuPrimitive.Content.displayName;

export const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { size } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={`
        ${styles.item}
        ${styles[`item--${size}`]}
        ${inset ? styles.inset : ''}
        ${className || ''}
      `.trim()}
      {...props}
    />
  );
});

DropdownItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const DropdownCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { size } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={`
        ${styles.checkboxItem}
        ${styles[`item--${size}`]}
        ${className || ''}
      `.trim()}
      checked={checked}
      {...props}
    >
      <span className={styles.itemIndicator}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className={styles.checkIcon} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

DropdownCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

export const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { size } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={`
        ${styles.radioItem}
        ${styles[`item--${size}`]}
        ${className || ''}
      `.trim()}
      {...props}
    >
      <span className={styles.itemIndicator}>
        <DropdownMenuPrimitive.ItemIndicator>
          <div className={styles.radioIndicator} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});

DropdownRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export const DropdownLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={`
      ${styles.label}
      ${inset ? styles.inset : ''}
      ${className || ''}
    `.trim()}
    {...props}
  />
));

DropdownLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export const DropdownSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={`${styles.separator} ${className || ''}`.trim()}
    {...props}
  />
));

DropdownSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export const DropdownSub = DropdownMenuPrimitive.Sub;

export const DropdownSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => {
  const { size } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={`
        ${styles.subTrigger}
        ${styles[`item--${size}`]}
        ${inset ? styles.inset : ''}
        ${className || ''}
      `.trim()}
      {...props}
    >
      {children}
      <ChevronDownIcon className={styles.subIcon} />
    </DropdownMenuPrimitive.SubTrigger>
  );
});

DropdownSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export const DropdownSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { size } = useDropdownContext();

  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={`
        ${styles.subContent}
        ${styles[`content--${size}`]}
        ${className || ''}
      `.trim()}
      {...props}
    />
  );
});

DropdownSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
