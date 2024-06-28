import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { ROUTES } from './infrastructure/routing/constants';

const router = createBrowserRouter(ROUTES.map(route => ({
    path: route.path,
    element: <route.component />,
})));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
