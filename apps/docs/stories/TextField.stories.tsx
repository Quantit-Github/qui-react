import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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
export const 텍스트필드: Story = {
  args: {
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const 초기값_입력된_상태: Story = {
  args: {
    placeholder: '텍스트를 입력하세요.',
    value: '초깃값',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const 에러_발생: Story = {
  args: {
    isError: true,
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const 비활성화_상태: Story = {
  args: {
    disabled: true,
    value: '비활성화',
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const 마스킹_적용: Story = {
  args: {
    type: 'password',
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const 앞_영역_활용: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" />,
    },
    type: 'password',
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const 앞_뒤_영역_활용: Story = {
  args: {
    layout: {
      leading: <Icon type="smile" />,
      trailing: <p>단위</p>,
    },
    type: 'password',
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const MD_사이즈: Story = {
  args: {
    type: 'password',
    size: 'md',
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};

export const SM_사이즈: Story = {
  args: {
    type: 'password',
    size: 'sm',
    placeholder: '텍스트를 입력하세요.',
    onChange(e) {
      console.log(e.currentTarget.value);
    },
  },
};