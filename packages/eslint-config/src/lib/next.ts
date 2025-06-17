import reactConfig from './react.js';

export default [
  ...reactConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Next.js specific rules (manual implementation since next/core-web-vitals isn't flat config ready)
      
      // Allow default exports for Next.js pages and API routes
      'import/no-default-export': 'off',

      // Next.js specific import rules
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowLiteral: false,
          allowObject: true,
        },
      ],

      // React rules adjustments for Next.js
      'react/jsx-props-no-spreading': [
        'error',
        {
          html: 'enforce',
          custom: 'enforce',
          explicitSpread: 'ignore',
          exceptions: ['Component', 'pageProps'], // Allow spreading pageProps
        },
      ],
    },
  },
  {
    // Next.js pages
    files: [
      'pages/**/*.{js,jsx,ts,tsx}',
      'src/pages/**/*.{js,jsx,ts,tsx}',
      'app/**/*.{js,jsx,ts,tsx}',
      'src/app/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
    },
  },
  {
    // Next.js API routes
    files: [
      'pages/api/**/*.{js,ts}',
      'src/pages/api/**/*.{js,ts}',
      'app/api/**/*.{js,ts}',
      'src/app/api/**/*.{js,ts}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
      'consistent-return': 'off',
    },
  },
  {
    // Next.js configuration files
    files: [
      'next.config.{js,mjs,ts}',
      'middleware.{js,ts}',
      'instrumentation.{js,ts}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
    },
  },
  {
    // Next.js App Router layout and page files
    files: [
      '**/layout.{js,jsx,ts,tsx}',
      '**/page.{js,jsx,ts,tsx}',
      '**/loading.{js,jsx,ts,tsx}',
      '**/not-found.{js,jsx,ts,tsx}',
      '**/error.{js,jsx,ts,tsx}',
      '**/global-error.{js,jsx,ts,tsx}',
      '**/template.{js,jsx,ts,tsx}',
      '**/default.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'error',
      'react/function-component-definition': 'off', // Allow function declarations for Next.js pages
    },
  },
];