import { Typography } from '@quantit/qui-react/src';
import { ArgTypes, Meta, Story } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

type MyArgTypes = Partial<
  Record<keyof ComponentProps<typeof Typography>, ArgTypes[string]>
>;
const argTypesSetting: MyArgTypes = {
  as: {
    description: 'HTML 태그',
  },
  bold: {
    description: 'Bold 유무',
  },
  children: {
    description: '자식 컴포넌트',
  },
  size: {
    description: '타이포그래피 사이즈',
  },
  variant: {
    description: '타이포그래피 타입',
  },
};

export default {
  title: 'Base/Typography',
  component: Typography,
  argTypes: argTypesSetting,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof Typography>;

const Template: Story<ComponentProps<typeof Typography>> = (props) => {
  return <Typography {...props}></Typography>;
};

export const Default = Template.bind({});
Default.args = {
  children: '텍스트',
  bold: true,
  size: 'sm',
  variant: 'title',
};
