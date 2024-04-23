import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon, ItemList, Typography } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/ItemList',
  component: ItemList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ItemList>;

type Story = StoryObj<typeof ItemList>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    items: [
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
          main: <Typography variant="body-medium">Performance</Typography>,
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
          main: <Typography variant="body-medium">FAQ2</Typography>,
        },
      },
      {
        id: '5',
        layout: {
          leading: <Icon type="smile" size="md" />,
          main: <Typography variant="body-medium">FAQ3</Typography>,
        },
      },
    ],
  },
  render: ({ items }) => {
    const [_items, setItems] = React.useState(items);

    const handleClick = (id?: string) => {
      setItems((prevItems) =>
        prevItems.map((item) => ({ ...item, selected: item.id === id }))
      );
    };

    return <ItemList items={_items} onClick={handleClick} />;
  },
};
