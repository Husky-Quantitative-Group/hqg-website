import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');

const template = await readFile(path.join(distDir, 'index.html'), 'utf-8');
const researchPostsRaw = await readFile(
  path.resolve(rootDir, 'src', 'data', 'researchPosts.json'),
  'utf-8'
);
const researchPosts = JSON.parse(researchPostsRaw);

const { render } = await import(pathToFileURL(ssrEntryPath).href);

const staticRoutes = ['/', '/team', '/research', '/software', '/apply'];
const researchRoutes = researchPosts.map((post) => `/research/${post.slug}`);
const routes = [...staticRoutes, ...researchRoutes];

for (const url of routes) {
  const appHtml = await render(url);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  const filePath =
    url === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, url.slice(1), 'index.html');

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, html, 'utf-8');
}

console.log(`Prerendered ${routes.length} routes.`);
