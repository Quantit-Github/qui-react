import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { Icon, TextField } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/TextField',
  component: TextField,
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
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: 'typed text',
    onChange: jest.fn(),
  },
  play: async ({ args, canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');

    // act
    await userEvent.type(input, 'hello world');

    // assert
    await expect(args.onChange).toHaveBeenCalled();
    await expect(input).toHaveValue('hello world');
  },
};

export const Init_Value: Story = {
  args: {
    placeholder: 'typed text',
    value: 'Init Value',
  },
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');
    const cleatButton = canvas.getByTestId('button');

    // assert
    await expect(input).toHaveValue('Init Value');
    await expect(cleatButton).toBeInTheDocument();
  },
};

export const Error: Story = {
  args: {
    isError: true,
    placeholder: 'typed text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Diabled',
    placeholder: 'typed text',
    onChange: jest.fn(),
  },
  play: async ({ args, canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('input');

    // act
    await userEvent.type(input, 'hello world');

    // assert
    await expect(args.onChange).not.toHaveBeenCalled();
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('Diabled');
  },
};

export const Masking: Story = {
  args: {
    type: 'password',
    placeholder: 'typed text',
  },
};

export const Leading_Layout: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" />,
    },
    type: 'password',
    placeholder: 'typed text',
  },
};

export const Leading_And_Trailing_Layout: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" />,
      trailing: <p>단위</p>,
    },
    type: 'password',
    placeholder: 'typed text',
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 10,
    placeholder: 'typed text',
  },
};

export const TypeNumber: Story = {
  args: {
    type: 'number',
    value: 0,
    maxLength: 10,
  },
};
