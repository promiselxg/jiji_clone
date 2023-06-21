import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../Layout';
import { Car, CarInfo, Phone, Property } from '../pages';

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
    path: '/cars/:id',
    element: (
      <Layout>
        <CarInfo />
      </Layout>
    ),
  },
  {
    path: '/cars',
    element: (
      <Layout>
        <Car />
      </Layout>
    ),
  },

  {
    path: '/phones',
    element: (
      <Layout>
        <Phone />
      </Layout>
    ),
  },
  {
    path: '/properties',
    element: (
      <Layout>
        <Property />
      </Layout>
    ),
  },
]);

export default router;
