import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

import path from 'path';

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(projectRootDir, 'src') },
    ]
  }
});
