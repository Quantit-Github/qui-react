import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Icon',
  component: Icon,
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
          width: '100px',
          height: '100px',
          backgroundColor: '#e2e2e2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'smile',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'smile',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    type: 'smile',
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    type: 'smile',
    variant: 'outline',
  },
};

export const Colored: Story = {
  args: {
    type: 'star',
    variant: 'outline',
    style: { fill: 'var(--chart-d-80)' },
  },
};
