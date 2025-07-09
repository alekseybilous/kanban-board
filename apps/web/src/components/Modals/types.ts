import { ConfirmDialogProps } from './components/ConfirmDialog';

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalDefinitions {
  confirmDialog: ConfirmDialogProps;
}

export type ModalName = keyof ModalDefinitions;

export type ModalPropsFor<T extends ModalName> = Omit<
  ModalDefinitions[T],
  keyof BaseModalProps
>;
