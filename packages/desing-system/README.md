# @kanban-board/design-system

Shared React component library for the Kanban Board application. Provides consistent, reusable UI components with built-in accessibility and theming support.

## What's This For

This design system ensures visual and functional consistency across all applications in the monorepo. It provides pre-built, tested components that follow design standards and accessibility best practices.

## Why Use This

- **Consistency** - Same look and feel across all applications
- **Accessibility** - Built on Radix UI primitives for WCAG compliance
- **Performance** - Optimized components with CSS modules
- **Developer Experience** - Full TypeScript support and flexible APIs
- **Maintainability** - Centralized component updates benefit all apps

## Usage

### Install and import components:

```tsx
import { Button } from '@kanban-board/design-system';

function MyComponent() {
  return <Button variant="primary">Click me</Button>;
}
```

### Works with any React framework:

```tsx
// Next.js
import { Button } from '@kanban-board/design-system';

// Regular React
import { Button } from '@kanban-board/design-system';

// With routing libraries
<Button asChild>
  <Link to="/dashboard">Dashboard</Link>
</Button>;
```

## Building

Run `nx build design-system` to build the library.
