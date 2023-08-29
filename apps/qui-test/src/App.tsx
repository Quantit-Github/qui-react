import { Button } from '@quantit/qui-react/dist/components/Button';
import { Typography } from '@quantit/qui-react/dist/components/Typography';
import { QuiThemeProvider, Theme } from '@quantit/qui-react/dist/styles';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const theme = new Theme().setPalette('dark', {
  primary: {
    100: '#FF0000',
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <QuiThemeProvider mode="dark" theme={theme}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => console.log('클릭')}>버튼</Button>
        <Typography as="p" bold size="sm" variant="title">
          타이포그래피
        </Typography>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </QuiThemeProvider>
  );
}

export default App;
