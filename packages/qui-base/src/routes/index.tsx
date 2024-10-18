import { useState } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Button } from '../../lib/components';
import CheckboxPage from './checkbox.page';
import DropdownPage from './dropdown.page';
import ETCPage from './etc.page';
import ItemPage from './item.page';
import LayoutPage from './layout.page';
import ReplacerPage from './replacer.page';
import TextfieldPage from './textfield.page';
import TabPage from './tab.page';

function Root() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const changeMode = () => {
    const toggle = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.style.setProperty('color-scheme', toggle);
    document.documentElement.setAttribute('data-theme', toggle);
    setMode(toggle);
  };

  return (
    <div>
      <header>
        <Button onClick={changeMode}>모드 변경</Button>
      </header>
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
      {
        element: <DropdownPage />,
        path: '/dropdowns',
      },
      {
        element: <ItemPage />,
        path: '/items',
      },
      {
        element: <TabPage />,
        path: '/tabs',
      },
    ],
  },
]);
