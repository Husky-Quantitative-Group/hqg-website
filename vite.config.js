import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  base: '/',
  build: {
    outDir: ssrBuild ? 'dist-ssr' : 'dist',
  },
}));
