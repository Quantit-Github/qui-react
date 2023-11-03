import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion, Checkbox } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Accordion',
  component: Accordion,
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
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

const subInfo = [
  {
    info: '어머님',
  },
  {
    info: '아버님',
  },
  {
    info: '기타 등등 여러분',
  },
];
const content =
  "어머님, 나는 별 하나에 아름다운 말 한마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 아이들의 이름과, 패, 경, 옥, 이런 이국 소녀들의 이름과, 벌써 아기 어머니 된 계집애들의 이름과, 가난한 이웃 사람들의 이름과, 비둘기, 강아지, 토끼, 노새, 노루, '프랑시스 잠, '라이너 마리아 릴케' 이런 시인의 이름을 불러 봅니다.";

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: '윤동주',
    subInfo: subInfo,
    children: content,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: '윤동주',
    subInfo: subInfo,
    children: content,
  },
};

export const Open: Story = {
  args: {
    open: true,
    title: '윤동주',
    subInfo: subInfo,
    children: content,
  },
};

export const HasSecondaryButton: Story = {
  args: {
    title: '윤동주',
    subInfo: subInfo,
    children: content,
    secondaryButton: {
      children: '전문 보기',
      onClick: () => window.open('https://www.naver.com'),
      trailingIcon: 'external_link',
    },
  },
};

export const LongTitle: Story = {
  args: {
    title: content,
    subInfo: subInfo,
    children: content,
  },
};

export const TwoSubInfo: Story = {
  args: {
    title: '윤동주',
    subInfo: subInfo.slice(0, 2),
    children: content,
  },
};

export const OneSubInfo: Story = {
  args: {
    title: '윤동주',
    subInfo: subInfo.slice(0, 1),
    children: content,
  },
};

export const WithoutSubInfo: Story = {
  args: {
    title: '윤동주',
    children: content,
  },
};

export const LongSubInfo: Story = {
  args: {
    title: '윤동주',
    subInfo: [
      {
        info: '어머님',
      },
      {
        info: '아버님',
      },
      {
        info: '기타 등등 여러분 어머님, 아버님, 기타 등등 여러분',
        $ellipsis: true,
      },
    ],
    children: content,
  },
};

export const WithCheckbox: Story = {
  args: {
    title: '윤동주',
    subInfo: subInfo,
    children: content,
    checkboxProps: {
      onChange: (props) => console.log(props),
    },
  },
};

export const LongTitleWithCheckbox: Story = {
  args: {
    title: content,
    subInfo: subInfo,
    children: content,
    checkboxProps: {
      onChange: (props) => console.log(props),
    },
  },
};

export const DisabledWithCheckbox: Story = {
  args: {
    disabled: true,
    title: '윤동주',
    subInfo: subInfo,
    children: content,
    checkboxProps: {
      onChange: (props) => console.log(props),
    },
  },
};

const TitleComponent = () => <div>TitleComponent</div>;
const Contents = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        <button
          onClick={(e) => {
            console.log('button clicked');
            e.stopPropagation();
          }}
        >
          Btn
        </button>
      </div>
      <Checkbox onChange={() => {}}>Checkbox</Checkbox>
    </div>
  );
};
export const ChildrenHasEvent: Story = {
  args: {
    disabled: false,
    title: <TitleComponent />,
    subInfo: subInfo,
    children: <Contents />,
    checkboxProps: {
      onChange: (props) => console.log(props),
    },
  },
};
