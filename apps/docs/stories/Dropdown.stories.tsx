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
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          height: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    width: 200,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
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

export const DropdownFitLabel: Story = {
  args: {
    fitContent: true,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
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
};

export const DropdownItemsFitLabel: Story = {
  args: {
    fitContent: true,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">Performance 1</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">Performance 2</Typography>,
      },
    ],
    itemFitContent: true,
  },
};

export const SortingDropdown: Story = {
  args: {
    border: false,
    fitContent: true,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">입력순</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
    ],
  },
};

export const SortingDropdownItemsFitContent: Story = {
  args: {
    border: false,
    fitContent: true,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">입력순</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
    ],
    itemFitContent: true,
  },
};

export const MultiSelectionDropdown: Story = {
  args: {
    // fitContent: true,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">입력순</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '3',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '4',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
    ],
  },
  render: ({ items, placeholder }) => {
    const [_items, setItems] = React.useState(items);
    return (
      <Dropdown.MultiSelection
        items={_items}
        placeholder={placeholder}
      ></Dropdown.MultiSelection>
    );
  },
};

export const MultiSelectionDropdownItemsFitContent: Story = {
  args: {
    // fitContent: true,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">입력순</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '3',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '4',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
    ],
    itemFitContent: true,
  },
  render: ({ items, itemFitContent, placeholder }) => {
    const [_items, setItems] = React.useState(items);
    return (
      <Dropdown.MultiSelection
        items={_items}
        placeholder={placeholder}
        itemFitContent={itemFitContent}
      ></Dropdown.MultiSelection>
    );
  },
};

export const MultiSelectionDropdownWidth: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
          height: '200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    width: 500,
    placeholder: <Dropdown.Placeholder>Label</Dropdown.Placeholder>,
    items: [
      {
        id: '1',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '2',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '3',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '4',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
      {
        id: '5',
        children: <Typography variant="body-medium">수익률높은순</Typography>,
      },
    ],
    itemFitContent: true,
    selectionRenderer: (item, onClick) => {
      return (
        <Dropdown.SelectionTag onClick={onClick}>
          {item.children}
        </Dropdown.SelectionTag>
      );
    },
  },
  render: ({ items, placeholder, selectionRenderer, width }) => {
    const [_items, setItems] = React.useState(items);
    return (
      <Dropdown.MultiSelection
        items={_items}
        placeholder={placeholder}
        selectionRenderer={selectionRenderer}
        width={width}
      ></Dropdown.MultiSelection>
    );
  },
};
