import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import ROUTES from 'shared/routes';
import { Wrapper } from './Wrapper';
import { Main } from './Main';

export const routesConfig: RouteObject[] = [
  {
    element: <Wrapper/>,
    children: [
      {
        path: ROUTES.root(),
        element: <Main />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.root()} />,
      },
    ],
  },
];
