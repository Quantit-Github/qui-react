# @quantit/qui-react

```
    Quantit standard UI System for React
```

Quantit standart UI system for React

## Install

**npm:**

```
npm add @quantit/qui-react styled-components react-aria
```

**yarn:**

```
yarn add @quantit/qui-react styled-components react-aria
```

**pnpm:**

```
yarn add @quantit/qui-react
```

## Usage

### Basic

```javascript
import * as React from 'react'
import ReactDOM from 'react-dom/client';
import { Button, ThemeProvider } from '@quantit/qui-react'


function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">
        Click Me.
      </Button>
    </ThemeProvider>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Advanced

##### Switch Theme Mode

```javascript
import * as React from 'react';
import { Button, ThemeProvider, useTheme } from '@quantit/qui-react';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

function HomePage() {
  const { toggleThemeMode, themeMode } = useTheme();

  return (
    <div>
      <h1>Home Page.</h1>
      <Button variant="primary" onClick={toggleThemeMode}>
        {themeMode}
      </Button>
    </div>
  );
}
```

##### Customize Theme

```javascript
import * as React from 'react';
import {
  BASE_THEME,
  Button,
  QuiTheme,
  ThemeProvider,
} from '@quantit/qui-react';

const customTheme: QuiTheme = {
  ...BASE_THEME,
  palette: {
    ...BASE_THEME.palette,
    light: {
      ...BASE_THEME.palette.light,
      primary: {
        ...BASE_THEME.palette.light.primary,
        50: 'green',
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button variant="primary" onClick={toggleThemeMode}>
        Click Me.
      </Button>
    </ThemeProvider>
  );
}
```

##### Extend Theme

1. Create `styled.d.ts` file in your `/src` or root source directory.

```javascript
// styled.d.ts
import { QuiTheme } from '@quantit/qui-react';
import 'styled-components';

export interface ExtendedTheme extends QuiTheme {
  foo: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ExtendedTheme {}
}
```

2. Implement custom theme and pass it into ThemeProvider as props.

```javascript
import * as React from 'react';
import {
  BASE_THEME,
  Button,
  ExtendedTheme,
  ThemeProvider,
  useTheme,
} from '@quantit/qui-react';

const customTheme: ExtendedTheme = {
  ...BASE_THEME,
  foo: 'color: green; font-size: 20px;',
};

const Foo = styled.p`
  ${({ theme }) => theme.foo};
`;

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Foo>Foo...</Foo>
    </ThemeProvider>
  );
}
```

## FAQ

### Server, Client ClassName does not match while developing on Next.js.

```
Warning: Prop `className` did not match. Server: "sc-ftLKQv imujsh" Client: "sc-dkjKgF cWetnU"
```

1. Install `babel-plugin-styled-components`.

```
pnpm add -D babel-plugin-styled-components
```

2. Create `.babelrc` file on the root directory.

```javascript
// .babelrc
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true,
        "pure": true
      }
    ]
  ]
}
```
