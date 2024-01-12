# @quantit/qui-react

```
Quantit standard UI System for React
```

## Install

**npm:**

```
npm add @quantit/qui-react
```

**yarn:**

```
yarn add @quantit/qui-react
```

**pnpm:**

```
pnpm add @quantit/qui-react
```

## Usage

```javascript
import * as React from 'react'
import ReactDOM from 'react-dom/client';
import { Button } from '@quantit/qui-react'

function App() {
  return (
    <>
      <Button>Button</Button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
