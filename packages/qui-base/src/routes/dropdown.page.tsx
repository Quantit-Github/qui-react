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
          items={[
            {
              id: '1',
              children: <Typography variant="body-medium">Item 1</Typography>,
            },
            {
              id: '2',
              children: <Typography variant="body-medium">Item 2</Typography>,
            },
            {
              id: '3',
              children: <Typography variant="body-medium">Item 3</Typography>,
            },
          ]}
          size="sm"
          onClick={(id) => {
            console.log(id);
          }}
        />
      </section>
      <section></section>
    </div>
  );
}
