import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { siteRoutes } from './src/data/siteRoutes.js';
import {
  renderNotFoundHtml,
  renderRouteHtml,
  renderSitemap,
} from './scripts/pagesRoutes.js';

// GitHub Pages serves static files and applies no rewrite rules, so a deep
// link such as /about has nothing to resolve to and React Router never loads.
//
// This writes a specialised copy of the built index.html to <route>/index.html
// for every real route, each with its own title, description and canonical
// URL, so Pages answers those URLs with a 200 and crawlers that do not run
// JavaScript still see page-specific metadata. 404.html covers everything
// else: it still boots the app, which renders the in-app error page, and is
// marked noindex.
//
// A copy is enough because this is a user site served from the domain root,
// which means every asset path inside index.html is already absolute.
const githubPagesRoutes = () => {
  let outDir;

  return {
    name: 'github-pages-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexPath = path.join(outDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const template = fs.readFileSync(indexPath, 'utf8');

      for (const route of siteRoutes) {
        const html = renderRouteHtml(template, route);
        if (route.path === '/') {
          fs.writeFileSync(indexPath, html);
          continue;
        }
        const dir = path.join(outDir, route.path);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      }

      fs.writeFileSync(
        path.join(outDir, '404.html'),
        renderNotFoundHtml(template),
      );
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap());
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  // Base stays '/' because jonathanbcsouza.github.io is a user site, served
  // from the domain root rather than a /repo-name/ subpath.
  base: '/',
  plugins: [react(), githubPagesRoutes()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
    css: false,
    include: ['src/**/*.test.{js,jsx}', 'scripts/**/*.test.js'],
  },
});
