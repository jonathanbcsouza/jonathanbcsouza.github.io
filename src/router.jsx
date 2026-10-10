import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Labs } from './pages/Labs.jsx';
import { Music } from './pages/Music.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'labs', element: <Labs /> },
      { path: 'music', element: <Music /> },
    ],
  },
]);
