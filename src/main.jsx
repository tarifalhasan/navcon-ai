import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { ArbeitenDetails } from './components';
import './index.css';
import Arbeiten from './pages/Arbeiten';
import Kontakt from './pages/Kontakt';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: 'arbeiten',
        element: <Arbeiten />,
        children: [
          {
            path: ':arbeitenId',
            element: <ArbeitenDetails />,
          },
        ],
      },
      {
        path: 'kontakt',
        element: <Kontakt />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
