import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, Typography } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    width: 200,
    placeholder: 'Label',
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">Item1</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">Item2</Typography>,
      },
    ],
  },
  render: ({ items, placeholder, width }) => {
    const [_items, setItems] = React.useState(items);

    const handleClick = (id?: string) => {
      setItems((prevItems) =>
        prevItems.map((item) => ({ ...item, selected: item.id === id }))
      );
    };

    return (
      <Dropdown
        items={_items}
        placeholder={placeholder}
        width={width}
        onClick={handleClick}
      />
    );
  },
};
