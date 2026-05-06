import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [mdx(), react()],
  base: '/',
  server: {
    allowedHosts: ['uncoerced-an-confidently.ngrok-free.dev'],
  },
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
  },
}));
