import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { Button } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
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
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    onClick: () => console.log('클릭'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
};

export const Primary_FillCenter_With_LeadingIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    leadingIcon: 'check',
    type: 'xl-fillCenter',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Secondary_FillCenter_With_Leading_TrailingIcon: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    leadingIcon: 'check',
    trailingIcon: 'chevron_right',
    type: 'xl-fillCenter',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Ghost_Big: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    type: 'xl-hug',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    variant: 'ghost',
  },
};
