import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DividerHorizontal } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Divider',
  component: DividerHorizontal,
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
} as Meta<typeof DividerHorizontal>;

type Story = StoryObj<typeof DividerHorizontal>;

export const DividerHorizontalLow: Story = {
  args: {
    hierarachy: 'low',
    direction: 'horizontal',
  },
};

export const DividerHorizontalHigh: Story = {
  args: {
    hierarachy: 'high',
    direction: 'horizontal',
  },
};

export const DividerVerticalHigh: Story = {
  args: {
    hierarachy: 'high',
    direction: 'vertical',
  },
};
