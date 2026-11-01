import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { siteRoutes } from './src/data/siteRoutes.js';

// GitHub Pages serves static files and applies no rewrite rules, so a deep
// link such as /about has nothing to resolve to and React Router never loads.
//
// This writes a copy of the built index.html to <route>/index.html for every
// real route, so Pages answers those URLs with a 200 and the router picks the
// page up from the address bar. 404.html covers everything else: it still
// boots the app, which renders the in-app error page.
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
      const index = path.join(outDir, 'index.html');
      if (!fs.existsSync(index)) return;

      const html = fs.readFileSync(index);

      for (const { path: route } of siteRoutes) {
        if (route === '/') continue;
        const dir = path.join(outDir, route);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      }

      fs.writeFileSync(path.join(outDir, '404.html'), html);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  // Base stays '/' because jonathanbcsouza.github.io is a user site, served
  // from the domain root rather than a /repo-name/ subpath.
  base: '/',
  plugins: [react(), githubPagesRoutes()],
});
