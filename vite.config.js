import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  server: {
    allowedHosts: ['uncoerced-an-confidently.ngrok-free.dev'],
  },
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
  },
}));
