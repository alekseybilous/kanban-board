'use client';

import { ModalName, ModalPropsFor } from '@/components/Modals/types';
import { useRef } from 'react';
import { useModal } from '@/components/Modals/hooks/useModal';

export function useModalState<T extends ModalName>(modalName: T) {
  const { openModal, closeModal, updateModal, isModalOpen } = useModal();
  const modalIdRef = useRef<string | null>(null);

  return {
    isOpen: isModalOpen(modalName),
    open: (props: ModalPropsFor<T>) => {
      modalIdRef.current = openModal(modalName, props);
    },
    close: () => {
      if (modalIdRef.current) {
        closeModal(modalIdRef.current);
        modalIdRef.current = null;
      }
    },
    update: (props: Partial<ModalPropsFor<T>>) => {
      if (modalIdRef.current) {
        updateModal(modalIdRef.current, props);
      }
    },
  };
}
