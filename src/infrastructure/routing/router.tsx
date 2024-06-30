import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './constants';
import React from 'react';

export const ROUTER = createBrowserRouter(ROUTES.map(route => ({
    path: route.path,
    element: <route.component />,
    ...(route.errorElement && { errorElement: <route.errorElement /> }),
})),
);
