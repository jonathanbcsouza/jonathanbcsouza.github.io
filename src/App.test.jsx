import { describe, expect, it } from 'vitest';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from './test/renderApp.jsx';
import { siteRoutes } from './data/siteRoutes';

const titleOf = (path) =>
  siteRoutes.find((route) => route.path === path).documentTitle;

describe('App shell', () => {
  it('sets the document title for the route, and updates it on navigation', async () => {
    const user = userEvent.setup();
    renderApp('/');
    expect(document.title).toBe(titleOf('/'));

    await user.click(screen.getByRole('link', { name: 'About' }));
    expect(document.title).toBe(titleOf('/about'));

    await user.click(screen.getByRole('link', { name: 'Music' }));
    expect(document.title).toBe(titleOf('/music'));
  });

  it('moves focus to the main content after a client navigation', async () => {
    const user = userEvent.setup();
    renderApp('/');
    expect(screen.getByRole('main')).not.toHaveFocus();
    await user.click(screen.getByRole('link', { name: 'Tech' }));
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it('offers a skip link that focuses main without touching the URL', async () => {
    const user = userEvent.setup();
    const { router } = renderApp('/about');
    await user.click(screen.getByRole('link', { name: /skip to content/i }));
    expect(screen.getByRole('main')).toHaveFocus();
    expect(router.state.location.hash).toBe('');
  });

  it('exposes labelled landmarks', () => {
    renderApp('/');
    expect(
      screen.getByRole('navigation', { name: 'Main' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Social links' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('marks the current page in the nav, and only one', () => {
    renderApp('/tech');
    const current = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('aria-current') === 'page');
    expect(current).toHaveLength(1);
    expect(current[0]).toHaveTextContent('Tech');
  });

  it('closes the mobile menu with Escape', async () => {
    const user = userEvent.setup();
    renderApp('/');
    // jsdom does not evaluate media queries, so the mobile-only button is
    // treated as hidden here. The real behaviour is checked in a browser.
    const toggle = screen.getByRole('button', {
      name: 'Open menu',
      hidden: true,
    });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('unknown URLs', () => {
  it('render a not found page inside the shell, with the nav intact', () => {
    renderApp('/definitely-not-a-page');
    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main' }),
    ).toBeInTheDocument();
    expect(document.title).toMatch(/not found/i);
  });

  it('still redirect the old /labs and /home links', () => {
    const { router } = renderApp('/labs');
    expect(router.state.location.pathname).toBe('/tech');
    act(() => {
      router.navigate('/home');
    });
    expect(router.state.location.pathname).toBe('/');
  });
});

describe('heading structure', () => {
  it.each(siteRoutes.map((route) => route.path))(
    'has one h1 and no skipped levels on %s',
    (path) => {
      renderApp(path);
      const levels = screen
        .getAllByRole('heading')
        .map((h) => Number(h.tagName[1]));
      expect(levels.filter((level) => level === 1)).toHaveLength(1);
      levels.forEach((level, i) => {
        if (i > 0) expect(level - levels[i - 1]).toBeLessThanOrEqual(1);
      });
    },
  );
});
