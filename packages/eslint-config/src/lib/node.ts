import baseConfig from './base.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ...(baseConfig[1] as any).languageOptions,
      globals: {
        ...(baseConfig[1] as any).languageOptions.globals,
        // Node.js globals (remove browser globals)
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
    rules: {
      ...(baseConfig[1] as any).rules,

      // Node.js specific rules
      'no-process-exit': 'error',
      'no-process-env': 'off', // Allow process.env in Node.js
      'no-console': 'off', // Console is acceptable in Node.js applications
      'global-require': 'off', // Dynamic requires are common in Node.js

      // Import rules for Node.js
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error', // Prefer named exports in Node.js
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          ts: 'never',
          mjs: 'always',
          cjs: 'always',
        },
      ],

      // Node.js async patterns
      'no-await-in-loop': 'warn', // Sometimes necessary in Node.js
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],

      // TypeScript Node.js specific
      '@typescript-eslint/no-var-requires': 'error', // Use import instead of require
      '@typescript-eslint/no-require-imports': 'error',
    },
  },
  {
    // Configuration files can use require and default exports
    files: [
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      '*.config.cjs',
      'webpack.config.*',
      'vite.config.*',
      'rollup.config.*',
      'jest.config.*',
      'vitest.config.*',
    ],
    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    // Scripts and build files
    files: [
      'scripts/**/*.{js,ts}',
      'build/**/*.{js,ts}',
      'tools/**/*.{js,ts}',
    ],
    rules: {
      'no-console': 'off',
      'no-process-exit': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
  {
    // Test files
    files: [
      '**/*.test.{js,ts}',
      '**/*.spec.{js,ts}',
      '**/__tests__/**/*.{js,ts}',
    ],
    rules: {
      'no-console': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
  {
    // CommonJS files
    files: ['*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-default-export': 'off',
    },
  },
];