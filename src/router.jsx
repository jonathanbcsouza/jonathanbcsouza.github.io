import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { Home } from '../src/pages/Home.jsx';
import { About } from '../src/pages/About.jsx';
import { Labs } from '../src/pages/Labs.jsx';
import { Music } from '../src/pages/Music.jsx';
import { ErrorPage } from '../src/pages/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'labs', element: <Labs /> },
      { path: 'music', element: <Music /> },
    ],
  },
]);
