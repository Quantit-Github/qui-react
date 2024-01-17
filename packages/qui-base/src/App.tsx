import { useState } from 'react';
import { IconButton } from '../lib/components/Button/Button';
import { Icon } from '../lib/components/Icon/Icon';
import { Button, TextField } from '../lib/main';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const changeMode = () => {
    const toggle = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.style.setProperty('color-scheme', toggle);
    document.documentElement.setAttribute('data-theme', toggle);
    setMode(toggle);
  };

  return (
    <main style={{ padding: '8px' }}>
      <Button onClick={changeMode}>모드 변경</Button>
      <section>
        <Icon type="check" />
        <Icon.Smile />
      </section>
      <section>
        <TextField type="password" placeholder="패스워드" />
        <br />
        <TextField
          layout={{
            leading: <Icon type="smile" size="md" />,
          }}
          placeholder="Placeholder"
        />
        <TextField
          layout={{
            leading: <Icon type="smile" size="md" />,
          }}
          placeholder="Placeholder"
        />
        <br />
      </section>
      <section style={{ margin: '8px 0' }}>
        <IconButton size="xl" />
        <IconButton size="xl" type="close" />
        <IconButton size="lg" />
        <IconButton size="lg" type="close" />
        <IconButton size="md" />
        <IconButton size="sm" />
        <IconButton size="xs" />
        <IconButton size="xs" type="close" />
        <IconButton size="xs" disabled />
        <Button.Icon size="xs" disabled />
      </section>
      <section style={{ maxWidth: '500px' }}>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          layout={{
            type: 'hug',
            trailing: <span>👋</span>,
          }}
        >
          Primary
        </Button>
        <br />
        <Button size="md">Primary</Button>
        <br />
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          fitContentWidth
          size="md"
          variant="outline"
          layout={{
            leading: <span>👋</span>,
            main: 'dfdf',
            trailing: <span>👋</span>,
          }}
        >
          {/* Outline Md */}
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          fitContentWidth
          size="sm"
          variant="outline"
          layout={{
            type: 'hug',
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
          layout={{
            type: 'fill',
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
          layout={{
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
          layout={{
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
          layout={{
            type: 'fill',
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
          layout={{
            type: 'fill',
            trailing: <span>👋</span>,
          }}
        >
          Disabled
        </Button>
      </section>
    </main>
  );
}

export default App;
