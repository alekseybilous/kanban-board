# @kanban-board/eslint-config

Shared ESLint configuration for the Kanban Board monorepo. Provides consistent code quality and style across all projects.

## What's Included

- **Base config** - JavaScript/TypeScript linting with modern standards
- **React config** - React-specific rules and best practices
- **Next.js config** - Next.js optimized linting
- **Node.js config** - Server-side JavaScript/TypeScript rules

All configurations include TypeScript support and follow Airbnb style guides.

## Usage

### For React projects:

```js
// eslint.config.js
import { react } from '@kanban-board/eslint-config';

export default react;
```

### For Next.js projects:

```js
// eslint.config.js
import { next } from '@kanban-board/eslint-config';

export default next;
```

### For Node.js projects:

```js
// eslint.config.js
import { node } from '@kanban-board/eslint-config';

export default node;
```

### For basic TypeScript projects:

```js
// eslint.config.js
import baseConfig from '@kanban-board/eslint-config';

export default baseConfig;
```

## Building

Run `nx build eslint-config` to build the library.
