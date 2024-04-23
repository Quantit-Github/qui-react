import { useState } from 'react';
import {
  Button,
  Icon,
  IconButton,
  ItemCell,
  ItemList,
  TextField,
  Typography,
} from '../../lib/components';

export default function ETCPage() {
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
        <h1>Item List</h1>

        <ItemCell>Item</ItemCell>
        <ItemCell selected>Item2</ItemCell>
        <ItemCell
          layout={{
            type: 'fill',
            main: (
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Icon type="smile" size="md" />
                <Typography variant="body-medium">Item3</Typography>
              </div>
            ),
            trailing: <Icon type="close" size="md" />,
          }}
        />
        <ItemCell
          selected
          disabled
          layout={{
            leading: <Icon type="smile" size="md" />,
            main: <Typography variant="body-medium">Item4</Typography>,
          }}
        ></ItemCell>
        <ItemList
          onClick={(id) => console.log('id: ', id)}
          items={[
            {
              id: '1',
              layout: {
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">Dashboard</Typography>,
              },
              disabled: true,
            },
            {
              id: '2',
              layout: {
                leading: <Icon type="smile" size="md" />,
                main: (
                  <Typography variant="body-medium">Performance</Typography>
                ),
              },
              selected: true,
            },
            {
              id: '3',
              layout: {
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">FAQ</Typography>,
              },
            },
            {
              id: '4',
              layout: {
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">FAQ</Typography>,
              },
            },
            {
              id: '5',
              layout: {
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">FAQ</Typography>,
              },
            },
          ]}
        />
      </section>
      <hr />
      <section>
        <h1>Icon</h1>
        <Icon type="check" />
        <Icon.Smile />
        <Icon.Indeterminate />
      </section>
      <hr />
      <section>
        <h1>Text Field</h1>
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
      <hr />
      <section style={{ margin: '8px 0' }}>
        <h1>Icon Button</h1>
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
      <hr />
      <section style={{ maxWidth: '500px' }}>
        <h1>Button</h1>

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
        <Button size="lg">
          <Typography>Primary</Typography>
        </Button>
        <Button
          size="lg"
          layout={{
            main: 'Layout Main Button',
          }}
        ></Button>
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
          children
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
      <hr />
      <section>
        <h1>Typography</h1>
        <Typography>Primary</Typography>
      </section>
    </main>
  );
}
