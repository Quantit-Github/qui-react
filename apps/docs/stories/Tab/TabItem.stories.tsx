import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon, TabItem, Typography } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Tab/TabItem',
  component: TabItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof TabItem>;

type Story = StoryObj<typeof TabItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Tab_On: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" size="md" variant="ghost" />,
      main: <Typography variant="body-medium">TabItem</Typography>,
    },
    on: true,
  },
};

export const Tab_Off: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" size="md" variant="ghost" />,
      main: <Typography variant="body-medium">TabItem</Typography>,
    },
    on: false,
  },
};

export const Tab_Children: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        Children
      </div>
    ),
  },
};
