import React, { createContext, useContext } from 'react';

export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarVariant = 'default' | 'rounded';

interface AvatarContextValue {
  size: AvatarSize;
  variant: AvatarVariant;
}

const AvatarContext = createContext<AvatarContextValue | null>(null);

export const AvatarProvider: React.FC<
  AvatarContextValue & { children: React.ReactNode }
> = ({ size = 'medium', variant = 'default', children }) => {
  return (
    <AvatarContext.Provider value={{ size, variant }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarContext = () => {
  const context = useContext(AvatarContext);
  return (
    context || {
      size: 'medium' as AvatarSize,
      variant: 'default' as AvatarVariant,
    }
  );
};
