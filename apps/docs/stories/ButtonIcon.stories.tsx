import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSizeType, IconType } from '../components';

const { Icon: ButtonIcon } = Button;

const buttonSizes: ButtonSizeType[] = ['xl', 'lg', 'md', 'sm', 'xs'];

const iconTypes: IconType[] = [
  'check',
  'chevron_down',
  'chevron_left',
  'chevron_right',
  'chevron_up',
  'external_link',
  'indeterminate',
  'smile',
];

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
  argTypes: {
    /**
     * NOTE: argTypes 예시
     *
     * 스토리북 제어 패널에 type, size props의 선택 가능 목록 생성
     */
    type: {
      type: {
        name: 'enum',
        value: iconTypes,
      },
    },
    size: {
      type: {
        name: 'enum',
        value: buttonSizes,
      },
    },
  },
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
