import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    'src/index.tsx',
    'src/components/Button.tsx',
    'src/components/Typography.tsx',
    'src/styles/index.ts',
  ],
  external: ['react'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
});
