import { ModalName, ModalPropsFor } from '@/components/Modals/types';
import { createContext } from 'react';

export interface ModalContextType {
  openModal: <T extends ModalName>(
    modalName: T,
    props: ModalPropsFor<T>
  ) => string;
  closeModal: (modalId: string) => void;
  closeAllModals: () => void;
  updateModal: (modalId: string, props: Record<string, any>) => void;
  isModalOpen: (modalName: ModalName) => boolean;
  getOpenModals: () => string[];
  preloadModal: (modalName: ModalName) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
