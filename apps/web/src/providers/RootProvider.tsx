import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';

type RootProviderProps = { children: ReactNode };

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <AuthProvider>
      <NextIntlClientProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </NextIntlClientProvider>
    </AuthProvider>
  );
};
