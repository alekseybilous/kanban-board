import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, Suspense } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { QueryProvider } from './QueryProvider';
import { PageLoader } from '@/components/PageLoader';
import { ModalProvider } from '@/components';

type RootProviderProps = { children: ReactNode };

export const RootProvider = async ({ children }: RootProviderProps) => (
  <Suspense fallback={<PageLoader />}>
    <NextIntlClientProvider>
      <ThemeProvider>
        <ModalProvider>
          <QueryProvider>{children}</QueryProvider>
        </ModalProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  </Suspense>
);
