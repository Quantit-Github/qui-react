import { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Tab/Tab',
  component: Tab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Tab>;

type Story = StoryObj<typeof Tab>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    items: [
      {
        children: 'TabItem1',
      },
      {
        children: 'TabItem2',
        on: true,
      },
      {
        children: 'TabItem3',
      },
      {
        children: 'TabItem4',
      },
      {
        children: 'TabItem5',
      },
    ],
  },
};

export const MaxWidth: Story = {
  args: {
    items: [
      {
        children: 'TabItem1',
      },
      {
        children: 'TabItem2',
        on: true,
      },
      {
        children: 'TabItem3',
      },
      {
        children: 'TabItem4',
      },
      {
        children: 'TabItem5',
      },
      {
        children: 'TabItem6',
      },
      {
        children: 'TabItem7',
      },
    ],
    maxWidth: 300,
  },
};

export const ScrollbarWidth: Story = {
  args: {
    items: [
      {
        children: 'TabItem1',
      },
      {
        children: 'TabItem2',
        on: true,
      },
      {
        children: 'TabItem3',
      },
      {
        children: 'TabItem4',
      },
      {
        children: 'TabItem5',
      },
      {
        children: 'TabItem6',
      },
      {
        children: 'TabItem7',
      },
    ],
    maxWidth: 300,
    scrollbarWidth: 'thin',
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
