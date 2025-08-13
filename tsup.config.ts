import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['scripts/index.ts'],
  outDir: 'dist',
  sourcemap: false,
  minify: true,
  dts: false, // No need for CLI
  format: ['cjs'],
  clean: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
});
