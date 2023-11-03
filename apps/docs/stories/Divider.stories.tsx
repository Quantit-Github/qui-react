import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Divider',
  component: Divider,
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
      <div style={{ width: '500px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const DividerHorizontalLow: Story = {
  args: {
    hierarchy: 'low',
    direction: 'horizontal',
  },
};

export const DividerHorizontalHigh: Story = {
  args: {
    hierarchy: 'high',
    direction: 'horizontal',
  },
};

export const DividerVerticalHigh: Story = {
  args: {
    hierarchy: 'high',
    direction: 'vertical',
  },
};
