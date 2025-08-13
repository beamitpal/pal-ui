import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['scripts/index.ts'],
  outDir: 'dist',
  format: ['cjs'], 
  minify: false, 
  dts: false, 
  clean: true,
  target: 'node18',
  banner: {
    js: '#!/usr/bin/env node',
  },
});
