import { use } from 'react';
import { ModalContext } from '@/components/Modals/contex';

export function useModal() {
  const context = use(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
