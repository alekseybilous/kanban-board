import js from '@eslint/js';
import { 
  commonLanguageOptions, 
  commonPlugins, 
  baseGlobals,
  commonTSRules,
  formattingRules,
  nxRules
} from './shared.js';

export default [
  js.configs.recommended,
  {
    // Global ignores for all environments
    ignores: [
      // Build outputs
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      
      // Dependencies
      'node_modules/**',
      
      // Test coverage
      'coverage/**',
      
      // Temporary files
      '.tmp/**',
      'tmp/**',
      
      // IDE files
      '.vscode/**',
      '.idea/**',
      
      // OS files
      '.DS_Store',
      'Thumbs.db',
      
      // Log files
      '*.log',
      'logs/**',
      
      // Environment files
      '.env*',
      
      // Cache directories
      '.cache/**',
      '.parcel-cache/**',
      '.nx/cache/**',
      
      // Package manager files
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ...commonLanguageOptions,
      globals: baseGlobals,
    },
    plugins: commonPlugins,
    rules: {
      // Import rules
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external', 
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // General code quality
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',

      // TypeScript rules
      ...commonTSRules,

      // Formatting rules (Airbnb-style)
      ...formattingRules,

      // Nx rules
      ...nxRules,
    },
  },
  {
    files: ['*.js', '*.jsx'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['*.config.js', '*.config.ts', '*.config.mjs'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];