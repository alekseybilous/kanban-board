import * as React from 'react';
import { Popover } from 'radix-ui';
import styles from './button.module.css';

export const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className={styles.popoverTrigger}>Show info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.popoverContent}>
        Some content
        <Popover.Arrow className={styles.popoverArrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
