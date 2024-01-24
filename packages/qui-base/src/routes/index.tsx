import { createBrowserRouter } from 'react-router-dom';
import CheckboxPage from './checkbox.page';
import ETCPage from './etc.page';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <CheckboxPage />,
        path: '/checkboxes',
      },
      {
        element: <ETCPage />,
        path: '/etc',
      },
    ],
  },
]);
