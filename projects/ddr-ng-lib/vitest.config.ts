import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./**/*.spec.ts'],
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'html', 'lcov'],
      exclude: ['**/node_modules/**', '**/*.spec.ts'],
    },
    watch: true,
  },
});