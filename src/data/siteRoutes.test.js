import { describe, expect, it } from 'vitest';
import { routes } from '../router.jsx';
import { NOT_FOUND_TITLE, siteRoutes, titleForPath } from './siteRoutes';

const childPaths = routes[0].children
  .filter(
    (child) => child.path && child.path !== '*' && !child.element.props.to,
  )
  .map((child) => `/${child.path}`);

describe('siteRoutes', () => {
  it('lists exactly the pages the router renders, plus the index', () => {
    const declared = siteRoutes.map((route) => route.path).sort();
    expect(declared).toEqual(['/', ...childPaths].sort());
  });

  it('gives every route a unique, search-friendly title and description', () => {
    const titles = siteRoutes.map((route) => route.documentTitle);
    const descriptions = siteRoutes.map((route) => route.description);

    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
    for (const route of siteRoutes) {
      expect(route.documentTitle.length).toBeLessThanOrEqual(65);
      expect(route.description.length).toBeGreaterThanOrEqual(70);
      expect(route.description.length).toBeLessThanOrEqual(175);
    }
  });

  it('resolves a title regardless of a trailing slash', () => {
    expect(titleForPath('/about')).toBe(titleForPath('/about/'));
    expect(titleForPath('/')).toBe(siteRoutes[0].documentTitle);
    expect(titleForPath('/nope')).toBeUndefined();
    expect(NOT_FOUND_TITLE).toMatch(/not found/i);
  });
});
