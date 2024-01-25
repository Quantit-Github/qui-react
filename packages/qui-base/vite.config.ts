import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import preserveDirectives from 'rollup-plugin-preserve-directives';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib'],
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
      fileName: (format) => `main.${format}.js`,
    },
    copyPublicDir: false,
    rollupOptions: {
      // onwarn: (warning, warn) => {
      //   if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      //     return;
      //   }
      //   warn(warning);
      // },
      plugins: [preserveDirectives()],
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative('lib', file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        // assetFileNames: "assets/[name][extname]",
        assetFileNames: ({ name }) => {
          return `assets/${(name || '').toLocaleLowerCase()}`;
        },
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
        },
        preserveModules: true,
      },
    },
  },
});
