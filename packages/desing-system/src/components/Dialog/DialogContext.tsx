import React, { createContext, useContext } from 'react';

export type DialogSize = 'small' | 'medium' | 'large' | 'full';

interface DialogContextValue {
  size: DialogSize;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export const DialogProvider: React.FC<
  DialogContextValue & { children: React.ReactNode }
> = ({ size = 'medium', children }) => {
  return (
    <DialogContext.Provider value={{ size }}>{children}</DialogContext.Provider>
  );
};

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  return (
    context || {
      size: 'medium' as DialogSize,
    }
  );
};
