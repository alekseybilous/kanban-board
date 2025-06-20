# Kanban Board

A modern, feature-rich Kanban board application built with cutting-edge web technologies. Designed for task management with an intuitive drag-and-drop interface and multiple theme support.

🚀 **[Live Demo](https://kanban-board-web-three.vercel.app/)**

## What We're Building

A comprehensive task management solution that provides:

- **Visual Task Organization** - Intuitive Kanban board with drag-and-drop functionality
- **Modern User Experience** - Clean, responsive design with multiple themes
- **Scalable Architecture** - Monorepo structure for maintainable, reusable code
- **Accessibility First** - WCAG compliant components and inclusive design
- **Developer Experience** - Full TypeScript support, automated testing, and consistent tooling

## Technologies Used

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Component-scoped styling
- **Radix UI** - Accessible UI primitives
- **next-themes** - Theme switching functionality

### Development Tools

- **Nx** - Monorepo management and build system
- **ESLint** - Code linting with custom configurations
- **Vite** - Fast build tool for packages
- **Vitest** - Unit testing framework

### Deployment

- **Vercel** - Production hosting and deployment

## Project Structure

```
kanban-board/
├── apps/
│   └── web/                    # Next.js application
├── packages/
│   ├── theme/                  # Design tokens and CSS variables
│   ├── design-system/          # Shared React components
│   └── eslint-config/          # Shared ESLint configurations
└── tools/                      # Build and development tools
```

### Package Overview

- **`@kanban-board/theme`** - Centralized theme system with CSS custom properties, supporting light, dark, and blue themes
- **`@kanban-board/design-system`** - Reusable React components built on Radix UI for consistency and accessibility
- **`@kanban-board/eslint-config`** - Shared ESLint rules for code quality across all projects

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd kanban-board

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev              # Start all applications in development mode
npm run build           # Build all applications and packages
npm run test            # Run all tests

# Individual packages
npx nx dev web          # Start web app only
npx nx build web        # Build web app only
npx nx test web         # Test web app only
```

## Architecture Decisions

### Monorepo Structure

We chose Nx for its powerful monorepo capabilities, enabling:

- Shared code and dependencies
- Consistent build and test processes
- Efficient caching and incremental builds
- Clear dependency graph management

### Theme System

Custom CSS properties provide:

- Runtime theme switching without JavaScript
- Better performance than CSS-in-JS solutions
- Easy customization and extension
- Consistent design tokens across applications

### Component Architecture

Radix UI foundation ensures:

- Accessibility compliance out of the box
- Unstyled primitives for design flexibility
- Keyboard navigation and screen reader support
- Robust behavior patterns
