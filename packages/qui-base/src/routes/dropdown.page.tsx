import { Dropdown, Typography } from '../../lib/components';

export default function DropdownPage() {
  return (
    <div>
      <section>
        <Typography variant="body-large">Dropdown Small borderNone</Typography>
        <Dropdown
          placeholder="Select"
          border={false}
          fitContent
          itemsCloseOnClickOutside={false}
          itemsFitContent
          itemsScrollbarWidth="none"
          items={[
            {
              id: '1',
              children: <Typography variant="body-medium">Item 1</Typography>,
              disabled: true,
            },
            {
              id: '2',
              children: <Typography variant="body-medium">Item 2</Typography>,
            },
            {
              id: '3',
              children: <Typography variant="body-medium">Item 3</Typography>,
            },
            {
              id: '4',
              children: <Typography variant="body-medium">Item 4</Typography>,
            },
            {
              id: '5',
              children: <Typography variant="body-medium">Item 5</Typography>,
            },
          ]}
          size="sm"
          onClick={(id) => {
            console.log(id);
          }}
        />
      </section>
      <section>
        <Typography variant="body-large">Dropdown Position Right</Typography>
        <Dropdown
          placeholder="Select"
          border={false}
          fitContent
          itemsCloseOnClickOutside={false}
          itemsFitContent
          itemsScrollbarWidth="none"
          position="right"
          items={[
            {
              id: '1',
              children: <Typography variant="body-medium">Item 1</Typography>,
              disabled: true,
            },
            {
              id: '2',
              children: <Typography variant="body-medium">Item 2</Typography>,
            },
            {
              id: '3',
              children: <Typography variant="body-medium">Item 3</Typography>,
            },
            {
              id: '4',
              children: <Typography variant="body-medium">Item 4</Typography>,
            },
            {
              id: '5',
              children: <Typography variant="body-medium">Item 5</Typography>,
            },
          ]}
          size="sm"
          onClick={(id) => {
            console.log(id);
          }}
        />
      </section>
    </div>
  );
}
