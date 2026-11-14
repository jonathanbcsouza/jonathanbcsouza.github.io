import { SITE_URL, siteRoutes } from '../src/data/siteRoutes.js';

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// GitHub Pages serves <route>/index.html at "<route>/" and 301s the bare path
// to it, so the trailing slash is the URL that actually answers with a 200.
// A canonical without it would point crawlers at a redirect.
export const canonicalUrl = (route) =>
  route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}/`;

// Replaces one tag in the template and fails loudly when it is missing, so a
// future edit to index.html cannot silently ship pages with the wrong metadata.
const swap = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`index.html is missing a tag matching ${pattern}`);
  }
  return html.replace(pattern, replacement);
};

/**
 * Specialises the built index.html for one route.
 *
 * Every asset path inside it is absolute (the site is served from the domain
 * root), so a copy placed at <route>/index.html resolves the same files.
 */
export function renderRouteHtml(
  template,
  { path, documentTitle, description },
) {
  const title = escapeHtml(documentTitle);
  const desc = escapeHtml(description);
  const url = canonicalUrl(path);

  let html = template;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = swap(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${desc}" />`,
  );
  html = swap(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = swap(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = swap(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = swap(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${desc}" />`,
  );
  return html;
}

/** Served for unknown URLs. Boots the app, which shows the in-app 404. */
export function renderNotFoundHtml(template) {
  const html = renderRouteHtml(template, {
    path: '/',
    documentTitle: 'Page not found | Jonathan Souza',
    description: 'This page does not exist.',
  });
  // Not the home page, so no canonical, and nothing here belongs in a search index.
  return swap(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    '<meta name="robots" content="noindex" />',
  );
}

export function renderSitemap(lastmod = new Date()) {
  const day = lastmod.toISOString().slice(0, 10);
  const entries = siteRoutes
    .map(
      ({ path }) =>
        `  <url>\n    <loc>${canonicalUrl(path)}</loc>\n    <lastmod>${day}</lastmod>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}
