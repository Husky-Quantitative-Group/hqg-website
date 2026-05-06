import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
};

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [mdx({ rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] }), react()],
  base: '/',
  server: {
    allowedHosts: ['uncoerced-an-confidently.ngrok-free.dev'],
  },
  build: {
    outDir: isSsrBuild ? 'dist-ssr' : 'dist',
  },
}));
