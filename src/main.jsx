import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Cars } from './pages';
import { FormToggleProvider } from './context/FormToggleContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Layout>
          <App />
        </Layout>
      </>
    ),
  },
  {
    path: '/cars',
    element: (
      <Layout>
        <Cars />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormToggleProvider>
      <RouterProvider router={router} />
    </FormToggleProvider>
  </React.StrictMode>
);
