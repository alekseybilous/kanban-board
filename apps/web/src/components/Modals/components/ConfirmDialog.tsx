import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@kanban-board/desing-system';
import { BaseModalProps } from '@/components/Modals/types';

export interface ConfirmDialogProps extends BaseModalProps {
  title?: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {
  const handleConfirm = () => {
    props?.onConfirm();
    props.onClose();
  };

  return (
    <DialogRoot size="small" open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent>
        <DialogClose />
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={props.onClose} variant="destructive">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="primary">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
