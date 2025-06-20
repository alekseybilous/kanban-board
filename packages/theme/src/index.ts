// Theme package exports

// Theme names for TypeScript
export const themes = ['light', 'dark', 'blue'] as const;
export type Theme = (typeof themes)[number];

// Optional: Export theme configuration
export const themeConfig = {
  defaultTheme: 'light',
  themes: themes,
  storageKey: 'app-theme',
} as const;
