import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Enabled: Story = {
  args: {
    children: 'Checkbox Enabled',
    onChange(values) {
      console.log(values);
    },
  },
};

export const EnabledTrue: Story = {
  args: {
    checked: true,
    children: 'Checkbox Enabled True',
    onChange(values) {
      console.log(values);
    },
  },
};

export const EnabledIndeterminate: Story = {
  args: {
    $indeterminate: true,
    children: 'Checkbox Enabled Indeterminate',
    onChange(values) {
      console.log(values);
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Checkbox Disabled',
    onChange(values) {
      console.log(values);
    },
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    $indeterminate: true,
    disabled: true,
    children: 'Checkbox Disabled Indeterminate',
    onChange(values) {
      console.log(values);
    },
  },
};

export const DisabledTrue: Story = {
  args: {
    checked: true,
    disabled: true,
    children: 'Checkbox Disabled True',
    onChange(values) {
      console.log(values);
    },
  },
};

export const CustomChild: Story = {
  args: {
    children: <span style={{ color: 'red' }}>This text is red.</span>,
    onChange(values) {
      console.log(values);
    },
  },
};
