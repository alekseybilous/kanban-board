import reactConfig from '@kanban-board/eslint-config/react';

export default [
  ...reactConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
