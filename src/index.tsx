import React, { lazy } from 'react';
import { Container, createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HOME_ROUTE, FAVORITES_ROUTE, DETAILED_INFO_ROUTE } from '@constants/user_routes';
import Layout from './layout';

const Home = lazy(() => import('@pages/home/index'));
const Favorites = lazy(() => import('@pages/favorites/index'));
const DetailedInfo = lazy(() => import('@pages/detailed_info/index'));

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