import { Meta, StoryObj } from '@storybook/react';
import { IconButtonNew } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Renew/IconButton',
  component: IconButtonNew,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof IconButtonNew>;

type Story = StoryObj<typeof IconButtonNew>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};
