// Single source of truth for the site's real, linkable routes.
//
// Consumed by the navbar, and by the prerender step in vite.config.js that
// writes one static HTML file per route so GitHub Pages answers deep links
// with a 200 instead of falling back to 404.html.
//
// Keep in sync with the route table in src/router.jsx.
export const siteRoutes = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/labs', title: 'Labs' },
  { path: '/music', title: 'Music' },
];
