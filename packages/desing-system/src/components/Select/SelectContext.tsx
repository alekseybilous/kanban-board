import React, { createContext, useContext } from 'react';

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectVariant = 'default' | 'ghost';

interface SelectContextValue {
  size: SelectSize;
  variant: SelectVariant;
}

const SelectContext = createContext<SelectContextValue | null>(null);

export const SelectProvider: React.FC<
  SelectContextValue & { children: React.ReactNode }
> = ({ size = 'medium', variant = 'default', children }) => {
  return (
    <SelectContext.Provider value={{ size, variant }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  return (
    context || {
      size: 'medium' as SelectSize,
      variant: 'default' as SelectVariant,
    }
  );
};
