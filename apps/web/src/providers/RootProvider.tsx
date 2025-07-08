import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

type RootProviderProps = { children: ReactNode };

export const RootProvider = async ({ children }: RootProviderProps) => (
  <NextIntlClientProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </NextIntlClientProvider>
);
