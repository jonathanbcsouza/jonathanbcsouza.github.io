import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { siteRoutes } from '../src/data/siteRoutes.js';
import {
  canonicalUrl,
  renderNotFoundHtml,
  renderRouteHtml,
  renderSitemap,
} from './pagesRoutes.js';

const template = fs.readFileSync(
  path.resolve(process.cwd(), 'index.html'),
  'utf8',
);
const about = siteRoutes.find((route) => route.path === '/about');

describe('renderRouteHtml', () => {
  const html = renderRouteHtml(template, about);

  it('writes the route title, description, canonical and social tags', () => {
    expect(html).toContain(`<title>${about.documentTitle}</title>`);
    expect(html).toContain(`name="description" content="${about.description}"`);
    expect(html).toContain(
      'rel="canonical" href="https://jonathanbcsouza.github.io/about/"',
    );
    expect(html).toContain(
      'property="og:url" content="https://jonathanbcsouza.github.io/about/"',
    );
    expect(html).toContain(
      `property="og:title" content="${about.documentTitle}"`,
    );
    expect(html).toContain(
      `property="og:description" content="${about.description}"`,
    );
  });

  it('leaves the rest of the document alone', () => {
    expect(html).toContain('/src/main.jsx');
    expect(html).toContain('og-image.png');
    expect(html.match(/<title>/g)).toHaveLength(1);
  });

  it('escapes characters that would break an attribute', () => {
    const tricky = renderRouteHtml(template, {
      path: '/x',
      documentTitle: 'A "quoted" <title> & more',
      description: 'He said "hi" & left <b>',
    });
    expect(tricky).toContain('A &quot;quoted&quot; &lt;title&gt; &amp; more');
    expect(tricky).not.toContain('content="He said "hi"');
  });

  it('fails the build when a tag it must rewrite is missing', () => {
    const broken = template.replace(/<link\s+rel="canonical"[^>]*>/, '');
    expect(() => renderRouteHtml(broken, about)).toThrow(/canonical/);
  });
});

describe('renderNotFoundHtml', () => {
  it('is excluded from search and has no canonical', () => {
    const html = renderNotFoundHtml(template);
    expect(html).toContain('name="robots" content="noindex"');
    expect(html).not.toContain('rel="canonical"');
    expect(html).toMatch(/<title>Page not found/);
  });
});

describe('sitemap', () => {
  it('lists every route once with its canonical URL', () => {
    const xml = renderSitemap(new Date('2026-01-02T00:00:00Z'));
    for (const { path } of siteRoutes) {
      expect(xml).toContain(`<loc>${canonicalUrl(path)}</loc>`);
    }
    expect(xml.match(/<url>/g)).toHaveLength(siteRoutes.length);
    expect(xml).toContain('<lastmod>2026-01-02</lastmod>');
  });
});
