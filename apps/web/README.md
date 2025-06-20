# Kanban Board Web App

The main Next.js application that provides the user interface for the Kanban Board task management system. Built with modern React patterns and integrated with the shared design system.

## What This App Does

This is the primary user-facing application that delivers:

- **Task Management Interface** - Visual Kanban board for organizing work
- **Theme Support** - Light, dark, and blue themes with seamless switching
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Accessibility** - Screen reader compatible and keyboard navigable
- **Modern UX** - Fast, smooth interactions with optimized performance

## Technologies Used

- **Next.js 15** - React framework with App Router for optimal performance
- **TypeScript** - Full type safety and better developer experience
- **CSS Modules** - Component-scoped styling for maintainable CSS
- **next-themes** - Theme switching with system preference detection
- **@kanban-board/theme** - Shared design tokens and CSS variables
- **@kanban-board/design-system** - Reusable UI components

## Development

### Start the development server:

```bash
# From project root
npx nx dev web

# Or directly in this directory
npm run dev
```

### Build for production:

```bash
# From project root
npx nx build web

# Or directly in this directory
npm run build
```

### Run tests:

```bash
# From project root
npx nx test web

# Or directly in this directory
npm run test
```

## Key Features

- **Server-Side Rendering** - Fast initial page loads with Next.js SSR
- **Static Generation** - Optimal performance for static content
- **Theme Persistence** - User theme preferences saved across sessions
- **Code Splitting** - Automatic optimization for faster loading
- **SEO Optimized** - Proper meta tags and structured data

## Project Structure

```
apps/web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # App-specific components
│   ├── providers/              # React context providers
│   └── styles/                 # Global styles and CSS modules
├── public/                     # Static assets
└── next.config.js              # Next.js configuration
```

## Building

This app is automatically built and deployed when changes are pushed to the main branch. The build process optimizes the application for production deployment on Vercel.
