import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip, Icon, Typography } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Chip',
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <Typography variant="body-medium">Chip</Typography>,
  },
};

export const On: Story = {
  args: {
    children: <Typography variant="body-medium">Chip</Typography>,
    on: true,
  },
};

export const WithLayout: Story = {
  args: {
    layout: {
      leading: <Icon.Smile size="sm" />,
      content: <Typography variant="body-medium">Chip</Typography>,
      trailing: <Icon.Close size="sm" />,
    },
  },
};

export const MaxWidth: Story = {
  args: {
    borderRadius: 9999,
    children: (
      <Typography variant="body-medium" style={{ padding: '0 8px' }}>
        ChipChipChipChipChipChipChipChipChip
      </Typography>
    ),
    maxWidth: 150,
  },
};
