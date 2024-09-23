import {
  Button,
  Dropdown,
  Icon,
  IconButton,
  ItemCell,
  ItemList,
  MultiSelectionDropdown,
  Tab,
  TabItem,
  TextField,
  Typography,
} from '../../lib/components';
import { Chip } from '../../lib/components/Chip';

export default function ETCPage() {
  return (
    <main style={{ padding: '8px' }}>
      <section>
        <Chip
          layout={{
            leading: <Icon type="smile" size="sm" />,
            content: <Typography variant="body-medium">Chip</Typography>,
            trailing: <Icon type="close" size="sm" />,
            style: {
              gap: 32,
            },
          }}
          onClick={() => {
            console.log('Chip Clicked');
          }}
        />
        <Chip on>
          <Typography variant="body-medium">Chip</Typography>
        </Chip>
        <Chip on maxWidth={150}>
          <Typography variant="body-medium" style={{ padding: '0 8px' }}>
            ChipChipChipChipChipChipChipChipChipChipChipChipChip
          </Typography>
        </Chip>
      </section>
      <section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Tab
            items={[
              {
                children: 'Tab1',
                on: true,
              },
              {
                children: 'Tab2',
              },
              {
                children: 'Tab3',
              },
              {
                children: 'Tab4',
              },
              {
                children: 'Tab5',
              },
            ]}
            variant="underline"
            maxWidth={450}
          />
          <Tab
            items={[
              {
                children: 'Tab1',
                on: true,
              },
              {
                children: 'Tab2',
              },
              {
                children: 'Tab3',
              },
            ]}
          />
        </div>
      </section>

      <section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            maxWidth: 120,
          }}
        >
          <div style={{ display: 'flex', gap: 8 }}>
            <TabItem
              layout={{
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">TabItem1</Typography>,
                style: { display: 'flex', gap: '32px' },
              }}
              value={1}
              variant="underline"
              on
            />
            <TabItem
              layout={{
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">TabItem2</Typography>,
                style: { display: 'flex', gap: '32px' },
              }}
              value={2}
              variant="underline"
            />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <TabItem
              layout={{
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">TabItem1</Typography>,
                style: { display: 'flex', gap: '32px' },
              }}
              value={1}
              on
            />
            <TabItem
              layout={{
                leading: <Icon type="smile" size="md" />,
                main: <Typography variant="body-medium">TabItem2</Typography>,
                style: { display: 'flex', gap: '32px' },
              }}
              value={2}
            />
          </div>
        </div>
      </section>

      <section>
        <h1>Dropdown</h1>

        <Dropdown
          width={200}
          placeholder="Label"
          items={[
            {
              id: 'item-1',
              children: <Typography variant="body-medium">Item 1</Typography>,
            },
            {
              id: 'item-2',
              children: <Typography variant="body-medium">Item 2</Typography>,
            },
          ]}
        />

        <MultiSelectionDropdown
          width={200}
          placeholder="Label"
          items={[
            {
              id: 'item-1',
              children: <Typography variant="body-medium">Item 1</Typography>,
              selected: true,
            },
            {
              id: 'item-2',
              children: <Typography variant="body-medium">Item 2</Typography>,
            },
          ]}
        />
      </section>

      <section>
        <h1>Sorting Dropdown</h1>

        <Dropdown
          border={false}
          fitContent
          itemsFitContent
          placeholder="Label"
          items={[
            {
              id: 'item-1',
              children: <Typography variant="body-medium">이름순</Typography>,
            },
            {
              id: 'item-2',
              children: (
                <Typography variant="body-medium">수익률 높은순</Typography>
              ),
            },
          ]}
        />
      </section>

      <section>
        <h1>Item List</h1>

        <div style={{ width: 200 }}>
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
          />
        </div>
        <div style={{ width: 200 }}>
          <ItemList
            onClick={(id) => console.log('id: ', id)}
            items={[
              {
                id: '1',
                layout: {
                  leading: <Icon type="smile" size="md" />,
                  main: (
                    <Typography variant="body-medium">Dashboard</Typography>
                  ),
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
        </div>
      </section>
      <hr />
      <section>
        <h1>Icon</h1>
        <Icon type="check" />
        <Icon type="close" />
        <Icon type="up" />
        <Icon type="down" />
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
          onKeyDown={(e) => {
            console.log('e: ', e);
          }}
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
