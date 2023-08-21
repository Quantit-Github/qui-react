import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Display: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    variant: 'display',
  },
};

export const Headline: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    variant: 'headline',
  },
};

export const Title: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    variant: 'title',
  },
};

export const Body: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    variant: 'body',
  },
};

export const Label: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    variant: 'label',
  },
};
