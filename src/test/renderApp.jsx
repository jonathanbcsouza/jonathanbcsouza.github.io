import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '../router.jsx';
import { SketchpadProvider } from '../components/sketchpad/SketchpadProvider.jsx';

/** Mounts the real route table at a URL, inside the real providers. */
export function renderApp(url = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [url] });
  const utils = render(
    <SketchpadProvider>
      <RouterProvider router={router} />
    </SketchpadProvider>,
  );
  return { router, ...utils };
}
