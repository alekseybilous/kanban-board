import React, { createContext, useContext } from 'react';

export type DropdownSize = 'small' | 'medium' | 'large';
export type DropdownVariant = 'default' | 'ghost';

interface DropdownContextValue {
  size: DropdownSize;
  variant: DropdownVariant;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export const DropdownProvider: React.FC<
  DropdownContextValue & { children: React.ReactNode }
> = ({ size = 'medium', variant = 'default', children }) => {
  return (
    <DropdownContext.Provider value={{ size, variant }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  return (
    context || {
      size: 'medium' as DropdownSize,
      variant: 'default' as DropdownVariant,
    }
  );
};
