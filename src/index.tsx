import React from 'react';
import { Container, createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HOME_ROUTE, FAVORITES_ROUTE, DETAILED_INFO_ROUTE } from '@constants/user_routes';
import Home from '@pages/home/index';
import Favorites from '@pages/favorites/index';
import DetailedInfo from '@pages/detailed_info/index';
import Layout from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        path: HOME_ROUTE,
        element: <Home />,
      },
      {
        path: FAVORITES_ROUTE,
        element: <Favorites />,
      },
      {
        path: DETAILED_INFO_ROUTE + '/:id',
        element: <DetailedInfo />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root') as Container);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);