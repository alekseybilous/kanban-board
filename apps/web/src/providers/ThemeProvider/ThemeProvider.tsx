import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';
import { themeConfig } from '@kanban-board/theme';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      storageKey={themeConfig.storageKey}
      attribute="data-theme"
      defaultTheme={themeConfig.defaultTheme}
      themes={[...themeConfig.themes]}
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
