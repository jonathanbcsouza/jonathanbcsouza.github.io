import { describe, expect, it, vi } from 'vitest';
import { act, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../../test/renderApp.jsx';

const grid = () => screen.getByRole('group', { name: 'Note grid' });
const cells = () => within(grid()).getAllByRole('button');

describe('Sketchpad grid', () => {
  it('is a single tab stop rather than forty', () => {
    renderApp('/');
    expect(cells()).toHaveLength(40);
    expect(cells().filter((cell) => cell.tabIndex === 0)).toHaveLength(1);
  });

  it('moves between cells with the arrow keys and stops at the edges', async () => {
    const user = userEvent.setup();
    renderApp('/');
    const byName = (name) => within(grid()).getByRole('button', { name });

    act(() => byName('D3, step 1').focus());
    await user.keyboard('{ArrowRight}');
    expect(byName('D3, step 2')).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(byName('F3, step 2')).toHaveFocus();

    await user.keyboard('{ArrowLeft}{ArrowLeft}{ArrowLeft}');
    expect(byName('F3, step 1')).toHaveFocus();

    await user.keyboard('{End}');
    expect(byName('F3, step 8')).toHaveFocus();

    await user.keyboard('{ArrowUp}{ArrowUp}{ArrowUp}');
    expect(byName('D3, step 8')).toHaveFocus();
  });

  it('keeps the tab stop on the last cell focused', async () => {
    const user = userEvent.setup();
    renderApp('/');
    const target = within(grid()).getByRole('button', { name: 'G3, step 5' });
    await user.click(target);
    expect(cells().filter((cell) => cell.tabIndex === 0)).toEqual([target]);
  });

  it('toggles a cell with Space', async () => {
    const user = userEvent.setup();
    renderApp('/');
    const cell = within(grid()).getByRole('button', { name: 'G3, step 1' });
    expect(cell).toHaveAttribute('aria-pressed', 'false');
    act(() => cell.focus());
    await user.keyboard(' ');
    expect(cell).toHaveAttribute('aria-pressed', 'true');
  });

  it('says so when the sound engine fails to load', async () => {
    const user = userEvent.setup();
    const createEngine = vi.fn().mockRejectedValue(new Error('offline'));
    vi.doMock('./engine', () => ({ createEngine }));
    renderApp('/');
    await user.click(screen.getByRole('button', { name: /^play$/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent(
      /could not load/i,
    );
    expect(createEngine).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: /^play$/i })).toBeEnabled();
    vi.doUnmock('./engine');
  });
});
