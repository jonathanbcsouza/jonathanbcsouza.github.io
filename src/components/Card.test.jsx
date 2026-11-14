import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { techPage } from '../data/techProjects';

const renderCard = (project) =>
  render(
    <ul>
      <Card project={project} />
    </ul>,
  );

describe('Card', () => {
  it('names a link card from its visible text, not an override', () => {
    renderCard({
      title: 'Todo List',
      tech: 'TypeScript · React',
      src: '/x.webp',
      href: 'https://example.com/app',
    });
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('aria-label');
    expect(link).toHaveAccessibleName(/Todo List/);
    expect(link).toHaveAccessibleName(/TypeScript · React/);
    expect(link).toHaveAccessibleName(/example\.com/);
    expect(link).toHaveAccessibleName(/opens in a new tab/);
  });

  it('opens externally without leaking the opener', () => {
    renderCard({ title: 'A', tech: 'B', href: 'https://example.com' });
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.getAttribute('rel')).toMatch(/noopener/);
  });

  it('renders a project without a link as plain content', () => {
    renderCard({ title: 'Notebook', tech: 'Python', src: '/y.webp' });
    expect(screen.queryByRole('link')).toBeNull();
    expect(
      screen.getByRole('heading', { name: 'Notebook' }),
    ).toBeInTheDocument();
  });

  it('treats the screenshot as decorative', () => {
    const { container } = renderCard({
      title: 'T',
      tech: 'U',
      src: '/z.webp',
      href: 'https://example.com',
    });
    expect(container.querySelector('img')).toHaveAttribute('alt', '');
  });
});

describe('tech data', () => {
  it('uses only local images, so nothing on the page depends on a third party host', () => {
    for (const project of techPage.projects) {
      if (project.src)
        expect(project.src).toMatch(/^\/images\/projects\/.+\.webp$/);
    }
  });

  it('has unique titles, which are used as React keys', () => {
    const titles = techPage.projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
