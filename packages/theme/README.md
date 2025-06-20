# @kanban-board/theme

A comprehensive theme system for the Kanban Board application, providing CSS custom properties, multiple color themes, and design tokens.

## Features

- 🎨 Three built-in themes: Light, Dark, and Blue
- 🎯 CSS Custom Properties for easy customization
- 📐 Design tokens for colors, typography, spacing, and more
- 🌈 Full color palette with semantic color mappings
- 📦 TypeScript support with theme type definitions

## Installation

```bash
npm install @kanban-board/theme
```

## Usage

### Import CSS

Import the theme CSS in your application's entry point or global CSS file:

```css
/* In your global.css or main CSS file */
@import '@kanban-board/theme/css';
```

### Use with TypeScript

```typescript
import { themes, themeConfig, type Theme } from '@kanban-board/theme';

// Available themes
console.log(themes); // ['light', 'dark', 'blue']

// Default configuration
console.log(themeConfig.defaultTheme); // 'light'
console.log(themeConfig.storageKey); // 'app-theme'

// Type-safe theme handling
const currentTheme: Theme = 'dark';
```

### Apply Themes

Themes are applied using the `data-theme` attribute on any HTML element:

```html
<!-- Apply to the entire application -->
<html data-theme="dark">
  <!-- Your app content -->
</html>

<!-- Or apply to specific sections -->
<div data-theme="blue">
  <!-- This section will use the blue theme -->
</div>
```

## Available Themes

### Light Theme (Default)

- Clean, bright interface
- High contrast for readability
- Suitable for daytime use

### Dark Theme

- Reduced eye strain in low-light conditions
- Energy-efficient on OLED displays
- Modern appearance

### Blue Theme

- Calming blue-based color scheme
- Professional appearance
- Good for extended use

## Design Tokens

The theme system provides comprehensive design tokens:

### Colors

- **Base colors**: Full spectrum from red to pink (50-950 shades)
- **Neutral colors**: gray, zinc, neutral, stone, slate
- **Semantic colors**: primary, secondary, success, warning, error

### Typography

```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
```

### Spacing

```css
--spacing-0: 0;
--spacing-1: 0.25rem;
--spacing-2: 0.5rem;
--spacing-3: 0.75rem;
--spacing-4: 1rem;
--spacing-5: 1.25rem;
--spacing-6: 1.5rem;
--spacing-8: 2rem;
--spacing-10: 2.5rem;
--spacing-12: 3rem;
--spacing-16: 4rem;
```

### Other Tokens

- **Border radius**: from `--radius-sm` to `--radius-full`
- **Shadows**: from `--shadow-sm` to `--shadow-xl`
- **Transitions**: `--transition-fast`, `--transition-base`, `--transition-slow`
- **Z-index**: layering system from `--z-index-dropdown` to `--z-index-tooltip`

## Customization

You can customize the theme by overriding CSS custom properties:

```css
/* Override specific colors */
:root {
  --color-primary: #your-color;
  --color-primary-hover: #your-hover-color;
}

/* Create a custom theme */
[data-theme='custom'] {
  --color-background: #custom-bg;
  --color-text: #custom-text;
  /* ... other custom properties */
}
```

## Integration Example

Here's a complete example using the theme with Next.js and next-themes:

```tsx
import { ThemeProvider } from 'next-themes';
import { themeConfig } from '@kanban-board/theme';

export function App({ children }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme={themeConfig.defaultTheme}
      themes={[...themeConfig.themes]}
      storageKey={themeConfig.storageKey}
    >
      {children}
    </ThemeProvider>
  );
}
```

## Browser Support

The theme system uses modern CSS features:

- CSS Custom Properties (CSS Variables)
- OKLCH color function for better color interpolation
- Modern color syntax (rgb with alpha)

Ensure your target browsers support these features or provide appropriate fallbacks.

## Development

To build the theme package:

```bash
nx build theme
```
