import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
export const OnlyCheckbox: Story = {
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const checkbox = canvas.getByTestId('checkbox-container');

    // action
    await userEvent.click(checkbox);

    // assert
    const checkedIcon = await canvas.queryByTestId('checked-icon');
    await expect(checkedIcon).toBeInTheDocument();
  },
};

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
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const checkedIcon = canvas.getByTestId('checked-icon');

    // assert
    await expect(checkedIcon).toBeInTheDocument();
  },
};

export const Indetermediate: Story = {
  args: {
    label: 'Label',
    indeterminate: true,
  },
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const indeterminateIcon = canvas.getByTestId('indeterminate-icon');

    // assert
    await expect(indeterminateIcon).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
  },
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const checkboxContainer = canvas.getByTestId('checkbox-container');
    const checkbox = canvas.getByTestId('checkbox');
    const uncheckedIcon = canvas.getByTestId('unchecked-icon');

    // actions
    await userEvent.click(checkboxContainer);

    // assert
    await expect(uncheckedIcon).toBeInTheDocument();
    await expect(checkbox).toBeDisabled();
  },
};

export const DisabledWithChecked: Story = {
  args: {
    disabled: true,
    label: 'Label',
    checked: true,
  },
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const checkboxContainer = canvas.getByTestId('checkbox-container');
    const checkbox = canvas.getByTestId('checkbox');
    const checkedIcon = canvas.getByTestId('checked-icon');

    // actions
    await userEvent.click(checkboxContainer);

    // assert
    await expect(checkedIcon).toBeInTheDocument();
    await expect(checkbox).toBeDisabled();
  },
};

export const DisabledWithIndeterminate: Story = {
  args: {
    disabled: true,
    label: 'Label',
    checked: true,
    indeterminate: true,
  },
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const checkboxContainer = canvas.getByTestId('checkbox-container');
    const checkbox = canvas.getByTestId('checkbox');
    const indeterminateIcon = canvas.getByTestId('indeterminate-icon');

    // actions
    await userEvent.click(checkboxContainer);

    // assert
    await expect(indeterminateIcon).toBeInTheDocument();
    await expect(checkbox).toBeDisabled();
  },
};
