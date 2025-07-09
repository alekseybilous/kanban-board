import { ComponentType } from 'react';
import { ModalName } from '@/components/Modals/types';

interface ModalRegistryEntry {
  loader: () => Promise<{ default: ComponentType<any> }>;
  preloaded?: ComponentType<any>;
  loading?: boolean;
}

export const modalRegistry: Record<ModalName, ModalRegistryEntry> = {
  confirmDialog: {
    loader: () => import('./components/ConfirmDialog'),
  },
};
