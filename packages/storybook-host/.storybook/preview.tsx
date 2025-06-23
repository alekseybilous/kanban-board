import type { Preview, ReactRenderer } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '@kanban-board/theme/css';

import { themes, themeConfig } from '@kanban-board/theme';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: themes.reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {}
      ),
      defaultTheme: themeConfig.defaultTheme,
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
