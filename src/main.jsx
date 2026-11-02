import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import GlobalStyle from './styles/global';
import { SketchpadProvider } from './components/sketchpad/SketchpadProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <SketchpadProvider>
      <RouterProvider router={router} />
    </SketchpadProvider>
  </React.StrictMode>,
);
