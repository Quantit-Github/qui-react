import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Toggle',
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    onChange(flag) {
      console.log(flag);
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onChange(flag) {
      console.log(flag);
    },
  },
};
