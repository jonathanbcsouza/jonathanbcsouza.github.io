import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from './App.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Tech } from './pages/Tech.jsx';
import { Music } from './pages/Music.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Navigate to="/" replace /> },
      { path: 'about', element: <About /> },
      { path: 'tech', element: <Tech /> },
      // Kept so the previously published /labs links keep resolving.
      { path: 'labs', element: <Navigate to="/tech" replace /> },
      { path: 'music', element: <Music /> },
    ],
  },
]);
