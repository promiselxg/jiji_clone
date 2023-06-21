import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { FormToggleProvider } from './context/FormToggleContext';
import router from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormToggleProvider>
      <RouterProvider router={router} />
    </FormToggleProvider>
  </React.StrictMode>
);
