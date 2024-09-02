import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown, Typography } from '../../components';

const { MultiSelection } = Dropdown;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Dropdown/MultiSelection',
  component: MultiSelection,
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
} as Meta<typeof MultiSelection>;

type Story = StoryObj<typeof MultiSelection>;

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
      <MultiSelection items={_items} placeholder={placeholder}></MultiSelection>
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
    itemsFitContent: true,
  },
  render: ({ items, itemsFitContent, placeholder }) => {
    const [_items, setItems] = React.useState(items);
    return (
      <Dropdown.MultiSelection
        items={_items}
        placeholder={placeholder}
        itemsFitContent={itemsFitContent}
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
    itemsFitContent: true,
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
      <MultiSelection
        items={_items}
        placeholder={placeholder}
        selectionRenderer={selectionRenderer}
        width={width}
      ></MultiSelection>
    );
  },
};
