import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon, ItemCell, Typography } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/ItemCell',
  component: ItemCell,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ItemCell>;

type Story = StoryObj<typeof ItemCell>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <Typography variant="body-medium">Item</Typography>,
  },
};

export const Leading_And_Trailing_Layout: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" size="md" />,
      main: <Typography variant="body-medium">Main</Typography>,
      trailing: <Icon type="smile" size="md" />,
    },
  },
};

export const Default_Layout: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" size="md" />,
      main: <Typography variant="body-medium">Main</Typography>,
    },
  },
};

export const Hug_Layout: Story = {
  args: {
    layout: {
      type: 'hug',
      leading: <Icon type="smile" size="md" />,
      main: <Typography variant="body-medium">Main</Typography>,
    },
  },
};

export const Fill_Layout: Story = {
  args: {
    layout: {
      type: 'fill',
      leading: <Icon type="smile" size="md" />,
      main: <Typography variant="body-medium">Main</Typography>,
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    layout: {
      leading: <Icon type="smile" size="md" />,
      main: <Typography variant="body-medium">Main</Typography>,
    },
  },
};

export const StateOverlay_Inactive: Story = {
  args: {
    stateOverlay: false,
    layout: {
      leading: <Icon type="smile" size="md" />,
      main: <Typography variant="body-medium">Main</Typography>,
    },
  },
};
