import { createBrowserRouter } from 'react-router-dom';
import CheckboxPage from './checkbox.page';
import ETCPage from './etc.page';
import LayoutPage from './layout.page';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <CheckboxPage />,
        path: '/checkboxes',
      },
      {
        element: <LayoutPage />,
        path: '/layouts',
      },
      {
        element: <ETCPage />,
        path: '/etc',
      },
    ],
  },
]);
