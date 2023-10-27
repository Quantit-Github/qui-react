import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const { Icon: ButtonIcon } = Button;

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ButtonIcon>;

type Story = StoryObj<typeof ButtonIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryXl: Story = {
  args: {
    type: 'smile',
    size: 'xl',
    variant: 'primary',
  },
};
export const DisabledLg: Story = {
  args: {
    type: 'smile',
    disabled: true,
    size: 'lg',
    variant: 'primary',
  },
};
export const SecondaryMd: Story = {
  args: {
    type: 'smile',
    size: 'md',
    variant: 'secondary',
  },
};
export const OutlineSm: Story = {
  args: {
    type: 'smile',
    size: 'sm',
    variant: 'outline',
  },
};
export const GhostXs: Story = {
  args: {
    type: 'smile',
    size: 'xs',
    variant: 'ghost',
  },
};
