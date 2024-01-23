import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Checkbox',
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
export const OnlyCheckbox: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const Label_Dismissed_If_Have_Children: Story = {
  args: {
    label: 'Label',
    children: 'Children',
  },
};

export const Checked: Story = {
  args: {
    label: 'Label',
    checked: true,
  },
};

export const Indetermediate: Story = {
  args: {
    label: 'Label',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
  },
};

export const DisabledWithChecked: Story = {
  args: {
    disabled: true,
    label: 'Label',
    checked: true,
  },
};

export const DisabledWithIndeterminate: Story = {
  args: {
    disabled: true,
    label: 'Label',
    checked: true,
    indeterminate: true,
  },
};

export const MultipleLayer: Story = {};
