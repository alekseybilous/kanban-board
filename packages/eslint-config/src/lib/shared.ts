// Shared configuration constants and utilities
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import nxPlugin from '@nx/eslint-plugin';
// @ts-expect-error - No types available
import importPlugin from 'eslint-plugin-import';

// Common language options
export const commonLanguageOptions = {
  parser: tsparser,
  parserOptions: {
    ecmaVersion: 'latest' as const,
    sourceType: 'module' as const,
    projectService: true,
  },
};

// Common plugins
export const commonPlugins = {
  '@typescript-eslint': tseslint,
  '@nx': nxPlugin,
  import: importPlugin,
};

// Base globals
export const baseGlobals = {
  console: 'readonly',
  process: 'readonly',
  Buffer: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  global: 'readonly',
} as const;

// Browser globals
export const browserGlobals = {
  ...baseGlobals,
  window: 'readonly',
  document: 'readonly',
  navigator: 'readonly',
  localStorage: 'readonly',
  sessionStorage: 'readonly',
  fetch: 'readonly',
  HTMLElement: 'readonly',
  HTMLButtonElement: 'readonly',
  HTMLInputElement: 'readonly',
  HTMLDivElement: 'readonly',
  HTMLSpanElement: 'readonly',
  Element: 'readonly',
  Node: 'readonly',
  MouseEvent: 'readonly',
  KeyboardEvent: 'readonly',
  Event: 'readonly',
} as const;

// Common TypeScript rules
export const commonTSRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: false,
    },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
} as const;

// Airbnb-style formatting rules
export const formattingRules = {
  'array-bracket-spacing': ['error', 'never'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'func-call-spacing': ['error', 'never'],
  indent: ['error', 2, { SwitchCase: 1 }],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  'no-trailing-spaces': 'error',
  'object-curly-spacing': ['error', 'always'],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'always'],
  'space-before-blocks': 'error',
  'space-before-function-paren': [
    'error',
    { anonymous: 'always', named: 'never', asyncArrow: 'always' },
  ],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': 'error',
  'spaced-comment': ['error', 'always'],
} as const;

// Nx rules
export const nxRules = {
  '@nx/enforce-module-boundaries': [
    'error',
    {
      enforceBuildableLibDependency: true,
      allow: [],
      depConstraints: [
        {
          sourceTag: '*',
          onlyDependOnLibsWithTags: ['*'],
        },
      ],
    },
  ],
  '@nx/dependency-checks': 'error',
} as const;
