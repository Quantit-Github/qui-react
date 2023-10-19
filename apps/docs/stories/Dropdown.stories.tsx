import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components';
import ChevronRightIcon from '@quantit/qui-react/src/assets/icons/ChevronRightIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Medium: Story = {
  args: {
    placeholder: '담당자',
    list: [
      { label: '백재현', value: 'wogus' },
      { label: '박하나', value: 'hana' },
      { label: '도하영', value: 'hyd' },
      { label: '조원영', value: 'circle' },
      { label: '이도원', value: 'dwlee' },
      { label: '송낙훈', value: 'nakhun' },
    ],
    onChangeSelected: (value) => console.log(value),
  },
};

export const Large: Story = {
  args: {
    placeholder: '담당자',
    list: [
      { label: '백재현', value: 'wogus' },
      { label: '박하나', value: 'hana' },
      { label: '도하영', value: 'hyd' },
      { label: '조원영', value: 'circle' },
      { label: '이도원', value: 'dwlee' },
      { label: '송낙훈', value: 'nakhun' },
    ],
    onChangeSelected: (value) => console.log(value),
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '담당자',
    list: [
      { label: '백재현', value: 'wogus' },
      { label: '박하나', value: 'hana' },
      { label: '도하영', value: 'hyd' },
      { label: '조원영', value: 'circle' },
      { label: '이도원', value: 'dwlee' },
      { label: '송낙훈', value: 'nakhun' },
    ],
    onChangeSelected: (value) => console.log(value),
    disabled: true,
  },
};

export const OptionDisabled: Story = {
  args: {
    placeholder: '담당자',
    list: [
      { label: '백재현', value: 'wogus' },
      { label: '박하나', value: 'hana', disabled: true },
      { label: '도하영', value: 'hyd' },
      { label: '조원영', value: 'circle' },
      { label: '이도원', value: 'dwlee' },
      { label: '송낙훈', value: 'nakhun' },
    ],
    onChangeSelected: (value) => console.log(value),
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: '담당자',
    list: [
      { label: '백재현', value: 'wogus', hasSuffix: true },
      { label: '박하나', value: 'hana', hasSuffix: true },
      { label: '도하영', value: 'hyd', hasSuffix: true },
      { label: '조원영', value: 'circle', hasSuffix: true },
      { label: '이도원', value: 'dwlee', hasSuffix: true },
      { label: '송낙훈', value: 'nakhun', hasSuffix: true },
    ],
    onChangeSelected: (value) => console.log(value),
    size: 'lg',
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: '담당자',
    list: [
      {
        label: '백재현',
        value: 'wogus',
        prefix: <ChevronRightIcon />,
      },
      {
        label: '박하나',
        value: 'hana',
        prefix: <ChevronRightIcon />,
      },
      {
        label: '도하영',
        value: 'hyd',
        prefix: <ChevronRightIcon />,
      },
      {
        label: '조원영',
        value: 'circle',
        prefix: <ChevronRightIcon />,
      },
      {
        label: '우주미남도원',
        value: 'supersexy',
        prefix: <ChevronRightIcon />,
      },
      {
        label: '송낙훈',
        value: 'nakhun',
        prefix: <ChevronRightIcon />,
      },
    ],
    onChangeSelected: (value) => console.log(value),
    size: 'lg',
  },
};

export const ItemLongerThanButton: Story = {
  args: {
    placeholder: '담당자',
    list: [
      { label: '백재현', value: 'wogus' },
      { label: '박하나', value: 'hana' },
      { label: '도하영', value: 'hyd' },
      { label: '조원영', value: 'circle' },
      { label: '이도원', value: 'dwlee' },
      { label: '송낙훈', value: 'nakhun' },
      {
        label: '아주아주아주아주아주 긴 이름',
        value: 'very very very very very long name',
      },
    ],
    onChangeSelected: (value) => console.log(value),
    size: 'lg',
  },
};

export const PlaceholderLongerThanButton: Story = {
  args: {
    placeholder: '담당자를 선택해주세요',
    list: [
      { label: '백재현', value: 'wogus' },
      { label: '박하나', value: 'hana' },
      { label: '도하영', value: 'hyd' },
      { label: '조원영', value: 'circle' },
      { label: '이도원', value: 'dwlee' },
      { label: '송낙훈', value: 'nakhun' },
    ],
    onChangeSelected: (value) => console.log(value),
  },
};
