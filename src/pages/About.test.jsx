import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderApp } from '../test/renderApp.jsx';
import { aboutPage } from '../data/aboutPage';

describe('About page', () => {
  it('renders every paragraph from the data file, in order', () => {
    renderApp('/about');
    const rendered = screen
      .getAllByText(/./, { selector: 'main p' })
      .map((node) => node.textContent);
    expect(rendered).toEqual(aboutPage.paragraphs);
  });

  it('has paragraphs whose React keys cannot collide', () => {
    // About.jsx keys each paragraph by its first 32 characters.
    const keys = aboutPage.paragraphs.map((text) => text.slice(0, 32));
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('ends on the pull quote', () => {
    expect(aboutPage.paragraphs.at(-1)).toMatch(/^“.+”$/);
  });
});
