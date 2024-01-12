import { useState } from 'react';
import { IconButton } from '../lib/components/Button/Button';
import { Icon } from '../lib/components/Icon/Icon';
import { Button } from '../lib/main';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const changeMode = () => {
    const toggle = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.style.setProperty('color-scheme', toggle);
    document.documentElement.setAttribute('data-theme', toggle);
    setMode(toggle);
  };

  return (
    <>
      <Button onClick={changeMode}>모드 변경</Button>
      <section>
        <Icon type="check" />
        <Icon.Smile />
      </section>
      <section style={{ margin: '8px 0' }}>
        <IconButton size="xl" />
        <IconButton size="lg" />
        <IconButton size="md" />
        <IconButton size="sm" />
        <IconButton size="xs" />
        <IconButton size="xs" disabled />
        <Button.Icon size="xs" disabled />
      </section>
      <section style={{ maxWidth: '500px' }}>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          layoutContent={{
            layoutStyle: 'hug',
            trailing: <span>👋</span>,
          }}
        >
          Primary
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          fitContentWidth
          size="md"
          variant="outline"
          layoutContent={{
            leading: <span>👋</span>,
            trailing: <span>👋</span>,
          }}
        >
          Outline Md
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          fitContentWidth
          size="sm"
          variant="outline"
          layoutContent={{
            layoutStyle: 'hug',
            trailing: <span>👋</span>,
          }}
        >
          Outline Small
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="secondary"
          layoutContent={{
            layoutStyle: 'fill',
            leading: <span>👋</span>,
            main: 'Secondary Fill',
            trailing: <span>👋</span>,
          }}
          style={{
            color: 'purple',
            borderRadius: '30px',
            border: '1px solid red',
          }}
        >
          {/* Customed Secondary */}
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="secondary"
          layoutContent={{
            leading: <span>👋</span>,
            main: 'Secondary Hug',
          }}
        >
          {/* Secondary */}
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="ghost"
          layoutContent={{
            trailing: <span>👋</span>,
          }}
        >
          Ghost
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="outline"
          layoutContent={{
            layoutStyle: 'fill',
            trailing: <span>👋</span>,
          }}
        >
          Outline
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          disabled
          variant="outline"
          layoutContent={{
            layoutStyle: 'fill',
            trailing: <span>👋</span>,
          }}
        >
          Disabled
        </Button>
      </section>
    </>
  );
}

export default App;
