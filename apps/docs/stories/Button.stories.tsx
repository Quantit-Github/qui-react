import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { Button, Icon } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Button',
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
      <div style={{ width: '500px', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Fill_Layout: Story = {
  args: {
    layout: {
      type: 'fill',
      leading: <Icon.Smile size="md" variant="primary" />,
      main: 'Button',
      trailing: <Icon.Smile size="md" variant="primary" />,
    },
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('button');

    // act
    await userEvent.click(btn);

    // assert
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Hug_Layout: Story = {
  args: {
    variant: 'secondary',
    layout: {
      type: 'hug',
      leading: <Icon.Smile size="md" variant="secondary" />,
      main: 'Button',
      trailing: <Icon.Smile size="md" variant="secondary" />,
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'secondary',
    disabled: true,
    onClick: jest.fn(),
  },
  play: async ({ args, canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('button');

    // act
    await userEvent.click(btn);

    // assert
    await expect(btn).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Layout_Dismissed_If_Have_Children: Story = {
  args: {
    children: 'Children',
    variant: 'secondary',
    layout: {
      type: 'fill',
      leading: <Icon.Smile size="md" variant="secondary" />,
      main: 'Button',
      trailing: <Icon.Smile size="md" variant="secondary" />,
    },
  },
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('button');

    // assert
    await expect(btn).toHaveTextContent('Children');
    await expect(btn).not.toHaveTextContent('Button');
  },
};

export const Fitcontent_Width: Story = {
  args: {
    fitContentWidth: true,
    size: 'md',
    layout: {
      leading: <Icon.Smile size="md" variant="primary" />,
      main: 'Button',
      trailing: <Icon.Smile size="md" variant="primary" />,
    },
  },
};
