import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/renderApp.jsx';

const tabs = () => screen.getAllByRole('tab');

describe('Music tabs', () => {
  it('selects the first project and keeps only it in the tab order', () => {
    renderApp('/music');
    const [first, second, third] = tabs();
    expect(first).toHaveAttribute('aria-selected', 'true');
    expect(first).toHaveAttribute('tabindex', '0');
    expect(second).toHaveAttribute('tabindex', '-1');
    expect(third).toHaveAttribute('tabindex', '-1');
  });

  it('moves with the arrow keys, wraps, and supports Home and End', async () => {
    const user = userEvent.setup();
    renderApp('/music');
    const [first, second, third] = tabs();

    first.focus();
    await user.keyboard('{ArrowRight}');
    expect(second).toHaveFocus();
    expect(second).toHaveAttribute('aria-selected', 'true');

    await user.keyboard('{End}');
    expect(third).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(first).toHaveFocus();

    await user.keyboard('{ArrowLeft}');
    expect(third).toHaveFocus();

    await user.keyboard('{Home}');
    expect(first).toHaveFocus();
  });

  it('shows the panel that belongs to the selected tab', async () => {
    const user = userEvent.setup();
    renderApp('/music');
    await user.click(tabs()[1]);

    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAccessibleName(/Harmonic Science/);
    expect(
      screen.getByRole('heading', { level: 2, name: 'Harmonic Science' }),
    ).toBeInTheDocument();
  });

  it('writes the selection to the URL and restores it from a shared link', async () => {
    const user = userEvent.setup();
    const { router, unmount } = renderApp('/music');
    await user.click(tabs()[2]);
    expect(router.state.location.search).toBe('?project=rejected-by-society');
    await user.click(tabs()[0]);
    expect(router.state.location.search).toBe('');
    unmount();

    renderApp('/music?project=harmonic-science');
    expect(tabs()[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('falls back to the first project for an unknown id', () => {
    renderApp('/music?project=does-not-exist');
    expect(tabs()[0]).toHaveAttribute('aria-selected', 'true');
  });
});
