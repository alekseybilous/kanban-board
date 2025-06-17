// Re-export the base configuration as the default export
import baseConfig from './lib/base.js';
import reactConfig from './lib/react.js';
import nextConfig from './lib/next.js';
import nodeConfig from './lib/node.js';

// Default export is the base configuration
export default baseConfig;

// Named exports for specific environments
export const base = baseConfig;
export const react = reactConfig;
export const next = nextConfig;
export const node = nodeConfig;
