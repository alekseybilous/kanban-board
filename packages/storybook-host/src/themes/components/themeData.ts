// Theme Data Utilities
// This file contains reusable data structures for theme documentation

export interface ColorInfo {
  variable: string;
  label: string;
  description: string;
  border?: string;
}

export interface ThemeData {
  name: string;
  description: string;
  characteristics: string[];
  idealFor: string[];
  paletteColors: Array<{
    variable: string;
    label: string;
    border?: string;
  }>;
  surfaceColors: string[];
  textColors: Array<{
    variable: string;
    label: string;
    background?: string;
  }>;
  actionColors: Array<{
    variable: string;
    label: string;
    textVariable?: string;
    borderVariable?: string;
  }>;
  borderSamples: Array<{
    variable: string;
    label: string;
    showFocus?: boolean;
  }>;
}

// Common color configurations
export const commonPaletteColors = [
  { variable: 'canvas', label: 'Canvas' },
  { variable: 'surface', label: 'Surface' },
  {
    variable: 'primary-base',
    label: 'Primary',
    border: 'var(--primary-border)',
  },
  {
    variable: 'secondary-base',
    label: 'Secondary',
    border: 'var(--secondary-border)',
  },
  {
    variable: 'success-base',
    label: 'Success',
    border: 'var(--success-border)',
  },
  {
    variable: 'warning-base',
    label: 'Warning',
    border: 'var(--warning-border)',
  },
  { variable: 'danger-base', label: 'Danger', border: 'var(--danger-border)' },
];

export const commonSurfaceColors = [
  'surface',
  'surface-subtle',
  'surface-hover',
  'surface-active',
  'surface-disabled',
];

export const commonTextColors = [
  { variable: 'text', label: 'Primary Text' },
  { variable: 'text-secondary', label: 'Secondary Text' },
  { variable: 'text-tertiary', label: 'Tertiary Text' },
  {
    variable: 'text-inverse',
    label: 'Inverse Text',
    background: 'var(--primary-base)',
  },
];

export const commonActionColors = [
  {
    variable: 'primary-base',
    label: 'Primary Action',
    textVariable: 'primary-text-on-primary',
    borderVariable: 'primary-border',
  },
  {
    variable: 'secondary-base',
    label: 'Secondary Action',
    textVariable: 'secondary-text',
    borderVariable: 'secondary-border',
  },
];

export const commonBorderSamples = [
  { variable: 'border', label: 'Default Border' },
  { variable: 'border-focus', label: 'Focus State', showFocus: true },
];

// Theme-specific data
export const blueThemeData: ThemeData = {
  name: 'Blue Theme',
  description:
    'The Blue theme provides a professional, calming design with blue accents throughout the interface. It uses a light blue palette with darker blue tones for primary interactions and readable text.',
  characteristics: [
    'Professional appearance with carefully selected blue tones',
    'Calming effect that reduces visual stress during extended use',
    'Clear hierarchy with well-defined primary and secondary colors',
    'Accessible contrast that meets WCAG guidelines',
    'Consistent branding through cohesive blue palette',
  ],
  idealFor: [
    'Corporate applications',
    'Financial software',
    'Healthcare interfaces',
    'Educational platforms',
    'Professional dashboards',
  ],
  paletteColors: commonPaletteColors,
  surfaceColors: commonSurfaceColors,
  textColors: commonTextColors,
  actionColors: commonActionColors,
  borderSamples: commonBorderSamples,
};

export const lightThemeData: ThemeData = {
  name: 'Light Theme',
  description:
    "The Light theme provides a clean, minimalist design with neutral grays and blue accents. It's the default theme optimized for readability and accessibility in bright environments.",
  characteristics: [
    'High contrast between text and backgrounds for excellent readability',
    "Neutral gray palette that doesn't strain the eyes",
    'Blue accents for interactive elements that provide clear affordances',
    'Subtle shadows that add depth without being distracting',
    'Clean borders that define component boundaries clearly',
  ],
  idealFor: [
    'Productivity applications',
    'Content-heavy interfaces',
    'Professional dashboards',
    'Accessibility-focused designs',
  ],
  paletteColors: commonPaletteColors,
  surfaceColors: commonSurfaceColors,
  textColors: commonTextColors,
  actionColors: commonActionColors,
  borderSamples: commonBorderSamples,
};

export const darkThemeData: ThemeData = {
  name: 'Dark Theme',
  description:
    'The Dark theme provides a modern, eye-friendly design optimized for low-light environments. It features carefully balanced contrast ratios and blue accents that maintain accessibility while reducing eye strain.',
  characteristics: [
    'Reduced eye strain with carefully calibrated dark backgrounds',
    'Enhanced contrast optimized for low-light environments',
    'Bright blue accents that provide clear visual hierarchy',
    'Deeper shadows that create natural depth perception',
    'Accessible color contrast meeting WCAG guidelines',
  ],
  idealFor: [
    'Extended coding sessions',
    'Late-night work environments',
    'Media-rich applications',
    'Gaming interfaces',
    'Creative tools and editors',
  ],
  paletteColors: commonPaletteColors,
  surfaceColors: commonSurfaceColors,
  textColors: commonTextColors,
  actionColors: commonActionColors,
  borderSamples: commonBorderSamples,
};

// Utility functions
export const generateUsageExample = (themeName: string) => `
/* Apply ${themeName.toLowerCase()} theme to entire page */
html[data-theme="${themeName.toLowerCase()}"] {
  /* All theme variables are now available */
}

/* Apply ${themeName.toLowerCase()} theme to specific component */
.my-component[data-theme="${themeName.toLowerCase()}"] {
  background-color: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}

/* Primary button using theme variables */
.btn-primary {
  background-color: var(--primary-base);
  color: var(--primary-text-on-primary);
  border: 1px solid var(--primary-border);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-border-hover);
}
`;

// Helper to generate theme overview text
export const generateThemeOverview = (themeName: string) =>
  `The ${themeName} is activated by setting \`data-theme="${themeName.toLowerCase()}"\` on any element. It follows the same variable structure as all other themes but uses a ${themeName.toLowerCase()} color palette as the foundation.`;
