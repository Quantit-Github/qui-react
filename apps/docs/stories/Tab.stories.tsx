import { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tab',
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

const TestList = [
  { label: 'Label1', value: 'Label1' },
  { label: 'Label2', value: 'Label2' },
  { label: 'Label3', value: 'Label3' },
  { label: 'Label4', value: 'Label4' },
  { label: 'Label5', value: 'Label5' },
];

export const SmallSize: Story = {
  args: {
    list: TestList,
    size: 'sm',
    selected: 0,
    onClickItem: (value: string) => () => console.log(value),
  },
};

export const MediumSize: Story = {
  args: {
    list: TestList,
    size: 'md',
    selected: 0,
    onClickItem: (value: string) => () => console.log(value),
  },
};
