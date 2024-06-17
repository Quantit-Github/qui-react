import { createBrowserRouter } from 'react-router-dom';
import CheckboxPage from './checkbox.page';
import ETCPage from './etc.page';
import LayoutPage from './layout.page';
import ReplacerPage from './replacer.page';
import { TextfieldPage } from './textfield.page';

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
        element: <ReplacerPage />,
        path: '/replacer',
      },
      {
        element: <ETCPage />,
        path: '/etc',
      },
      {
        element: <TextfieldPage />,
        path: '/textfields',
      },
    ],
  },
]);
